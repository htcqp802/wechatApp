/*
 * @Author: chip
 * @Date: 2018-02-26 16:22:59
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 20:08:42
 */

import login from './core-wx/login';
import request from './core-wx/request';
import systemInfo from './core-wx/systemInfo';
import setting from './core-wx/setting';
import userInfo from './core-wx/userInfo';
import modal from './core-wx/modal';
const _wx = {
  ...login,
  ...request,
  ...systemInfo,
  ...setting,
  ...userInfo,
  ...modal,
};
export default _wx;
