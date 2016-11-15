/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOTaxes;

import java.io.IOException;
import java.util.HashMap;

/**
 *
 * @author apprentice
 */
public interface DaoTaxes {

    void loadFromFile() throws IOException;

    double returnTaxRate(String st);

    HashMap<String, Double> returnTaxes(String st);

    boolean stateVerify(String st);
    
}
