import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit {
  images = ['hamburg.jpg', 'kos.jpg', 'dänemark.jpg', 'rhodos2.jpg', 'hagenbeck.jpg', 'nordsee.jpg'];
  headlines = ['Visit buildings', 'Explore the world', 'Just relax...', 'Enjoy the moment', 'Discover new animals', 'Create memories'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
