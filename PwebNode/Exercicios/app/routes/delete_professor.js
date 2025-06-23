module.exports = function(app){
    app.post('/professor/deletar', function(req,res){
     
      async function deleteProf(){
           try {
               let professor = req.body;
                
               let connection = app.config.dbConnection;
               const pool = await connection();
     
               let professoresModel = app.models.professorModel;
     
              professoresModel.deletarProfessor(professor,pool, (error, results)=>{
                  
                   if(error){
                   console.log('Erro ao deletar do banco:' + error);
                       res.status(500).send(error);
                   } else {
                       console.log('professor deletado!!!');
                       res.redirect('/admin/crud_professores');
                   }
               });
           } catch (error) {
               console.log(error);
           }
      }
      deleteProf();
    });
    }