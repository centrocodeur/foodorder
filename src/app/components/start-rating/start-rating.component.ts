import { Component } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.css'
})
export class StartRatingComponent {
  faStart =faStar;

}
