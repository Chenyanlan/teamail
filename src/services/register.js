import request from '@/utils/request';

export async function AccountRegister(params) {
    return request('http://localhost:8082/demo/admin/adduser', {
        method: 'POST',
        data: params,
    });
}
