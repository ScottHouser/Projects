/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOTestOptions;

import com.tsguild.flooringmastery.DAOTaxes.DaoTaxesImpl;
import com.tsguild.flooringmastery.DTO.Product;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.HashMap;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author apprentice
 */
public class DaoTestCheckerImpl implements DaoTestChecker {
    //private final String FILE_NAME;
     private String tester;
     private final String FILE_NAME;
     private final String DELIMITER = ",";

    public DaoTestCheckerImpl() {
        FILE_NAME = "Test.txt";
        String tester;
    }
    
    
    
    @Override
    public boolean returnTestCheck(){
        if(tester.equals("Test")){
        return true;
        }else{
            return false;
        }
    }
    
    @Override
    public void loadFromFile(){
         try {
            Scanner testScanner = new Scanner(new BufferedReader(new FileReader(FILE_NAME)));

            while (testScanner.hasNextLine()) {
                String testLine = testScanner.nextLine();

                String[] testProperties = testLine.split(DELIMITER);
                if (testProperties.length != 1) {
                    continue;
                }
                String testQ=testProperties[0];
                

                tester=testQ;

            }
            testScanner.close();

        } catch (FileNotFoundException ex) {
            Logger.getLogger(DaoTaxesImpl.class.getName()).log(Level.SEVERE, null, ex);
            //new FileWriter(FILE_NAME);
        }

    
    }
    
}
