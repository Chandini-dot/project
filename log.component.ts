import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
signuppageForm:FormGroup
  constructor(private router: Router, private fn: FormBuilder, private http: ServiceService) {
    this.signuppageForm = this.fn.group({
      username: new FormControl(),
      password: new FormControl(),
      cpassword: new FormControl(),
    })

   }
ngOnInit() {
  }
  reg(){
    this.router.navigateByUrl('lognew')
  }

 register(values) {
  console.log(values)
  this.http.registerUser(values).subscribe(data1 => {
    console.log("2", data1)
  })
}
}
