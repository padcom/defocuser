---
sidebar: auto
footer: Apache 2.0 Licensed | Copyright © 2018-present Matthias Hryniszak
---

# Introduction

It has been way too many times when I implemented (with greater or lesser success) automated way
for closing dropdowns when clicking outside of them or by pressing the Escape key. This utility
is a way for me to stop repeating myself and have it working always the way it should.

## Usage

Let's assume you have an element on the page that acts as a popup, modal or dropdown of some kind.
Those elements usually go away once the user clicks outside of them or presses the `Escape` key.

```
<div id="popup">
  Lorem ipsum...
</div>

```

That is where `Defocuser` comes in. First you need to import it as a dependency. That can be done
either directly using a `<script>` tag:

```
<script src="https://unpkg.com/defocuser"></script>
```

or (if you're using some kind of build system like Webpack or Rollup) as an NPM dependency:

```
npm install --save-dev defocuser
```

and then import it in your source like this:

```
import Defocuser from 'defocuser'
```

Once you have decided which way you want to include it create an instance of `Defocuser` and add the root element of your dialog/popup/dropdown,
select the phase the callback should be called and provide the actual callback itself:

```
const popup = document.querySelector('#popup')
const defocuser = new Defocuser()
defocuser.addElement(, 'bubbling', () => { popup.remove() })
```

Please note the callback calls `remove()` on the popup effectively removing it from the DOM tree.
Defocuser interally uses `MutationObserver` and once it detects that the added node is removed
it is also removed from the internal state of defocuser.

It works this way because `Defocuser` is ready for stacked elements!
This means that if you have a modal that has a set of dropdowns that maybe have some other popups
`Defocuser` keeps tracl of all those elements and closes only the recent one! Just like you would expect!

## Special case

Sometimes there is more than one element that you would like to treat as part of your dialog.
Let's examine the following case:

```
<span id="input">My input</span>
<ul id="options">
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
</ul>
```

This if structure is dynamic and the element that actiones the dropdown is static you can set it to be
also taken into account when tracking user interactions:

```
const dropdown = document.querySelector('#options')
const secondary = document.querySelector('#input')
defocuser.setSecondaryElement(dropdown, secondary)
```

This way when `defocuser` checks if the click happened outside of your dropdown it will also take the `secondary` element into account
as though it would be inside of your dropdown.

It is especially usefull when your `input` steers some part of your dropdown (like selecting start and end date of a period of time).

## Remarks

The ```Defocuser``` uses ```MutationObserver``` to detect when the element has been removed from
the DOM. So you should physically remove the element to clean things up.
