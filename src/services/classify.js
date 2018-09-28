import request from '../utils/request';

const CLASSIFY_API = `/src/assets/json/classify.json`;
const CLASSIFY_DETAILS_API = `/src/assets/json/classify_no1.json`;
const CLASSIFY_DETAILS_API2 = `/src/assets/json/classify_no2.json`;

// 获取数据
export async function getClassifyDataApi() {
    return request(`${CLASSIFY_API}`);
}

// 通过classify名字获取分类详细数据
export async function getDetailsByClassifyName(num) {
    let apiUrl = num % 2 == 0 ? `${CLASSIFY_DETAILS_API}` : `${CLASSIFY_DETAILS_API2}`;
    return request(apiUrl);
}