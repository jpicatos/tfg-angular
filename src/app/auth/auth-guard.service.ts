import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import notAdminRoutes from './not-admin-routes';
import { GlobalConfigService } from '../services/global-config.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router, public globalConfigService: GlobalConfigService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig.path;
    const admin = this.globalConfigService.isAdmin();
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    else if(!admin && notAdminRoutes.indexOf(path) >= 0){
      this.router.navigate([''])
      return false;
    }
    return true;
  }

}