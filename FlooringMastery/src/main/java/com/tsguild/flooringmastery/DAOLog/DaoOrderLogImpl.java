/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DAOLog;

import com.tsguild.flooringmastery.DTO.Order;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.console;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 *
 * @author apprentice
 */
public class DaoOrderLogImpl implements DaoOrderLog {

    private String FILE_NAME;
    private HashMap<String, ArrayList<Order>> dateToOrderMapMap;
    //private HashMap<Integer,Order> idToOrderMap;

    private final String DELIMITER = ",";

    public DaoOrderLogImpl() {
        FILE_NAME = "";
        dateToOrderMapMap = new HashMap<>();

    }

    @Override
    public Order returnOrderByNumber(int n) {
        Order tempOrder = new Order();
        for (String a : dateToOrderMapMap.keySet()) {
            for (Order b : dateToOrderMapMap.get(a)) {
                if (b.getOrderNumber() == n) {
                    tempOrder = b;
                }
            }
        }
        return tempOrder;
    }

    @Override
    public void logOrder(Order o, String d) {
        int check = 0;
        ArrayList<Order> tempList = new ArrayList<>();
        tempList.add(o);
        for (String s : dateToOrderMapMap.keySet()) {
            if (d.equals(s)) {
                dateToOrderMapMap.get(s).add(o);
                check++;
                break;
            }

        }
        if (check == 0) {
            dateToOrderMapMap.put(d, tempList);
        }
    }

