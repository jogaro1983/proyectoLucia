import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUpComponent } from './picture-up.component';

describe('PictureUpComponent', () => {
  let component: PictureUpComponent;
  let fixture: ComponentFixture<PictureUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
