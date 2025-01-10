import { RootState } from '../store';

const getUser = (state: RootState) => state.user;

const isAuthenticated = (state: RootState) => state.user.isAuthenticated;

export { getUser, isAuthenticated };
