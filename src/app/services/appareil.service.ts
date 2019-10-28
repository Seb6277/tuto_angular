export class AppareilService {

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

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumer';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number):void {
    this.appareils[index].status = 'allumer';
  }

  switchOffOne(index: number):void {
    this.appareils[index].status = 'éteint';
  }
}