import { AcctionPage } from './app.po';

describe('acction App', () => {
  let page: AcctionPage;

  beforeEach(() => {
    page = new AcctionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
