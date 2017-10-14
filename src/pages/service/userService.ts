import { Const } from './../../common/consts/const';
import { StorageService } from './storageService';
import { User } from './../model/user';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    private _curUser:User;
    constructor(
        private storageService:StorageService
    ){

    }

    saveUser(user:User){
        this._curUser = user;
        this.storageService.set(Const.LOGIN_USER,this._curUser);
    }
    removeLoginUser(){
        this._curUser = null;
        this.storageService.remove(Const.LOGIN_USER);
    }

    set curUser(value:User){
        this._curUser = value;
    }
    get curUser(){
        return this._curUser||this.storageService.get(Const.LOGIN_USER);
    }
}