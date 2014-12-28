var express = require('express');
var app = express();
var swig = require('swig');
//init Router engine view and config
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(express.Router());

function GetClass() {
	
}

GetClass.prototype.mostrar = function(req,res) {
	
return res.render('index.html',{a:[{name:"Hola Fernando",
								email:"adrianochiliseo@hotmail.com",
								phone:"21020226",
								id:"1"},
								{name:"Adriano Chiliseo",
								email:"fernandochiliseo@hotmail.com",
								phone:"76862071",
								id:"2",
								},
								{
									name: "William Bonilla",
									email: "w.bonillasw@gmail.com",
									phone: "75268309",
									id:"3",
								}]});
	
};
module.exports = GetClass;