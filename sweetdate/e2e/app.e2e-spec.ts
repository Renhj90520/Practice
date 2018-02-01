import { SweetdatePage } from './app.po';

describe('sweetdate App', () => {
  let page: SweetdatePage;

  beforeEach(() => {
    page = new SweetdatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
