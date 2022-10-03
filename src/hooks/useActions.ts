import { AnyAction, bindActionCreators, Dispatch } from '@reduxjs/toolkit';

export const useActions = <T>(actions: T, dispatch: Dispatch<AnyAction>): typeof actions => {
  return bindActionCreators<any, any>(actions, dispatch);
};
