export enum SizeEnum{
    XS='xs',
    SM='sm',
    MD='md',
    LG='lg',
    XL='xl',
    XXL='xxl'
}

export enum ScreenEnum{
    XS=480,
    SM=576,
    MD=768,
    LG=992,
    XL=1200,
    XXL=1600
}

export const ScreenMap=(()=>{
    const map=new Map<SizeEnum,ScreenEnum>();
    map.set(SizeEnum.SM,ScreenEnum.SM);
    map.set(SizeEnum.XS,ScreenEnum.XS);
    map.set(SizeEnum.MD,ScreenEnum.MD);
    map.set(SizeEnum.LG,ScreenEnum.LG);
    map.set(SizeEnum.XL,ScreenEnum.XL);
    map.set(SizeEnum.XXL,ScreenEnum.XXL);
    return map;
})()