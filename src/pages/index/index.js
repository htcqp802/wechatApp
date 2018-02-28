/*
 * @Author: chip
 * @Date: 2018-02-26 16:23:24
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 17:42:46
 */
import { getPeizhiButtonByKey } from './server';

Page({
  data: {
    openId: '000',
  },
  onLoad: async function () {
    const data = { configKey: "1_2" };
    try {
      const result = await getPeizhiButtonByKey(data);
      console.info(result);
    } catch (err) {
      console.error(err);
    }
  },
})
