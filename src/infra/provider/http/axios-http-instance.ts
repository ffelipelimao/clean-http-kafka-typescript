import axios, { AxiosInstance } from 'axios';
import * as http from 'http';
import * as https from 'https';

const httpAgent = new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 30000,
});

const httpsAgent = new https.Agent({
    keepAlive: true,
    keepAliveMsecs: 30000,
});
export const createInstance = (url: string): AxiosInstance =>
    axios.create({
        baseURL: url,
        httpAgent,
        httpsAgent,
    });
