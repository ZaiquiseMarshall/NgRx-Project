import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any[]; 
  test: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost()
      .subscribe(
        res => {
          this.posts = res;
          console.log(this.posts);
        }
      );
  }

  getComments(index, id) {
    this.postService.getComments(id)
      .subscribe(
        res => {
          this.posts[index].comments = res;
          console.log(this.posts)
        }
      );
  }
}
