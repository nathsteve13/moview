import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementMoviePage } from './management-movie.page';

describe('ManagementMoviePage', () => {
  let component: ManagementMoviePage;
  let fixture: ComponentFixture<ManagementMoviePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
