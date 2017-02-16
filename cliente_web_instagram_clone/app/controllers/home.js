module.exports.home = function(application, req, res){
	res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

	if(req.session.autorizado !== true){
		res.send('Você precisa efetuar o login');
		return;
	}

	var msg = '';

	if(req.query.msg != ''){
		msg = req.query.msg;
	}

	var usuario = req.session.usuario;

	res.render('home/index');
}

module.exports.sair = function(application, req, res){
	req.session.destroy(function(err){
		res.render('index/index', {validacao: {}, usuario: {}, usuarioInvalido: {} });
	});
}
