import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-lognew',
  templateUrl: './lognew.component.html',
  styleUrls: ['./lognew.component.css']
})
export class LognewComponent implements OnInit {
  loginform: FormGroup
  constructor(public router:Router,private fb: FormBuilder,private http: ServiceService) {
    this.loginform = this.fb.group({
      username: new FormControl(''),
      password:new FormControl(''),
       })
   }
  ngOnInit() {

  }
  new(){
    this.router.navigateByUrl('log')
  }
  next(){
    this.router.navigateByUrl('movies')
  }
  login(values) {
    console.log(values)
    this.http.loginUser(values).subscribe(data1 => {
      console.log("2", data1)
    })
  }
}
