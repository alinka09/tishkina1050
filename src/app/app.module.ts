import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { NewProductDataComponent } from './new-product-data/new-product-data.component';
import { SortPipe } from './shared/sort/sort.pipe';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ColorSortPipe } from './shared/color-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CatalogComponent,
    NewProductDataComponent,
    SortPipe,
    AddProductFormComponent,
    ColorSortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
