/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOProducts;

import com.tsguild.flooringmastery.DTO.Product;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author apprentice
 */
public interface DaoProduct {

    void loadFromFile() throws IOException;

    Product returnProduct(String name);

    boolean verifyProduct(String name);

    ArrayList<Product> verifyProductList(String name);
    
}
