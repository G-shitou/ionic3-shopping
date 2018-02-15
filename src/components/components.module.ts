import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products';
@NgModule({
	declarations: [ProductsComponent],
	imports: [IonicModule],
	exports: [ProductsComponent]
})
export class ComponentsModule {}
