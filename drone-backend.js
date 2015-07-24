var Cylon = require('cylon');
var ws = require('nodejs-websocket');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {
    bot = robot;
    //bot.nav.on("navdata", function(data) {
        //console.log(data);
    //});
    bot.drone.config('general:navdata_demo', 'TRUE');
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    bot.drone.left(0.2);
    after(0.85*1000, function() {
       bot.drone.front(0.4);
    });
    after(1.8*1000, function() {
        bot.drone.right(0.4);
    });
    after(2.65*1000, function() {
        bot.drone.back(0.4);
    });
    after(3.5*1000, function() {
        bot.drone.left(0.4);
    });
    after(3.8*1000, function() {
        bot.drone.land();
});
    after(4.1*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();


