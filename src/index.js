'use strict';

import logger from './log';
import first from './first.module';
import second from './second.module';
import third from './third.module';
import fourth from './first.module';
import Circle from './circle.module';

(function () {
    
    // 1
    // --
    logger.log('--------1--------');
    first.run();


    // 2
    // --
    logger.log('--------2--------');
    second.run();


    // 3
    // --
    logger.log('--------3--------');
    third.run();


    // 4
    // --
    logger.log('--------4--------');
    fourth.run();


    // 5
    // --
    logger.log('--------5--------');

    var circle1 = new Circle(10);

    logger.log('new circle1 object: ');
    logger.log(circle1);
    
    logger.log('circle1 area:');
    logger.log(circle1.area);

    logger.log('circle1 circumference:');
    logger.log(circle1.circumference);

})();