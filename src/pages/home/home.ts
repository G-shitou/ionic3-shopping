import { AppService, AppGlobal } from './../../app/app.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];
  len = 0;
  spinner1: boolean = true;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }
  constructor(public appService: AppService, public navCtrl: NavController) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      this.len = rs.data.length;
      this.spinner1 = false;
      console.log(this.slides);
    })
  }
  //获取分类
  getCategories() {
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      this.categories = rs.data;
      console.log(this.categories);
    })
  }
  //获取首页推荐列表
  getProducts() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
      console.log(this.products);
    })
  }
  //商品详情
  goDetails(item) {
    console.debug('go details...')
  }
  // 跳转到产品列表页
  goProductList(item) {
    this.navCtrl.push('ProductListPage', { item: item });
 }
}