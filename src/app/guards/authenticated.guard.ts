import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { UserUtil } from '../utils/user.util';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    const user = UserUtil.getUser();
    if (!user || !user.token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

} 