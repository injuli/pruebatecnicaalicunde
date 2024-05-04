import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProfileComponent } from './load-profile.component';

describe('LoadProfileComponent', () => {
  let component: LoadProfileComponent;
  let fixture: ComponentFixture<LoadProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});