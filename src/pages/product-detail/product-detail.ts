import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ThemeableBrowser } from 'ionic-native';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  selectedItem: any;
  imgs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.get("item");
      if (this.selectedItem.SmallImages) {
          this.imgs = this.selectedItem.SmallImages;
      }
    console.log(this.selectedItem);
    console.log(this.imgs);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }
  // goBuy(){
  //   let options = {
  //     statusbar: {
  //         color: '#f8285c'
  //     },
  //     toolbar: {
  //         height: 44,
  //         color: '#f8285c'
  //     },
  //     title: {
  //         color: '#ffffffff',
  //         showPageTitle: true
  //     },
  //     backButton: {
  //         image: 'back',
  //         imagePressed: 'back_pressed',
  //         align: 'left',
  //         event: 'backPressed'
  //     },
  //     backButtonCanClose: true
  //   };
  //   new ThemeableBrowser(this.selectedItem.ClickUrl, '_blank',options);
  // }
}
