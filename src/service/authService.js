export default class AuthService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }

    // async signup(username, password, name, email) {

    // }

    async login(username, password) {
        const user = { username, password };
        return this.http.getAxios().post("/user/login", {
            user,
        });
    }
}
