import { Injectable } from '@angular/core';
@Injectable()
export class StorageService{
    constructor(

    ){}

    set(key:string,value:any){
        if(value){
            value = JSON.stringify(value);
        }
        localStorage.setItem(key,value);
    }

    get<T>(key:string) : T{
        let value = localStorage.getItem(key);
        if(value){
            return <T>JSON.parse(value);
        }
        return null;
    }

    remove(key:string){
        localStorage.removeItem(key);
    }
}