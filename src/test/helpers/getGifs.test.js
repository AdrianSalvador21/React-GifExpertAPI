import {getGifs} from "../../helpers/getGifs";


describe('TEST -> getGifs.js', () => {
  test('should bring 10 elements', async () => {
    const gifs = await getGifs('goku');
    expect(gifs.length).toBe(10);
  });

  test('should bring 0 if category is empty', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
