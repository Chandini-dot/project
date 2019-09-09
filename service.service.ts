import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map"
import "rxjs/Rx"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  post(arg0: string, create: any) {
    throw new Error("Method not implemented.");
  }
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users';
  loginAPI='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate';
  base2= 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies';
  fav='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/:id'
 constructor(private http: HttpClient) { }
registerUser(values) {
let body = {
name: values.username,
password: values.password,
confirmpassword: values.password
}
return this.http.post(this.baseAPI, body).map(data => { 
console.log("1", data)
})
}
loginUser(values) {
let body1 = {
name: values.username,
pass: values.password
}
return this.http.post(this.loginAPI, body1).map(data => { 
  localStorage.setItem("logindata",JSON.stringify(data))
console.log("1", data)
})
}
registermovies(values){
let body2 = {
id:'5d7250375948c40008c6997e',
MovieName: values.moviesname,
Language: values.language,
Genre: values.genre
}
return this.http.post(this.base2,body2).map(data1 =>{
console.log("6",data1)
})
}
moviealbum(){
  return this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/').map(data =>{
    console.log("2",data)
  })
​} 
}