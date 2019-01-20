// Service
import { Injectable } from "@angular/core";
import { Post } from "./post"; // Post data type interface class
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "@angular/fire/database"; // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: "root"
})
export class CrudService {
  postsRef: AngularFireList<any>; // Reference to Post data list, its an Observable
  postRef: AngularFireObject<any>; // Reference to Post object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) {}

  // Create Post
  AddPost(post: Post) {
    this.postsRef.push({
      postName: post.postName,
      postDecription: post.postDecription,
      email: post.email,
      mobileNumber: post.mobileNumber
    });
  }

  // Fetch Single Post Object
  GetPost(id: string) {
    this.postRef = this.db.object("posts-list/" + id);
    return this.postRef;
  }

  // Fetch Posts List
  GetPostsList() {
    this.postsRef = this.db.list("posts-list");
    return this.postsRef;
  }

  // Update Post Object
  UpdatePost(post: Post) {
    this.postRef.update({
      postName: post.postName,
      postDecription: post.postDecription,
      email: post.email,
      mobileNumber: post.mobileNumber
    });
  }

  // Delete Post Object
  DeletePost(id: string) {
    this.postRef = this.db.object("posts-list/" + id);
    this.postRef.remove();
  }
}
