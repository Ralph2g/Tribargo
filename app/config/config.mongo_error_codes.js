'use strict'

/**
 * @author          Diaz Medina Jesus Kaimorts
 * @version         1.1
 * @description:    En este script se encuentran los códigos de errores
 *                  que MongoDB proporciona.
 *                  Cada uno de ellos utiliza un diccionario para que se puedan
 *                  establecer una clave-valor y hacer referencia a ellos a 
 *                  partir del nombre de respuesta asociado.
 *@summary:         https://github.com/mongodb/mongo/blob/master/src/mongo/base/error_codes.err        
 **/

const common_error = {
    "OK": 0,
    "InternalError": 1,
    "BadValue": 2,
    "OBSOLETE_DuplicateKey": 3,
    "NoSuchKey": 4,
    "GraphContainsCycle": 5,
    "HostUnreachable": 6,
    "HostNotFound": 7,
    "UnknownError": 8,
    "FailedToParse": 9,
    "CannotMutateObject": 10,
    "UserNotFound": 11,
    "UnsupportedFormat": 12,
    "Unauthorized": 13,
    "TypeMismatch": 14,
    "Overflow": 15,
    "InvalidLength": 16,
    "ProtocolError": 17,
    "AuthenticationFailed": 18,
    "CannotReuseObject": 19,
    "IllegalOperation": 20,
    "EmptyArrayOperation": 21,
    "InvalidBSON": 22,
    "AlreadyInitialized": 23,
    "LockTimeout": 24,
    "RemoteValidationError": 25,
    "NamespaceNotFound": 26,
    "IndexNotFound": 27,
    "PathNotViable": 28,
    "NonExistentPath": 29,
    "InvalidPath": 30,
    "RoleNotFound": 31,
    "RolesNotRelated": 32,
    "PrivilegeNotFound": 33,
    "CannotBackfillArray": 34,
    "UserModificationFailed": 35,
    "RemoteChangeDetected": 36,
    "FileRenameFailed": 37,
    "FileNotOpen": 38,
    "FileStreamFailed": 39,
    "ConflictingUpdateOperators": 40,
    "FileAlreadyOpen": 41,
    "LogWriteFailed": 42,
    "CursorNotFound": 43,
    "UserDataInconsistent": 45,
    "LockBusy": 46,
    "NoMatchingDocument": 47,
    "NamespaceExists": 48,
    "InvalidRoleModification": 49,
    "MaxTimeMSExpired": 50,
    "ManualInterventionRequired": 51,
    "DollarPrefixedFieldName": 52,
    "InvalidIdField": 53,
    "NotSingleValueField": 54,
    "InvalidDBRef": 55,
    "EmptyFieldName": 56,
    "DottedFieldName": 57,
    "RoleModificationFailed": 58,
    "CommandNotFound": 59,
    "OBSOLETE_DatabaseNotFound": 60,
    "ShardKeyNotFound": 61,
    "OplogOperationUnsupported": 62,
    "StaleShardVersion": 63,
    "WriteConcernFailed": 64,
    "MultipleErrorsOccurred": 65,
    "ImmutableField": 66,
    "CannotCreateIndex": 67,
    "IndexAlreadyExists": 68,
    "AuthSchemaIncompatible": 69,
    "ShardNotFound": 70,
    "ReplicaSetNotFound": 71,
    "InvalidOptions": 72,
    "InvalidNamespace": 73,
    "NodeNotFound": 74,
    "WriteConcernLegacyOK": 75,
    "NoReplicationEnabled": 76,
    "OperationIncomplete": 77,
    "CommandResultSchemaViolation": 78,
    "UnknownReplWriteConcern": 79,
    "RoleDataInconsistent": 80,
    "NoMatchParseContext": 81,
    "NoProgressMade": 82,
    "RemoteResultsUnavailable": 83,
    "DuplicateKeyValue": 84,
    "IndexOptionsConflict": 85,
    "IndexKeySpecsConflict": 86,
    "CannotSplit": 87,
    "SplitFailed_OBSOLETE": 88,
    "NetworkTimeout": 89,
    "CallbackCanceled": 90,
    "ShutdownInProgress": 91,
    "SecondaryAheadOfPrimary": 92,
    "InvalidReplicaSetConfig": 93,
    "NotYetInitialized": 94,
    "NotSecondary": 95,
    "OperationFailed": 96,
    "NoProjectionFound": 97,
    "DBPathInUse": 98,
    "UnsatisfiableWriteConcern": 100
};

/**
 * @summary:    Solamente para compatibilidad
 */
const nonSequential_error = {
    "SocketException": 9001,
    "OBSOLETE_RecvStaleConfig": 9996,
    "NotMaster": 10107,
    "CannotGrowDocumentInCappedNamespace": 10003,
    "BSONObjectTooLarge": 10334,
    "DuplicateKey": 11000,
    "InterruptedAtShutdown": 11600,
    "Interrupted": 11601,
    "InterruptedDueToStepDown": 11602,
    "NOT_MASTER_NO_SLAVE_OK": 13435,
    "NOT_MASTER_OR_SECONDARY": 13436,
    "OutOfDiskSpace": 14031,
    "CANT_OPEN_DB_IN_READ_LOCK": 15927
};

module.exports = {
    common_error,
    nonSequential_error
}