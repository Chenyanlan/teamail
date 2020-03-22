import request from '@/utils/request';

export async function getCartList(params) {
    return request('http://localhost:8082/demo/admin/getcartbyuserid', {
        params,
    });
}

export async function plusNum(params) {
    return request('http://localhost:8082/demo/admin/plusnum', {
        params,
    });
}

export async function minusNum(params) {
    return request('http://localhost:8082/demo/admin/minusnum', {
        params,
    });
}

export async function removeCart(params) {
    return request('http://localhost:8082/demo/admin/removecart', {
        params,
    });
}

export async function getAllMoney(params) {
    return request('http://localhost:8082/demo/admin/getallmoney', {
        params,
    });
}

export async function getDisplayPicture(params) {
    return request('http://localhost:8082/demo/admin/getdisplay', {
        params,
    });
}

export async function getDetailPicture(params) {
    return request('http://localhost:8082/demo/admin/getdetail', {
        params,
    });
}

export async function getGoodsDetailById(params) {
    return request('http://localhost:8082/demo/admin/getgoodsbyid', {
        params,
    });
}

export async function getCartByIds(params) {
    return request('http://localhost:8082/demo/admin/getcartbyids', {
        params,
    });
}

export async function addCart(params) {
    return request('http://localhost:8082/demo/admin/addcart', {
      method: 'POST',
      data: params,
    });
}

export async function removePicture(params) {
    return request('http://localhost:8082/demo/admin/removegoodspicture', {
        params,
    });
}

export async function addPicture(params) {
    return request('http://localhost:8082/demo/admin/addgoodspicture', {
      method: 'POST',
      data: params,
    });
}