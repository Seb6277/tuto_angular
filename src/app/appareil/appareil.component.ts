import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {

  //appareilName: string = "Machine à laver";
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

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

  onSwitchOn():void {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff():void {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
