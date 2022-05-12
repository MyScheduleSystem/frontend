class Storage {
    constructor(user) {
        this.user = user
    }

    save(token) {
        localStorage.setItem(this.user, token)
    }

    getToken() {
        return localStorage.getItem(this.user)
    }

    clear() {
        localStorage.clear()
    }
}

export default Storage