export default {
  login: () => new Promise((resolve, reject) => {
    wx.login({
      success(result) {
        resolve(result)
      },
      fail(err) {
        reject(err);
      }
    })
  })
}