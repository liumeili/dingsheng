import AxiosBaseService from '../AxiosBaseService.js'

class iMService extends AxiosBaseService {
    // 登录
    login(params) {
        return this.request('/api/login/index', 'post', params);
    }

    // 注册
    doregiste(params) {
        return this.request('/api/registe/doregiste', 'post', params);
    }

    
}

export default iMService