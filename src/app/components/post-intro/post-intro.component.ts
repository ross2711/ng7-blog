import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post-intro",
  templateUrl: "./post-intro.component.html",
  styleUrls: ["./post-intro.component.scss"]
})
export class PostIntroComponent implements OnInit {
  dataArray = [
    {
      date: "06 Jan",
      year: "2019",
      location: "Glasgow",
      image:
        "https://www.collegiate-ac.com/app/uploads/2017/10/hero-glasgow.jpg",
      titleText: "Title 1",
      descriptionText:
        "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore.",
      timeAgo: "1 month",
      readTime: "7",
      comments: "9"
    },
    {
      date: "07 Jan",
      year: "2019",
      location: "Barcelona",
      image:
        "https://s24890.pcdn.co/wp-content/uploads/2017/09/Barcelona-Best-Photo-Locations-2.jpg",
      titleText: "Title 2",
      descriptionText:
        "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore.",
      timeAgo: "2 months",
      readTime: "10",
      comments: "12"
    },
    {
      date: "08 Jan",
      year: "2019",
      location: "Madrid",
      image:
        "https://media.parkimeter.com/images/blog/high/aparcar-gran-via-madrid-deff0a7ed18c797e8011e6924f2dd2ff.jpg",
      titleText: "Title 3",
      descriptionText:
        "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore.",
      timeAgo: "3 months",
      readTime: "3",
      comments: "5"
    },
    {
      date: "09 Jan",
      year: "2019",
      location: "Cadiz",
      image:
        "http://www.cadizturismo.com/media/header_images/Playas_8_rounded_720_266_10x10x0x0_croped.jpg",
      titleText: "Title 4",
      descriptionText:
        "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore.",
      timeAgo: "4 months",
      readTime: "7",
      comments: "14"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
