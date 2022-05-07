const ErrorUtil = {}

ErrorUtil.notImplemented = () => {
    console.log("The function is not implemented!")
    debugger
}

ErrorUtil.assert = (command) => {
    if(!command) debugger
}

export default ErrorUtil