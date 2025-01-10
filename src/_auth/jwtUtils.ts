import { jwtDecode } from 'jwt-decode';

export function isTokenExpired(token: string): boolean {
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (e) {
    return true;
  }
}
