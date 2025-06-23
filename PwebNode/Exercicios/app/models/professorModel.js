let sql = require('mssql');
module.exports = function(){
   this.getProfessores = function(connection, callback){
       connection.query('select * from professores', callback);
   }
 
   this.getProfessor = function(connection, callback){
       connection.query('select * from professores WHERE id_professor=1', callback);
   }
 
this.getProfessorPorId = function(id_professor, connection, callback) {
       // Usando o padrão de request do 'mssql' para queries parametrizadas
       new sql.Request(connection)
           .input('id_professor', sql.Int, id_professor) // 'connection.Int' é um exemplo do tipo de dado, pode variar.
           .query('SELECT * FROM professores WHERE id_professor = @id_professor', callback);
   }
 
   this.salvarProfessor = function(professor, connection, callback) {
         
        new sql.Request(connection) // <- aqui está dando problema o drive é o ms sql
           .input('nome_professor', sql.NVarChar, professor.nome_professor) // Usar NVarChar para strings
           .input('email_professor', sql.NVarChar, professor.email_professor)
           .query('INSERT INTO professores (NOME_PROFESSOR, EMAIL_PROFESSOR) VALUES (@nome_professor, @email_professor)', callback);
   }
 
   this.deletarProfessor = function(professor, connection, callback) {
    new sql.Request(connection)
           .input('id_professor', sql.Int, professor.id_professor)
           .query('DELETE FROM professores WHERE ID_PROFESSOR = @id_professor', callback);
   }
 
   this.editarProfessor = function(professor, connection, callback) {
    new sql.Request(connection)
           .input('nome_professor', sql.NVarChar, professor.nome_professor)
           .input('email_professor', sql.NVarChar, professor.email_professor)
           .input('id_professor', sql.Int, professor.id_professor)
           .query('UPDATE professores SET NOME_PROFESSOR = @nome_professor, EMAIL_PROFESSOR = @email_professor WHERE ID_PROFESSOR = @id_professor', callback);
   }
   return this;
   
}