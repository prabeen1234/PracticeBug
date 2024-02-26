import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselItems = [
    {
      image: 'path/to/carousel1.jpg',
      alt: 'Carousel Image 1',
      title: 'Item 1',
      description: 'Description for Item 1.'
    },
    {
      image: 'path/to/carousel2.jpg',
      alt: 'Carousel Image 2',
      title: 'Item 2',
      description: 'Description for Item 2.'
    },
    {
      image: 'path/to/carousel3.jpg',
      alt: 'Carousel Image 3',
      title: 'Item 3',
      description: 'Description for Item 3.'
    },
    {
      image: 'path/to/carousel4.jpg',
      alt: 'Carousel Image 4',
      title: 'Item 4',
      description: 'Description for Item 4.'
    }
  ];

  activeIndex = 0;

  ngOnInit() {
    this.autoRotate();
  }

  autoRotate() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
    }, 5000); // Change slide every 5 seconds
  }

}
