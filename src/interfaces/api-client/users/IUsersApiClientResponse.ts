interface IUsersAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

interface IUserCompany {
    name: string,
    catchPhrase: string,
    bs: string
}
export interface IUsersApiClientResponse {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUsersAddress,
    phone: string,
    website: string,
    company: IUserCompany
}