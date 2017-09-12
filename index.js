#! /usr/bin/env node --harmony

/*
breakmaster() {
	timeSpan = "$1";
	message = "$2";
	echo "Next walk: $(date -v+timeSpan +"%r")" | chalk bgYellow black

	while true; do
		sleep 2700 # wait 45 mins
        say "Dan, go for a damn walk!"
		echo "Dan, go for a damn walk!" | chalk bgRed white
        echo "Going to sleep now: $(date +"%r")" | chalk bgCyan white
        pmset sleepnow # puts the computer to sleep
        echo "Next walk: $(date -v+timeSpan +"%r")" | chalk bgYellow black
    done
}
*/

var shell = require('shelljs');
var commander = require('commander');
var chalk = require('chalk');
var env = process.platform;

commander
	.option('-t, --timeInterval <timeInterval>', 'The interval between breaks in milliseconds')
	.option('-m, --message <message>', 'The message Breakmaster should yell at you')
	.option('-s, --speak', 'Whether or not Breakmaster should speak to you')
	.action(function() {
		// all windows os return 'win32' from process.platform
		if ( env === "win32" ) {

		}
		else {
			console.log(chalk.bgYellow.black("hey?"));
			console.log(chalk.bgYellow.black(timeInterval));
			shell.exec('echo Next walk: $(date -v+timeInterval +"%r")" | chalk bgYellow black');

			// while true; do
			// 	sleep 2700 # wait 45 mins
		    //     say "Dan, go for a damn walk!"
			// 	echo "Dan, go for a damn walk!" | chalk bgRed white
		    //     echo "Going to sleep now: $(date +"%r")" | chalk bgCyan white
		    //     pmset sleepnow # puts the computer to sleep
		    //     echo "Next walk: $(date -v+timeSpan +"%r")" | chalk bgYellow black
		    // done
		}
	})
	.parse(process.argv);
