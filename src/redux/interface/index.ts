export interface GlobalState {
    token: string;
}

export interface AuthState {
    authRouter: string[];
    authBotton: {
        [propName: string]: any;
    };
}