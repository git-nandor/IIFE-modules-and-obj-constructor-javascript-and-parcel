'use strict';

import logger from './log';

// IIFE safe module
var Circle = (function () {

    // Circle object constructor
    var Circle = function(r) {
        this.radius = r;
    };
    
    // Create getters in Circle prototype for area and circumference calc.
    Object.defineProperties(
        Circle.prototype, {
            'area': {
               get: function() {
                   return this.radius * this.radius * Math.PI;
               }
            },
            'circumference': {
               get: function() {
                  return 2 * this.radius * Math.PI;
               }
            }
        }
    );
    // Return object constructor for public usage
    return Circle;
})();

export default Circle;