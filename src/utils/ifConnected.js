const checkifConnected = () => {
    let token = localStorage.getItem("token")
    if (!token) {
        return false;
    }
    token = JSON.parse(token);
    return !!token; //make it boolean

};
export default checkifConnected;