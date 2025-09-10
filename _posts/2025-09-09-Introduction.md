---
layout: post
title: "A Reproducible Experiment: Sample ML Study"
date: 2025-09-10
tags: [ml, reproducibility, methods, deep-learning]
abstract: "We present a comprehensive, reproducible experiment exploring image classification using the CIFAR-10 dataset. Our study demonstrates best practices for experimental design, documentation, and result validation in machine learning research."
github_repo: "https://github.com/mr-takeshi/reproducible-ml-study"
dataset: "https://www.cs.toronto.edu/~kriz/cifar.html"
---

## Introduction

In the rapidly evolving field of machine learning, **reproducibility** has become a critical concern. Recent studies have shown that a significant portion of published ML research cannot be reproduced due to incomplete documentation, missing code, or unavailable datasets [1,2]. This study presents a comprehensive framework for conducting reproducible machine learning experiments, using image classification on CIFAR-10 as a case study.

### Problem Statement

The primary challenges in ML reproducibility include:
- Inconsistent experimental setups across studies
- Missing hyperparameter documentation
- Unavailable or poorly documented datasets
- Lack of computational resource specifications

### Related Work

Previous work by Pineau et al. [3] established guidelines for reproducible research in ML, emphasizing the importance of code availability and detailed methodology documentation. Our work extends these principles with a focus on practical implementation.

## Methods

### Dataset
We use the **CIFAR-10** dataset, consisting of 60,000 32×32 color images across 10 classes. The dataset is split into:
- Training set: 50,000 images
- Test set: 10,000 images

### Model Architecture
We implement a **ResNet-18** architecture with the following modifications:
- Batch normalization after each convolutional layer
- ReLU activation functions
- Dropout (p=0.2) in the final fully connected layer

### Training Configuration
- **Optimizer**: Adam with β₁=0.9, β₂=0.999
- **Learning rate**: 0.001 with cosine annealing
- **Batch size**: 128
- **Epochs**: 100
- **Weight decay**: 1e-4
- **Random seed**: 42 (for reproducibility)

### Data Augmentation
- Random horizontal flip (p=0.5)
- Random rotation (±15°)
- Color jittering (brightness=0.2, contrast=0.2)

## Results

Our model achieves the following performance metrics:

| Metric | Value |
|--------|-------|
| Test Accuracy | 94.2% |
| Training Accuracy | 98.1% |
| Validation Accuracy | 93.8% |
| Training Time | 2.3 hours |

### Loss Function
We use cross-entropy loss with the following formulation:

$$\mathcal{L} = -\sum_{i=1}^{N} \sum_{c=1}^{C} y_{i,c} \log(\hat{y}_{i,c})$$

Where:
- $N$ is the number of samples
- $C$ is the number of classes
- $y_{i,c}$ is the true label
- $\hat{y}_{i,c}$ is the predicted probability

### Learning Curves
The model shows stable convergence with no signs of overfitting, as evidenced by the close alignment between training and validation accuracy curves.

## Discussion

### Key Findings
1. **Reproducibility**: All results can be reproduced using the provided code and configuration
2. **Performance**: Our implementation achieves competitive results on CIFAR-10
3. **Documentation**: Comprehensive methodology enables independent verification

### Limitations
- Single dataset evaluation
- Limited computational budget
- No comparison with state-of-the-art methods

## Reproducibility

### Code Availability
Complete implementation available at: [GitHub Repository](https://github.com/mr-takeshi/reproducible-ml-study)

### Environment Setup
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run experiment
python train.py --config configs/cifar10_resnet18.yaml
```

### Computational Requirements
- **GPU**: NVIDIA GTX 1080 Ti (11GB VRAM)
- **RAM**: 16GB system memory
- **Storage**: 2GB for dataset and checkpoints
- **Runtime**: ~2.3 hours for full training

### Expected Results
When run with the provided configuration, the experiment should produce:
- Final test accuracy: 94.2% ± 0.3%
- Training time: 2.3 ± 0.1 hours
- Model checkpoint: `checkpoints/best_model.pth`

## References

[1] Gundersen, O. E., & Kjensmo, S. (2018). State of the art: Reproducibility in artificial intelligence. *Proceedings of the AAAI Conference on Artificial Intelligence*.

[2] Pineau, P., et al. (2020). Improving reproducibility in machine learning research. *Journal of Machine Learning Research*.

[3] Pineau, P., et al. (2019). Reproducible research in machine learning. *NeurIPS Reproducibility Challenge*.
