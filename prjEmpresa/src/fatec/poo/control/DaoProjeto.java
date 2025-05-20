/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.poo.control;

import fatec.poo.model.Projeto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
/**
 *
 * @author 0030482321030
 */
public class DaoProjeto {
    private Connection Cone;
    
    public DaoProjeto(Connection Cone){
        this.Cone = Cone;
    }
    
    
}
