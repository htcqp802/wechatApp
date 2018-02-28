export default {
  getUserInfo: (params) => new Promise((resolve, reject) => {
    wx.getUserInfo({
      ...params,
      success: res => resolve(res),
      fail: err => reject(err),
    })
  })
}