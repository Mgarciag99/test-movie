export interface ResponseToken {
    request_token: string;
}

export interface PayloadValidateLogin{
    request_token: string;
    username?: string | null | undefined;
    password?: string | null | undefined;
}

export interface ResponseValidateLogin{
    username: string,
    password: string,
    request_token: string
}

export interface PayloadToken {
    request_token: string;
}

export interface ResponseCreateSession {
    success:    boolean;
    session_id: string;
}