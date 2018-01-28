import { WiseguysPage } from './app.po';

describe('wiseguys App', () => {
  let page: WiseguysPage;

  beforeEach(() => {
    page = new WiseguysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
