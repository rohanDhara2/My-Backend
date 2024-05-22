class apiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        stack = "",
        errors = []
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null //study about this (H.W)
        this.message = message
        this.success = false
        this.errors = errors

        if(stack)
            this.stack = stack
        else
            Error.captureStackTrace(this,this.constructor)
    }
}

export {apiError}