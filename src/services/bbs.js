import request from '@/utils/request';

export async function getFakeList(params) {
    return request('http://rap2api.taobao.org/app/mock/228455/api/fake_listrap',{
        params,
    });
}
export async function queryFakeList(params) {
    return request('http://rap2api.taobao.org/app/mock/228455/api/fake_list',{
        params,
    });
}

export async function queryArticleList(params) {
    return request('http://localhost:8082/demo/admin/listarticle', {
        params,
    })
}

export async function queryArticleListByAuthorId(params) {
    return request('http://localhost:8082/demo/admin/getarticlesbyauthorid', {
        params,
    })
}

export async function queryArticleListByPlate(params) {
    return request('http://localhost:8082/demo/admin/getarticlesbyplate', {
        params,
    })
}

export async function removeArticle(params) {
    return request('http://localhost:8082/demo/admin/removearticle', {
        params,
    })
}

export async function modifyArticle(params) {
    return request('http://localhost:8082/demo/admin/modifyarticle', {
      method: 'POST',
      data: params,
    });
}
export async function getArticleById(params) {
    return request('http://localhost:8082/demo/admin/getarticlebyid', {
        params,
    })
}
export async function getArticleByTime(params) {
    return request('http://localhost:8082/demo/admin/getarticlebytime', {
        params,
    })
}
export async function getArticleByToday(params) {
    return request('http://localhost:8082/demo/admin/getarticlebytoday', {
        params,
    })
}
