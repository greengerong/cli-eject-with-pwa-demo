import { EjectDemoPage } from './app.po';

describe('eject-demo App', () => {
  let page: EjectDemoPage;

  beforeEach(() => {
    page = new EjectDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
