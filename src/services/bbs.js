import request from '@/utils/request';

export async function getFakeList(params){
    return request('/api/fake_listrap2',{
        params,
    });
}
export async function queryFakeList(params){
    return request('/api/fake_list',{
        params,
    });
}