
import { config } from "./config"
import LogParser from "./logger-parser"
import IoOperation from "./ lib/IO-operation"
import Transformer, { createTransformerInstance } from "./ lib/transformer"

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const bootstrap = async () => {
    const ioOperation = new IoOperation()
    const transformer = createTransformerInstance(Transformer)
    const logParser = new LogParser(transformer, config)

    const { input, output, level } = argv

    const logString = await ioOperation.read(input, 'utf-8')
    const result = logParser.parse(logString, level)
    await ioOperation.write(output, result)

}

bootstrap().then(()=>{
    console.log('>> Done!')
});