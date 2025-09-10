// Simple client-side search functionality
class BlogSearch {
  constructor() {
    this.searchInput = document.getElementById('site-search');
    this.posts = this.loadPosts();
    this.setupSearch();
  }

  loadPosts() {
    // In a real implementation, this would be populated from Jekyll's site.posts
    // For now, we'll use a simple approach that searches through visible content
    const postElements = document.querySelectorAll('.post-summary, .post');
    return Array.from(postElements).map(element => ({
      title: element.querySelector('h1, h2')?.textContent || '',
      content: element.textContent || '',
      url: element.querySelector('a')?.href || '',
      element: element
    }));
  }

  setupSearch() {
    if (!this.searchInput) return;

    this.searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.searchInput.focus();
      }
      // Escape to clear search
      if (e.key === 'Escape') {
        this.clearSearch();
      }
    });
  }

  performSearch(query) {
    if (!query.trim()) {
      this.showAllPosts();
      return;
    }

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const results = this.posts.filter(post => {
      const searchText = (post.title + ' ' + post.content).toLowerCase();
      return searchTerms.every(term => searchText.includes(term));
    });

    this.displayResults(results, query);
  }

  displayResults(results, query) {
    // Hide all posts first
    this.posts.forEach(post => {
      post.element.style.display = 'none';
    });

    // Show matching results
    results.forEach(result => {
      result.element.style.display = 'block';
      this.highlightText(result.element, query);
    });

    // Update search input placeholder
    this.searchInput.placeholder = `Found ${results.length} result${results.length !== 1 ? 's' : ''}...`;
  }

  showAllPosts() {
    this.posts.forEach(post => {
      post.element.style.display = 'block';
      this.removeHighlights(post.element);
    });
    this.searchInput.placeholder = 'Search posts...';
  }

  clearSearch() {
    this.searchInput.value = '';
    this.showAllPosts();
  }

  highlightText(element, query) {
    this.removeHighlights(element);
    
    if (!query.trim()) return;

    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }

    textNodes.forEach(textNode => {
      const text = textNode.textContent;
      const regex = new RegExp(`(${query})`, 'gi');
      if (regex.test(text)) {
        const highlightedText = text.replace(regex, '<mark class="search-highlight">$1</mark>');
        const wrapper = document.createElement('span');
        wrapper.innerHTML = highlightedText;
        textNode.parentNode.replaceChild(wrapper, textNode);
      }
    });
  }

  removeHighlights(element) {
    const highlights = element.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
      const parent = highlight.parentNode;
      parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
      parent.normalize();
    });
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BlogSearch();
});

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add reading progress indicator
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
  document.body.appendChild(progressBar);

  const progressBarFill = progressBar.querySelector('.reading-progress-bar');

  window.addEventListener('scroll', () => {
    const article = document.querySelector('.post, .post-body');
    if (!article) return;

    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    const progress = Math.min(
      Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
      1
    );

    progressBarFill.style.width = `${progress * 100}%`;
  });
});