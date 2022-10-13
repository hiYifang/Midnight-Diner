// 封裝程式碼：彈跳吐司元件
import emitter from '@/methods/emitter';

export default function (res, title = '更新') {
  // Toasts 訊息
  if (res.data.success) {
    // 推送成功
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    // 推送失敗
    // message 有些是文字、有些是陣列，在此統一格式
    const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
