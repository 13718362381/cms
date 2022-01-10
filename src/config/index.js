/**
 * 环境配置
 */
const env = import.meta.env.MODE || 'dev';
const EnvConfig = {
    dev: {
        baseApi: 'http://localhost:8080'
    },
    test: {
        baseApi: 'http://test.xxx.com/api'
    },
    prep: {
        baseApi: 'http://prep.xxx.com/api'
    },
    pro: {
        baseApi: 'http://www.baidu.com/api'
    }
}
export default {
    env,
    // localStorage 空间名
    namespace: 'lcms',
    ...EnvConfig[env]
}