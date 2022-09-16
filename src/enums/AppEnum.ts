export const SIDE_BAR_MINI_WIDTH=48;
export const SIDE_BAR_SHOW_TIT_MINI_WIDTH=80;

export enum ContentEnum{
    FULL='auto',
    FIXED='fixed'
}

export enum ThemeEumn{
    DARL='dark',
    LIGHT='light'
}

export enum  SettingButtonPositionEnum{
    AUTO='auto',
    HEADER='header',
    FIXED='fixed'
}

export enum SessionTimeoutProcessingEnum{
    ROUTE_JUMP,
    PAGE_CONVERAGE
}

export enum PermissionModeEnum{
    ROLE='role',
    BACK='back',
    ROUTE_MAPPING='route_mapping'
}

export enum RouterTransitionEnum{
    ZOOM_FADE='zoom-fade',
    ZOOM_OUT='zoom-out',
    FADE_SLIDE='fade-slide',
    FADE='fade',
    FADE_BOTTOM='fade-bottom',
    FADE_SCALE='fade-scale'
}