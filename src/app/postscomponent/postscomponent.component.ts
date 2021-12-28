import { BadInput } from '../common/bad-input';
import { AppError } from './../common/app-errors';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postscomponent',
  templateUrl: './postscomponent.component.html',
  styleUrls: ['./postscomponent.component.css']
})
export class PostscomponentComponent implements OnInit{
posts: any[];


  constructor(private service: PostService) {

    }
  
  ngOnInit(): void {
        this.service.getAll()
        .subscribe(response => this.posts = response);
  }

  createPost(input: HTMLInputElement) {
         let post={title: input.value};
         this.posts.splice(0,0,post);

         input.value='';

        this.service.create(post)
        .subscribe(
          response => {
            post['id']=response.id;
          }, 
          (error: AppError) => {
            this.posts.splice(0,1);
            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError)
            }
            else throw error;
          })
  }
  updatePost(post) {
        this.service.update(post)
        .subscribe(response => console.log(response));
  }

  deletePost(post){
        let indexNo = this.posts.indexOf(post);
        this.posts.splice(indexNo,1);

        this.service.delete(post.id)
        .subscribe(
          null,
          (error: AppError) => {
            this.posts.splice(indexNo, 0, post);
            if (error instanceof NotFoundError) 
              alert('This post has already been deleted.');
            else throw error;
        })
  }
}
