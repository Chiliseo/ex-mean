var db = require('db');

function PostClass(msj) {
	this.MSJ=msj;
}
PostClass.prototype.insert = function() {

	var insertDocuments = function(data, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insert([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
};
module.exports = PostClass;