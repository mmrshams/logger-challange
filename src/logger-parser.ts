
import Parser from "./base-parser"
import { LogParsedDataDto } from "./dto/log-parser-input.dto";
import { LogLevelType } from "./enum/log-level-type.enum";
import { Config } from "./interface/config.interface";
import { TransformerInterface } from "./interface/transformer.interface";


export default class LogParser extends Parser<LogParsedDataDto> {
    transformer!: TransformerInterface
    config!: Config
    constructor(transformer: TransformerInterface, config: Config) {
        super();
        this.transformer = transformer
        this.config = config
    }
    data!: Array<LogParsedDataDto>

    /**
     * Parse and transform logs string from fs file system with
     * inserted address from command line on previous step
     * and transform it to the specific output format
     * @param {string} string 
     * @param {*} level  
     * @returns {LogParsedDataDto[]}  
     */
    parse(string: string, level: LogLevelType): Array<LogParsedDataDto> {
        if (!string || !level) throw new Error('please enter valid inputs')
        const result: Array<LogParsedDataDto> = []
        const logs = this.transformer.split(string, '\n')
        logs.forEach(log => {
            const logParts = log.split(' - ')

            if (logParts.length > 2 && level === logParts[1]) {
                result.push(
                    {
                        timestamp: new Date(logParts[0]).getTime(),
                        loglevel: logParts[1] as LogLevelType,
                        ...this.transformer.pick(JSON.parse(logParts[2]), this.config.inPutKeys)
                    }
                )
            }

        })
        return result
    }
}