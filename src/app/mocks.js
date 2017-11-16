/* eslint-disable import/prefer-default-export, max-len */
// intended for any mocks i might make

// https://stackoverflow.com/questions/37566597/why-doesnt-includes-work-with-classlist
/**
 *  created on chrome console with

 var test = $$('.item').map(el => ({
   desc: el.querySelector('.item__details').textContent.trim(),
   backgroundImage: window.getComputedStyle(el).backgroundImage,
   sizeClass: [...el.classList].filter(c => c !== 'item')[0],
 }));

 test.forEach(io => io.imgsrc = io.backgroundImage.slice(5, io.backgroundImage.length - 2) )
 test.forEach(io => delete io.backgroundImage)

 copy(test)
 *
 *
 */

export const images = [
  {
    desc: 'jelly-o brownie sweet',
    imgsrc: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'Muffin jelly gingerbread',
    sizeClass: 'item--large',
    imgsrc: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'sesame snaps chocolate',
    sizeClass: 'item--medium',
    imgsrc: 'https://images.unsplash.com/photo-1422255198496-21531f12a6e8?dpr=2&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'Oat cake',
    sizeClass: 'item--large',
    imgsrc: 'https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'jujubes cheesecake',
    sizeClass: 'item--full',
    imgsrc: 'https://images.unsplash.com/photo-1476097297040-79e9e1603142?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'Dragée pudding brownie',
    sizeClass: 'item--medium',
    imgsrc: 'https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'Oat cake',
    sizeClass: 'item--large',
    imgsrc: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'powder toffee',
    imgsrc: 'https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'pudding cheesecake',
    sizeClass: 'item--medium',
    imgsrc: 'https://images.unsplash.com/photo-1422255198496-21531f12a6e8?dpr=2&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'toffee bear claw',
    sizeClass: 'item--large',
    imgsrc: 'https://images.unsplash.com/photo-1476097297040-79e9e1603142?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'cake cookie croissant',
    imgsrc: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'liquorice sweet roll',
    sizeClass: 'item--medium',
    imgsrc: 'https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'chocolate marzipan',
    sizeClass: 'item--medium',
    imgsrc: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'danish dessert lollipop',
    sizeClass: 'item--large',
    imgsrc: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
  {
    desc: 'sugar plum dragée',
    imgsrc: 'https://images.unsplash.com/photo-1476097297040-79e9e1603142?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  },
];
