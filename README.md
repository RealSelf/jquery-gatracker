jquery-gatracker
================

A JQuery plugin that enables Google Analytics event and page-view tracking on any page elements by simply declaring data attributes.

[Overview](#overview)  
[Installation](#installation)  
[Initialization](#initialization)  
[Usage](#usage)  
[Documentation](#documentation)  


## <a id="overview"></a>Overview
### Simplifying calls to _trackEvent

#### Turn this:

```html
<script type="text/javascript">
function trackGAEvent() {
  if (window._gaq) {
    _gaq.push(['_trackEvent', 'link-clicks', 'click']);
  }
}
</script>
...

<a href="http://www.example.com" onclick="trackGAEvent()">my link</a>

```

#### into this:
 ```html
<a href="http://www.example.com" data-gaevent data-gaevent-category="link-clicks">my link</a>
```

### Simplifying calls to _trackPageview

#### turn this:

```html
<script type="text/javascript">
function trackGAPageview() {
  if (window._gaq) {
    _gaq.push(['_trackPageview', 'http://www.example.com']);
  }
}
</script>
...

<a href="http://www.example.com" onclick="trackGAPageview()">my link</a>

```

#### into this:
```html
<a href="http://www.example.com" gapageview>my link</a>
```

## <a></a>Installation

To install the gatracker plugin, simply place the `jquery.gatracker.js` file in 
any location on your web server that can serve static resources (e.g. `/js/`)

## <a></a>Initialization

First, include a reference to the installed `jquery.gatracker.js` file in the `<head>` element of your HTML file:

```html
<script type="text/javascript" src="/js/jquery.gatracker.js"></script>
```

Second, initialize the plugin just as you would any other JQuery plugin:

```html
<script type="text/javascript">
  $(document).ready( function() {
      $(this).gatracker();
  });
</script>

```
## <a></a>Usage

### Tracking Events
Once the plugin has been initialized, you can enable tracking events on any given page element by simply adding two attributes:
`data-gaevent` to designate the element as trackable and `data-gaevent-category="some event category"` to desinate the GA event category to use.
Unless otherwise specified, the tracked event will be recorded at the time of the "click" event for the element. (see [Documentation](#documentation) below)

```html
<a href="http://www.example.com" data-gaevent data-gaevent-category="link-clicks">my link</a>
```

### Tracking Virtual Pageviews
Once the plugin has been initialized, you can enable crating virtual pageviews based on a click event in the UI by simply adding a `gapageview` attribute to any page element.  
Unless otherwise specified, the tracked event will be recorded at the time of the "click" event for the element. (see [Documentation](#documentation) below)


```
<a href="http://www.example.com" gapageview>my link</a>
```

## <a></a>Documentation

Some documentation on options