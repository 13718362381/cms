/**
 * 环境配置
 */
const env = import.meta.env.MODE || 'dev';
const EnvConfig = {
    dev: {
        baseApi: '/'
    },
    test: {
        baseApi: 'test.xxx.com/api'
    },
    prep: {
        baseApi: 'prep.xxx.com/api'
    },
    pro: {
        baseApi: 'www.baidu.com/api'
    }
}
export default {
    env,
    ...EnvConfig[env]
}