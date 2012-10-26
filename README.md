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

#### Into this:
 ```html
<a href="http://www.example.com" data-gaevent data-gaevent-category="link-clicks">my link</a>
```

### Simplifying calls to _trackPageview

#### Turn this:

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

#### Into this:
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

You can optionally override the default parameters for the plugin by passing one or more of them in to the initializer function.
```html
<script type="text/javascript">
  opts = {
    trackEvent: true, //enable event tracking
    trackEventEvent: 'click',  //default UI event on which event tracking should occur
    trackPageview: true,  //enable virtual pageview tracking
    trackPageViewEvent: 'click'  //default UI event on which virtual pageviews should be recorded
  };

  $(document).ready( function() {
      $(this).gatracker(opts);
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


```html
<a href="http://www.example.com" gapageview>my link</a>
```

## <a></a>Documentation

### Event Tracking Options
The following attributes may be used on any page element for which you would like to enable event tracking.  They correspond directly to the options one would normally pass to the GA API function [`_trackEvent`](https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking).

`data-gaevent` (required) - designates an element as trackable.  A value may be specified for this attribute if you wish to override the UI event on which the event should be recorded.  Any bindable JQuery event may be used (e.g. `mouseover`, etc.)   default = 'click'
 
`data-gaevent-category` (required) - the name of the event category to use for the tracked events

`data-gaevent-action` (optional) - the action name to use for the tracked events.  default = [value of `data-gaevent`]
 
`data-gaevent-label` (optional) - the label name to use for the event on this element.  default = ''
 
`data-gaevent-value` (optional) - the value to associate with the tracked event

### Virtual Pageview Options
The following attributes may be used on any page element for which you would like to record a virtual pageview.  See also [`_trackPageview`](https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration#_gat.GA_Tracker_._trackPageview) documentation.

`data-gapageview` (required) - designates an element as trackable.  A value may be specified for this attribute if you wish to overried the UI event on which the event should be recorded.  Any bindable JQuery event may be used (e.g. `mouseover`, etc.)   default = 'click'

`data-gapageview-url` (required/optional for anchor elements) - The pageview url to record.  If the current page element is an anchor tag and this attribute is not specified, the value of `href` attribute of the anchor tag will be used.