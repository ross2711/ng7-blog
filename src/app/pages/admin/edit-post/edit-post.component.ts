import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CrudService } from "../shared/crud.service";
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from "@angular/common"; // Location service is used to go back to previous component
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.scss"]
})
export class EditPostComponent implements OnInit {
  editForm: FormGroup; // Define FormGroup to post's edit form

  constructor(
    private crudApi: CrudService, // Inject CRUD API in constructor
    private fb: FormBuilder, // Inject Form Builder service for Reactive forms
    private location: Location, // Location service to go back to previous component
    private actRoute: ActivatedRoute, // Activated route to get the current component's inforamation
    private router: Router, // Router service to navigate to specific component
    private toastr: ToastrService // Toastr service for alert message
  ) {}

  ngOnInit() {
    this.updatePostData(); // Call updatePostData() as soon as the component is ready
    const id = this.actRoute.snapshot.paramMap.get("id"); // Getting current component's id or information using ActivatedRoute service
    this.crudApi
      .GetPost(id)
      .valueChanges()
      .subscribe(data => {
        this.editForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form
      });
  }

  // Accessing form control using getters
  get postName() {
    return this.editForm.get("postName");
  }

  get postDecription() {
    return this.editForm.get("postDecription");
  }

  get email() {
    return this.editForm.get("email");
  }

  get mobileNumber() {
    return this.editForm.get("mobileNumber");
  }

  // Contains Reactive Form logic
  updatePostData() {
    this.editForm = this.fb.group({
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

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  // Below methods fire when somebody click on submit button
  updateForm() {
    this.crudApi.UpdatePost(this.editForm.value); // Update post data using CRUD API
    this.toastr.success(
      this.editForm.controls["postName"].value + " updated successfully"
    ); // Show succes message when data is successfully submited
    this.router.navigate(["view-posts"]); // Navigate to post's list page when post data is updated
  }
}
