import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
export async function queryCurrentUser(params) {
  return request('http://localhost:8082/demo/admin/getuserbyid', {
      params,
  })
}
export async function queryUserList() {
  return request('http://localhost:8082/demo/admin/listuser');
}
export async function modifyUser(params) {
  return request('http://localhost:8082/demo/admin/modifyuser', {
    method: 'POST',
    data: params,
  });
}
export async function removeUser(params) {
  return request('http://localhost:8082/demo/admin/removeuser', {
      params,
  })
}
