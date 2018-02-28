export default {
  showModal: params => new Promise((resolve, reject) => {
    wx.showModal({
      ...params,
      success: res => resolve(res),
      fail: err => reject(err),
    })
  })
}