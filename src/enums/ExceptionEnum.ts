export enum ExceptionEnum{
    PAGE_NOT_ACCESS=403,
    PAGE_NOT_FOUND=404,
    SERVER_ERROR=500,
    NETWORK_ERROR=10000,
    PAGE_NOT_DATA=10100,

}

export enum ErrorTypeEnum{
    VUE='vue',
    SCRIPT='script',
    RESOURCE='resource',
    AJAX='ajax',
    PROMISE='promise'
}