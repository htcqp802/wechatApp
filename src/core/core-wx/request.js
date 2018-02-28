export default {
  request: (params) => new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: result => resolve(result),
      fail: err => reject(err)
    })
  })
}