import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  phoneNumber="0452531289"
  constructor(
    private sms:SMS,
    private inAppSearch:InAppBrowser,
    private Email:EmailComposer,
  ) { }

  ngOnInit() {
  }

  SMS(){
    this.sms.send(this.phoneNumber,'');
  }

  callMe(){
    window.open(`tel:${this.phoneNumber}`, '_system');
  }
  facebook(){
    this.inAppSearch.create("https://www.facebook.com/Lan-Anh-Store-428737097703499/?modal=admin_todo_tour","_system");
  }
  sendEmail(){
    let email={
      to:'anduongnguyen89@gmail.com',
      cc:'LanAnhStoreCabramatta@gmail.com',
      subject:'title',
      body:'Give us your value feedback here or your question, but firtly need to delete me',
      isHtml:true,
    }
    this.Email.open(email);
  }

}
