import req from '../request';

export function report(key) {
  
  return req.post('data/insertDateReport')
}