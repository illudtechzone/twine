import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private oauthService: OAuthService,
              private router: Router,
              private navController: NavController) {
                console.log('tertertr');
               }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(' acess token ', this.oauthService.hasValidAccessToken());
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    }
    this.navController.navigateRoot('/login');
    return false;
  }
}
