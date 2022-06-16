class ErrorEventBus {
    listen(cb) {
        this.cb = cb
    }
    errorResult(e) {
        this.cb(e)
    }
}

Object.freeze(ErrorEventBus)
export default ErrorEventBus