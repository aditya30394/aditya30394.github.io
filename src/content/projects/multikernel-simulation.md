---
title: "Multikernel Simulation: A New Approach to Study Rollback Sensitive Memory Architecture"
category: "Linux Virtualization"
description: "A novel simulation technique for hardware-based virtualization security solutions using multi-kernel privilege levels"
tags: ["Linux", "Virtualization", "Xen", "Security", "Hypervisor", "IEEE"]
thumbnail: "/images/linux.jpg"
externalUrl: "https://ieeexplore.ieee.org/document/8181523"
featured: false
order: 7
---

In today's cloud-centered business environment, security of cloud solutions is a critical issue. Since virtualization is the foundational element of cloud computing, security from virtualization becomes a major goal for cloud-based systems.

## The Challenge

Virtualization allows multiple virtual machines (VMs) to share the same hardware resources without knowing about each other's presence. Despite its indisputable benefits, **data security vulnerabilities** and **performance degradation** remain the main causes of concern. Implementation and proper testing of security innovations is not easy with hardware, hybrid, or API-based software simulators, due to:

- High implementation costs
- Absence of simulators capable of testing solutions that span multiple levels of hardware and software
- Different privilege levels of instructions

This is especially relevant when proposed improvements include instruction set modifications at different privilege levels.

## Our Novel Approach

We propose a different simulation approach - **multikernel simulation**. This is different from conventional software-based simulation techniques in that we:

1. Utilize the different privilege levels of various kernels running on the server
2. Leverage them to distribute components and logic into different software levels
3. Simulate the effect of using them on the required privilege level
4. Identify unused bits in kernel software and use them to simulate hardware conditions

## Implementation

We implement and demonstrate this simulation technique for the **Extended-HyperWall and RSDM architecture**, which is a hardware-based solution to improve the security of virtual machines in a fully virtualized environment, in the presence of an untrusted hypervisor, against rollback-based attacks.

### Key Benefits

- Works in a fully virtualized environment
- Demonstrates security of proposed enhancements without hardware prototypes
- Cost-effective manner of validation
- Enables testing of cross-privilege-level security solutions

## Publication

This research was published in **IEEE ISCBD 2017** (International Symposium on Cloud and Big Data).

### Enhanced Memory Management

The research enhanced the memory management unit of the Xen hypervisor by adding an in-memory table to prevent rollback attacks, providing a practical solution for securing virtualized environments against sophisticated attack vectors.
