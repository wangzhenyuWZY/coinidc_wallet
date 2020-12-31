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

// 收益列表
export function queryIncomeList(params) {
  return request(
    api.queryIncomeList+'/'+params.pageNum,
    'get',
    params
  )
}

// 公告列表
export function queryNoticeList(params) {
  return request(
    api.queryNoticeList+'/'+params.pageNum,
    'get',
    params
  )
}

// 公告详情
export function readNoticeContent(params) {
  return request(
    api.readNoticeContent,
    'get',
    params
  )
}

// 公告详情
export function createBuyOwlOrder(params) {
  return request(
    api.createBuyOwlOrder,
    'post',
    params
  )
}

// 玩法说明
export function getPlayWay(params) {
  return request(
    api.getPlayWay,
    'get',
    params
  )
}