module.exports = {
  // 不希望打包後的檔名出現雜湊值
  filenameHashing: false,
  // 手動推送更新
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Midnight-Diner/'
    : '/'
}