import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailesComponent } from './blog-detailes.component';

describe('BlogDetailesComponent', () => {
  let component: BlogDetailesComponent;
  let fixture: ComponentFixture<BlogDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
