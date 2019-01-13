import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
// import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BlogComponent } from "./pages/blog/blog.component";
import { PostComponent } from "./pages/post/post.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { LatestPostsComponent } from "./components/latest-posts/latest-posts.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { TagsComponent } from "./components/tags/tags.component";
import { PostFullComponent } from "./components/post-full/post-full.component";
import { PostIntroComponent } from "./components/post-intro/post-intro.component";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

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
    PostFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // MatFormFieldModule,
    // MatInputModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
