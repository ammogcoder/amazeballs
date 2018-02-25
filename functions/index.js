const functions = require('firebase-functions');

exports.createBall = functions.firestore
  .document('balls/{ballId}')
  .onCreate(event => {
    var createdMessage = event.data.get('message');

    // this function will be run "at least once"
    if (createdMessage.indexOf(', yo!') > 0) return;

    return event.data.ref.set({
      message: createdMessage + ', yo!'
    }, {merge: true});
});