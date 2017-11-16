import Template from '../../../app/vanilla_framework/template';
import Item from '../../../app/models/item';

describe('Template', () => {
  const item = new Item({
    imageUrl: 'test.com',
    desc: 'description',
    sizeClass: 'large',
  });

  const testHTML = `<div class="${item.cssClasses()}" data-image-css-url="${item.backgroundImage()}">
  <div class="item__details">
    ${item.desc}
  </div>
</div>
`;

  it('should create item html', () => {
    expect(Template.itemHTML(item)).toBe(testHTML);
  });

  it('should create item list html', () => {
    expect(Template.itemListHTML([item, item, item])).toBe(testHTML + testHTML + testHTML);
  });
});
