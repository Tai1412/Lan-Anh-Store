import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter the valid email' },
      { type: 'maxlength', message: 'The email only accept 20 characters before @gmail.com' },
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Only accept password equal or more than 6 characters' },
    ]

  };
  constructor(
    public fAuthService: AuthenticationService,
    public router: Router,
    private inAppSearch: InAppBrowser,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  emailSignup(userValue) {
    this.fAuthService.emailRegister(userValue)
      .then(res => {
        this.router.navigate(['/login'])
        this.showToast("Register Successfully");
        this.signupForm.reset();
      }, error => this.errorMessage = error.message)
  }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  accessPrivacyPolicy() {
    this.inAppSearch.create("https://www.freeprivacypolicy.com/privacy/view/a7d1222d349a7f398f72657081b67b14");
  }
}
