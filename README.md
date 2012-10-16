jquery-gatracker
================

A JQuery plugin that enables Google Analytics event and page-view tracking on any page elements by simply declaring data attributes.

[Overview](#overview)  
[Installation](#install)  
[Initialization](#init)  
[Documentation](#docs)  


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

## <a id="install"></a>Installation

Some installation info

## <a id="init"></a>Initialization

Some initialization info

## <a id="docs"></a>Documentation

Some documentation on options