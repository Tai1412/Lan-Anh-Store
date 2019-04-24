import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage: string = '';
  login: FormGroup;

  constructor(
    public fAuthService: AuthenticationService,
    public toastCtrl:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  emailLogin(userValue){
    this.fAuthService.emailLogin(userValue)
    .then(res =>{
      this.router.navigate(['/tabs']);
      this.showToast("Welcome Back");  
      this.login.reset();
    }, err => this.errorMessage = err.message)
  }

  async showToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
