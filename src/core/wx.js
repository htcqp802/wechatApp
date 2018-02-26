/*
 * @Author: chip
 * @Date: 2018-02-26 16:22:59
 * @Last Modified by:   chip
 * @Last Modified time: 2018-02-26 16:22:59
 */
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
};
