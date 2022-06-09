import {getRequest, getRequestWithParams, putRequest} from "@/api/request";

//获取用户接口
export const getUserInfo=(params)=>getRequestWithParams('url',params);

