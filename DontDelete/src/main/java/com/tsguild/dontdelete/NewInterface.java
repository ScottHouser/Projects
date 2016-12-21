/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.dontdelete;

import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author apprentice
 */
public interface NewInterface {

    String getContent();

    void removeContent();

    void setJdbcTemplate(JdbcTemplate jdbcTemplate);
    
}
