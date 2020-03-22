import request from '@/utils/request';

export async function getGoodsList(params) {
    return request('http://localhost:8082/demo/admin/listgoods', {
        params,
    });
}
export async function getGoodsListByTitle(params) {
    return request('http://localhost:8082/demo/admin/getgoodsbytitle', {
        params,
    });
}
export async function getGoodsListByClassify(params) {
    return request('http://localhost:8082/demo/admin/getgoodsbyclassify', {
        params,
    });
}
export async function getGoodsListByPricesegment(params) {
    return request('http://localhost:8082/demo/admin/getgoodsbypricesegment', {
        params,
    });
}
export async function removeGoods(params) {
    return request('http://localhost:8082/demo/admin/removegoods', {
        params,
    });
}

export async function modifyGoods(params) {
    return request('http://localhost:8082/demo/admin/modifygoods', {
      method: 'POST',
      data: params,
    });
}

export async function addGoods(params) {
    return request('http://localhost:8082/demo/admin/addgoods', {
      method: 'POST',
      data: params,
    });
}
