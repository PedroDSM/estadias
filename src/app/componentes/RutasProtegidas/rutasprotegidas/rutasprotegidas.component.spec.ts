import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasprotegidasComponent } from './rutasprotegidas.component';

describe('RutasprotegidasComponent', () => {
  let component: RutasprotegidasComponent;
  let fixture: ComponentFixture<RutasprotegidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasprotegidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasprotegidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
