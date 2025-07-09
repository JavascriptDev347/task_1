import type { IHttpRequestParams } from "./IHttpRequestParams";

export interface IHttpClient {
    get<T>(parameters: IHttpRequestParams): Promise<T>

    // post<T>

    // put<T>

    // patch<T>

    // delete<T>
}