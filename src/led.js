var Milight = require('node-milight-promise');
var commands = require('node-milight-promise').commands2; //commandsV6 or commands2 for legacy

var light = new Milight.MilightController({
        ip: "192.168.0.100",
        delayBetweenCommands: 75, // not required for V6
        commandRepeat: 2, // not required for V6
        type: 'legacy' //v6 or legacy
    }),

    zone = process.argv[2],
    action = process.argv[3];

switch (action) {

    case "on":
        light.sendCommands(commands.rgbw.on(zone), commands.rgbw.whiteMode(zone), commands.rgbw.brightness(100)); // V6 requires 2 parameters: zone, brightness value while legacy doesn't require the zone
        break;

    case "off":
        light.sendCommands(commands.rgbw.off(zone));
        break;

    case "dim":
    case "bright":
    case "brighten":
        light.sendCommands(commands.rgbw.brightness(zone, process.argv[4]));
        break;

}

light.close().then(function() {
    console.log("All command have been executed - closing Milight");
});
console.log("Invocation of asynchronous Milight commands done");