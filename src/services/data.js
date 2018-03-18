import request from '../utils/request';

export function getData() {
  return request('https://api.github.com/repos/xypisces/Front-end-blog/issues');
}