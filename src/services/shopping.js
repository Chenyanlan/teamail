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
