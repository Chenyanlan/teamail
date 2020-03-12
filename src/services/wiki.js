import request from '@/utils/request';

export async function wikiList(params) {
    return request('http://localhost:8082/demo/admin/listwiki', {
        params,
    })
}

export async function wikiDetail(params) {
    return request('http://localhost:8082/demo/admin/listwikidetailbywikiid', {
        params,
    })
}
