const ErrorUtil = {}

ErrorUtil.notImplemented = () => {
    console.log("The function is not implemented!")
    debugger
}

ErrorUtil.assert = (command) => {
    if(!command) {
        console.log("Assert fail!")
        debugger
    }
}

ErrorUtil.invalidParameter = (param) => {
    if(param == null) {
        console.log("Invalid parameter!")
        debugger
    }
}

ErrorUtil.typeCheck = (param, type) => {
    if(typeof param !== type) debugger
}

Object.freeze(ErrorUtil)
export default ErrorUtil