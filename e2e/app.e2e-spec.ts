import { LaminartePage } from './app.po';

describe('laminarte App', () => {
  let page: LaminartePage;

  beforeEach(() => {
    page = new LaminartePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
