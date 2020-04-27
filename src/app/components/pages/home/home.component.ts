import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any[]; 
  toggle: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost()
      .subscribe(
        res =>  this.posts = res
      );
  }

  getComments(index, id) {
    if(!this.posts[index].comments) {
      this.postService.getComments(id)
      .subscribe(
        res => {
          this.posts[index].comments = res;
          console.log(this.posts)
        }
      );
    }
  }

  trackElement(index: number) {
    return index
  }
}
