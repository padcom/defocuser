---
sidebar: auto
footer: Apache 2.0 Licensed | Copyright © 2018-present Matthias Hryniszak
---

# Introduction

It has been way too many times when I implemented (with greater or lesser success) automated way
for closing dropdowns when clicking outside of them or by pressing the Escape key. This utility
is a way for me to stop repeating myself and have it working always the way it should.

# How it works

When a new instance of `Defocuser` is created it hooks itself to `document`'s `click` and `keydown` events.
When the user presses the `Escape` key or clicks anywhere defocuser checks if there are any elements
added to it using the `addElement` method. If that is the case it checks if the click happened within the
tree that has the `el` as parent. If that is the case it does nothing. However if the element clicked is not
within the currently actioned element on the page then the given callback is executed.

## Usage

```
import { Defocuser } from 'defocuser'
```

To use the Defocuser all you have to do is create an instance of the ```Defocuser``` class and then
call the ```addElement``` method. This method takes 5 parameters:

* ```el``` - that is the root of your dropdown
* ```phase``` - that should be either ```capture``` or ```bubbling```
* ```callback``` - that is the callback called when the situation that the user clicked outside
* ```stopPropagation``` - when handling the ```keydown``` or ```click``` events call ```e.stopPropagation()``` (default: `false`)
* ```preventDefault``` - when handling the ```keydown``` or ```click``` events call ```e.preventDefault()``` (default: `false`)

If for some reason there is an additional element (like an input or label that you use to toggle
your dropdow) ```Defocuser``` has you covered with the ```setSecondaryElement``` method that takes
the following parameters:

* ```el``` - that is the root of your dropdown (primary)
* ```secondary``` - that additional element to be taken into account when checking if the actioned
element is _inside_ or _outside_ of the dropdown

## Remarks

The ```Defocuser``` uses ```MutationObserver``` to detect when the element has been removed from
the DOM. So you should physically remove the element to clean things up.

Please see the following repository to see it in action used as a set of Vue directives

https://github.com/padcom/defocuser-example
