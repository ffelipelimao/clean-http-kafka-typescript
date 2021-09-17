import { createInstance } from '../../../src/infra/provider/http/axios-http-instance';

describe('http instance', () => {
    test('should be able to create a axios instance', () => {
        const result = createInstance('https://www.amazon.com.br/');
        expect(result).not.toBeNull();
    });
});
