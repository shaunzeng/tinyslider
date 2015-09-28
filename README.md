# tinyslider.js
A standalone JavaScript micro-library that builds a slider quickly. No jQuery or css required.

It is very easy to use tinyslider. Follow the html structure below, and iniatite tinyslider, then you will have a slider in just 
a second. You can have as many sliders as you want, it will adjust itself to fit in your outter div width.

```html
<body>
  <div class=""tinyslider>
    <div>
      "Your first slider content"
    </div>
    
    <div>
      "Your second slider content"
    </div>
    
    <div>
      "Your third slider content"
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
  onClick: function(){}, // a function(), when the pager is cliked 
});
