import type { IUsersApiClientUrls } from "../../../interfaces";
import { UserApiClient } from "./UserApiClient";

const urls: IUsersApiClientUrls = {
    getAllUsers: "/users"
}

const userApiClient = new UserApiClient(urls);

export default userApiClient;