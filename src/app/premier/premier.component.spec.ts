import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComponent } from './premier.component';
import { createComponent } from '@angular/compiler/src/core';

describe('PremierComponent', () => {
  let component: PremierComponent;
  let fixture: ComponentFixture<PremierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display working message', () => {
    const fixture = TestBed.createComponent(PremierComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('premier works!')
  })
});
