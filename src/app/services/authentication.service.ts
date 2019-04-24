import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afAuth:AngularFireAuth
  ) { }

  async emailRegister(userValue){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(userValue.email, userValue.password)
      .then(res => {resolve(res);})
      .catch((error) =>{reject(error)});
    })
   }
  
   //email login
   async emailLogin(userValue){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(userValue.email, userValue.password)
      .then(res => {resolve(res);})
      .catch((error) =>{reject(error)});
    })
   }
}
