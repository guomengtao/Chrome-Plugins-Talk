# Talk-C Chrome Extension (Manager)

[中文说明](README_CN.md)

## Overview
Talk-C serves as the central management extension for the Talk communication system. It features an orange badge (#ff5722) displaying the total message count from both Talk-A and Talk-B, and provides comprehensive management capabilities for the entire messaging system.

## Features
- Centralized message management interface
- Real-time message monitoring from Talk-A and Talk-B
- Combined message view with filtering options
- Message operations:
  - View all messages from both extensions
  - Delete messages from either extension
  - Clear all messages system-wide
- Advanced features:
  - Message source filtering (A/B/All)
  - Total message count display
  - Real-time badge updates
  - Message source identification

## Technical Details

### Message Management
- Aggregates messages from both Talk-A and Talk-B
- Maintains separate message source tracking
- Provides unified message operations
- Real-time synchronization

### Badge System
- Color: Orange (#ff5722)
- Displays total message count from both extensions
- Updates automatically on any message change
- Reflects system-wide message status

### Management Interface
- Tab-based message filtering
- Source-specific message displays
- Combined view option
- Intuitive message management controls

## Installation
1. Open Chrome Extensions page (`chrome://extensions/`)
2. Enable Developer Mode
3. Click "Load unpacked"
4. Select the `talk-c` directory
5. Note: Requires Talk-A and Talk-B to be installed

## Development
- Built with Chrome Extension Manifest V3
- Implements advanced message management
- Uses modern JavaScript features
- Follows Chrome extension best practices

## Files Structure
```
talk-c/
├── manifest.json     # Extension configuration
├── popup.html       # Management interface layout
├── popup.js         # Interface logic
├── background.js    # Background service worker
└── images/         # Extension icons
```

## Security
- Implements strict origin validation
- Manages cross-extension permissions
- Validates all message operations
- Ensures secure message handling

## Dependencies
- Chrome Extension API
- Chrome Storage API
- Chrome Action API

## System Integration
- Central manager for Talk-A and Talk-B
- Monitors all message activities
- Provides system-wide message control
- Maintains message synchronization

## Advanced Features
- Message filtering by source
- Bulk message operations
- Real-time message monitoring
- System-wide message management 