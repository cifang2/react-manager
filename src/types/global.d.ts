//类型文件
//d.ts表示声明文件，用于定义类型，
//在编译的时候就会被使用，不会生成JavaScript代码
//globe表示全局，不需要import就可以使用，这是Typescript的内置行为，不需要配置
//global.d.ts是一个特殊的命名约定

declare type Recordable<T = any> = Record<string, any>;
//T=any，这里T是泛型参数，默认值为any
//Record<string,any>是一个类型别名，是typescript内置的工具类型
//以后使用的时候，就可以在类型参数使用任何类型，包括自定义的

declare interface ViteEnv {
    VITE_PORT: number;
    VITE_USE_MOCK: boolean;
    VITE_USE_PROXY: boolean;
    VITE_USE_API: boolean;
    VITE_USE_CDN: boolean;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    //这里是定义可能的环境变量，声明的时候不一定要用所有的变量
}
//使用interface，因为明确是一个对象类型，或者说是一个接口

//Menu全局定义
declare namespace Menu {
    interface MenuOptions {
        key?: string;
        label?: string;
        path?: string;
        title?: string;
        icon?: string;
        children?: MenuOptions[];
    }
}