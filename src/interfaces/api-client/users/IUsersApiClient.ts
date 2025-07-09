import type { IUsersApiClientResponse } from "./IUsersApiClientResponse";

export interface IUsersApiClient {
    getAllUsers(): Promise<IUsersApiClientResponse[]>
}