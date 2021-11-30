import { Injectable } from '@angular/core';
import{ HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http:HttpClient) { 
    
  }
  getdata(){
    return this.http.get<any>('https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2')
  }
}
