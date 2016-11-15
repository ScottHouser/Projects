/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOLog;

import com.tsguild.flooringmastery.DTO.Order;
import java.util.ArrayList;

/**
 *
 * @author apprentice
 */
public interface DaoOrderLog {

    ArrayList<Order> displayOrders(String date);

    void loadFromFile();

    void logOrder(Order o, String d);

    void removeOrder(String date, int orderNum);

    void saveToFile();
    
     void testAdd(Order o, String d);
     
     Order findOrder(String d, int n);
     
     void editOrder(Order o);
     
     boolean dateVerification(String s);
     
     Order returnOrderByNumber(int n);
     
     void clearFiles();
     
     void clearList();
     
     void floorQuotes();
    
    ArrayList<Integer> returnOrderNumbers();
}
