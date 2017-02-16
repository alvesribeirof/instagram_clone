module.exports.cadastro = function(application, req, res){
	res.render('cadastro/index', {validacao : {}, dadosForm : {}});
}

module.exports.cadastrar = function(application, req, res){

	var dadosForm = req.body;

	req.assert('nomeCompleto', 'Nome não pode ser vazio').notEmpty();
	req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio').notEmpty();
	req.assert('confirmaSenha', 'Confirme a senha não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro/index', {validacao : erros, dadosForm : dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.inserirUsuario(dadosForm);

  res.render('cadastro/cadastrado', {validacao : {}, dadosForm : {}});
}
