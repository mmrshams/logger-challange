export interface ParserInterface<T> {
    data: Array<T>;
    parser(string: string): Array<T>;
}
