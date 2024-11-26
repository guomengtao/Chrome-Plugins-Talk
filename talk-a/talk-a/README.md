# Talk-A Chrome Extension

[中文说明](README_CN.md)

## Overview
Talk-A is part of a multi-extension communication system, featuring a purple badge (#9c27b0) to indicate message count. It enables real-time messaging between Chrome extensions while maintaining message persistence.

## Features
- Real-time message sending and receiving
- Message persistence using Chrome Storage API
- Unread message counter with purple badge
- Message operations:
  - Send new messages
  - Delete individual messages
  - Clear all messages
  - View message history
- Automatic badge updates
- Modern, responsive UI

## Technical Details

### Message Structure
```javascript
{
  text: string,       // Message content
  timestamp: number,  // Unix timestamp
  from: string       // Message source identifier
}
```

### Storage Keys
- `talk_messages`: Array of message objects
- `unread_count`: Number of unread messages

### Badge System
- Color: Purple (#9c27b0)
- Updates automatically on:
  - New message received
  - Message deleted
  - All messages cleared

### Communication Protocol
- Uses Chrome Extension Messaging API
- Supports cross-extension communication
- Implements message validation and error handling

## Installation
1. Open Chrome Extensions page (`chrome://extensions/`)
2. Enable Developer Mode
3. Click "Load unpacked"
4. Select the `talk-a` directory

## Development
- Built with Chrome Extension Manifest V3
- Uses modern JavaScript features
- Implements async/await for asynchronous operations
- Follows Chrome extension best practices

## Files Structure
```
talk-a/
├── manifest.json     # Extension configuration
├── popup.html       # UI layout
├── popup.js         # UI logic
├── background.js    # Background service worker
└── images/         # Extension icons
```

## Security
- Implements origin validation
- Sanitizes message content
- Validates message structure
- Handles cross-extension permissions

## Dependencies
- Chrome Extension API
- Chrome Storage API
- Chrome Action API 