/*
 * @Author: chip
 * @Date: 2018-02-26 16:22:55
 * @Last Modified by: chip
 * @Last Modified time: 2018-02-27 15:14:48
 */

 /**
  * object 排序
  * @param {*} obj 
  */
export function sortByKey(obj) {
  const newkey = Object.keys(obj).sort();
  const newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]];
  }
  return newObj;
}