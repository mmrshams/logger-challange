export interface TransformerInterface {
    split(string: string, separator: string): Array<string>;
    pick<O extends object, K extends keyof O>(object: O, keys: Array<K>): Pick<O, K>
}
