import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
public allBlogs;
public currentBlog;
public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

public authToken = 'Yjk2MjczZThkNWQzZTk5OTJmODA3ZjU5NmUwMTRlMzIzZDgxNmQ5NWM3ZjBmMjM1ZjIxYzk5YzMwZDNjNDc1NmZiMDI1YjY2OTA5N2VmNGIzYzQ4N2M0NzM5NzQ0MmI1MGY5YTZkYmFkYmRlMmVlN2EzZDg2NGU5MzliMzQwNTVhMQ=='



constructor( public _http:HttpClient)
{ }


public getAllData():any {
 let myResponse= this._http.get(this.baseUrl + '/all?authToken='+this.authToken)
  console.log(myResponse);
  return myResponse
}

public getSingleData(currentBlogId):any{
 let myResponse= this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken)
 console.log(myResponse)
return myResponse
}


public createBlog(blogData):any{
  let myResponse=this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken,blogData);
  console.log(myResponse);
  return myResponse
}

public deleteBlog(blogId):any{
  let data={}
  let myResponse=this._http.post(this.baseUrl + '/'+ blogId+'/delete' + '?authToken=' + this.authToken,data );
  return myResponse;
}
public editBlog(blogId,blogData):any{
let myResponse =this._http.put(this.baseUrl + '/' +blogId  +'/edit' + '?authToken=' + this.authToken,blogData);
return myResponse
}
}
