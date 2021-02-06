# DOM-to-React

It does what it says on the tin.

## Implementation

This library is basically a wrapper around `react-dom`'s render function to do some lifting for you in relation to loading attributes in as props.

## Usage

TL;DR - Function signature:
```ts
injectComponent(component: React.Component, element: Element, props = {}: Record<string, unknown>): void;
```

First include the package in your project:
```bash
npm i @nathandevuono/dom-to-react
```

Then use like this:

```js
import injectComponent from '@nathandevuono/dom-to-react';

import MyComponent from './components/MyComponent';

function injectMyComponent() {
    const myElement = document.querySelector('#my-element');

    injectComponent(MyComponent, myElement);
}

window.addEventListener("DOMContentLoaded", injectMyComponent);
```
