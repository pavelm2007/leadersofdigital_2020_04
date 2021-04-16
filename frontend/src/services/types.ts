interface ServiceInit {
  status: 'init';
}

interface ServiceLoading {
  status: 'loading';
}

interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}

interface ServiceError {
  status: 'error';
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;

export interface ILogin {
  username: string
  password: string
}

export interface IRegister extends ILogin{
  email: string
}

export type LoginTypes = ILogin
export type RegisterTypes = IRegister