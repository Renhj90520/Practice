import { SistinaPage } from './app.po';

describe('sistina App', () => {
  let page: SistinaPage;

  beforeEach(() => {
    page = new SistinaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
