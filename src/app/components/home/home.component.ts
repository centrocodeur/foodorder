import {Component, Input, OnInit} from '@angular/core';
import {FoodService} from "../../services/food/food.service";
import {Foods} from "../../shared/models/food";
import {StarRatingComponent} from "ng-starrating";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  faStart =faStar;

  @Input() rating: number =0;


  foods: Foods []= [];
  constructor(private fs: FoodService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params["tag"])
        this.foods=this.fs.getAllFoodByTag(params["tag"]);
      else
        this.foods = this.fs.getAll(); // done
    })
    //this.foods = this.fs.getAll();
  }

  setRating(value: number){
    this.rating= value;
  }

}
