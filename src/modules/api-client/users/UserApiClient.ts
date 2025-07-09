import type { IHttpRequestParams, IUsersApiClient, IUsersApiClientResponse, IUsersApiClientUrls } from "../../../interfaces";
import httpClient from "../../http-client/HttpClient";

export class UserApiClient implements IUsersApiClient {
    private readonly urls: IUsersApiClientUrls;
    constructor(urls: IUsersApiClientUrls) {
        this.urls = urls;
    }


    getAllUsers(): Promise<IUsersApiClientResponse[]> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllUsers
        }

        return httpClient.get(requestParams);
    }

}