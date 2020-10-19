import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MyChildComponent } from './my-child.component';

describe('MyChildComponent', () => {
  let component: MyChildComponent;
  let fixture: ComponentFixture<MyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChildComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  xit('should initializeDefaultValues', () => {
    fixture.detectChanges();
    expect(component.a).toBe(10)
    expect(component.b).toBe(2);
  });

  it('should add a & b - w/ default values', fakeAsync(() => {
    fixture.detectChanges();

    spyOn(component.addition, 'emit');
    component

    component.add();
    tick();
  
    expect(component.addition.emit).toHaveBeenCalledWith(component.a + component.b);
  }));

  it('should add a & b - with values from parent', fakeAsync(() => {

    component.a = 20;
    component.b = 5;
    fixture.detectChanges();

    spyOn(component.addition, 'emit');
    expect(component.a).toBe(20);
    expect(component.b).toBe(5);

    component.add();
    tick();
  
    expect(component.addition.emit).toHaveBeenCalledWith(component.a + component.b);
  }));

  it('should divide a & b', fakeAsync(() => {
    fixture.detectChanges();

    spyOn(component.division, 'emit');
    expect(component.a).toBe(10);
    expect(component.b).toBe(2);

    component.divide();
    tick();
    
    expect(component.division.emit).toHaveBeenCalledWith(component.a / component.b);
  }));

});
