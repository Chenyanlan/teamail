import request from '@/utils/request';

export async function wikiDetailById(params) {
    return request('http://localhost:8082/demo/admin/getwikidetailbyid', {
        params,
    })
}

export async function modifywikiDetailById(params) {
    return request('http://localhost:8082/demo/admin/modifywikidetail', {
        method: 'POST',
        data: params,
    })
}