    @Override
    public boolean dateVerification(String s) {
        int counter = 0;
        for (String a : dateToOrderMapMap.keySet()) {
            if (a.equals(s)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void clearList() {
        for (String s : dateToOrderMapMap.keySet()) {
            if (dateToOrderMapMap.get(s).size() == 0) {
                dateToOrderMapMap.remove(s);
            }

        }
    }

    @Override
    public void removeOrder(String date, int orderNum) {
        ArrayList<Order> tempList = new ArrayList<>();
        tempList = dateToOrderMapMap.get(date);
        ArrayList<Order> tempList2 = new ArrayList<>();

        for (Order o : tempList) {
            if (o.getOrderNumber() != orderNum) {
                tempList2.add(o);
            }
        }

        //Order tempOrder;
//        List<Order> ordersOfOrderNum = tempList.stream()
//            .filter(s -> s.getOrderNumber()!=(orderNum))//forEach(s -> tempList2.add(s.getFirstName()));
//            .collect(Collectors.toList());
//        
//        for(Order o:ordersOfOrderNum){
//            tempList.add(o);
//        }
        dateToOrderMapMap.put(date, tempList2);

    }

    @Override
    public ArrayList<Order> displayOrders(String date) {
        return dateToOrderMapMap.get(date);

    }

    @Override
    public void testAdd(Order o, String d) {
        ArrayList<Order> tempList = new ArrayList<>();
        tempList.add(o);
        dateToOrderMapMap.put(d, tempList);
    }

    @Override
    public Order findOrder(String d, int n) {
        ArrayList<Order> tempList = new ArrayList<>();
        tempList = dateToOrderMapMap.get(d);
        Order tempOrder = new Order();

        for (Order o : tempList) {
            if (o.getOrderNumber() == n) {
                return o;
            }
        }
        return tempOrder;
    }

    @Override
    public void editOrder(Order o) {

    }

    @Override
    public ArrayList returnOrderNumbers() {
        ArrayList<Integer> numbers = new ArrayList<>();

        for (ArrayList<Order> a : dateToOrderMapMap.values()) {
            for (int i = 0; i < a.size(); i++) {
                int add;
                add = a.get(i).getOrderNumber();
                numbers.add(add);
            }
        }

        return numbers;

    }

    @Override
    public void saveToFile() {

        for (String d : dateToOrderMapMap.keySet()) {

            PrintWriter writer;
            //File testFile = new File("");
            FILE_NAME = "./log/" + "Orders_" + d + ".txt";//+_
            try {
                writer = new PrintWriter(new FileWriter(FILE_NAME));
                for (Order a : dateToOrderMapMap.get(d)) {
                    writer.println(a.getOrderNumber() + DELIMITER + a.getCustomerName() + DELIMITER
                            + a.getState() + DELIMITER + a.getTaxRate() + DELIMITER + a.getProductType()
                            + DELIMITER + a.getArea() + DELIMITER + a.getMatSqFt() + DELIMITER + a.getLaborSqFt()
                            + DELIMITER + a.getMatCost() + DELIMITER + a.getLabCost() + DELIMITER + a.getTaxCost() + DELIMITER + a.getTotal());
                }
                writer.flush();
                writer.close();
            } catch (IOException ex) {
                Logger.getLogger(DaoOrderLogImpl.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
    }

    @Override
    public void clearFiles() {
        for (String d : dateToOrderMapMap.keySet()) {

            PrintWriter writer;
            //File testFile = new File("");
            FILE_NAME = "./log/" + "Orders_" + d + ".txt";//+_
            try {
                writer = new PrintWriter(new FileWriter(FILE_NAME));
                for (Order a : dateToOrderMapMap.get(d)) {
//                    writer.println(a.getOrderNumber() + DELIMITER + a.getCustomerName() + DELIMITER
//                            + a.getState() + DELIMITER + a.getTaxRate() + DELIMITER + a.getProductType()
//                            + DELIMITER + a.getArea() + DELIMITER + a.getMatSqFt() + DELIMITER + a.getLaborSqFt()
//                            + DELIMITER + a.getMatCost() + DELIMITER + a.getLabCost() + DELIMITER + a.getTaxCost() + DELIMITER + a.getTotal());
                }
                writer.flush();
                writer.close();
            } catch (IOException ex) {
                Logger.getLogger(DaoOrderLogImpl.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
    }

    @Override
    public void loadFromFile() {
 //ArrayList oList = new ArrayList<>();
        try (Stream<java.nio.file.Path> paths = Files.walk(Paths.get("log/"))) {
            
            paths.forEach(filePath -> {
                if (Files.isRegularFile(filePath)) {
                    String fileStuff = "";
                    String file = filePath.toString();
                    ArrayList oList = new ArrayList<>();
                    try {
                        Scanner reader = new Scanner(new BufferedReader(new FileReader(file)));
                        while (reader.hasNextLine()) {
                            String orderLine = reader.nextLine();
                            String[] orderProperties = orderLine.split(DELIMITER);
                            if (orderProperties.length != 12) {
                                continue;
                            }
                            //ArrayList oList = new ArrayList<>();//put list out side of loop
                            Order o = new Order();
                            o.setCustomerName(orderProperties[1]);
                            o.setState(orderProperties[2]);
                            o.setProductType(orderProperties[4]);//make sure product actually loads correctly

                            try {
                                int oNumber = Integer.parseInt(orderProperties[0]);
                                double tNumber = Double.parseDouble(orderProperties[3]);
                                double aNumber = Double.parseDouble(orderProperties[5]);
                                double mNumber = Double.parseDouble(orderProperties[6]);
                                double lNumber = Double.parseDouble(orderProperties[7]);
                                double mtNumber = Double.parseDouble(orderProperties[8]);
                                double lbNumber = Double.parseDouble(orderProperties[9]);
                                double txNumber = Double.parseDouble(orderProperties[10]);
                                double toNumber = Double.parseDouble(orderProperties[11]);

                                o.setOrderNumber(oNumber);
                                o.setTaxRate(tNumber);
                                o.setArea(aNumber);
                                o.setMatSqFt(mNumber);
                                o.setLaborSqFt(lNumber);
                                o.setMatCost(mtNumber);
                                o.setLabCost(lbNumber);
                                o.setTaxCost(txNumber);
                                o.setTotal(toNumber);

                            } catch (NumberFormatException e) {
                                Logger.getLogger(DaoOrderLog.class.getName()).log(Level.SEVERE, null, e);
                                continue;
                            }

                            oList.add(o);
                            dateToOrderMapMap.put(filePath.getFileName().toString().substring(7, 15), oList);

                        }

                    } catch (FileNotFoundException ex) {
                        Logger.getLogger(DaoOrderLogImpl.class.getName()).log(Level.SEVERE, null, ex);
                    }

                }
            });
        } catch (IOException ex) {
            System.out.println(ex.getCause());
            System.out.println(ex.getMessage());
            System.out.println(ex);
            Logger.getLogger(DaoOrderLogImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    @Override
    public void floorQuotes() {
        Random randomizer = new Random();
        int rand = randomizer.nextInt(4);

        ArrayList<String> quotes = new ArrayList<>();

        quotes.add("Floor Score and seven years ago, our Floorfathers brought forth a new Carpet\n-Abraham Lincoln");
        quotes.add("Oh oh sometimes I get a good ceiling\n-Floor Rida'");
        quotes.add("Everyone has a floor plan til' they get punched in the mouth\n-Mike Tileson");
        quotes.add("I will find you, and I will bill you\n-Leneoliam Neeson");

        System.out.println(quotes.get(rand));
    }

}
