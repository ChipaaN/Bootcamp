import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [
    {
      imgUrl: "../pictures/Cup.png",
      name: "Coffe Latte",
      price: 7.26
    },

    {
      imgUrl: "../pictures/Cup2.png",
      name: "Capuccino",
      price: 5.99
    },
    
    {
      imgUrl: "..pictures/Cup3.png",
      name: "Mocacchino",
      price: 9.99
    }
  ]
}
