import request from '@/utils/request';

export async function getLunboPicture(params) {
    return request('http://localhost:8082/demo/admin/getlunbo', {
        params,
    });
}

export async function removeLunboPicture(params) {
    return request('http://localhost:8082/demo/admin/removelunbo', {
        params,
    });
}

export async function addLunboPicture(params) {
    return request('http://localhost:8082/demo/admin/addlunbo', {
      method: 'POST',
      data: params,
    });
}
