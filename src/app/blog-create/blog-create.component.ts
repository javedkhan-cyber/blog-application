import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService:BlogHttpService,public _route:ActivatedRoute,public router:Router) { }

  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories = ["cricket","comedy","practice"]
  ngOnInit() {

   
 
    }
    public createBlog():any{
let blogData = {
  title:this.blogTitle,
  blogBody : this.blogBodyHtml,
  description : this.blogDescription,
  category:this.blogCategory

}
console.log(blogData)
this.blogHttpService.createBlog(blogData).subscribe(
  data=>{
    console.log("BlockCreated")
    alert("babu blog ban gya hai")
    setTimeout(()=>{
this.router.navigate(['/blog',data.data.blogId]);
    },1000)
  },
  error=>{
    console.log("error hai bhai")
    console.log(error.errMessage)
    alert("error hai ddkhlo madarchod")
  }
)
    }

}
