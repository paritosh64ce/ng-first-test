import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMathHttpService } from './my-math-http.service';
import { MyServiceCallingComponent } from './my-service-calling.component';

// #region mocked classes

class MockedMathHttpService {
  get() {}
  post() {}
}

// #endregion


describe('MyServiceCallingComponent', () => {
  let component: MyServiceCallingComponent;
  let fixture: ComponentFixture<MyServiceCallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceCallingComponent ],
      providers: [
        { provide: MyMathHttpService, useClass: MockedMathHttpService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
