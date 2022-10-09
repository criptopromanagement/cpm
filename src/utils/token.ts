export const getToken = (): string | null =>{
    return window.localStorage.getItem('accessToken');
}