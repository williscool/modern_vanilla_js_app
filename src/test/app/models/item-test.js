import Item from '../../../app/models/item';

describe('Item', () => {
  const testImgUrl = 'test.com';
  const item = new Item({
    imageUrl: testImgUrl,
    desc: 'description',
    sizeClass: 'large',
  });

  it('should properly create an item object', () => {
    expect(item.imageUrl).toBe('test.com');
    expect(item.desc).toBe('description');
    expect(item.sizeClass).toBe('large');
  });

  it('cssClasses', () => {
    expect(item.cssClasses()).toBe('item large');
  });

  it('backgroundImage', () => {
    expect(item.backgroundImage()).toBe(`url(${testImgUrl})`);
  });
});
