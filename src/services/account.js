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

export async function queryArticleListByAuthorId(params) {
    return request('http://localhost:8082/demo/admin/getarticlesbyauthorid', {
        params,
    })
}

export async function modifyArticle(params) {
    return request('http://localhost:8082/demo/admin/modifyarticle', {
      method: 'POST',
      data: params,
    });
}

export async function removeArticle(params) {
    return request('http://localhost:8082/demo/admin/removearticle', {
        params,
    })
}


export async function addArticle(params) {
    return request('http://localhost:8082/demo/admin/addarticle', {
      method: 'POST',
      data: params,
    });
}
