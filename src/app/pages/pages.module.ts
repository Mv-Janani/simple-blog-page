import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailesComponent } from './blog-detailes/blog-detailes.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path:'home',component:HomeComponent
  },
  {
    path:'blog',component:BlogListComponent
  },
  {
    path:'blog/:id',component:BlogDetailesComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'add/blog',component:AddBlogsComponent
  },
  {
    path:'add/:blog/:id',component:AddBlogsComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    BlogListComponent,
    BlogDetailesComponent,
    AddBlogsComponent,
    // FormsModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
