# Talk-A Chrome 扩展

[English](README.md)

## 概述
Talk-A 是多扩展通信系统的一部分，使用紫色徽章 (#9c27b0) 显示消息数量。它支持 Chrome 扩展之间的实时消息传递，并保持消息持久化存储。

## 功能特点
- 实时消息收发
- 使用 Chrome Storage API 进行消息持久化
- 带紫色徽章的未读消息计数器
- 消息操作功能：
  - 发送新消息
  - 删除单条消息
  - 清除所有消息
  - 查看消息历史
- 自动更新徽章
- 现代化响应式界面

## 技术细节

### 消息结构
```javascript
{
  text: string,       // 消息内容
  timestamp: number,  // Unix 时间戳
  from: string       // 消息来源标识
}
```

### 存储键名
- `talk_messages`: 消息对象数组
- `unread_count`: 未读消息数量

### 徽章系统
- 颜色：紫色 (#9c27b0)
- 自动更新时机：
  - 收到新消息
  - 删除消息
  - 清除所有消息

### 通信协议
- 使用 Chrome Extension Messaging API
- 支持跨扩展通信
- 实现消息验证和错误处理

## 安装方法
1. 打开 Chrome 扩展页面 (`chrome://extensions/`)
2. 启用开发者模式
3. 点击"加载已解压的扩展程序"
4. 选择 `talk-a` 目录

## 开发说明
- 基于 Chrome Extension Manifest V3 构建
- 使用现代 JavaScript 特性
- 实现异步/等待操作
- 遵循 Chrome 扩展最佳实践

## 文件结构
```
talk-a/
├── manifest.json     # 扩展配置
├── popup.html       # 界面布局
├── popup.js         # 界面逻辑
├── background.js    # 后台服务工作进程
└── images/         # 扩展图标
```

## 安全性
- 实现来源验证
- 消息内容净化
- 消息结构验证
- 处理跨扩展权限

## 依赖项
- Chrome Extension API
- Chrome Storage API
- Chrome Action API 