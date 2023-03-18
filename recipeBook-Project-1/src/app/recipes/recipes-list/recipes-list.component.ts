import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe("A simple test recipe", "Description test", "https://i2.wp.com/files.agro20.com.br/uploads/2020/03/comidabrasileira3.jpg?fit=1024%2C585&ssl=1")
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
