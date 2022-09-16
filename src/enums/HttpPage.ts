export enum ResultEnum{
    SUCCESS=0,
    ERROR=-1,
    TIMEOUT=408,
    TYPE='success'
}

export enum RequestEnum{
    GET='Get',
    POST='Post',
    PUT='Put',
    DELETE='Delete'
}

export enum ContentTypeEnum{
    JSON='application/json;charset=UTF-8',
    FORM_URLENCODED='application/x-www-form-urlencoded;charset=UTF-8',
    FORM_DATA='mutiple/form-data;charset=UTF-8'
}