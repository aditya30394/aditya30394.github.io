---
title: "Toxic Content Detection On Social Media Platforms"
category: "Web Application"
description: "Automated detection and censorship of toxic comments using RNN/LSTM and CNN with FastText and GloVe embeddings, incorporating human feedback"
tags: ["Machine Learning", "NLP", "Deep Learning", "RNN", "LSTM", "CNN", "PyTorch"]
thumbnail: "/images/detoxit.jpg"
githubUrl: "https://github.com/aditya30394/Detoxit"
featured: false
order: 9
---

Cyberbullying and online abuse have been continuously rising at an alarming rate. This is detrimental to the mental state of teenagers and one of the biggest factors leading to depression. Manually determining the toxicity of comments in the plethora of data generated on a daily basis is an impossible task.

## The Problem

Automating the detection and censorship of such toxic comments by social media platforms can go a long way in solving this issue. However, detection of toxic comments is a very daunting task because of various factors:

- Context dependency
- Subjective perception
- Evolving vocabulary
- Cultural differences
- Sarcasm and nuance

## Our Approach

In this work, we propose including the **human element** to work alongside the automated model to improve results by requesting feedback. We are using:

- **Recurrent Neural Network (RNN)** with Long Short-Term Memory cells (LSTM)
- **Convolutional Neural Network (CNN)**
- **Pre-trained FastText embedding** from Facebook
- **Global Vectors for Word Representation (GloVe)** embedding

## Key Innovation

Instead of doing a binary classification of comments, we provide a **range of toxicity scores**. In our human feedback system as well, we request feedback on a scale rather than a simple yes/no, allowing for more nuanced evaluation.

### Human-in-the-Loop Learning

We introduce human feedback in recurring training cycles:
1. Automated model makes initial predictions
2. Uncertain cases are flagged for human review
3. Human feedback is incorporated into the training data
4. Model is retrained with expanded dataset
5. Repeat for continuous improvement

## System Architecture

The system combines:
- **Deep Learning Models**: RNN-LSTM and CNN for pattern recognition
- **Word Embeddings**: FastText (4096-dim) and GloVe (300-dim) for semantic understanding
- **Feedback Loop**: Human reviewers validate edge cases
- **Continuous Learning**: Model improves over time with feedback

## Impact

This project aims to make social media platforms safer by:
- Automatically detecting toxic content at scale
- Reducing the burden of manual moderation
- Providing more nuanced toxicity assessments
- Incorporating human judgment where needed
- Protecting vulnerable users from cyberbullying and harassment

The hybrid human-AI approach ensures both efficiency and accuracy, making it practical for deployment on large social media platforms.
