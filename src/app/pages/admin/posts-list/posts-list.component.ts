import { Component, OnInit } from "@angular/core";
import { CrudService } from "../shared/crud.service"; // CRUD API service class
import { Post } from "../shared/post"; // Post interface class for Data types.
import { ToastrService } from "ngx-toastr"; // Alert message using NGX toastr

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"]
})
export class PostsListComponent implements OnInit {
  p: number = 1; // Fix for AOT compilation error for NGX pagination
  Post: Post[]; // Save posts data in Post's array.
  hideWhenNoPost: boolean = false; // Hide posts data table when no post.
  noData: boolean = false; // Showing No Post Message, when no post in database.
  preLoader: boolean = true; // Showing Preloader to show user data is coming for you from the server

  constructor(
    public crudApi: CrudService, // Inject post CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ) {}

  ngOnInit() {
    this.dataState(); // Initialize post's list, when component is ready
    let s = this.crudApi.GetPostsList();
    s.snapshotChanges().subscribe(data => {
      // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Post = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a["$key"] = item.key;
        this.Post.push(a as Post);
      });
    });
  }

  // Using valueChanges() method to fetch simple list of posts data. It updates the state of hideWhenNoPost, noData & preLoader variables when any changes occurs in post data list in real-time.
  dataState() {
    this.crudApi
      .GetPostsList()
      .valueChanges()
      .subscribe(data => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoPost = false;
          this.noData = true;
        } else {
          this.hideWhenNoPost = true;
          this.noData = false;
        }
      });
  }

  // Method to delete post object
  deletePost(post) {
    if (window.confirm("Are sure you want to delete this post ?")) {
      // Asking from user before Deleting post data.
      this.crudApi.DeletePost(post.$key); // Using Delete post API to delete post.
      this.toastr.success(post.postName + " successfully deleted!"); // Alert message will show up when post successfully deleted.
    }
  }
}
