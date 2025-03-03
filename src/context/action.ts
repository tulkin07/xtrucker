import { ICompany, IUser } from '../interfaces';
import { ActionTypes } from './appContext';
import {
  TDispatch,
  TSetAsideOpen,
  TSetBalanceUpdate,
  TSetCompanies,
  TSetCurrentCompanyId,
  TSetIsLoadingCompany,
  TSetUser,
} from './types';

export const setUser: TSetUser = (dispatch: TDispatch) => (payload: IUser) => {
  dispatch({ type: ActionTypes.SET_USER, payload });
};

export const setCompanies: TSetCompanies = (dispatch: TDispatch) => (payload: ICompany[]) => {
  dispatch({ type: ActionTypes.SET_COMPANIES, payload });
};

export const setCurrentCompanyId: TSetCurrentCompanyId =
  (dispatch: TDispatch) => (payload: number) => {
    dispatch({ type: ActionTypes.SET_CURRENT_COMPANY_ID, payload });
  };

export const setAsideOpen: TSetAsideOpen = (dispatch: TDispatch) => (payload: boolean) => {
  dispatch({ type: ActionTypes.SET_ASIDE_OPEN, payload });
};

export const setBalanceUpdate: TSetBalanceUpdate = (dispatch: TDispatch) => (payload: boolean) => {
  dispatch({ type: ActionTypes.SET_BALANCE_UPDATE, payload });
};

export const setIsLoadingCompany: TSetIsLoadingCompany =
  (dispatch: TDispatch) => (payload: boolean) => {
    dispatch({ type: ActionTypes.SET_IS_LOADING_COMPANY, payload });
  };
