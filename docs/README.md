<!-- ---
home: true
heroText: Cadooz
heroImage: /nipa.png
actionText: Get Started →
actionLink: ./components/Tooltip.md
features:
  - title: Vite
    details: <a href="../components/Tooltip.md">Minimal setup with markdown-centered project structure helps you focus on writing.</a>
  - title: Vue3
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2022-present Cadooz
--- -->
# cadooz
#### web-components
#### (standalone web components made with Vite & Vue3)
<hr><br>

#### [Toast](../components/Toast.md) <Badge type="tip" text="v1" vertical="top" />
- global component
- can receive props or attributes
- props: title, message, position, text color, font, decoration, backdrop, type
#### [Datepicker](../components/Datepicker.md) <Badge type="tip" text="v1" vertical="top" />
- local web element
- props: start date, end date
- returns selected value
#### [Tooltip](../components/Tooltip.md) <Badge type="tip" text="v1" vertical="top" />
- global component
- global props
- individual props (every place of apperience) can overwrite global ones
- props: label, size, position, text color, font, background, radius, shadow
<br><br><br>
<a class="button" href="./demo.html">Demo &#10139;</a>

<style>
.button {
  background: rgb(58, 166, 117);
  color: white;
  border: none;
  border-radius: 5px;
  padding: .5em;
  font-weight:700;
  font-size: 1.5em;
  cursor: pointer;
}
.button:hover {
  background: rgba(58, 166, 117, 0.51);
}
a:hover {
  text-decoration: none !important;
}
</style>