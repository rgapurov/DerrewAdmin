export interface LoginResponseModel{
  accessToken: string;
  expiration: Date;
  refreshToken: string;
}

export interface UserInLoginModel{
  userId: number;
  username: string;
  userType : string;
}

export interface AccessTokenModel{
  token: string;
  expiration : string;
}
