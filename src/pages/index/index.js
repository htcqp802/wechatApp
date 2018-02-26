/*
 * @Author: chip
 * @Date: 2018-02-26 16:23:24
 * @Last Modified by:   chip
 * @Last Modified time: 2018-02-26 16:23:24
 */
import _wx from '../../core/wx';
const app = getApp()

Page({
  data: {
    openId: '000',
  },
  onLoad: async function () {
    const { code } = await _wx.login();
    console.info(code);
  },
})
