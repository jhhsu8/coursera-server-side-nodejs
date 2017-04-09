# coursera-server-side-nodejs

week 1: I designed and made use of Node modules within a Node.js HTTP server 
and used the Express router ('dishRouter.js', 'leaderRouter.js', 'promoRouter.js')
to support a REST API.

week 2: I explored the Mongoose object data modeling (ODM) and created schemas ('dishes.js',
'leadership.js', and 'promotions.js') and interacted with the MongoDB database using Mongoose methods.

week 3: I created two categories of users (End users and administrators),
created a new function within the 'verify.js' file to check whether the user is an admin or not, 
restricted certain operations on the rest API only to admin users ('dishRouter.js', 'leaderRouter.js', 'promoRouter.js'), 
supported the querying of user information ('users.js'), which is only allowed for administrators.

week 4: I created a way of allowing users to mark some of the dishes as their favorite dishes, listing the favorite dishes 
for a user, allowing the user to delete dishes from their favorite dishes and manage the list
of their favorite dishes.  I used Mongoose population to populate information in a document ('favoriteRouter.js') 
from a referenced document ('favorites.js').
