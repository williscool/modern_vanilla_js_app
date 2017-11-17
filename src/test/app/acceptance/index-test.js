import Nightmare from 'nightmare';
import { WDS_PORT } from '../../../../src/config';

describe('When visiting the homepage', () => {
  test('the user can open the lighbox', async () => {
    const nightmare = Nightmare();

    nightmare
      .goto(`http://localhost:${WDS_PORT}/dist/`)
      .click('#item-0')
      .wait('.lbwojs.enabled') // make sure lightbox shows
      .evaluate(() => document.querySelector('.lbwojs .arrow.left').classList)
      .end()
      .then((classList) => {
        // expect first arrow to be hidden since its first image
        expect([classList]).toContain('hide');
      });
  });
});
