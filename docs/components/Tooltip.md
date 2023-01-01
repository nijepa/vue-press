# Tooltip

<hr>

## Import component
#### In HTML header:
```html
  <script type="importmap">
    {
      "imports": {
        "vue": "/scripts/path/to/vue.js"
      }
    }
  </script>
  <script type="module" crossorigin src="/scripts/path/to/tooltip.js"></script>
```

## Place component
#### in structure file (global component), with or without attributes:
```html
  <custom-tooltip />
  // OR
  <custom-tooltip
    size="is-large"
    background="black"
    color="white"
  />
```
## Reference and activate component
#### Component is automaticaly referenced on all html tags containing attribute `data-tooltip`.
#### This attribute is also used for passing content to the component
```html
  <img src="path" data-tooltip="Tooltip content" />
  // OR
  <button data-tooltip="Tooltip content">Action</button>
```
#### Set `is-active` attribute to `true` to show toast:
```js
  const showToast = () => {
    toast.setAttribute('is-active', 'true')
  }
```
## Passing data to component
### With attributes
#### We can use some helper function to pass all the attributes:
```js
  const setAttributes = (el, attrs) => {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
```
#### - *passing attributes example:*
```js
  const td = {
    title: 'some title',
    message: 'some message',
    type: 'info',
    position: 'center',
    decoration: false,
    colorized: false,
    backdrop: false,
    color: "#ffffff",
    font: "'Open Sans', sans-serif"
  }

  setAttributes(toast, td)
```
<hr>


### With props
#####   Set component attribute `toast-data` as JSON with following properties:
- ***`title`*** (String)
- ***`message`*** (String - *can be used html*)
- ***`type`*** (String - *info, success, error*)

#### - *passing content example*
```js
  const td = {
    title: 'some title',
    message: 'some message',
    type: 'info'
  }

  toast.setAttribute('toast-data', JSON.stringify(td))
```
##### Styles can be set by setting attribute `toast-style` as JSON with following properties:
 - ***`position`*** (String - *center, left-top, right-top, left-bottom, right-bottom*)
 - ***`decoration`*** (Boolean)
 - ***`backdrop`*** (Boolean)
 - ***`colorized`*** (Boolean)
 - ***`color`*** (String - *any color*)
 - ***`font`*** (String - *any font-family*)

#### - ***passing styles example:***
```js
  const ts = {
    position: 'center',
    decoration: false,
    colorized: false,
    backdrop: false,
    color: "#ffffff",
    font: "'Open Sans', sans-serif"
  }

  toast.setAttribute('toast-style', JSON.stringify(ts))
```
<hr>

## [Demo](./Tooltip-Demo.md)

<!-- <style scoped>
a {
  background: rgb(58, 166, 117);
  color: white;
  border: none;
  border-radius: 5px;
  padding: .5em;
  font-weight:700;
  font-size: 1.5em;
  cursor: pointer;
}
a:hover {
  background: rgba(58, 166, 117, 0.51);
}
a:hover {
  text-decoration: none !important;
}
</style> -->