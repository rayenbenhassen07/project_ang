import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogId: number | null = null;
  blogDetails: any = null; // This will hold the blog data
  isLoading: boolean = true; // To show a loading state
  errorMessage: string | null = null; // To display error messages

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Capture the blog ID from the URL
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('id')!; // Get the 'id' parameter as a number
      if (this.blogId) {
        this.getBlogDetails(); // Fetch the blog details when the ID is available
      }
    });
  }

  // Fetch the blog details using the API
  getBlogDetails(): void {
    if (this.blogId !== null) {
      this.isLoading = true; // Set loading state to true
      this.errorMessage = null; // Reset error message on new fetch

      this.http
        .get(`http://localhost:4200/items/blog/${this.blogId}`)
        .subscribe(
          (data: any) => {
            this.blogDetails = data.data; // Assuming the response has a data field
            console.log('Fetched blog details:', this.blogDetails);
            this.isLoading = false; // Set loading state to false
          },
          (error) => {
            console.error('Error fetching blog details:', error);
            this.isLoading = false; // Set loading state to false
            this.errorMessage =
              'There was an issue fetching the blog details. Please try again later.';
          }
        );
    }
  }
}
