import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile_form:FormGroup;
  errorMessage:string='';
  profile:any;
  user: any = {
    id: "",
    name: "",
    email:"",
    };
  validation_messages={
    'name':[
      {type:'required',message:'Name is required.'},
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter the valid email' },
      { type: 'maxlength', message: 'The email only accept 20 characters before @gmail.com' },
      { type: 'pattern', message: 'The email only accept gmail.com and more than 5 characters long' }
    ],
    'phoneNumber':[
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ]
  };
  constructor(
    public afAuthService: AuthenticationService,
    public router: Router,
    public toastCtrl: ToastController,
  ) { 
  }

  ngOnInit() {
    this.profile_form=new FormGroup({
      name:new FormControl('set your name',Validators.required),
      email: new FormControl('',[ Validators.required,Validators.email,Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$'),Validators.maxLength(30)]),
      phoneNumber:new FormControl('',Validators.pattern('^(((([\+]61[1-9]{0,1}|([\(]{0,1}0[\)]{0,1}[1-9]{1}|[\(]{0,1}0[1-9]{1}[\)]{0,1})))([0-9]{8}|([\\s*]|[\-]{1})[0-9]{3}([\\s*]|[\-]{1})[0-9]{3}([\\s*]|[\-]{1})[0-9]{3}|(([\\s*]|[\-]{0,1})[0-9]{4}([\\s*]|[\-]{0,1})[0-9]{4})))|((1([\\s*]|[\-]{0,1})((300|800|900|902)|3[0-9]{2}))([\\s*]|[\-]{0,1})([0-9]{3}([\\s*]|[\-]{0,1})[0-9]{3}|[0-9]{6}))|((13[0-9]{1}([\\s*]|[\-]){0,1}[0-9]{3}|13([\\s*]|[\-]){1}[0-9]{2}([\\s*]|[\-]){1}[0-9]{2})))$')),
      age:new FormControl(''),
    });
  }
  ionViewWillEnter(){
    this.afAuthService.getCurrentUser()
    .then(user=>{
      this.user=user;
      this.updateUserProfiles(this.user.name,this.user.email);
    },
    err=>console.log(err))
    this.afAuthService.getPhonenumberAndAge().then(data=>{
      this.profile=data;
      this.updateUserPhonenumberAndAge(this.profile.phoneNumber,this.profile.age);
      console.log(this.profile);
    })
    this.profile_form.reset();
  }
  updateUserProfiles(name,email){
    this.profile_form.patchValue({
      name:name,
      email:email,
    });
  }
  updateUserPhonenumberAndAge(phoneNumber,age)
  {
    this.profile_form.patchValue({
      phoneNumber:phoneNumber,
      age:age,
    })
  }
  saveUserProfiles(value){
    let data = {
      age: value.age,
      phoneNumber:value.phoneNumber
    }
    this.afAuthService.updatePhonenumberAndAge(data)
    .then(
      res => {
        this.showToast("Update Successfully");
      }
    )
    this.afAuthService.updateUserProfiles(value)
    .then(res => {
      this.showToast("Update Successfuly");
    })
    .catch( error => {
      
    })
  }
  logout() {
    this.afAuthService.logout()
      .then((res) => {
        this.router.navigate(['/login']);//log out to previous navigation
        this.showToast("LogOut Successfully");
      }, (error) => {
        console.log("Logout error", error);
      });
  }
  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
