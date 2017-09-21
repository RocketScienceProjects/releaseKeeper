# Release Keeper:

* It is a simple node.js app with express framework. The app is a webApp with REST services as well. CI server can POST data for various deployments & the Release Keeper will keep records on what package/artifacts were deployed to which environment.

* Release Keeper uses mongo database, to store persistent data

## Start the app locally
* Assuming you have an active local mongo daemon, `node app.js`
