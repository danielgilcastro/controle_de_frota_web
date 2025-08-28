import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaErro404Component } from './tela-erro404.component';

describe('TelaErro404Component', () => {
  let component: TelaErro404Component;
  let fixture: ComponentFixture<TelaErro404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaErro404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaErro404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
