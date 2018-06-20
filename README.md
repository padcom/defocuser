## Defocuser

It has been way too many times when I implemented (with greater or lesser success) automated way
for closing dropdowns when clicking outside of them or by pressing the Escape key. This utility
is a way for me to stop repeating myself and have it working always the way it should.

### Usage

To use the Defocuser all you have to do is create an instance of the ```Defocuser``` class and then
call the ```addElement``` method. This method takes 3 parameters:

* ```el``` - that is the root of your dropdown
* ```phase``` - that should be either ```capture``` or ```bubbling```
* ```callback``` - that is the callback called when the situation that the user clicked outside
of the root.

If for some reason there is an additional element (like an input or label that you use to toggle
your dropdow) ```Defocuser``` has you covered with the ```setSecondaryElement``` method that takes
the following parameters:

* ```el``` - that is the root of your dropdown (primary)
* ```secondary``` - that additional element to be taken into account when checking if the actioned
element is _inside_ or _outside_ of the dropdown

### Remarks

The ```Defocuser``` uses ```MutationObserver``` to detect when the element has been removed from
the DOM. So you should physically remove the element to clean things up.

There is a gist showing how to use the Defocuser with Vue:

https://gist.github.com/padcom/0a4e4699813d983fc76dfde29406f9e6
