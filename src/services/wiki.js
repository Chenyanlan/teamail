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
export async function wikiIndexList(params) {
    return request('http://localhost:8082/demo/admin/listwikiindex', {
        params,
    })
}
export async function wikiDetailList(params) {
    return request('http://localhost:8082/demo/admin/listwikidetailbywikiid', {
        params,
    })
}
export async function removeWikiDetail(params) {
    return request('http://localhost:8082/demo/admin/removewikidetail', {
        params,
    })
}

export async function addWikiDetail(params) {
    return request('http://localhost:8082/demo/admin/addwikidetail', {
        method: 'POST',
        data: params,
    })
}
