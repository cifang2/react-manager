//类型文件
declare type Recordable<T = any> = Record<string, any>;
//定义了一个泛型

declare interface ViteEnv {
    VITE_PORT: number;
    VITE_USE_MOCK: boolean;
    VITE_USE_PROXY: boolean;
    VITE_USE_API: boolean;
    VITE_USE_CDN: boolean;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}