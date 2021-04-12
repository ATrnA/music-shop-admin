import request from './request.js'


export function postLogin(data) {
  // const query = qs.stringify(reqBody);
  return request({
    method: "post",
    url: '/adminLogin',
    data
    // url: `/adminLogin?${query}`
  })
}

export function postRegister(data) {
  return request({
    method:"post",
    url: `/adminRegistered`,
    data
  })
}