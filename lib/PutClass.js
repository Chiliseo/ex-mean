function PutClass(msj) {
	this.MSJ=msj;
}
PutClass.prototype.hola = function() {
	
	console.log(this.MSJ);
};
module.exports = PutClass;