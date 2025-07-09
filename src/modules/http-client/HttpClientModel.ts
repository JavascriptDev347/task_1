import type { IHttpClient, IHttpRequestParams } from "../../interfaces";
import http from "../../utils/http";

export class HttpClientModel implements IHttpClient {

    async get<T>(paramaters: IHttpRequestParams): Promise<T> {
        const { url, params } = paramaters;
        try {
            const response = await http.get(url, params);
            console.log("response", response.data);
            return response.data as T;
        } catch (error: any) {
            console.info('------ rejecting ----', error);
            throw error;
        } finally {

        }
    }

    // post

    // put

    // delete
}