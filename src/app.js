/*
 * @Author: chip
 * @Date: 2018-02-26 16:23:04
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 19:39:48
 */

import login from './common/server/login';

App({
  onLaunch: function ({ path }) {
    login(path);
  },
})