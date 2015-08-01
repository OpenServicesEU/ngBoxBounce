/**
 * ngBoxBounce
 *
 * A directive to scroll the overflowing content of a box using CSS transformations and animations.
 *
 * @link https://github.com/OpenServicesEU/ngBoxBounce
 * @author Michael Fladischer <michael@openservices.at>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return factory(root.angular);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root.angular || (window && window.angular));
  } else {
    factory(root.angular);
  }
})(this, function (angular) {
  'use strict';

  angular.module('ngBoxBounce', [])
  .directive(
    'ngBoxBounce',
    [
      '$window',
      function(
        $window
      ) {
        return {
          restrict: 'A',
          priority: -1000,
          scope: {
            duration: '@',
            easing: '@'
          },
          transclude: true,
          link: function (scope, element, attrs, ctrl, transclude) {
            var container = angular.element('<div/>');
            transclude(scope.$parent, function(clone, scope) {
              container.append(clone);
            });
            element.addClass('ngBoxBounceWrapper');
            element.append(container);
            var resize = function() {
              if (element.prop('clientHeight') < container.prop('scrollHeight')) {
                var height = container.prop('scrollHeight') - element.prop('clientHeight');
                container.addClass('ngBoxBounceScroller');
                container
                  .css(
                    'height',
                    height + 'px'
                  )
                  .css(
                    'animation-duration',
                    angular.isDefined(scope.duration) ? scope.duration : '30s'
                  )
                  .css(
                    'animation-timing-function',
                    angular.isDefined(scope.easing) ? scope.easing : 'ease-in-out'
                  );
              } else {
                element.removeClass('ngBoxBounceScroller');
              }
            };
            container.find('img').on('load', resize);
            scope.$watchGroup(
              [
                function () { return element.prop('offsetHeight'); },
                function () { return container.prop('scrollHeight'); },
              ],
              resize
            );
            angular.element($window).on('resize', resize);
          }
        };
      }
    ]
  );
});
