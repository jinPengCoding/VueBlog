import axios from 'axios'

export function getDiscList () {
  const url = '/apia/tips/fcgi-bin/fcg_music_red_dota.fcg'
  return axios.get(url, {
    params: {
      '-': 'getUCGI37777476231048723',
      g_tk: 1301598325,
      loginUin: 1638786338,
      hostUin: 0,
      format: 'json',
      platform: 'yqq.json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      needNewCode: 0,
      data: { 'comm': { 'ct': 24, 'cv': 10000 }, 'pass': { 'module': 'yqq.WhiteListServer', 'method': 'Pass', 'param': {} } }
    },
    headers: {
      Origin: 'https://y.qq.com',
      Referer: 'https://y.qq.com/n/yqq/toplist/4.html'
    }
  }).then((res) => {
    console.log(res)
  })
}
