import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArticleListComponent } from './user-article-list.component';

describe('UserArticleListComponent', () => {
  let component: UserArticleListComponent;
  let fixture: ComponentFixture<UserArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserArticleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
