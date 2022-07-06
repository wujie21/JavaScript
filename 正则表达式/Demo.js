// 补全代码
// 开始符 ^
// 协议部分http(s)://        表示为((https|http|ftp|rtsp|mms)?:\/\/)
// 域名部分                  表示为(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+
// 顶级域名com cn等为2-6位   表示为([a-zA-Z]{2,6})
// 端口部分                  表示为(:\d+)?, ?表示0次或1次
// 请求路径如/login          表示为 (\/.*)?
// 问号传参及哈希值如?age=1   表示为 (\?.*)?和(#.*)?
// 结束符 $
const _isUrl = url => {
  // 补全代码
  let reg = /^((https|http|ftp|rtsp|mms)?:\/\/)(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]{2,6})(:\d+)?(\/.*)?(\?.*)?(#.*)?$/
  return reg.test(url)
}
console.log(_isUrl('https://www.baidu.com'))