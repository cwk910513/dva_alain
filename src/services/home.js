import request from '../utils/request';

const HOME_API = `/src/assets/json/home.json`;

// 获取home所需的数据
export async function getHomeDataApi() {
    return request(`${HOME_API}`);
}