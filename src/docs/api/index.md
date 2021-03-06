---
sidebar: auto
footer: Apache 2.0 Licensed | Copyright © 2018-present Matthias Hryniszak
---

# Defocuser

## `addElement`

To use the Defocuser all you have to do is create an instance of the ```Defocuser``` class and then
call the ```addElement``` method. This method takes 5 parameters:

* ```el``` - that is the root of your dropdown
* ```phase``` - that should be either ```capture``` or ```bubbling```
* ```callback``` - that is the callback called when the situation that the user clicked outside
* ```stopPropagation``` - when handling the ```keydown``` or ```click``` events call ```e.stopPropagation()``` (default: `false`)
* ```preventDefault``` - when handling the ```keydown``` or ```click``` events call ```e.preventDefault()``` (default: `false`)

## `setSecondaryElement`

If for some reason there is an additional element (like an input or label that you use to toggle
your dropdow) ```Defocuser``` has you covered with the ```setSecondaryElement``` method that takes
the following parameters:

* ```el``` - that is the root of your dropdown (primary)
* ```secondary``` - that additional element to be taken into account when checking if the actioned
element is _inside_ or _outside_ of the dropdown

## Remarks

```Defocuser``` internally uses ```MutationObserver``` to detect when the element has been removed from
the DOM. So you should physically remove the element to clean things up.
