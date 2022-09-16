export interface IPageUrl{
    Login:string;
    Home:string;
    ErrorPage:string;
    ErrorLogPage:string;
}

export const PageUrl:IPageUrl= {
    Login:'/login',
    Home:'/dashboard',
    ErrorPage:'/exception',
    ErrorLogPage:'/error-log/list'
}