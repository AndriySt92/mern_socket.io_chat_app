export interface IUser {
  _id: string
  fullName: string
  username: string
  profilePic: string
}

export interface ISignup {
  fullName: string
  username: string
  password: string
  confirmPassword: string
  gender: string
}
