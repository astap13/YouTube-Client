/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetealedPageComponent } from './detealed-page.component';

describe('DetealedPageComponent', () => {
  let component: DetealedPageComponent;
  let fixture: ComponentFixture<DetealedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetealedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetealedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
