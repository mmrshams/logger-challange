
import Parser from "./base-parser"
import { LogParserInputDto } from "./dto/log-parser-input.dto";
import { LogLevelType } from "./enum/log-level-type.enum";
import { Config } from "./interface/config.interface";
import Transformer from "./lib/transformer";

export default class LogParser extends Parser<LogParserInputDto> {
    // depend on interface of Transformer not Transformer class
    transformer!: Transformer
    config!: Config
    //use setter and getter
    constructor(transformer: Transformer, config: Config) {
        super();
        this.transformer = transformer
        this.config = config
    }
    data!: Array<LogParserInputDto>
    parse(string: string, level: LogLevelType): Array<LogParserInputDto> {
        const result: Array<LogParserInputDto> = []
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