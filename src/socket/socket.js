import socket from 'socket.io-client'

class Socket {
    constructor(url, getToken) {
        // getToken => callback
        this.io = socket(url, {
            auth: (cb) => cb({ token: getToken() })
        })
        this.io.on('Connection error', (error) => console.log('Socket error!', error.message))
    }

    onSync(e, callback) {
        if(!this.io.connected) this.io.connect()
        this.io.on(e, (message) => callback(message))
        return () => this.io.off(e)
    }
}

export default Socket