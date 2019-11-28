import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for routing
import { RouterModule,Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogAboutComponent,
    BlogDeleteComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   RouterModule.forRoot([
      {path :'home', component:HomeComponent},
      {path:'' ,redirectTo:'home',pathMatch:'full'},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'about',component:BlogAboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'*', component:NotfoundComponent},
      {path:'**',component:NotfoundComponent}
      
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
