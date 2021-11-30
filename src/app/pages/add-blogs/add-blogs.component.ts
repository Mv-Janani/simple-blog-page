import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {
  blogForm: FormGroup;
  submitted: boolean = false;
  buttonText: string = 'Submit';
  editUrl:any = '';
   blogList:any=[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router
  ) {

  }

  ngOnInit(): void {
this.blogList=JSON.parse(localStorage.getItem('Bloglist')!)

    this.blogForm = this.formBuilder.group({
      url: [null, Validators.required],
      author: [null, Validators.required],
      content: [null, Validators.required],
      description: [null, Validators.required],
      publishedAt: [null],
      title: [null, Validators.required],
      urlToImage: [null, Validators.required]
    })
    console.log(this.blogForm);
    console.log(this.route.snapshot.params);
    if (this.route.snapshot.params.id) {
      this.buttonText = 'Update';
      this.editUrl = '/'+ this.route.snapshot.params.blog + '/' + this.route.snapshot.params.id;
    for(let i=0;i<this.blogList.length;i++){
       if(this.editUrl==this.blogList[i].url){
         this.blogForm.patchValue({
          url:this.blogList[i].url,
          author:this.blogList[i].author,
          content:this.blogList[i].content,
          description:this.blogList[i].description,
          publishedAt: this.blogList[i].publishedAt,
          title:this.blogList[i].title,
          urlToImage:this.blogList[i].urlToImage

         })
       }

           }
      console.log(this.editUrl);
    }
  }
  get blogControl() {
    return this.blogForm.controls
  }
  onSubmit() {
    this.submitted = true;
    if (this.blogForm.invalid) {
      return;
    }
if(this.buttonText=='Update'){
  for(let i=0;i<this.blogList.length;i++){

    if(this.editUrl==this.blogList[i].url){
      this.blogList.splice(i,1,this.blogForm.value)
    }}
}else(
  this.blogList.push(this.blogForm.value)
)
localStorage.setItem('Bloglist',JSON.stringify(this.blogList))
this.router.navigate([this.blogForm.value.url])
console.log(this.editUrl);
// alert("hi")
  }


}
