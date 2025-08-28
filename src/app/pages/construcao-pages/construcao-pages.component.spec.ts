import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucaoPagesComponent } from './construcao-pages.component';

describe('ConstrucaoPagesComponent', () => {
  let component: ConstrucaoPagesComponent;
  let fixture: ComponentFixture<ConstrucaoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstrucaoPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstrucaoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
