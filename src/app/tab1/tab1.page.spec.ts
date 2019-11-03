import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot()],
      providers: [ NavController ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create Tab1Page / Home Page.', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the page title Super4caster', () => {
    // tslint:disable-next-line:no-string-literal
    expect(component['title']).toEqual('Super4caster');
  });
});
