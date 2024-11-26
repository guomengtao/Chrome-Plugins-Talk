# Talk-B Chrome Extension

[中文说明](README_CN.md)

## Overview
Talk-B is a complementary extension to Talk-A in the multi-extension communication system. It features a green badge (#4caf50) to indicate message count and provides similar messaging capabilities with a distinct visual identity.

## Features
- Real-time message sending and receiving
- Message persistence using Chrome Storage API
- Unread message counter with green badge
- Message operations:
  - Send new messages
  - Delete individual messages
  - Clear all messages
  - View message history
- Automatic badge updates
- Modern, responsive UI with green theme

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
- Color: Green (#4caf50)
- Updates automatically on:
  - New message received
  - Message deleted
  - All messages cleared

### Communication Protocol
- Uses Chrome Extension Messaging API
- Supports cross-extension communication
- Implements message validation and error handling
- Compatible with Talk-A and Talk-C

## Installation
1. Open Chrome Extensions page (`chrome://extensions/`)
2. Enable Developer Mode
3. Click "Load unpacked"
4. Select the `talk-b` directory
5. Note: Should be installed alongside Talk-A and Talk-C

## Development
- Built with Chrome Extension Manifest V3
- Uses modern JavaScript features
- Implements async/await for asynchronous operations
- Follows Chrome extension best practices

## Files Structure
```
talk-b/
├── manifest.json     # Extension configuration
├── popup.html       # UI layout with green theme
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

## Integration
- Works seamlessly with Talk-A
- Managed by Talk-C
- Supports message exchange between extensions 