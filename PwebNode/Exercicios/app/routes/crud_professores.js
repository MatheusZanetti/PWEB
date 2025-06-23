module.exports = function(app){
    app.get('/admin/crud_professores', function(req,res){
       async function getProf() {
           try {
              let connection = app.config.dbConnection;
              const pool = await connection();
               let professoresModel = app.models.professorModel;
              professoresModel.getProfessores(pool, function(error, results){
                   res.render('admin/crud_professores', { profs : results.recordset });
               });
           } catch (err) {
               console.log(err)
           }
       }
       getProf();
    });
    }