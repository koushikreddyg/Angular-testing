import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoushikComponent } from './koushik.component';

describe('KoushikComponent', () => {
  let component: KoushikComponent;
  let fixture: ComponentFixture<KoushikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoushikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoushikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
