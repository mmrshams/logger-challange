
import { LogLevelType } from "../enum/log-level-type.enum";
import { baseParserInputDto } from "./base-parse-input.dto";

interface logData {
    transactionId: string,
    details: string,
    err: string,
}

export interface LogParserInputDto extends baseParserInputDto {
    loglevel: LogLevelType,
    timestamp: number,
    data?: Partial<logData>
}