import { AlunosPage } from './app.po';

describe('alunos App', () => {
  let page: AlunosPage;

  beforeEach(() => {
    page = new AlunosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
