---
title: Reverse Image Captioning using GAN
description: Generate images from textual descriptions using Generative Adversarial Networks
category: Generative Adversarial Networks (AI)
tags: ['AI', 'GAN', 'Deep Learning', 'PyTorch']
thumbnail: /images/ric.jpg
githubUrl: https://github.com/aditya30394/Reverse-Image-Captioning
featured: true
order: 2
---

This task is the reverse of image captioning - we generate images that best fit textual descriptions using Generative Adversarial Networks (GANs).

## Architecture

The model uses Skip-Thought Vectors (4800 dimensions) to encode text descriptions, which are then reduced to 1024 dimensions through a learned reducer layer. This vector feeds into the GAN architecture to generate images.

## Key Features

- Pre-trained text embedding using Skip-Thought Vectors for robust text encoding
- Custom reducer layer to transform 4800-dim vectors to 1024-dim suitable for GAN input
- GUI application for interactive image generation from text
- Trained on multiple image datasets for diverse generation capabilities

## Demo

Check out the [YouTube demo](https://youtu.be/GTMeAvDXOp8) showing the GUI in action, generating images from custom text descriptions in real-time.
