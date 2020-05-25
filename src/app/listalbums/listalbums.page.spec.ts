import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListalbumsPage } from './listalbums.page';

describe('ListalbumsPage', () => {
  let component: ListalbumsPage;
  let fixture: ComponentFixture<ListalbumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalbumsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListalbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
