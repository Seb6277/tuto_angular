export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumer'
    },
    {
      id: 3,
      name: 'Ordianteur',
      status: 'éteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

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