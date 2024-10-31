import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {RatingModule} from "ng-starrating";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { SearhComponent } from './components/searh/searh.component';
import { TagsComponent } from './components/tags/tags.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StartRatingComponent,
    SearhComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
     // RatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
