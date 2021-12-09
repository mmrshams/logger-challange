import { TransformerInterface } from "../interface/transformer.interface";

export default class Transformer implements TransformerInterface {

    split(string: string, separator: string): Array<string> {
        return string.split(separator)
    }

    pick<O extends object, K extends keyof O>(
        object: O,
        keys: Array<K>
    ): Pick<O, K> {
        const subset = Object.create({});
        for (const key of keys) {
            subset[key] = object[key];
        }
        return subset;
    }
}

export function createTransformerInstance<T extends Transformer>(c: new () => T): T {
    return new c();
}