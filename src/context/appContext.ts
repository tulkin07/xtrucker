import { createContext, useContext } from 'react';
import { ActionType, IAppContext, IState } from './types';

export const initialState: IAppContext = {
  user: null,
  companies: null,
  setUser: () => {},
  setCompanies: () => {},
  currentCompanyId: null,
  setCurrentCompanyId: () => {},
  asideOpen: false,
  setAsideOpen: () => {},
  balanceUpdate: false,
  setBalanceUpdate: () => {},
  isLoadingCompany: false,
  setIsLoadingCompany: () => {},
};

export const AppContext = createContext<IAppContext>(initialState);

export enum ActionTypes {
  SET_USER = 'SET_USER',
  SET_COMPANIES = 'SET_COMPANIES',
  SET_CURRENT_COMPANY_ID = 'SET_CURRENT_COMPANY_ID',
  SET_ASIDE_OPEN = 'SET_ASIDE_OPEN',
  SET_BALANCE_UPDATE = 'SET_BALANCE_UPDATE',
  SET_IS_LOADING_COMPANY = 'SET_IS_LOADING_COMPANY',
}

export function reducer(state: IState, action: ActionType) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypes.SET_COMPANIES:
      return { ...state, companies: action.payload };
    case ActionTypes.SET_CURRENT_COMPANY_ID:
      return { ...state, currentCompanyId: action.payload };
    case ActionTypes.SET_ASIDE_OPEN:
      return { ...state, asideOpen: action.payload };
    case ActionTypes.SET_BALANCE_UPDATE:
      return { ...state, balanceUpdate: action.payload };
    case ActionTypes.SET_IS_LOADING_COMPANY:
      return { ...state, isLoadingCompany: action.payload };
    default:
      return state;
  }
}

export function useAppContext(): IAppContext {
  const appContext: IAppContext = useContext<IAppContext>(AppContext);
  return appContext;
}
