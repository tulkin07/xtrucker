// types.ts
export interface IUser {
  gmail: string;
  phone_number: string;
  full_name: string;
  user_role: string;
  company_id: number;
  onboarding_status:string
}
// types.ts
export interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

// types.ts
export interface ISessionContext {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}
