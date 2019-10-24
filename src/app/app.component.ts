import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumer'
    },
    {
      name: 'Ordianteur',
      status: 'éteint'
    }
  ];

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer():void {
    console.log('On allume tout');
  }
}
