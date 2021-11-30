import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bloglist:any=[];
  constructor(private blogservice:BlogServiceService) { }

  ngOnInit(): void {
    this.blogservice.getdata().subscribe(response=>{this.bloglist=response.articles;
    localStorage.setItem('Bloglist',JSON.stringify(this.bloglist))
  })
  }


}
