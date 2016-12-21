/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.dontdelete;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author apprentice
 */
public class daoImplul implements NewInterface {
    private static final String SQL_GET_CONTENT
            = "select * from Website_Content where id = 1";
    
    private static final String SQL_DELETE_CONTENT
            = "DROP DATABASE IF EXISTS Content";
    
    private JdbcTemplate jdbcTemplate;
    
   
    
    @Override
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    
    @Override
    public String getContent(){
        return jdbcTemplate.queryForObject(SQL_GET_CONTENT, new ContentMapper());
        
    }
    
    @Override
     public void removeContent() {
        jdbcTemplate.update(SQL_DELETE_CONTENT);
    }
     
    private static final class ContentMapper implements RowMapper<String> {

        @Override
        public String mapRow(ResultSet rs, int rowNum) throws SQLException {
            String content = rs.getString("html");

            return content;
        }
    }
}

