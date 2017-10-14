import { Logger } from './../log/logger';
import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
    
    constructor(
        private http:Http,
        private logger:Logger
    ){}

    get(url:string):Promise<any>{
        return this.http.get(url)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }

    post(url:string,data:any):Promise<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,JSON.stringify(data),options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}