import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  search='';
  public moviedata1=[
    {
      MovieName:'KGF',
      Language:'Kannada',
      Genre:'action'
    },
    {
      MovieName:'kakhi',
      Language:'thelugu',
      Genre:'action'
    },
    {
      MovieName:'pailwan',
      Language:'Kannada',
      Genre:'action'
    },
    {
      MovieName:'kurukshethra',
      Language:'Kannada',
      Genre:'drama'
    },
    {
      MovieName:'Avunu',
      Language:'thelugu',
      Genre:'horror'
    }
  ]
  value: Object;
hd="5d7250375948c40008c6997e"
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+this.hd).subscribe(data =>{
      console.log("1",data)
    })
  }
  addmovie(){
    this.router.navigateByUrl('movies')
  }
  retrive(){
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/5d7250375948c40008c6997e').subscribe(data =>{
    this.value=data;
    console.log("1",data)
   })
 } 
  }