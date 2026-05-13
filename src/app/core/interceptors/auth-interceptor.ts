import { HttpInterceptorFn } from '@angular/common/http';
import{inject} from '@angular/core';
import{AuthCookieService} from '../services/cookies/auth-cookie.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(AuthCookieService);
  const token = cookieService.get("cryptoHex_online_token")

  req = req.clone({
    setHeaders: {
      "Authorization": (token) ? `Bearer ${token}` : "kevin???",
      "Content-Type": "application/json",
    }
  })

  return next(req);};



