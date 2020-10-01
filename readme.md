


vektroid

Show
readme.md
success: Connected
Prerequisites
You'll need:

-A Discord account -Permission to add accounts to a server, or your own server

Steps to set up:
-Create an App here: https://discordapp.com/developers/applications/me -Create an App Bot User for your App by clicking "Create a Bot User" -Add the App Bot User to your Discord server using this link: https://discordapp.com/oauth2/authorize?&client_id=<CLIENT ID>&scope=bot&permissions=0 replacing <CLIENT_ID> with the Client ID found on the page of your App -Set the DISCORD_BOT_ID value in .env using the Bot User token ("click to reveal" in the App page under the bot username)

The code:
Check out server.js to see how it works ✨

We're using the Eris library to interact with the Discord API.

If it's working you should see "Ready!" in the logs.

Please do not feed the pikachu
quu..__ $$$b ---.__ "$$b--. .---uuudP $$b..------._ __.---' $$$$" . "$b -' -.-' $$$" .'| ". d$" _.' |. / ..." .' | ./ ..::-' _.' | / .:::-' .-' .' : ::''\ _.' | .' .-. .-.. .' | : /'$$| .@"$\ . .' _.-' .'|$u$$| |$$,$$| | < _.-' |:$$:' :$$$$$: .. .-' : "--' |-.
:##. == .###. .. \ |##: :###: | > > |#'..'..'###' x: / / \ xXX| / ./ \ xXXX'| / ./ /-.. / / : - ..........., | / .' | ``:::::::' . |<. | ``` | x| \ .:``. | .' /' xXX|:MM':. | | ; /:' xXXX'| -'MMMMM:' . .' : /:' |-'MMMM.-' | | .' /' .'MMM.-''' : ,' |MMM< |' |tbap
\ :MM.-' \ | .'' . . / / .:::::::.. : / | .:::::::::::. / | .:::------------\ / / .'' >::' / `',: : .'