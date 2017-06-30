import { Routing2Page } from './app.po';

describe('routing2 App', () => {
  let page: Routing2Page;

  beforeEach(() => {
    page = new Routing2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
