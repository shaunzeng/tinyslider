# tinyslider.js
A standalone JavaScript library that builds a slider. No jQuery or css required.

It is super easy to use tinyslider. Follow the html structure below to initialize tinySlider. You can have as many sliders as you want. The sliders will adjust itself to fit in your outter div width.

```html
<body>
  <div class="tinyslider">
    <div>
      //Your first slider content
    </div>
    
    <div>
      //Your second slider content
    </div>
    
    <div>
      //Your third slider content"
    </div>
    
    ...
  </div>
</body>

<script>
  tinyslider.init();
</script>

```

## init options
tinyslider.init() takes a few options

```js
tinyslider.init({
  themeColor:"" // a color, type : string
  onClick: function(){}, // a function, callback on Click
});
