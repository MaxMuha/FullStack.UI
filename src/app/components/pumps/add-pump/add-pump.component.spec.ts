import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPumpComponent } from './add-pump.component';

describe('AddPumpComponent', () => {
  let component: AddPumpComponent;
  let fixture: ComponentFixture<AddPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPumpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
