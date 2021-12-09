
import Transformer from "./transformer";
import { TransformerInterface } from "../interface/transformer.interface";

describe('Transformer Class', () => {
    let transformer: TransformerInterface
    beforeAll(() => {
        transformer = new Transformer()
    })
    describe('split', () => {

        it(`Should return Array Of strings with length 2
            when separator is ',' and string is omid,shams`, () => {
            const string = 'omid,shams'
            expect(transformer.split(string, ',')).toEqual(['omid', 'shams']);
        });

        it(`Should return [''] Array of objects     
            when separator is ',' and string is '' `, () => {
            const string = ''
            expect(transformer.split(string, ',')).toEqual(['']);
        });
    });

    describe('pick', () => {
        let baseObject = { a: 1, b: 2, c: 3 }
        beforeEach(() => {
            baseObject = { a: 1, b: 2, c: 3 }
        })
        it(`Should return Obj = { a: 1 }
            when subset keys ['a'] a and object is ${baseObject}`, () => {

            expect(transformer.pick<typeof baseObject, keyof typeof baseObject>(baseObject, ['a']))
                .toEqual({ a: 1 });
        });
        it(`Should return Obj =  { b: 2, c: 3 }
            when subset keys are ['b', 'c'] and object is ${baseObject}`, () => {
            expect(transformer.pick<typeof baseObject, keyof typeof baseObject>(baseObject, ['b', 'c']))
                .toEqual({ b: 2, c: 3 });
        });
    });
});
