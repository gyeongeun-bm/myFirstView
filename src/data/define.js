const define = {
    PATH_DATA: process.env.VUE_APP_DATA,
    SOURCE_DATA: process.env.VUE_APP_SOURCE,

    HTTP_SUCCESS: 'success',
    HTTP_FAILED: 'fail',

    HTTP_SUCCESS_200: 200,
    HTTP_SUCCESS_201: 201,
    HTTP_SUCCESS_202: 202,

    PATH_ESTIMATE: '/estimate',
    PATH_ESTIMATE_PRODUCT: '/estimate/product',
    PATH_ESTIMATE_FUNC: '/estimate/func',
    PATH_ESTIMATE_CONTAINER: '/estimate/container',
    PATH_ESTIMATE_VOLUME: '/estimate/volume',
    PATH_ESTIMATE_COMPLETE: '/estimate/comp',

    PATH_COUNSEL: '/counsel',
    PATH_COUNSEL_CHANNEL: '/counsel/channel',
    PATH_COUNSEL_EXPERIENCE: '/counsel/experience',
    PATH_COUNSEL_QUANTITY: '/counsel/quantity',
    PATH_COUNSEL_BUDGET: '/counsel/budget',
    PATH_COUNSEL_SALE: '/counsel/sale',
    PATH_COUNSEL_SELECT: '/counsel/select',
    PATH_COUNSEL_COMP: '/counsel/comp',

    PATH_SAMPLE: '/sample',
    PATH_SAMPLE_COMP: '/sample/comp',

    PATH_ME_COUNSEL: '/me/counsel',
    PATH_ME_SAMPLE: '/me/sample',
    PATH_ME_INFO: '/me/info',

    PATH_LOGIN: '/login',

    JOB_CREATOR: 1,
    JOB_SPECIALIST: 2,
    JOB_BUSINESS: 3,
    JOB_GENERAL: 4,

    LIMIT_WORD: 1024,

    LIST_RESET: 10,
    LIST_EDIT: 11,
    LIST_DEL: 12,
    LIST_VIEW: 13,
    LIST_EDIT_CLOSE: 14,
    LIST_SEND_DATA: 15,
    VIEW_BACK: 16,

    CB_WORK_LIST_INFO: 30,
    CB_WORK_LIST_WRITE: 31,
    CB_WORK_LIST_EPISODE: 32,

    POP_CANCEL: 50,
    POP_CONFIRM: 51,

    CK_AUTO_LOGIN: 60,
    CK_IS_LOGIN: 61,
    CK_TOKEN: 62,
    CK_NAME: 63,
    CK_EMAIL: 64,
    CK_ESTIMATE: 65,
    CK_COUNSEL: 66,
    CK_CALL: 67,

    DIALOG_COMMON: 70,
    DIALOG_QUESTION: 71,
    DIALOG_WORK_EPISODE: 72,
    DIALOG_WORK_NOTICE: 73,
    DIALOG_TERMS_USE: 74,
    DIALOG_ADD_AUTH_INFO: 75,
    DIALOG_INPUT: 76,

    EVT_POPUP_OPEN: 100,
    EVT_POPUP_CLOSE: 101,

    HTTP_WARNING_NOT_AUTH: 'is_not_auth',
    HTTP_WARNING_INVALID_CHECKSUM: 'invalid_checksum',
    HTTP_WARNING_INVALID_URL: 'invalid_url',
    HTTP_WARNING_INVALID_ID: 'invalid_id',
    HTTP_WARNING_EMPTY_USER_INFO: 'is_empty_user_info',
    HTTP_WARNING_WRONG_ID: 'wrong_id',
    HTTP_WARNING_WRONG_PASSWORD: 'wrong_password',
    HTTP_WARNING_EMPTY_PARAM: 'is_empty_param',


}

export default define