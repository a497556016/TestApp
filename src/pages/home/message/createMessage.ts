import { Const } from './../../../common/consts/const';
import { StorageService } from './../../service/storageService';
import { HomePage } from './../home';
import { Message } from './../../model/message';
import { FileService } from './../../service/fileService';
import { ModalController, ViewController, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
    templateUrl : 'createMessage.html'
})
export class CreateMessagePage{
    message:Message;
    homePage:HomePage;
    constructor(
        private modalController:ModalController,
        private viewController:ViewController,
        private navCtrl:NavController,
        private fileService:FileService,
        private navParams:NavParams,
        private storageService:StorageService
    ){
        this.message = new Message();
        this.homePage = navParams.get('homePage');
    }

    close(){
        this.viewController.dismiss();
    }

    selectPic(){
        this.fileService.showPicActionSheet({
            success : (data) => {

            },
            error : (err) => {
                let path = err.source;
                this.message.picUrl = path;
            }
        });
    }

    createMessage(){
        this.homePage.messages.push(this.message);
        this.storageService.set(Const.MESSAGE_CACHE,this.homePage.messages);
        this.close();
    }
}