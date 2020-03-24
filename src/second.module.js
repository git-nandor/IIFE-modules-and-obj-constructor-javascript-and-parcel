'use strict';

import logger from './log';

// IIFE safe module 
const second = (function () {

    var circle = {
        r: 10
    };

    Object.defineProperty(circle, 'area', {
        get: function () {
            return this.r * this.r * Math.PI;
        }
    });

    Object.defineProperty(circle, 'circumference', {
        get: function () {
            return 2 * this.r * Math.PI;
        }
    });

    // Return run function for public usage
    return {
        run: function () {

            // Case 1
            logger.log('circle object: ');
            logger.log(circle);

            // Case 2
            logger.log('get circle object r without getter: ');
            logger.log(circle.r);
            

            // Case 3
            logger.log('get circle area with getter: ');
            logger.log(circle.area);

            logger.log('get circle circumference with getter: ');
            logger.log(circle.circumference);
            
        }
    };
})();

export default second;