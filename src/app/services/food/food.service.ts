import { Injectable } from '@angular/core';
import {Foods} from "../../shared/models/food";
import {Tag} from "../../shared/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodByTag(tag: string):Foods[]{
    return tag=="ALl"?
      this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return [
      {name:'All', count:8},
      {name:'FastFood', count:6},
      {name:'Pizza', count:4},
      {name:'Lunch', count:3},
      {name:'SlowFood', count:2},
      {name:'Hamburger', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},

    ];


  }
  getAll(): Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        start: 4.5,
        imageUrl:'/assets/images/food1.jpg',
        tags:['FastFood', 'Pizza'],
      },

      {
        id: 2,
        name: 'Pizza lardon',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        start: 4.5,
        imageUrl: '/assets/images/food2.jpg',
        tags:['FastFood', 'Pizza', 'Lunch'],
      },

      {
        id: 3,
        name: 'Meatball',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origins: ['persia', 'middle east', 'china'],
        start: 4.7,
        imageUrl: '/assets/images/food3.jfif',
        tags:['FastFood', 'Pizza', 'Lunch'],
      },

      {
        id: 4,
        name: 'Hamberger biggmat',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origins: ['middle east'],
        start: 4.7,
        imageUrl: '/assets/images/food4.jpg',
        tags:['FastFood', 'Hamburger', 'Lunch'],
      },


      {
        id: 5,
        name: 'Hamberger chicken',
        cookTime: '10-20',
        price: 30,
        favorite: false,
        origins: ['middle east'],
        start: 4.7,
        imageUrl: '/assets/images/food5.jfif',
        tags:['FastFood', 'Hamburger', 'Lunch'],
      },

      {
        id: 6,
        name: 'Pizza chorizo',
        cookTime: '10-20',
        price: 12,
        favorite: false,
        origins: ['middle east'],
        start: 4.7,
        imageUrl: '/assets/images/food6.png',
        tags:['FastFood', 'Pizza', 'Lunch'],
      },

      {
        id: 7,
        name: 'Pizza vegetarienne',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['middle east'],
        start: 4.7,
        imageUrl: '/assets/images/food7.jpeg',
        tags:['FastFood', 'Pizza', 'Lunch'],
      },


      {
        id: 8,
        name: 'Pizza champignon',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['middle east'],
        start: 4.7,
        imageUrl: '/assets/images/food8.jfif',
        tags:['FastFood', 'Pizza', 'Lunch'],
      }

    ];

  }
}
