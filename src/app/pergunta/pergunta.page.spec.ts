import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerguntaPage } from './pergunta.page';

describe('PerguntaPage', () => {
  let component: PerguntaPage;
  let fixture: ComponentFixture<PerguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
