import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  storeInformation:any=[];
  storeInformation1:any=[];
  store='image';
  constructor(
    private afs:AngularFirestore,
    private inAppSearch:InAppBrowser,
  ) { }

  ngOnInit() {
    this.afs.collection("storeImage").valueChanges().subscribe(data=>{
      this.storeInformation=data;
      console.log(this.storeInformation);
    })
    this.afs.collection("aboutUs").valueChanges().subscribe(data=>{
      this.storeInformation1=data;
    })
  }
  searchAddress(){
    this.inAppSearch.create("https://www.google.com/maps/place/1%2F47+Park+Rd,+Cabramatta+NSW+2166/@-33.8939449,150.9344088,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12960e821afffb:0xa1d4124e0002d!8m2!3d-33.8939494!4d150.9365975","_system")
  }

}
