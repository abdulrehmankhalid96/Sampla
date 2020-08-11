import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBranchesReportComponent } from './all-branches-report.component';

describe('AllBranchesReportComponent', () => {
  let component: AllBranchesReportComponent;
  let fixture: ComponentFixture<AllBranchesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBranchesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBranchesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
