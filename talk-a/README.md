# Chrome Extension Chat

A set of Chrome extensions that allow multi-directional communication between them. Messages are stored locally and can be exchanged between Extension A, Extension B, and Extension C.

[中文说明](README_CN.md) | [日本語](README_JA.md)

## Features

### Talk-A (Purple Badge) and Talk-B (Green Badge)
- Send and receive messages between extensions
- Real-time message badge counter on extension icon
- Local message storage using Chrome Storage API
- Message operations:
  - Send new messages
  - Delete individual messages
  - Clear all messages
  - View message history
- Automatic badge updates when:
  - New message received
  - Message deleted
  - All messages cleared

### Talk-C (Orange Badge) - Manager Extension
- Central management interface for both Talk-A and Talk-B
- Combined message view from both extensions
- Real-time message monitoring
- Message operations:
  - View all messages from both extensions
  - Delete messages from either extension
  - Clear all messages from both extensions
- Advanced features:
  - Auto-refresh badge counter every 30 seconds
  - Filter messages by source (A or B)
  - Shows total message count from both extensions
  - Real-time badge updates when messages change

## Badge System
- Talk-A: Purple badge (#9c27b0) showing its message count
- Talk-B: Green badge (#4caf50) showing its message count
- Talk-C: Orange badge (#ff5722) showing total messages from A and B

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `talk-a` folder
5. Repeat step 4 for the `talk-b` folder
6. Repeat step 4 for the `talk-c` folder
7. Note the extension IDs and update them in the code

## Usage

### Basic Operations
1. Click on any extension icon (Talk-A, Talk-B, or Talk-C) in your Chrome toolbar
2. Type a message in the input field
3. Click "Send" to send the message to other extensions
4. Messages will be displayed in all extensions' popups

### Message Management
- **Viewing Messages**: 
  - Use Talk-A or Talk-B to view their respective messages
  - Use Talk-C to view all messages from both extensions
- **Deleting Messages**:
  - Click the "Delete" button next to any message to remove it
  - Use "Clear All" to remove all messages
- **Filtering Messages** (Talk-C only):
  - Use the tabs to filter messages by source (All/A/B)
- **Badge Counters**:
  - Each extension shows its message count on the icon
  - Numbers update automatically when messages change
  - Talk-C shows the total count from both A and B

## Technical Details
- Uses Chrome Extension Messaging API for communication
- Implements Chrome Storage API for message persistence
- Real-time updates using event listeners
- Asynchronous message handling
- Cross-extension communication security
- Automatic badge counter updates