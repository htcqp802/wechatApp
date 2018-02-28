import request from '../../common/request';

export const getPeizhiButtonByKey = data => request.get('wechat/configInfo/getPeizhiButtonByKey', { data });
