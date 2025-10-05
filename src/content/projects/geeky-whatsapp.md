---
title: "Geeky WhatsApp"
category: "Socket Programming"
description: "A multithreaded client-server architecture based chat application using Java Socket programming with support for private messaging"
tags: ["Java", "Socket Programming", "Multithreading", "Networking", "Client-Server"]
thumbnail: "/images/whatsapp.jpg"
githubUrl: "https://github.com/aditya30394/Geeky-Whatsapp"
featured: false
order: 5
---

A multithreaded client-server architecture based **Chat Application** using Java Socket programming. A server continuously listens for connection requests from clients across the network or even from the same machine. Clients connect to the server using an IP address and port number.

## Key Features

- **Unique Username System**: Each client provides a unique username while connecting, treated as the unique identifier
- **Real-time Messaging**: All messages from clients are sent to the server using ObjectOutputStream in Java
- **Broadcast Messaging**: Server broadcasts messages to all connected clients for public messages
- **Private Messaging**: Detected using '@' followed by a valid username, sends message only to that user
- **Server Console**: All messages sent from various clients can be seen on the server console

## How It Works

1. Server starts and listens for incoming connections
2. Clients connect with unique usernames
3. Messages are sent through ObjectOutputStream
4. Server processes messages and routes them appropriately:
   - Public messages are broadcast to all clients
   - Private messages (using @username) are sent only to the specified user
5. All communication is visible on the server console for monitoring

## Technical Implementation

- **Multithreading**: Each client connection runs on a separate thread
- **Socket Programming**: Uses Java's Socket and ServerSocket classes
- **Object Streams**: Utilizes ObjectOutputStream and ObjectInputStream for message passing
- **Thread-safe**: Properly synchronized to handle concurrent client connections

This project demonstrates core networking concepts including socket programming, multithreading, and client-server architecture while providing a functional chat application similar to popular messaging platforms.
