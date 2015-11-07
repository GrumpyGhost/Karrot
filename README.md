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
  <div clas="col six">
    <div>
      ...
    </div>
  </div>
  <div clas="col six">
    <div>
      ...
    </div>
  </div>
</div>

etc.
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
###Utilities
####Positioning
```HTML
<a class="pull left" href="#"></a>

<a class="pull right" href="#"></a>
```
####Width modifiers
```HTML
<div class="container-full"></div>
//width:100%;

<div class="container-fluid"></div>
//max-width:100%;
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
