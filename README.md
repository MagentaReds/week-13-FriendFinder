# week-13-FriendFinder

The web app stores the list of friends in as comma seperated json objects in list.json.  This makes list.json not a true json object file, since it isn't a valid object.  However, storing it like this makes it easy to add new people to the FriendList because we can just append their JSON.stringify representation to the file instead of rewriting the whole thing everytime someone is added.  As a side result, when we read in the when we launch the web app, we have to modify the string read to include the '[' ']' around FS.readFile's output when we JSON.parse the string to load it as an FriendList's internal array.

## Notes:

I used the sample page for most of my html and javascript in order to test out my backend code faster.  If I have the time, I want to remake the pages using my own styling and questions.

