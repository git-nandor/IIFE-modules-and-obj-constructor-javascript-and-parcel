'use strict';

import logger from './log';

// IIFE safe module 
const first = (function () {

    function calcMin() {
        var min = null;
        
        logger.log('---- Arguments: ');
        logger.log(arguments);

        min = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            };
        };
        return min;
    }
    // Return run function for public usage
    return {
        run: function () {

            var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
            var otherNumbers = [1000];
            
            // Case 1
            var minimum = calcMin(1, 2, 3);
            logger.log('Smallest: ');
            logger.log(minimum);
            

            // Case 2
            var minValue1 = calcMin.call(null, numbers[0], numbers[1]);
            logger.log('Smallest: ');
            logger.log(minValue1);
            

            // Case 3
            var minValue2 = calcMin.apply(null, numbers);
            logger.log('Smallest: ');
            logger.log(minValue2);
            
            
            // Case 4
            otherNumbers.push.apply(otherNumbers, numbers);
            //otherNumbers.push(...numbers); // ES6
            
            var minValue3 = calcMin.apply(null, otherNumbers);
            logger.log('Smallest: ');
            logger.log(minValue3);    
        }
    };
})();

export default first;