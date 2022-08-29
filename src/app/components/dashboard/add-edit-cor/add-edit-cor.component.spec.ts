import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCorComponent } from './add-edit-cor.component';

describe('AddEditCorComponent', () => {
  let component: AddEditCorComponent;
  let fixture: ComponentFixture<AddEditCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
