import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrellasComponent } from './estrellas.component';

describe('EstrellasComponent', () => {
  let component: EstrellasComponent;
  let fixture: ComponentFixture<EstrellasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrellasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
