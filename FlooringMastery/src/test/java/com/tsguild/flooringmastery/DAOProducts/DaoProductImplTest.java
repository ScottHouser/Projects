/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOProducts;

import com.tsguild.flooringmastery.DAOLog.DaoOrderLogImpl;
import com.tsguild.flooringmastery.DAOTestOptions.DaoTestCheckerImpl;
import com.tsguild.flooringmastery.DTO.Product;
import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author apprentice
 */
public class DaoProductImplTest {
    DaoProductImpl testDao;
     Product p1= new Product("Carpet",2.25,2.10);
     Product p2= new Product("Tile",1.25,1.10);
     Product p3= new Product("Lava",5.25,5.10);
     Product p4= new Product("Lenolium",6.25,3.10);
     Product p5= new Product("Spikes",3.25,9.10);
    
    
    public DaoProductImplTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        testDao= new DaoProductImpl();
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of returnProduct method, of class DaoProductImpl.
     */
    @Test
    public void testReturnProduct() {
//        public Product returnProduct(String name){
//        Product p=new Product();
//        p= productMap.get(name);
//        return p;
          Product p1= new Product("Carpet",2.25,2.10);
          
    }

    /**
     * Test of verifyProduct method, of class DaoProductImpl.
     */
    @Test
    public void testVerifyProduct() {
       
    }

    /**
     * Test of verifyProductList method, of class DaoProductImpl.
     */
    @Test
    public void testVerifyProductList() {
       
    }

    /**
     * Test of loadFromFile method, of class DaoProductImpl.
     */
    @Test
    public void testLoadFromFile() throws Exception {
       
    }
    
}
