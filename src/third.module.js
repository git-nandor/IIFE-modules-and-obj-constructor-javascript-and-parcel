'use strict';

import logger from './log';

// IIFE safe module
const third = (function () {

    // Laptop object constructor
    var Laptop = function (brand, emptySpace) {
        this.brand = brand;
        this.emptySpace = emptySpace;
        this.occupiedSpace = 0;
        this.isTurnedOn = false;
        this.isOpened = false;
    }

    // Return run function for public usage
    return {
        run: function () {

            // Case 1
            var laptopA = new Laptop('Lenovo', 1024);

            logger.log('laptopA object: ');
            logger.log(laptopA);
            

            // Case 2
            var laptopB = {};

            logger.log('laptopB object: ');
            logger.log(laptopB);

            // Use Laptop object constructor and prototype to setup laptopB object
            Laptop.call(laptopB, 'Lenovo', 1024);
            laptopB.__proto__ = Laptop.prototype;

            logger.log('laptopB object: ');
            logger.log(laptopB);
        }
    };

})();

export default third;