import { EticaPage } from './app.po';

describe('etica App', function() {
  let page: EticaPage;

  beforeEach(() => {
    page = new EticaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
