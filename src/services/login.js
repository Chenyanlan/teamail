import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function AccountLogin(params) {
  return request('http://localhost:8082/demo/admin/login', {
    params,
  })
}

// export async function getFakeCaptcha(mobile) {
//   return request(`/api/login/captcha?mobile=${mobile}`);
// }
// export async function testList(params){
//   return request('http://localhost:8082/demo/admin/listwiki',{
//       params,
//   })
// }