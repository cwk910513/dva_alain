import request from '../utils/request';

const CLASSIFY_API = `/src/assets/json/classify.json`;

// 获取home所需的数据
export async function getClassifyDataApi() {
    return request(`${CLASSIFY_API}`);
}