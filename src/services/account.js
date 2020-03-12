import request from '@/utils/request';

// export async function queryCurrent(){
//     return request('/api/currentUser');
// }
export async function queryFakeList(params) {
    return request('/api/fake_list',{
        params,
    });
}

export async function queryCurrent(params) {
    return request('http://localhost:8082/demo/admin/getuserbyid',{
        params,
    });
}
