import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrl: './searh.component.css'
})
export class SearhComponent implements OnInit{

  searchItem: string = '';

  constructor(private route: ActivatedRoute, private router:Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem= params['searchItem'];
    })
  }

  search(){
   if (this.searchItem)
     this.router.navigateByUrl('/search/'+ this.searchItem)
  }

}
