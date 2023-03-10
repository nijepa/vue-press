# Toast

#### Vite, Vue3 web-component `custom-toast`
#### (standalone web component made with Vue3 & Vite)

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
  <script type="module" crossorigin src="/scripts/path/to/toast.js"></script>
```

## Place component
#### with or without attributes (named slot can be passed):
```html
  <custom-toast />
  // OR
  <custom-toast is-active toast-data toast-style>
    <span slot="additionalData">
      <h3>additional info in slot</h3>
      <p>tandar mandara broc</p>
    </span>
  </custom-toast>
```
## Reference and activate component
```js
  const toast = document.querySelector('custom-toast')
```
#### Set `is-active` attribute to `true` to show toast:
```js
  const showToast = () => {
    toast.setAttribute('is-active', 'true')
  }
```
## Listen to event `close-toast`
```js
  window.addEventListener('close-toast', toastClosed)

  const toastClosed = () => {
    toast.setAttribute('is-active', 'false')
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
??- ***`position`*** (String - *center, left-top, right-top, left-bottom, right-bottom*)
??- ***`decoration`*** (Boolean)
??- ***`backdrop`*** (Boolean)
??- ***`colorized`*** (Boolean)
??- ***`color`*** (String - *any color*)
??- ***`font`*** (String - *any font-family*)

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

## [Demo](./Toast-Demo.md)