/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOLog;

import com.tsguild.flooringmastery.DTO.Order;
import java.util.ArrayList;
import junit.framework.Assert;
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
public class DaoOrderLogImplTest {
    DaoOrderLogImpl testDao;
    //Order[]ordersForTesting={
     ArrayList<Order>ordersForTestingAR= new ArrayList<>();
       Order wise= new Order(1,"Wise","OH",6.25,"Wood",100.00,5.15,4.75,515.00,475.00,61.88,1051.88);
       Order Scott= new Order(2,"Scott","Ok",6.25,"Wood",100.00,5.15,4.75,515.00,475.00,61.88,1051.88);
       Order me= new Order(3,"me","AK",6.25,"Wood",100.00,5.15,4.75,515.00,475.00,61.88,1051.88);
       Order name= new Order(4,"name","TX",6.25,"Wood",100.00,5.15,4.75,515.00,475.00,61.88,1051.88);
    //};
    
   
    
    

    
    public DaoOrderLogImplTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
        
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        testDao= new DaoOrderLogImpl();
        
        ordersForTestingAR.add(Scott);
        ordersForTestingAR.add(wise);
        ordersForTestingAR.add(me);
        ordersForTestingAR.add(name);
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of returnOrderByNumber method, of class DaoOrderLogImpl.
     */
    @Test
    public void addOneToEmptyDaoTest() {
       
        Order o = new Order(2,"Scott","Ok",6.25,"Wood",100.00,5.15,4.75,515.00,475.00,61.88,1051.88);
        testDao.testAdd(o,"5678");
        Order hopefullyo = testDao.findOrder("5678",2);       
        Assert.assertEquals("Order stored, vs. Order retrieved does not match",
                o, hopefullyo);
        
    }
    @Test
    public void addOneToEmptyDaoTestBad() {
       
    }

    /**
     * Test of logOrder method, of class DaoOrderLogImpl.
     */
    @Test
    public void testLogOrder() {
       testDao.logOrder(ordersForTestingAR.get(0), "5678");
        Order hopefullyScott=testDao.findOrder("5678",2);
        Assert.assertEquals("Order stored, vs. Order retrieved does not match",
               Scott, hopefullyScott);

   }

    /**
     * Test of dateVerification method, of class DaoOrderLogImpl.
     */
    @Test
    public void testDateVerification() {
        testDao.logOrder(ordersForTestingAR.get(0), "5678");
        boolean testB=testDao.dateVerification("5678");
        Assert.assertEquals("not true as expected",
               testB, true);
        

    }

    /**
     * Test of clearList method, of class DaoOrderLogImpl.
     */
    @Test
    public void testClearList() {

    }

    /**
     * Test of removeOrder method, of class DaoOrderLogImpl.
     */
    @Test
    public void testRemoveOrder() {
      testDao.logOrder(ordersForTestingAR.get(0), "5678");
      testDao.logOrder(ordersForTestingAR.get(1), "5678");
      testDao.logOrder(ordersForTestingAR.get(2), "5678");
      testDao.removeOrder("5678", 1);
      Assert.assertEquals("Order stored, vs. Order retrieved does not match",
               testDao.displayOrders("5678").size(),2);
    }

    /**
     * Test of displayOrders method, of class DaoOrderLogImpl.
     */
    @Test
    public void testDisplayOrders() {

    }

    /**
     * Test of testAdd method, of class DaoOrderLogImpl.
     */
    @Test
    public void testTestAdd() {

    }

    /**
     * Test of findOrder method, of class DaoOrderLogImpl.
     */
    @Test
    public void testFindOrder() {

    }

    /**
     * Test of editOrder method, of class DaoOrderLogImpl.
     */
    @Test
    public void testEditOrder() {

    }

    /**
     * Test of returnOrderNumbers method, of class DaoOrderLogImpl.
     */
    @Test
    public void testReturnOrderNumbers() {

    }

    /**
     * Test of saveToFile method, of class DaoOrderLogImpl.
     */
    @Test
    public void testSaveToFile() {

    }

    /**
     * Test of clearFiles method, of class DaoOrderLogImpl.
     */
    @Test
    public void testClearFiles() {

    }

    /**
     * Test of loadFromFile method, of class DaoOrderLogImpl.
     */
    @Test
    public void testLoadFromFile() {

    }

    /**
     * Test of floorQuotes method, of class DaoOrderLogImpl.
     */
    @Test
    public void testFloorQuotes() {

    }
    
}
