module.exports = function(app) {
    app.get('/formulario_adicionar_usuario', function(req,res){
        res.render("admin/adicionar_usuario");
    });
}