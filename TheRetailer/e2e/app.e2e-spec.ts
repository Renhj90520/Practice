import { TheRetailerPage } from './app.po';

describe('the-retailer App', () => {
  let page: TheRetailerPage;

  beforeEach(() => {
    page = new TheRetailerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
