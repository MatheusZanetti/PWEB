/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.poo.control;


import fatec.poo.model.Departamento;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
/**
 *
 * @author 0030482321030
 */
public class DaoDepartamento {
    private Connection Cone;
    
    public DaoDepartamento(Connection Cone){
        this.Cone = Cone;
    }
    
    public Departamento Consultar(String sigla, String nome){
        Departamento objDerp = null;
        
        PreparedStatement ps;
        try{
            ps = Cone.prepareStatement("SELECT * from tblDepartamento where Sigla_dep = ?");
            
            ps.setString(1, sigla);
            ResultSet rs = ps.executeQuery();
            if(rs.next() == true){
                objDerp = new Departamento(rs.getString("Sigla_dep"), rs.getString("Nome_dep"));
            }
            
        }
        catch(SQLException ex){
            System.out.println(ex.toString());
        }
        return(objDerp);
    }
    
    public void inserir (Departamento objDerp){
             
        PreparedStatement ps;
        try{
            
        }
        catch(SQLException ex){
            System.out.println(ex.toString());
        }
        }
    }
        
}
