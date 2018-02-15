import { AppService, AppGlobal } from './../../app/app.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  hasmore = true;
  products: any;
  selectedItem: any;

  spinner1: boolean = true;

  params = {
    pageNo: 1,
    favoritesId: 0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
    this.selectedItem = this.navParams.get("item");
    this.params.favoritesId = this.selectedItem.FavoritesId;
  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }
  getFavoritesItems() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, d => {
      this.products = d.data;
      this.params.pageNo += 1;
      this.spinner1 = false;
    });
  }
  // 滚动到底部加载更多，或者提示无数据
  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }
    this.appService.httpGet(AppGlobal.API.getProducts,this.params, d => {
      if (d.data.length > 0) {
        this.products = this.products.concat(d.data);
        this.params.pageNo += 1;
      } else {
        this.hasmore = false;
        console.log("没有数据啦！")
      }
      infiniteScroll.complete();
    });
  }
}
