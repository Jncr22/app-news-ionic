import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
import { NewsService } from '../api.service';
import { ArticleDetailsPage } from '../pages/article-details/article-details.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  swiperOptions = {
    direction: 'horizontal', 
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 7,
    pagination: true,
    freeMode: true,
    autoplay: {
      speed: 3000,
      delay: 1,
      disableOnInteraction: true // Continue autoplay after user interactions
    },
    loop: true,
    freeModeMomentum: false
  };

  
  articles: any[] = [];

  constructor(private newsService: NewsService, private modalController: ModalController , private menuController: MenuController) { }

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe(data => {
      this.articles = data.articles;
    });
  }

  ionViewDidEnter() {
    this.menuController.swipeGesture(false); // Disable swipe gesture when view enters
  }

  ionViewWillLeave() {
    this.menuController.swipeGesture(true); // Enable swipe gesture when view leaves
  }
  

  async showArticleDetails(article: any) {
    const modal = await this.modalController.create({
      component: ArticleDetailsPage,
      componentProps: {
        'article': article
      }
    });
    return await modal.present();
}

  
}

