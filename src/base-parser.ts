import { ParserInterface } from "./interface/parser.interface";

export default class Parser<T> implements ParserInterface<T> {
    data!: Array<T>;
    parser(string: string): Array<T> {
        return this.data
    }
}