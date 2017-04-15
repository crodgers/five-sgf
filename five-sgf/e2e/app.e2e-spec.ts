import { FiveSgfPage } from './app.po';

describe('five-sgf App', () => {
  let page: FiveSgfPage;

  beforeEach(() => {
    page = new FiveSgfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
