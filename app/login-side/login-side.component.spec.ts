import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSideComponent } from './login-side.component';

describe('LoginSideComponent', () => {
  let component: LoginSideComponent;
  let fixture: ComponentFixture<LoginSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
