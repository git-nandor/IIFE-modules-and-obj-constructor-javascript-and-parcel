'use strict';

import logger from './log';

// IIFE safe module
var fourth = (function () {

    // Laptop object constructor
    var Laptop = function (brand, emptySpace) {
        this.brand = brand;
        this.emptySpace = emptySpace;
        this.occupiedSpace = 0;
    }
    // Add new properties to object prototype
    Laptop.prototype.isTurnedOn = false;
    Laptop.prototype.isOpened = false;

    // Return run function for public usage
    return {
        run: function () {
            // Create prototype function to set this object instance properties
            Laptop.prototype.turnOn = function () {
                this.isTurnedOn = true;
                this.isOpened = true;
            }
            // Create objects with Laptop constructor
            var laptop1 = new Laptop('Lenovo', 1024);
            var laptop2 = new Laptop('Asus', 512);
            
            
            // Case 1
            logger.log('laptop1 and laptop2 objects: ');
            logger.log(laptop1);
            logger.log(laptop2);
            
            
            // Case 2
            // Setting object instance properties with turnOn prototype function
            laptop1.turnOn();
            
            logger.log('laptop1 and laptop2 objects: ');
            logger.log(laptop1);
            logger.log(laptop2);
    
            
            // Case 3
            logger.log('laptop1 and laptop2 objects own __proto__ is same? ');
            logger.log(laptop1.__proto__ === laptop2.__proto__);
    
            logger.log('laptop1 isTurnedOn property and laptop2 isTurnedOn property is same? ');
            logger.log(laptop1.isTurnedOn === laptop2.isTurnedOn);
    
       
            // Case 4
            logger.log("laptop1 has it's own isTurnedOn property? ");
            logger.log(laptop1.hasOwnProperty('isTurnedOn'));

            
            // Case 5
            for (var key in laptop1) {
                logger.log("---- it's own " + key + " property?");
                
                logger.log('in laptop1: ');
                logger.log(laptop1.hasOwnProperty(key));
                
                logger.log('in laptop2: ');
                logger.log(laptop2.hasOwnProperty(key));
            }
        }
    };
})();

export default fourth;