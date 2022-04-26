import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    private publicKey ="";
    private privateKey = "";

    private host = "http://gateway.marvel.com/";

    constructor(private http: HttpClient){}
  
    public getDados(url: String,parameters:String){
      

      let ts = "generateTs";

      return new Promise((ret) => {
        this.http.get(this.host + url + '?ts=' + ts + '&apikey' + this.publicKey + '&hash=' + 0 + parameters).subscribe((response) => {

          if(response){
            ret(response);
          }else {
            ret(false);
          }

        })

      })
    }

    private generateTs(){
      return Math.floor(100000000 + Math.random() * 90000000000);
    }

}
