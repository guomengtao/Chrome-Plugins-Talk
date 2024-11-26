// Talk-C 作为管理器，主要负责监听来自 Talk-A 和 Talk-B 的消息
// 并在需要时进行转发和管理

// 存储键名
const STORAGE_KEY = 'talk_messages';

// Talk-A 和 Talk-B 的扩展 ID
const TALK_A_ID = 'japicpcjchioihompffnikdofkngacnh';
const TALK_B_ID = 'pcegncdmdaehddgmifeedeeffjfkmeal';

// 监听来自其他扩展的消息
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    // 验证消息来源
    if (![TALK_A_ID, TALK_B_ID].includes(sender.id)) {
      sendResponse({ error: 'Unauthorized sender' });
      return;
    }

    // 根据消息类型处理
    switch (request.action) {
      case 'notify_new_message':
        // 当 A 或 B 有新消息时，更新图标
        updateBadge();
        sendResponse({ success: true });
        break;

      default:
        sendResponse({ error: 'Unknown action' });
        break;
    }
    return true;
  }
);

// 更新扩展图标上的未读消息数量
async function updateBadge() {
  try {
    // 获取 A 的消息
    const messagesFromA = await new Promise(resolve => 
      chrome.runtime.sendMessage(TALK_A_ID, { action: 'get_messages' }, resolve)
    );

    // 获取 B 的消息
    const messagesFromB = await new Promise(resolve => 
      chrome.runtime.sendMessage(TALK_B_ID, { action: 'get_messages' }, resolve)
    );

    // 计算总消息数
    const totalCount = 
      (messagesFromA?.messages?.length || 0) + 
      (messagesFromB?.messages?.length || 0);

    // 更新徽章
    chrome.action.setBadgeText({ 
      text: totalCount === 0 ? '' : totalCount.toString() 
    });
    chrome.action.setBadgeBackgroundColor({ color: '#ff5722' });
  } catch (error) {
    console.error('Failed to update badge:', error);
  }
}

// 初始化
updateBadge();