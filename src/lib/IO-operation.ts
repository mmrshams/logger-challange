
import { promises as fs } from 'fs';

export default class IoOperation {
    async read(fileAddress: string, format: BufferEncoding): Promise<string> {
        return fs.readFile(fileAddress, { encoding: format });
    }

    async write<T>(
        fileAddress: string,
        data: T
    ): Promise<Boolean> {
        await fs.writeFile(fileAddress || './errors.json', JSON.stringify(data))
        return true
    }
}