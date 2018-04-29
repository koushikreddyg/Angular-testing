import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    })
  })
  it('should create a instance',()=>{
    let fixture= TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
  it('should should use username for the service',()=>{
    let fixture= TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let userService=fixture.debugElement.injector.get(UserService);
    fixture.detectChanges()
    expect(userService.user.name).toBe(app.user.name)
  })
  it('should should display user if user is logged in',()=>{
    let fixture= TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let userService=fixture.debugElement.injector.get(UserService);
    app.isLoggedIn=true;
    fixture.detectChanges();
    
    let compiled=fixture.debugElement.nativeElement;
    expect(userService.user.name).toBe(app.user.name);
    expect(compiled.querySelector('p').textContent).toContain(app.user.name)
  })
  it('should not display user if user is not logged in',()=>{
    let fixture= TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let userService=fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    let compiled=fixture.debugElement.nativeElement;
    expect(userService.user.name).toBe(app.user.name);
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name)
  })

  it('should not fetch data unsuccessfully if not async',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let dataService=fixture.debugElement.injector.get(DataService);
    let spy=spyOn(dataService,"getDetails").and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined)
  })

  it('should fetch data successfully if async',async(()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let dataService=fixture.debugElement.injector.get(DataService);
    let spy=spyOn(dataService,"getDetails").and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(app.data).toBe('Data')
    })
  }))

  it('should fetch data successfully if async',fakeAsync(()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let dataService=fixture.debugElement.injector.get(DataService);
    let spy=spyOn(dataService,"getDetails").and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data')
    
  }))
});
