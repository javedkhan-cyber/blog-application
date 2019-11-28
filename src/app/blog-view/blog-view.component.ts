import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import{Location} from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {
//emplty objects
public currentBlog;
  constructor(private _route:ActivatedRoute,private router:Router,public blogService:BlogService,public blogHttpService:BlogHttpService, private location:Location) {
    console.log('constructer of view has been called')
   }

  
  ngOnInit() {
let myBlogId=this._route.snapshot.paramMap.get('blogId')
console.log(myBlogId)

this.currentBlog=this.blogHttpService.getSingleData(myBlogId).subscribe(
  data=>{
    console.log(data)
    this.currentBlog = data["data"]

  },
  error=>{
    console.log("some error occurred")
    console.log(error.errMessage)
  }
)


  }

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data)
        alert("deleted")
        setTimeout(()=>{
          this.router.navigate(['/home']);
              },1000)
      },
      error=>{
        console.log("some error")
        alert('errr')
      }
    )
  }//end delete


  public goBackToPreviousPage():any{
    this.location.back();
  }
}
