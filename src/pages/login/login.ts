import { MyApp } from './../../app/app.component';
import { RegisterPage } from './../register/register';
import { TabsPage } from './../tabs/tabs';
import { App, ViewController, NavController, NavParams } from 'ionic-angular';
import { Logger } from './../log/logger';
import { UserService } from './../service/userService';
import { User } from './../model/user';
import { Component } from '@angular/core';

@Component({
    selector : 'loginPage',
    templateUrl : 'login.html'
})
export class LoginPage{
    username:string;
    password:string;
    constructor(
        private userService:UserService,
        private logger:Logger,
        private viewCtrl:ViewController,
        private appCtrl:App,
        public navCtrl:NavController,
        private navParams:NavParams,
        private myApp:MyApp
    ){
        let user = navParams.get('user');
        if(user){
            this.username = user.name;
            this.password = user.pwd;
        }
    }

    login(){
        let user = new User(this.username,this.password);
        this.userService.saveUser(user);
        this.logger.info('登录系统成功');
        //this.viewCtrl.dismiss();
        this.navCtrl.push(TabsPage);
        this.navCtrl.remove(0,1);
        //this.appCtrl.getRootNav().push(TabsPage);
    }

    register(){
        this.navCtrl.push(RegisterPage);
    }
}