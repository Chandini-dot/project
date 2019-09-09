import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies : FormGroup
  constructor(private router:Router, private fb:FormBuilder, private http:ServiceService) { 
    this.movies = this.fb.group({
      moviesname: new FormControl(),
      language: new FormControl(),
      genre: new FormControl()
    })
​
  }
​
  ngOnInit() {
  }
  list(){
    this.router.navigateByUrl("albums")
  }
  add(data){
    console.log(data)
  
    let moviesname =this.movies.get('moviesname').value
    let language =this.movies.get('language').value
    let genre=this.movies.get('genre').value
     let body={
       'MovieName':moviesname,
       'Language':language,
       'Genre':genre
     }
     this.http.registermovies(body).subscribe(res =>{
       console.log(res)
     })
     console.log(data)
     this.router.navigateByUrl("albums");
    }
}


// register(values) {
//   console.log(values)
//   this.http.albumuser(values).subscribe(data1 => {
//     console.log("2", data1)
//   })
// }