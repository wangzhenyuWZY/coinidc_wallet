import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request(
    api.Login,
    'post',
    data
  )
}

// 查询猫头鹰
export function queryMyOwlList(data) {
  return request(
    api.queryMyOwlList,
    'get',
    data
  )
}

// 一键喂养
export function feedMyOwls(params) {
  return request(
    api.feedMyOwls,
    'post',
    params
  )
}

// 我的好友
export function queryMyFriends(params) {
  return request(
    api.queryMyFriends,
    'get',
    params
  )
}

// 猫头鹰首页数据
export function getIndexInfo(params) {
  return request(
    api.getIndexInfo,
    'get',
    params
  )
}

// 猫头鹰商店
export function queryPalaceOwls(params) {
  return request(
    api.queryPalaceOwls,
    'get',
    params
  )
}