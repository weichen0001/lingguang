import { httpRequest } from '../../utils/request'
const baseUrl = require('../base').allBaseUrl.GDEnvs.host
 
export default class indexApi {
  /**
   * @description: post获取用户信息
   * @return {*}
   */
  static getUserInfo = (data: UserInfo) =>
    httpRequest.post<ReturnUserInfo>(
      baseUrl + '/mock/getUserInfo',
      data
    )
 
  /**
   * @description: get请求
   * @return {*}
   */
  static getVillageList = () =>
    httpRequest.get<VillageList>(
      baseUrl + '/mock/villageList',
    )

    
  static getVillageList = () =>
    httpRequest.get<VillageList>(
      baseUrl + '/mock/villageList',
  )

  static getIndexList = () =>
  httpRequest.get<IndexList>(
    baseUrl + '/api/index/test',
  )

}