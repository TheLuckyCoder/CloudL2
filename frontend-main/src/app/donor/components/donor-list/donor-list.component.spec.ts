import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorListComponent } from './donor-list.component';

describe('DonorListComponent', () => {
  let component: DonorListComponent;
  let fixture: ComponentFixture<DonorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorListComponent],
    });
    fixture = TestBed.createComponent(DonorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
