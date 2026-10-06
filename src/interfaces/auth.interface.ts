export interface LoginResponse {
    access_token: string;
}

export interface ProfileResponse {
    email: string;
    name: string;
    authErrorMessage?: string;
}