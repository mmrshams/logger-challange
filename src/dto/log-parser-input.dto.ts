
import { LogLevelType } from "../enum/log-level-type.enum";
import { BaseParsedDataDto } from "./base-parse-input.dto";

interface logData {
    transactionId: string,
    details: string,
    err: string,
}

export interface LogParsedDataDto extends BaseParsedDataDto {
    loglevel: LogLevelType,
    timestamp: number,
    data?: Partial<logData>
}