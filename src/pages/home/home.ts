import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Dos maneras de hacer Live Databinding (en el template html)
  // .-  property={{value}}
  // .-  [property]="value"


  srcImgBook = 'http://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png';

  book = {
    name: "Els morts no parlen",
    author: "Miquel Aguirre",
  };
    
  
  constructor(public navCtrl: NavController) {
    // Cambiamos por interpolación un valor de un atributo de un objeto: book.name
    setTimeout(x => this.book.name = 'Segon llibre', 5000);
    // Cambiamos por interpolación el valor del src de una imagen
    setTimeout(x => this.srcImgBook = 'http://www.freeiconspng.com/uploads/book-stack-icon--icon-search-engine-16.png', 5000);
  }

  // Idem para colores de textos. Cuando cambia el valor de un atributo, le cambiamos el color.
  // Es posible hacer un Data bindind de un String. En el template:  [style.color]="color(book.name)"
  color (val:String):String {
    if (val == "Els morts no parlen") {
      return 'pink';
    } else {
      return 'blue';
    }
  }

  // ó de un objeto. En el template: [ngStyle]="colorStyle(book.name)"
  colorStyle (val:String):Object {
    if (val == "Els morts no parlen") {
      return {color: 'orange'};
    } else {
      return {color: 'cyan'};
    }
  }

  // Event binding
  onClick ($event) {
    console.log('Click:'+ $event)
  }

  search($event) {
    console.log($event)
  }
}

