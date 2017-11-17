import Template from '../../../app/vanilla_framework/template';
import Item from '../../../app/models/item';

describe('Template', () => {
  const item = new Item({
    imageUrl: 'test.com',
    desc: 'description',
    sizeClass: 'large',
  });

  it('should create item html', () => {
    expect(Template.itemHTML(item)).toContain(item.cssClasses());
    expect(Template.itemHTML(item)).toContain(item.desc);
    expect(Template.itemHTML(item)).toContain(item.backgroundImage());
  });

  it('should create item list html', () => {
    // https://stackoverflow.com/questions/43390873/template-literal-inside-of-the-regex
    const testHTML = Template.itemListHTML([item, item, item]);
    expect(testHTML.match(new RegExp(item.cssClasses(), 'gi')).length).toBe(3);
    expect(testHTML.match(new RegExp(item.desc, 'gi')).length).toBe(3);
  });
});
