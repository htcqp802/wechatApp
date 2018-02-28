/*
 * @Author: chip
 * @Date: 2018-02-27 15:08:58
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 17:45:40
 */
import wx from '../core/wx';
import { sortByKey } from '../core/utils/util';
import { env } from '../config';
import qs from 'qs';
import md5 from 'md5';

const methods = ['get', 'post', 'put', 'delete'];

// 生成sig
const encryptMD5 = value => {
  if (qs.stringify(sortByKey(value))) {
    return md5(`apikey=sunlandzlcx&${qs.stringify(sortByKey(value))}`)
  } else {
    return md5(`apikey=sunlandzlcx`);
  }
};

// 默认header
const defaultHeader = (data) => {
  const { brand, model, language, version, system, platform } = wx.getSystemInfoSync();
  return {
    "content-type": "application/x-www-form-urlencoded",
    "sig": encryptMD5(data),
    "_ts": new Date().getTime(),
    brand,
    model,
    language,
    version,
    system,
    platform
  }
}

// 格式化URL
const formateUrl = url => url.substring(0, 3) != 'http' ? `${env.APIURL}${url}` : url;

const req = {};
methods.forEach(method => {
  req[method] = async (url, obj) => {
    let data = {};
    let header = {};
    if (obj && obj.data) {
      data = obj.data;
    }
    header = defaultHeader(data);
    if (obj && obj.header) {
      header = { ...header, ...obj.header };
    }
    const result = await wx.request({ url: formateUrl(url), method, data, header });
    return new Promise((resolve, reject) => {
      if (result.statusCode !== 200) {
        console.error('服务器错误', result.data);
        reject(result);
      } else {
        if (result.data.state !== 1) {
          reject(result.data.message);
        } else {
          resolve(result);
        }
      }
    })
  }
})
export default req;