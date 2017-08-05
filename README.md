#limitlessled

This is a simple project to test integration with Milight/LimitlessLED lights using nodejs and the [node-milight-promise](https://github.com/mwittig/node-milight-promise) module written by Marcus Wittig.

##Usage
The 'test' function can be used to send a sequence of commands to test that all the functions for a light are working.  You will need to update the configuration data within the file to match your set up based on whether you're using a legacy bridge or the newer version 6 bridge.  You will also need to update your IP address and the zone assigned to the light you are testing.  The file has been set up for an rgbw light.  The commands will need to be updated to match your light if you are not using an rgbw light.

The 'led' function allows you to send basic commands directly to the light for debug testing.  It can be invoked from the command line in the format of: node led [zone] [action].  For example 'node led 1 on' will turn on the light assigned to zone 1.  Once again, you will need to update the bridge type and IP address to match your set up.
