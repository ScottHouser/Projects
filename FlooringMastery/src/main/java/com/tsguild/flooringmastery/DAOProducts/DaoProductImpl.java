/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOProducts;

import com.tsguild.flooringmastery.DTO.Product;
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
public class DaoProductImpl implements DaoProduct {
    private final String FILE_NAME;
    private HashMap<String,Product> productMap;
    private final String DELIMITER = ",";

    public DaoProductImpl() {
        FILE_NAME = "Products.txt";
        productMap = new HashMap<>();
    }
    
    @Override
    public Product returnProduct(String name){
        Product p=new Product();
        p= productMap.get(name);
        return p;
                
    }
    
    @Override
    public boolean verifyProduct(String name){
        for(Product p: productMap.values()){
            if (p.getName().equals(name)){
                return true;
            } 
        }
         return false;
    }
    
    @Override
    public ArrayList<Product> verifyProductList(String name){
        ArrayList<Product> productList= new ArrayList<>();
        for(Product p: productMap.values()){
            if (p.getName().contains(name)){
                productList.add(p);
            } 
        }
        return productList;
    }
    
    
    
    @Override
    public void loadFromFile() throws IOException {

        try {
            Scanner productScanner = new Scanner(new BufferedReader(new FileReader(FILE_NAME)));

            while (productScanner.hasNextLine()) {
                String productLine = productScanner.nextLine();

                String[] productProperties = productLine.split(DELIMITER);
                if (productProperties.length != 3) {
                    continue;
                }

                Product aProduct = new Product();
                aProduct.setName(productProperties[0]);
               

                try {
                    double productMatCost = Double.parseDouble(productProperties[1]);
                    double productLabCost = Double.parseDouble(productProperties[2]);
                    
                    
                    aProduct.setMatSqFt(productMatCost);
                    aProduct.setLaborSqFt(productLabCost);
                    
                
                } catch (NumberFormatException e) {
                    Logger.getLogger(DaoProductImpl.class.getName()).log(Level.SEVERE, null, e);
                    continue;
                }

                productMap.put(aProduct.getName(), aProduct);

            }
            productScanner.close();

        } catch (FileNotFoundException ex) {
            Logger.getLogger(DaoProductImpl.class.getName()).log(Level.SEVERE, null, ex);
            new FileWriter(FILE_NAME);
        }

    }
}
