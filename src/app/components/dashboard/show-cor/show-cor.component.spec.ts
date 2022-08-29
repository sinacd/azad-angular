import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCorComponent } from './show-cor.component';

describe('ShowCorComponent', () => {
  let component: ShowCorComponent;
  let fixture: ComponentFixture<ShowCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
