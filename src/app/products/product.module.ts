import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConverToSpacesPipe } from './convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConverToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id',
      canActivate: [ProductDetailGuard],
       component: ProductDetailComponent},      
    ])
  ]
})
export class ProductModule { }
