---
sidebar: auto
home: true
actionText: Get Started
actionLink: /guide/
features:
- title: Simplicity
  details: Quick setup, clear API
- title: Advanced features
  details: Works good out of the box and allows customization when you need it
- title: Small
  details: Build for both direct in-browser usage and as an NPM module for inclusion in your project
footer: Apache 2.0 Licensed | Copyright © 2018-present Matthias Hryniszak
---

### It's easy!

```
npm install --save-dev defocuser
```

or

```
<script src="https://unpkg.com/defocuser"></script>
```

and then use it on the element you want to track outside clicks of:

```
<div id="my-dropdown">....</div>

const defocuser = new Defocuser()
const el = document.querySelector('#my-dropdown')
defocuser.addElement(el, 'bubbling', () => console.log('Clicked outside of #my-div'))
```
