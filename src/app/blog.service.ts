import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
"blogId": 1 ,
"lastModified":"2019-11-06T06:15:54.407Z",
"created": "2019-11-06T06:15:54.407Z",
"tags":[],
"author":"Admin",
"category":"cricket",
"isPublished":true,
"views":0,
"bodyHtml":"this is the blog body.this is blog body",
"description":"this is the first blog i have made",
"title":"this is the 1 blog "
  },
  {
    "blogId": 2 ,
    "lastModified":"2019-11-06T06:15:54.407Z",
    "created": "2019-11-06T06:15:54.407Z",
    "tags":[],
    "author":"Admin",
    "category":"cricket",
    "isPublished":true,
    "views":0,
    "bodyHtml":"this is the blog body.this is blog body",
    "description":"this is the second blog i have made",
    "title":"this is the 2 blog "
      },
      {
        "blogId": 3 ,
        "lastModified":"2019-11-06T06:15:54.407Z",
        "created": "2019-11-06T06:15:54.407Z",
        "tags":[],
        "author":"Admin",
        "category":"Comedy",
        "isPublished":true,
        "views":0,
        "bodyHtml":"this is the blog body.this is blog body",
        "description":"this is the third blog i have made",
        "title":"this is the 3 blog "
          },
        ]
  public currentBlog
//get all data from servic e to home
        public getAllBlogs():any{
          return this.allBlogs;
        }
public getAllInformation(currentBlogId):any{
  for(let blog of this.allBlogs){
    if(blog.blogId == currentBlogId){
      this.currentBlog = blog
    }
  }
  console.log(this.currentBlog)
  return this.currentBlog
}
  constructor() { }


}
