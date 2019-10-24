import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //appareilName: string = "Machine à laver";
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor():string {
    if (this.appareilStatus === 'allumer') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
}
