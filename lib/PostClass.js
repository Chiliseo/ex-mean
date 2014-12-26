function PostClass(msj) {
	this.MSJ=msj;
}
PostClass.prototype.hola = function() {
	
	console.log(this.MSJ);
};
module.exports = PostClass;