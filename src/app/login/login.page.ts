import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage: string = '';
  login: FormGroup;
  check:boolean;
  constructor(
    public fAuthService: AuthenticationService,
    public toastCtrl:ToastController,
    private router:Router,
    private loadingCtrl:LoadingController,
  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  ionViewWillEnter(){
    console.log("ionViewEnter");
    this.fAuthService.afAuth.authState.subscribe(user=>{
      if (user){
        if(!user.emailVerified){
          this.check=false;
        }
        else if (user.emailVerified){
          this.router.navigate(['/store-profile-information']);
          this.check=true;
          this.showToast("Welcome");
        }
      }
      else{
        this.check=true;
      }
    }) 
  }
  emailLogin(userValue){
    this.showLoading("Authenticating");
    this.fAuthService.emailLogin(userValue)
    .then(res =>{
      let currentUser=this.fAuthService.afAuth.auth.currentUser; 
      setTimeout(()=>{
        if(!currentUser.emailVerified){
          this.check=false;
        }
        else{
        this.router.navigate(['/tabs']);
        this.showToast("Welcome Back"); 
        this.login.reset();
        }
      },500)
    }, err => this.errorMessage = err.message)
  }
  resendVerification(){
    let currentUser=this.fAuthService.afAuth.auth.currentUser; 
    if(!currentUser.emailVerified){
    currentUser.sendEmailVerification().then(()=>{
      this.showToast("Verification send to your email, please check")
    })
    .catch(()=>{
      this.showToast("Please check your email that you register")
    })
  }
  else{
    this.showToast("Your account has been verified, please click refresh")
  }
  }

  refresh(){
    window.location.reload();
  }
  logout() {
    this.fAuthService.logout()
      .then((res) => {
        this.showToast("Login Form");
      }, (error) => {
        console.log("error", error);
      });
  }
  async showToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async showLoading(message){
    const loading = await this.loadingCtrl.create({
      message: message,
      spinner:'dots',
      duration: 600
    });
    loading.present();
  }

}
