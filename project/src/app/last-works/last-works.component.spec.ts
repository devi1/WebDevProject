import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWorksComponent } from './last-works.component';

describe('LastWorksComponent', () => {
  let component: LastWorksComponent;
  let fixture: ComponentFixture<LastWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
