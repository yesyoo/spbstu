export interface IUser {
    userid: string,
    name: string,
    gender: string
};
export interface IUserInfo {
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    organization: {
        name: string,
        position: string
    }
};
export interface IUserPosition {
    name: string,
    position: string,
    age: number,
    gender: string
}