import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/api/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data.data;
        console.log('Blogs:', this.blogs);
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }
}
