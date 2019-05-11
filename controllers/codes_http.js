'use strict'

/* |============= Codigos de respuesta de HTTP =============| */
const info_answer_codes = {
    'Continue': 100,
    'SwitchingProtocols': 101,
    'Processing': 102,
    'Checkpoint': 103
};
const accept_codes = {
    'OK': 200,
    'Created': 201,
    'Accepted': 202,
    'NAI': 203, //Non-Authoritative Information (desde HTTP/1.1)
    'NoContent': 204,
    'ResetContent': 205,
    'PartialContent': 206,
    'MultiStatus': 207,
    'AlreadyReported': 208
};
const redirection_codes = {
    'MultipleChoices': 300,
    'MovedPermanently': 301,
    'Found': 302,
    'SeeOther': 303,
    'NotModified': 304,
    'UseProxy': 305,
    'SwitchProxy': 306,
    'TemporaryRedirect': 307,
    'PermanentRedirect': 308
};
const client_error_codes = {
    'BadRequest': 400,
    'Unauthorized': 401,
    'PaymentRequired': 402,
    'Forbidden': 403,
    'NotFound': 404,
    'MNA': 405, // Method Not Allowed
    'NotAcceptable': 406,
    'PAR': 407, // Proxy Authenitcation Required
    'RequestTimeout': 408,
    'Conflict': 409,
    'Gone': 410,
    'LengthRequired': 411,
    'PreconditionFailed': 412,
    'RETL': 413, // Request Entity Too Large
    'RUTL': 414, // Rquest URI Too Long
    'UMT': 415, // Unsupported Media Type
    'RRNS': 416, // Request Range Not Satisfiable
    'ExpectationFailed': 417,
    'UnprocessableEntity': 422,
    'Locked': 423,
    'FaildDependency': 424,
    'Unassigned': 425,
    'UpgradeRequired': 426,
    'PreconditionRequired': 428,
    'TMR': 429, // Too Many Request
    'RHFTL': 431, // Request Header Fields Too Large
    '449': 449,
    'UFLR': 451 // Unavailable for Legal Reasons
};
const server_error_codes = {
    'ISE': 500, // Internal Server Error
    'NotImplemented': 501,
    'BadGateway': 502,
    'ServiceUnavailable': 503,
    'GatewayTimeout': 504,
    'HTTP_VNS': 505, // HTTP Version Not Supported
    'VAN': 506, // Variant Also Negotiates
    'InsufficientStorage': 507,
    'LoopDetected': 508,
    'BLE': 509, // Bandwidth Limit Exceeded
    'NotExtended': 510,
    'NAR': 511, // Network Authentication Required
    'NotUpdated': 512,
    'VersionMismatch': 521
};

module.exports = {
    info_answer_codes,
    accept_codes,
    redirection_codes,
    client_error_codes,
    server_error_codes
}