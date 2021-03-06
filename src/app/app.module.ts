import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./components/header/header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AuthorComponent } from "./components/author/author.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { SearchComponent } from "./components/search/search.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BlogComponent } from "./pages/blog/blog.component";
import { PostComponent } from "./pages/post/post.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { LatestPostsComponent } from "./components/latest-posts/latest-posts.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { TagsComponent } from "./components/tags/tags.component";
import { PostFullComponent } from "./components/post-full/post-full.component";
import { PostIntroComponent } from "./components/post-intro/post-intro.component";

// Toaster for Alert Messages
import { ToastrModule } from "ngx-toastr";

// NGX Pagination
import { NgxPaginationModule } from "ngx-pagination";

// Firebase Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";

import { AdminComponent } from "./pages/admin/admin.component";
import { AddPostComponent } from "./pages/admin/add-post/add-post.component";
import { EditPostComponent } from "./pages/admin/edit-post/edit-post.component";
import { PostsListComponent } from "./pages/admin/posts-list/posts-list.component";
import { SideNavComponent } from "./pages/admin/side-nav/side-nav.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
    AuthorComponent,
    BlogsComponent,
    SearchComponent,
    BlogComponent,
    PostComponent,
    PaginationComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostIntroComponent,
    PostFullComponent,
    AdminComponent,
    AddPostComponent,
    EditPostComponent,
    PostsListComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module
    AngularFireDatabaseModule, // Firebase database module
    BrowserAnimationsModule, // Required animations module for Toastr
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true
    }),
    NgxPaginationModule // NGX pagination module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
