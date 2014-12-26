function DelClass(msj) {
	this.MSJ=msj;
}
DelClass.prototype.hola = function() {
	
	console.log(this.MSJ);
};
module.exports = DelClass;