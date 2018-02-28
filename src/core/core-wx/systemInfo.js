/*
 * @Author: chip
 * @Date: 2018-02-27 12:01:15
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 13:16:38
 */
export default {
  // 同步获取系统信息
  getSystemInfoSync: wx.getSystemInfoSync,
  // 异步获取系统信息
  getSystemInfo: () => new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success: (res) => resolve(res),
      fail: (err) => reject(err)
    })
  })

}