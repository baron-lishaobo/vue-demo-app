import { Recordable } from "./global";

export type ErrorMessageMode='none' | 'modal' | 'message' | undefined;

export interface RequestOptions{
    joinParamsToUrl?:boolean;
    formatDate?:boolean;
    isTransformResponse?:boolean;
    isReturnNativeResponse?:boolean;
    joinPrefix?:boolean;
    apiUrl?:string;
    urlPrefix?:string;
    errorMessageMode?:ErrorMessageMode;
    joinTime?:boolean;
    ignoreCancelToken?:boolean;
    withToken?:boolean;
}

export interface Result<T=any>{
    code:number;
    type:'success' | 'error' | 'warning';
    message:string;
    result:T;
}

export interface UploadFileParams{
    data?:Recordable;
    name?:string;
    file:File | Blob;
    filename?:string;
    [key:string]:any;
}