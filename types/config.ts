import { MenuTypeEnum,MenuModeEnum,TriggerEnum,MixSidebarTriggerEnum } from "@/enums/MenuEnum";
import { ContentEnum,PermissionModeEnum,ThemeEumn,RouterTransitionEnum,SettingButtonPositionEnum,SessionTimeoutProcessingEnum } from "@/enums/AppEnum";
import { CacheTypeEnum } from "@/enums/CacheEnum";
import { ContentTypeEnum } from "../enums/HttpPage";

export type LocaleType='zh_CN'|'en';

export interface MenuSetting{
    bgColor:string;
    fixed:boolean;
    collapsed:boolean;
    canDrag:boolean;
    show:boolean;
    hidden:boolean;
    split:boolean;
    menuWidth:number;
    mode:MenuModeEnum;
    type:MenuTypeEnum;
    thme:ThemeEumn;
    topMenuAlign:'start' | 'center' | 'end';
    trigger:TriggerEnum;
    accordion:boolean;
    closMixSidebarOnChange:boolean;
    mixSideTrigger:MixSidebarTriggerEnum;
    mixSideFixed:boolean;
}

export interface HeaderSetting{
 bgColor:string;
 fixed:boolean;
 show:boolean;
 theme:ThemeEumn;
 showFullScreen:boolean;
 useLockPage:boolean;
 showDoc:boolean;
 showNotice:boolean;
 showSearch:boolean;
}

export interface MultiTabSetting{
    cache:boolean;
    show:boolean;
    showQuick:boolean;
    canDrag:boolean;
    showRedo:boolean;
    showFold:boolean;
}


export interface LocaleSetting{
    showPicker:boolean;
    locale:LocaleType;
    fallback:LocaleType;
    availableLocales:LocaleType[];
}

export interface TransitionSetting{
    enable:boolean;
    basicTransition:RouterTransitionEnum;
    openPageLoading:boolean;
    openNProgress:boolean;
}

export interface ProjectSetting{
    permissionCacheType:CacheTypeEnum;
    showSettingButton:boolean;
    showDarkModeToggle:boolean;
    settingButtonPosition:SettingButtonPositionEnum;
    permissionMode:PermissionModeEnum;
    sessionTimeoutProcessing:SessionTimeoutProcessingEnum;
    grayMode:boolean;
    colorWeak:boolean;
    themeColor:string;
    fullContent:boolean
    contentMode:ContentEnum;
    showLogo:boolean;
    showFooter:boolean;
    headerSetting:HeaderSetting;
    menuSetting:MenuSetting;
    multipleTabsSetting:MultiTabSetting;
    transitionSetting:TransitionSetting;
    openKeepAlive:boolean;
    lockTime:number;
    showBreadCrumb:boolean;
    showBreadCrumbIcon:boolean;
    useErrorHandle:boolean;
    useOpenBackTop:boolean;
    canEmbedIFamePage:boolean;
    closeMessageOnSwitch:boolean;
    removeAllHttpPending:boolean;

}

export interface GlobConfig{
    title:string;
    apiUrl:string;
    uploadUrl?:string;
    urlPrefix?:string;
    shortName:string;
}

export interface GlobEnConfig{
    VITE_GLOB_APP_TITLE:string;
    VITE_GLOB_API_URL:string;
    VITE_GLOB_API_URL_PREFIX?:string;
    VITE_GLOB_APP_SHORT_NAME:string;
    VITE_GLOB_UPLOAD_URL_URL?:string;
}