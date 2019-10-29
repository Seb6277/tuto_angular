import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {}

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

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
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number):void {
    this.appareils[index].status = 'allumer';
    this.emitAppareilSubject();
  }

  switchOffOne(index: number):void {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string):void {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    }
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient
      .put('https://http-client-demo-95a21.firebaseio.com/appareil.json', this.appareils)
      .subscribe(
        () => {
          console.log('enregistrement terminer !');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! ' + error);
        }
      )
  }

  getAppareilFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-95a21.firebaseio.com/appareil.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement ! ' + error);
        }
      );
  }
}