/*
 * @Author: chip
 * @Date: 2018-02-26 17:16:05
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 20:09:31
 */

import wx from '../../core/wx';
import req from '../request';

let login_num = 1;
const getSkLogin = data => req.post('wechat/getSkLogin', { data });

async function login(fromPage, type) {
  type = type || 1;
  // 获取openid
  const { code } = await wx.login();
  // 获取用户权限
  const { authSetting } = await wx.getSetting();
  const allow = !authSetting['scope.userInfo'];
  try {
    // 获取用户信息
    const { iv, encryptedData, userInfo } = await wx.getUserInfo({ withCredentials: true });
    if (login_num < 4) {
      try {
        // 登录
        const res = await getSkLogin({ code, iv, encryptedData, fromPage, type });
        return res;
      } catch (err) {
        // 登录失败再次登录
        login_num++;
        login(fromPage, 2);
      }
    } else {
      login_num = 1;
    }
  } catch (err) {

  }

}

export default login;