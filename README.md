# manhattan
Atomic react elements for styling and quick prototyping. This is probably a terrible idea.

[![Build Status](https://travis-ci.org/kdoh/manhattan.svg?branch=master)](https://travis-ci.org/kdoh/manhattan)
[![Code Climate](https://codeclimate.com/github/kdoh/manhattan/badges/gpa.svg)](https://codeclimate.com/github/kdoh/manhattan)

## install
```sh
$ npm i react-manhattan
```

## quick example

```js
import React from 'react'
import { Flex, TextCentered, TextRight } from 'react-manhattan'

const MyComponent = () =>
  <Flex>
    <TextCentered>Heya!</TextCentered>
    <TextRight>This text is so right aligned!</TextRight>
  </Flex>

export default MyComponent
```

## intro
Manhattan asks the question "can simple styling needs be easily fulfilled by importing and using a component rather than writing new CSS or styles in JS?"

Under the hood, Manhattan is really just a simple map between an atomic styling declaration and a React component. In general it follows the form

for a CSS declaration:
```css
 position: 'absolute'
```

we get a React component

```js
<Absolute>
  Heya. Look at me, I'm an absolutely positioned element
</Absolute>
```
which results in a DOM node that looks like

```html
<div style="position: 'absolute'">
  Heya. Look at me, I'm an absolutely positioned element
</div>
```

Components generally take the name of the css property value, but
for clarity sometimes part of the css property is included like in the case of ```<TextCentered>Text</TextCentered>```

## props
Manhattan components can also accept other styling props. These get merged with the originating styles. This is mostly for convenience. If you find yourself adding a ton of style properties to a Manhattan element then maybe reconsider using the element. Or not. It's your app, you do you.

## why?
if you're familiar with atomic classnames in css, they help a ton with keeping your css maintainable and make quick prototyping without side effects really easy.

a quick atomic classnames example:
```css
.flex { display: flex; }
/* a simple class for adding a level of margin on the x axis */
.mx1 {
  marginLeft: 1em;
  marginRight: 1em;
}
```

```html
<div class="flex">
  <div class="mx1">
    My very good content with left and right margin
  </div>
  <div>Some additional very good content</div>
</div>
```

## avaliable components
- Border
  - ```<Bordered />```
  - ```<BorderTop />```
  - ```<BorderBottom />```
- Display
  - ```<Block />```
  - ```<Flex />```
  - ```<None />```
- Margin
  - ```<M1 />```
  - ```<Mx1 />```
  - ```<My1 />```
- Position
  - ```<Relative />```
  - ```<Absolute />```
  - ```<Fixed />```
- TextAlignment
  - ```<TextLeft />```
  - ```<TextCentered />```
  - ```<TextRight />```


# open questions

- Are there enough cases where a single style property (or just one or two classes) is used that using a Manhattan component is worth it.
(Positioning contexts seem like a good example of when its particularly useful?)

- Since React is built for composition it feels natural to try and nest Manhattan components to achieve a desired style.
But obviously this results in un-necessary DOM to achieve the equivelant class based style. Do styling props provide enough of an escape hatch without adding too much complexity?

- How can we allow for customization of things like colors and text sizes on a global level?

- How much of this is really just a desire to make JSX look nicer by removing styling and className props?

# inspiration
A lot of this is inspired by the work of [Brent Jackson](http://jxnblk.com/), [Adam Morse](http://mrmrs.cc/), and [Pete Hunt](https://twitter.com/floydophone) and their projects [basscss](https://github.com/basscss/basscss), [tachyons](https://github.com/tachyons-css/tachyons), and [jsxtyle](https://github.com/petehunt/jsxstyle) respectively.

## hello yes I'm looking for more badges?
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# why is it named Manhattan?
Its a not so clever reference to the Manhattan project. (You probably already knew that)
