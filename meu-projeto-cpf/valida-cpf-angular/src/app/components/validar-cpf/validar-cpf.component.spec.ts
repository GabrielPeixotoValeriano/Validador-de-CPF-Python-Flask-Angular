import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCpfComponent } from './validar-cpf.component';

describe('ValidarCpfComponent', () => {
  let component: ValidarCpfComponent;
  let fixture: ComponentFixture<ValidarCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarCpfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
