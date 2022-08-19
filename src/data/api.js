const api = {
    ROOT: process.env.VUE_APP_API,

    LOGIN: '/login',
    LOGOUT: '/logout',

    USER: '/user',
    USER_PHONE: '/user/phone',

    LAB_SUB_CATEGORY: '/lab/category/sub',
    LAB_PRODUCT: '/lab/product',
    LAB_FUNC: '/lab/func',

    SPACE_INFO: '/space/info',
    SPACE_RESERVE: '/space/reserve',

    COUNSEL: '/counsel',
    COUNSEL_SAMPLE: '/counsel/sample',

    LOG_VISIT: '/log/visit',
    LOG_ESTIMATE: '/log/estimate',
    LOG_COUNSEL: '/log/counsel',
    LOG_SAMPLE: '/log/sample'
}

export default api