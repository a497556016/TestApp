import { Const } from './../../common/consts/const';
import { StorageService } from './../service/storageService';
import { MsgService } from './../service/msgService';
import { HttpService } from './../service/httpService';
import { MessageDetailPage } from './message/message';
import { CreateMessagePage } from './message/createMessage';
import { Message } from './../model/message';
import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slidePics:string[] = [
    'assets/images/loginBg.jpg',
    'assets/images/girl.jpg'
  ];
  messages:Message[] = [];
  constructor(
    public navCtrl: NavController,
    private http:HttpService,
    private modalController:ModalController,
    private msgService: MsgService,
    private storageService:StorageService
  ) {
    this.messages.push(new Message('小女孩玩狙击','小女孩玩狙击','assets/images/girl.jpg'));

    this.messages = storageService.get<Message[]>(Const.MESSAGE_CACHE);
    if(this.messages==null){
      http.get('assets/data.json').then(data => {
        console.log(data)
        this.messages = data.messages;
        storageService.set(Const.MESSAGE_CACHE,this.messages);
      });
    }
    

    // this.msgService.alert('哈哈',any => {
    //   this.msgService.alert('呵呵');
    // });
  }

  showDetail(msg){
    console.log(msg);
    this.navCtrl.push(MessageDetailPage,{
      msg : msg
    });
  }

  createMessage(){
    this.msgService.confirm('是否要创建一个消息？',data => {
      if(data){
        this.modalController.create(CreateMessagePage,{
          homePage : this
        }).present();
      }
    })
  }

}
