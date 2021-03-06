import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(
    private router: Router,
    private afAuth:AngularFireAuth,
    private toastCtrl:ToastController
  ){}
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(user => { //check user state persist
        if (user&&user.emailVerified) {//if current user, allow to go to the other page
          resolve(true);
        }
        else if(user&&!user.emailVerified)
        {
          this.router.navigate(['/login']);
          this.showToast("Please Verify Your Account");
        } 
        else {//if not ,navigate back to the login until sign in
          this.router.navigate(['/login']);
          this.showToast("Please sign in first");
          reject('No Logged in');
        }
      }); 
    });
  }

  async showToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
