---
title: "Decentralized Howdy: A Decentralized Application for Student Record Storage"
category: "Blockchain"
description: "A blockchain-based decentralized application for student record storage using Ethereum smart contracts to provide tamper-proof, readily verifiable academic credentials"
tags: ["Blockchain", "Ethereum", "Smart Contracts", "Solidity", "Web3"]
thumbnail: "/images/dapp.jpg"
githubUrl: "https://github.com/aditya30394/Decentralized-Howdy"
featured: false
order: 4
---

As students move from one learning environment to another, it is essential that they carry with them the proof of their previous learning experiences and achievements. The official records showing the courses taken and grades earned are continuously sought by recruiters and graduate schools. Traditionally, these records are stored either as documents or as unofficial copies on centralized servers, which causes delays in the on-boarding process - typically taking about 10 days to obtain official copies.

## The Challenge

The delay is primarily caused because records are validated at the source, which usually follows a convoluted process. The challenge is to offer a platform upon which all of a student's credentials can be verified readily without actually approaching the source, expediting the time to obtain official records.

## Approach and Contribution

We propose to use blockchain technology as the backend to solve this problem. The primary attraction of blockchain is that it offers immutable ledgers. The fact that blockchain data is tamper-proof provides it with built-in validation as an independent, transparent and permanent database.

The aim of the project is to build a **decentralized application (dapp)** for student record storage. In this project, we use smart contracts to associate students with their official records and use the inherent properties of blockchain to make the records tamper-proof.

### Two Important Contributions

1. **Eliminate delays** - Provide a decentralized application to eliminate the delay in obtaining official records
2. **Tamper-proof records** - Provide a mechanism to make the records tamper-proof so that they can be trusted

## Smart Contract Architecture

Our smart contract has two map-based data structures:

1. **studentRecords**: Maps student IDs to their respective data (hash of student record, password, and validity flag)
2. **authList**: Maps authentication IDs to boolean flags for efficient permission lookup

## Features

- Students can access their records from virtually any device
- Records cannot be altered by students
- Students have control to show exactly what they want to various groups of people
- Minimalistic web-based interface for students to check records
- Department/registrar can add or modify student records securely
