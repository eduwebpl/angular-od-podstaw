import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobarComponent } from './herobar.component';

describe('HerobarComponent', () => {
  let component: HerobarComponent;
  let fixture: ComponentFixture<HerobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
