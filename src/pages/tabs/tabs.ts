import { LoginPage } from './../login/login';
import { NavController, Tabs } from 'ionic-angular';
import { UserService } from './../service/userService';
import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;//加这句以及引用两个模块
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private userService:UserService,private navCtrl:NavController) {
    
  }

  ionViewDidLoad() {
    // let curUser = this.userService.curUser;
    // if(!curUser){
    //   this.navCtrl.setRoot(LoginPage);
    // }
  }
}
