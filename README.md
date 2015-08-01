ngBoxBounce
===========

[![Build Status](https://travis-ci.org/OpenServicesEU/ngBoxBounce.svg?branch=master)](https://travis-ci.org/OpenServicesEU/ngBoxBounce)

Angular.js directive that automatically scrolls the content inside the box it
was applied to along the vertical axis. This only happens if the content
overflows its parent box.

It does so by applying CSS 2D transformations along the Y-axis. For browser
compatibility see caniuse.com on
[2D Transforms](http://caniuse.com/#feat=transforms2d) and [CSS
animations](http://caniuse.com/#feat=css-animation).

Getting started
---------------

 * Include the script on your page after the AngularJS tag:

        <script type='text/javascript' src='path/to/angular.min.js'></script>
        <script type='text/javascript' src='path/to/ng-boxbounce.min.js'></script>

 * Ensure that your application module specifies ngBoxBounce as a dependency:

        var app = angular.module('myApplication', ['ngBoxBounce']);


* Apply the directive to any box that potentially has an overflow and a fixed
    height.

        <div ng-box-bounce>
          <!-- content to be scrolled -->
        </div>

### Duration

The duration of the animation can be controlled by binding the `duration`
attribute:

        <div ng-box-bounce duration="{{ time }}">
          <!-- content to be scrolled -->
        </div>

### Easing function

The easing function can be defined by binding its name to the `easing`
attribute:

        <div ng-box-bounce easing="{{ name }}">
          <!-- content to be scrolled -->
        </div>

See the CSS property
[animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
for a complete list of possible names and combinations.

License
-------

**ngBoxBounce** is licensed under the MIT license. See the LICENSE file for more details.
