import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url="http://18.222.136.233:9595"
  constructor(
    private http:HttpClient
   ) { }


//calling the server to generate the token

generateToken(credentials: any){
  //generate the token
  return this.http.post(`${this.url}/token`,credentials)

}



//for login user

loginUser(token: any){
localStorage.setItem("token",token)
return true;
}


isLoggedIn(){
   let token=  localStorage.getItem("token");

   if( token == undefined || token =='' || token ==null){
     return false;
   }
   else{
     return true;
   }
}


logout(){
  localStorage.removeItem('token');
  return true;
}


getToken(){
 return  localStorage.getItem("token");
}

}
