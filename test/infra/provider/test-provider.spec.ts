// mock instance and result provider

jest.mock('../../../../src/infra/http/http-instance', () => {
    return {
        createInstance: jest.fn(() => {
            return {
                post: jest.fn(() =>
                    Promise.resolve({
                        data: {},
                    }),
                ),
            };
        }),
    };
});
