import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'products',
  templateUrl: 'products.html'
})
export class ProductsComponent {
  @Input() products: Array<any>;

  constructor(public navCtrl: NavController) {
    console.log('Hello ProductsComponent Component');
  }
  goDetails(item) {
    this.navCtrl.push('ProductDetailPage', { item: item });
  }
}
