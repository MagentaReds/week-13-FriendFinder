# week-13-FriendFinder

The web app stores the list of friends in as comma seperated json objects in list.json.  This makes list.json not a true json object file, since it isn't a valid object.  However, storing it like this makes it easy to add new people to the FriendList because we can just append their JSON.stringify representation to the file instead of rewriting the whole thing everytime someone is added.  As a side result, when we read in the when we launch the web app, we have to modify the string read to include the '[' ']' around FS.readFile's output when we JSON.parse the string to load it as an FriendList's internal array.

For importing the htmlRoutes and apiRoutes, I their module.exports as functions that take the app variable, instead of using a Router object and exporting that.  I did it this way because I did not quiet understand the Route object at the time and the function way worked well enough for this example solution.

## Notes:

Since this homework was to test us on back end web development, I used/copied most of the homework sample page html (with some small tweaks) in my solution.  All the backend code is my own, though.
One of the front end tweaks I did was expand the modal and also use it for error messages instead of using alerts.

