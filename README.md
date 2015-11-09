# Karrot CSS
Karrot responsive web css framework
## Documentation
###Containers
```HTML
<div class="container-960">
...
</div>

<div class="container-1200">
...
</div>
```
###Columns
```HTML
<div class="row">
  <div clas="col-3 tablet-6 mobile-block">
    <div>
      ...
    </div>
  </div>
  <div clas="col-3 tablet-6 mobile-block">
    <div>
      ...
    </div>
  </div>
  <div clas="col-6 tablet-12">
    <div>
      ...
    </div>
  </div>
</div>

```
###Navbar
```HTML
<div class="navbar">
  <div class="container-960">
    <a class="logo" href="#">Random Logo</a>
    <span onclick="toggle()" class='fa fa-bars pull-right'></span>
    <ul class="pull-right">
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
    </ul>
  </div>
  <ul id="mobile">
    <li><a href="#">Test</a></li>
    <li><a href="#">Test</a></li>
    <li><a href="#">Test</a></li>
  </ul>
</div>
```
###Buttons
```HTML
<!-- Standard buttons -->
<a class="button" href="#">Button element</a>
<button>Button element</button>
<input type="submit" value="Button element">
<input type="button" value="Button element">

<!-- primary buttons -->
<a class="button-primary" href="#">Button element</a>
<button class="button-primary">Button element</button>
<input class="button-primary" type="submit" value="Button element">
<input class="button-primary" type="button" value="Button element">

<!-- danger buttons -->
<a class="button-danger" href="#">Button element</a>
<button class="button-danger">Button element</button>
<input class="button-danger" type="submit" value="Button element">
<input class="button-danger" type="button" value="Button element">

<!-- warrning buttons -->
<a class="button-warrning" href="#">Button element</a>
<button class="button-warrning">Button element</button>
<input class="button-warrning" type="submit" value="Button element">
<input class="button-warrning" type="button" value="Button element">

<!-- success buttons -->
<a class="button-success" href="#">Button element</a>
<button class="button-success">Button element</button>
<input class="button-success" type="submit" value="Button element">
<input class="button-success" type="button" value="Button element">

<!-- disabled buttons -->
<a class="button-disabled" href="#">Button element</a>
<button class="button-disabled">Button element</button>
<input class="button-disabled" type="submit" value="Button element">
<input class="button-disabled" type="button" value="Button element">

<!-- rounded buttons -->
<button class="button-primary rounded">Button element</button>
```
###Utilities
####Positioning
```HTML
<a class="pull-left" href="#"></a>

<a class="pull-right" href="#"></a>
```
####Width modifiers
```HTML
<!-- width: 100% -->
<div class="container-full"></div>

<!-- max-width: 100% -->
<div class="container-fluid"></div>
```

####Responsive Image
```HTML
<img class="image-responsive" src="#" alt="">
```

####RWD Hide
```HTML
<img class="tablet-hide" src="#" alt="">

<img class="mobile-hide" src="#" alt="">
```
