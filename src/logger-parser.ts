
import Parser from "./base-parser"
import { LogParsedDataDto } from "./dto/log-parser-input.dto";
import { LogLevelType } from "./enum/log-level-type.enum";
import { Config } from "./interface/config.interface";
import { TransformerInterface } from "./interface/transformer.interface";


export default class LogParser extends Parser<LogParsedDataDto> {
    // depend on interface of Transformer not Transformer class
    transformer!: TransformerInterface
    config!: Config
    //use setter and getter
    constructor(transformer: TransformerInterface, config: Config) {
        super();
        this.transformer = transformer
        this.config = config
    }
    data!: Array<LogParsedDataDto>
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