'use strict';

var Velocity = require('velocityjs');

(function() {
	

    var asts=Velocity.parse('Hello $name');
    var data = {
       name : "Ahmed"
    };
    var s = (new Velocity.Compile(asts)).render(data);
    console.log(s);
})();
