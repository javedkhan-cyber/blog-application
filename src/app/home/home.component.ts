import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  
  constructor(public blogService:BlogService, public blogHttpService:BlogHttpService) {

   }

//empty objectdata
   public allBlogs;
   
  ngOnInit() {

this.allBlogs=this.blogHttpService.getAllData().subscribe(
  data=>{
    console.log(data)
    this.allBlogs = data["data"]

  },
  error=>{
    console.log("some error occured")
    console.log(error.errMessage)
  }
)

  
    }


  

}
