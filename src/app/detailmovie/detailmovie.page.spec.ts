import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailmoviePage } from './detailmovie.page';

describe('DetailmoviePage', () => {
  let component: DetailmoviePage;
  let fixture: ComponentFixture<DetailmoviePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
