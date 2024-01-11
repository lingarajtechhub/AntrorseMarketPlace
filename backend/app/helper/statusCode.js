module.exports.ErrorCode= Object.freeze({
    'INTERNAL_ERROR':500,
    'ALREADY_EXIST':409,
    'NOT_FOUND':404,
    'INVALID_OTP':400,
    'OTP_EXPIRED':403,
    'INVALID_CREDENTIAL':401,
    'WENT_WRONG':501,
    'REQUEST_FAILED':402,
    'BAD_REQUEST':400
    
})
module.exports.SuccessCode=Object.freeze({
    'SUCCESS':200,
    'OTP_VERIFIED':202,
    'SUCCESSFULLY_CREATED':201
})