
import { LogLevelType } from "./enum/log-level-type.enum";
import { Config } from "./interface/config.interface";
import Transformer from "./lib/transformer";
import LogParser from "./logger-parser";


describe('LogParser', () => {
    let testConfig: Config;
    let successObject: Array<Record<string, unknown>>
    beforeAll(() => {
        testConfig = {
            inPutKeys: ['transactionId', 'err']
        }
    })
    beforeEach(() => {
        successObject = [
            {
                "timestamp": 1628475171259,
                "loglevel": "error",
                "transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
                "err": "Not found"
            }
        ]
    })

    describe('parse', () => {

        it('Should return error  empty string or loglevel', () => {
            const string = ''
            const loglevel = null
            const logParser = new LogParser(new Transformer(), testConfig)
            expect(() => logParser.parse(string, loglevel as unknown as LogLevelType))
                .toThrowError(Error);
        });

        it('Should return Array of objects when string loglevel are valid', () => {
            const string = '2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'
            const loglevel = LogLevelType.Error
            const logParser = new LogParser(new Transformer(), testConfig)
            expect( logParser.parse(string, loglevel)).toEqual(successObject);
        });
    });
});
