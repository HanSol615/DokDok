export const getToken = () => {
    const token = localStorage.getItem('accessToken');
    console.log(token)
    return token;
};

export const removeToken = () => {
    localStorage.removeItem('token');
}