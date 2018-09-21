import request from '../utils/request';
// import qs from 'qs';

const LOGIN_API = `/src/assets/json/login.json`;

// 登录
export async function getLoginApi() {
    return request(`${LOGIN_API}`);
}