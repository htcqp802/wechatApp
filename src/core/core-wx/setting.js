export default {
  getSetting: () => new Promise((resolve, reject) => {
    wx.getSetting({
      success: result => resolve(result),
      fail: err => reject(err),
    })
  }),
  openSetting: () => new Promise((resolve, reject) => {
    wx.openSetting({
      success: result => resolve(result),
      fail: err => reject(err),
    })
  })
}