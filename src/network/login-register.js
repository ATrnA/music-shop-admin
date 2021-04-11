import request from './request.js'
import qs from "qs";


export function postLogin(reqBody) {
  const query = qs.stringify(reqBody);
  return request({
    method:"post",
    url: `/adminLogin?${query}`
  })
}

export function postRegister(reqBody) {
  const query = qs.stringify(reqBody);
  return request({
    method:"post",
    url: `/adminRegistered?${query}`
  })
}