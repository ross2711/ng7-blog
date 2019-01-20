import { Component, OnInit } from "@angular/core";
import { CrudService } from "../shared/crud.service"; // CRUD services API
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms"; // Reactive form services

import { ToastrService } from "ngx-toastr"; // Alert message using NGX toastr

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"]
})
export class AddPostComponent implements OnInit {
  public postForm: FormGroup; // Define FormGroup to post's form

  constructor(
    public crudApi: CrudService, // CRUD API services
    public fb: FormBuilder, // Form Builder service for Reactive forms
    public toastr: ToastrService // Toastr service for alert message
  ) {}

  ngOnInit() {
    this.crudApi.GetPostsList(); // Call GetPostsList() before main form is being called
    this.studenForm(); // Call post form when component is ready
  }

  // Reactive post form
  studenForm() {
    this.postForm = this.fb.group({
      postName: ["", [Validators.required, Validators.minLength(2)]],
      postDecription: [""],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]
      ],
      mobileNumber: ["", [Validators.required, Validators.pattern("^[0-9]+$")]]
    });
  }

  // Accessing form control using getters
  get postName() {
    return this.postForm.get("postName");
  }

  get postDecription() {
    return this.postForm.get("postDecription");
  }

  get email() {
    return this.postForm.get("email");
  }

  get mobileNumber() {
    return this.postForm.get("mobileNumber");
  }

  // Reset post form's values
  ResetForm() {
    this.postForm.reset();
  }

  submitPostData() {
    this.crudApi.AddPost(this.postForm.value); // Submit post data using CRUD API
    this.toastr.success(
      this.postForm.controls["postName"].value + " successfully added!"
    ); // Show success message when data is successfully submited
    this.ResetForm(); // Reset form when clicked on reset button
  }
}
