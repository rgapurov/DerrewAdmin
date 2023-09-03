export interface UserResponseModel{
    userId: number,
    username: string,
    password: string,
    userType: string,
    firstName: string,
    lastName: string,
    startDate: string,
    endDate: string,
    isActive: boolean,
    firstLogin: boolean,
    isBlocked: boolean
}
