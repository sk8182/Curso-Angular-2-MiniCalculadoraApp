import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  suma():void{

    this.resultado=this.numero1+this.numero2;

  }

  resta():void{

    this.resultado=this.numero1-this.numero2;

  }

  multiplica():void{

    this.resultado=this.numero1*this.numero2;

  }

  divide():void{

    this.resultado=this.numero1/this.numero2;

  }

}
