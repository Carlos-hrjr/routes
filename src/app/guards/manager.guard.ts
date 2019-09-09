import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserUtil } from '../utils/user.util';

@Injectable()
export class ManagerGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        return UserUtil.isInRole('manager');
    }
}