import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../services/food/food.service";
import {Carts} from "../../shared/models/Carts";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cart!: Carts;
}
