import request from '@/utils/request';

export async function getFakeList(params){
    return request('http://rap2api.taobao.org/app/mock/228455/api/fake_listrap',{
        params,
    });
}
export async function queryFakeList(params){
    return request('http://rap2api.taobao.org/app/mock/228455/api/fake_list',{
        params,
    });
}

export async function testList(params){
    return request('http://localhost:8082/demo/admin/listwiki',{
        params,
    })
}