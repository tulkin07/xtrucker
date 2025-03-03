import { ICompany, IUser } from '../interfaces';

export type ActionType = {
  payload: any;
  type: string;
};

export interface IState {
  user: IUser;
  companies: ICompany[];
  currentCompanyId: number | null;
  asideOpen: boolean;
  balanceUpdate: boolean;
  isLoadingCompany: boolean;
}

export type TDispatch = React.Dispatch<ActionType>;

export type TSetUser = (dispatch: TDispatch) => (payload: IUser) => void;
export type TSetCompanies = (dispatch: TDispatch) => (payload: ICompany[]) => void;
export type TSetCurrentCompanyId = (dispatch: TDispatch) => (payload: number) => void;
export type TSetAsideOpen = (dispatch: TDispatch) => (payload: boolean) => void;
export type TSetBalanceUpdate = (dispatch: TDispatch) => (payload: boolean) => void;
export type TSetIsLoadingCompany = (dispatch: TDispatch) => (payload: boolean) => void;

export interface IAppContext {
  user: IUser;
  companies: ICompany[] | null;
  setUser: (user: IUser) => void;
  setCompanies: (companies: ICompany[]) => void;
  currentCompanyId: number | null;
  setCurrentCompanyId: (companies: number) => void;
  asideOpen: boolean;
  setAsideOpen: (companies: boolean) => void;
  balanceUpdate: boolean;
  setBalanceUpdate: (balance: boolean) => void;
  isLoadingCompany: boolean;
  setIsLoadingCompany: (isLoadingCompany: boolean) => void;
}
