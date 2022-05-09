const ErrorUtil = {}

ErrorUtil.notImplemented = () => {
    console.log("The function is not implemented!")
    debugger
}

ErrorUtil.assert = (command) => {
    if(!command) debugger
}

ErrorUtil.invalidParameter = (param) => {
    if(param == null) debugger
}

export default ErrorUtil