import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import{ActivatedRoute,Router} from '@angular/router'
 
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
public currentBlog;
public possibleCategories = ["cricket","comedy","practice"]
  constructor(public blogHttpService:BlogHttpService,public _route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    this.blogHttpService.getSingleData(myBlogId).subscribe(
      data=>{
        console.log(data)
        this.currentBlog = data["data"]
      },
      error=>{
        console.log(error.errMessage)
      }
    )
  }//end init


  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log(data)
        alert("edited baba")
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
              },1000)
      }
    )
  }

}
