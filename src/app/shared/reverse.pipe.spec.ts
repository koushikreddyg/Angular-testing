import { ReversePipe } from './reverse.pipe';
import { DataService } from './../shared/data.service';

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';



describe('UserComponent', () => {
  
  it('should create a instance',()=>{
    let reversePipe=new ReversePipe()
    expect(reversePipe.transform('hello')).toBe('olleh')
  })
  
});
