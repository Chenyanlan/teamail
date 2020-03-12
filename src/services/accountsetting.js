import request from '@/utils/request';

export async function queryCurrent() {
    return request('/api/currentUser');
}
export async function queryProvince() {
    return request('/api/geographic/province');
}
export async function queryCity(province) {
    return request(`/api/geographic/city/${province}`);
}
export async function query() {
    return request('/api/users');
}
export async function queryCurrentUser(params) {
    return request('http://localhost:8082/demo/admin/getuserbyid', {
        params,
    })
}
export async function uploadImg(params) {
    return request('http://localhost:8082/demo/upload/uploadImg', {
      method: 'POST',
      data: params,
    });
}
export async function modifyCurrentUser(params) {
    return request('http://localhost:8082/demo/admin/modifyuser', {
      method: 'POST',
      data: params,
    });
  }
  