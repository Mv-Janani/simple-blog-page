import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-detailes',
  templateUrl: './blog-detailes.component.html',
  styleUrls: ['./blog-detailes.component.css']
})
export class BlogDetailesComponent implements OnInit {

  constructor(private router:Router) { }
blog:any;
bloglist:any;
  ngOnInit(): void {
    this.bloglist=JSON.parse(localStorage.getItem('Bloglist')!);
  
    for (let blog of this.bloglist){
     
      if(this.router.url==blog.url){
      
        this.blog=blog;
      }
    }
  }
  deleteBlog(){
   for(let i=0;i<this.bloglist.length;i++)
   {
     if(this.router.url==this.bloglist[i].url){
        if(confirm("Are you sure want to delete?")){
          this.bloglist.splice(i,1);
          localStorage.setItem('Bloglist',JSON.stringify(this.bloglist));
          this.router.navigate(['/blog']);
          break;
        }
      
     }
   }
 
  }
}


