# Talk-B Chrome 扩展

[English](README.md)

## 概述
Talk-B 是多扩展通信系统中 Talk-A 的配套扩展。它使用绿色徽章 (#4caf50) 显示消息数量，提供类似的消息功能，但具有独特的视觉标识。

## 功能特点
- 实时消息收发
- 使用 Chrome Storage API 进行消息持久化
- 带绿色徽章的未读消息计数器
- 消息操作功能：
  - 发送新消息
  - 删除单条消息
  - 清除所有消息
  - 查看消息历史
- 自动更新徽章
- 绿色主题的现代化响应式界面

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
- 颜色：绿色 (#4caf50)
- 自动更新时机：
  - 收到新消息
  - 删除消息
  - 清除所有消息

### 通信协议
- 使用 Chrome Extension Messaging API
- 支持跨扩展通信
- 实现消息验证和错误处理
- 与 Talk-A 和 Talk-C 兼容

## 安装方法
1. 打开 Chrome 扩展页面 (`chrome://extensions/`)
2. 启用开发者模式
3. 点击"加载已解压的扩展程序"
4. 选择 `talk-b` 目录
5. 注意：需要与 Talk-A 和 Talk-C 一起安装

## 开发说明
- 基于 Chrome Extension Manifest V3 构建
- 使用现代 JavaScript 特性
- 实现异步/等待操作
- 遵循 Chrome 扩展最佳实践

## 文件结构
```
talk-b/
├── manifest.json     # 扩展配置
├── popup.html       # 绿色主题界面布局
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

## 集成
- 与 Talk-A 无缝协作
- 由 Talk-C 管理
- 支持扩展之间的消息交换 