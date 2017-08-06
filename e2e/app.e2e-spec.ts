import { NgRecipePage } from './app.po';

describe('ng-recipe App', () => {
  let page: NgRecipePage;

  beforeEach(() => {
    page = new NgRecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
