/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOTaxes;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author apprentice
 */
public class DaoTaxesImpl implements DaoTaxes {
    
    private final String FILE_NAME;
    private HashMap<String,Double> taxMap;
    private final String DELIMITER = ",";

    public DaoTaxesImpl() {
        FILE_NAME = "Tax.txt";
        taxMap = new HashMap<>();
    }
    
    @Override
    public HashMap<String,Double> returnTaxes(String st){
        return taxMap;
    }
    
    @Override
    public double returnTaxRate(String st){
        return taxMap.get(st);
    }
    
    @Override
    public boolean stateVerify(String st){
        for(String s: taxMap.keySet()){
            if(s.equals(st)){
                return true;
            }
           
        }
        return false;
    }
    
    
    
    @Override
    public void loadFromFile() throws IOException {

        try {
            Scanner taxScanner = new Scanner(new BufferedReader(new FileReader(FILE_NAME)));

            while (taxScanner.hasNextLine()) {
                String taxLine = taxScanner.nextLine();

                String[] taxProperties = taxLine.split(DELIMITER);
                if (taxProperties.length != 2) {
                    continue;
                }
                String taxState=taxProperties[0];
                double taxRate = Double.parseDouble(taxProperties[1]);

                taxMap.put(taxState,taxRate);

            }
            taxScanner.close();

        } catch (FileNotFoundException ex) {
            Logger.getLogger(DaoTaxesImpl.class.getName()).log(Level.SEVERE, null, ex);
            new FileWriter(FILE_NAME);
        }

    }
}
