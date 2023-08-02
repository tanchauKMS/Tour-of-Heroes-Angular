import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroViewsComponent } from './hero-views.component';

describe('HeroViewsComponent', () => {
  let component: HeroViewsComponent;
  let fixture: ComponentFixture<HeroViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroViewsComponent]
    });
    fixture = TestBed.createComponent(HeroViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
