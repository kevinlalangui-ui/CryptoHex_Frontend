import { CanActivateFn,Router } from '@angular/router';
import{inject} from "@angular/core";
import {AuthCookieService} from '../../services/cookies/auth-cookie.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router= inject(Router);

  let cookiesService = inject(AuthCookieService);
  const token = cookiesService.get('cryptoHex_online_token');

  if(token){
    return true;
  }else{
    router.navigate(['/page-not-found']);
    return false;
  }

};
