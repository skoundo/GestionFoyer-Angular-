import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreDeleteComponent } from './chambre-delete.component';

describe('ChambreDeleteComponent', () => {
  let component: ChambreDeleteComponent;
  let fixture: ComponentFixture<ChambreDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
