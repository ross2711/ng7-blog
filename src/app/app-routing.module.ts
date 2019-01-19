import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { PostComponent } from "./pages/post/post.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { AddPostComponent } from "./pages/admin/add-post/add-post.component";
import { PostsListComponent } from "./pages/admin/posts-list/posts-list.component";
import { EditPostComponent } from "./pages/admin/edit-post/edit-post.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "post", component: PostComponent },
  { path: "contact", component: ContactComponent },
  { path: "admin", component: AdminComponent },
  { path: "register-post", component: AddPostComponent },
  { path: "view-posts", component: PostsListComponent },
  { path: "edit-post/:id", component: EditPostComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
