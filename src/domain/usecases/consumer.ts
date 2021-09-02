export interface IConsumer {
    handle(params: IConsumer.Params): Promise<void>;
}

export namespace IConsumer {
    export type Params = {
        message: any;
    };
}
