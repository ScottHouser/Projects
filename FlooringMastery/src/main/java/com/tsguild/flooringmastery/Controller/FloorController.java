/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.Controller;

import com.tsguild.flooringmastery.DAOTestOptions.DaoTestChecker;
import com.tsguild.flooringmastery.Console.ConsoleIO;
import com.tsguild.flooringmastery.DAOLog.DaoOrderLog;
import com.tsguild.flooringmastery.DAOProducts.DaoProduct;
import com.tsguild.flooringmastery.DAOTaxes.DaoTaxes;
import com.tsguild.flooringmastery.DTO.Order;
import com.tsguild.flooringmastery.DTO.Product;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

/**
 *
 * @author apprentice
 */
public class FloorController {

    private ConsoleIO console;
    private DaoProduct daop;
    private DaoTaxes daot;
    private DaoOrderLog daool;
    private DaoTestChecker daotc;

    public void setDaop(DaoProduct daop) {//constructors for daos
        this.daop = daop;
    }

    public void setDaot(DaoTaxes daot) {
        this.daot = daot;
    }

    public void setDaool(DaoOrderLog daool) {
        this.daool = daool;
    }

    public void setConsole(ConsoleIO console) {
        this.console = console;
    }

    public void setDaotc(DaoTestChecker daotc) {
        this.daotc = daotc;
    }

    public void run() {

        console.print("Welcome to Floor Master");
        try {
            daop.loadFromFile();
            daot.loadFromFile();
            daool.loadFromFile();
            daotc.loadFromFile();
        } catch (IOException ex) {
            console.print("Stuff broke");
            return;
        }
        if (daotc.returnTestCheck()) {
            console.print("");
            console.print("You are in test mode");
            console.print("In order to switch to production mode");
            console.print("Find the file Test.txt in your folder ");
            console.print("and change the word Test to any other word ");

        } else {
            console.print("");
            console.print("You are in production mode");
            console.print("In order to switch to test mode");
            console.print("Find the file Test.txt in your folder ");
            console.print("and write the word Test on line one ");
            console.print("Make sure there is no other text in the file ");
        }

        boolean running = true;
        while (running) {
            this.printMenu();
            int choice = console.readInt("");

            switch (choice) {
                case 1:
                    this.displayOrders();
                    break;
                case 2:
                    this.addOrder();
                    break;
                case 3:
                    this.editOrder();
                    break;
                case 4:
                    this.removeOrder();
                    break;
                case 5:

                    this.saveWork();
                    break;
                case 6:
                    this.quit();
                    running = false;
                    break;
                default:

            }
        }
    }

    public void printMenu() {
        console.print("");
        console.print("1: Display Orders");
        console.print("2: Add Order");
        console.print("3: Edit an Order");
        console.print("4: Remove an Order");
        console.print("5: Save Current Work");
        console.print("6: Quit");
    }

//    public void checkForTestMode() {
//
//    }
    public void addOrder() {
        boolean dateVar = true;
        String date = "";
        while (dateVar) {//varification for date.
            String dateCheck = console.readString("What is the date assosiated with this order EX:01022016");
            if (dateCheck.length() != 8) {
                console.print("");
                console.print("Please input a 8 digit number representing day/month/year");
                console.print("I am a dumb robot. I don't undrstand punctuation or spaces");
                console.print("Example: January first 2001 = 01012001");
            } else {
                date = dateCheck;
                dateVar = false;
            }
        }
        String cName = console.readString("What is the name of the customer assosiated with this order");

        double taxRate = 0;
        String state = "";
        boolean stateVer = true;
        while (stateVer) {//verification for state

            String stateCheck = console.readString("What is the state assosiated with this order EX:OK ");
            if (daot.stateVerify(stateCheck)) {
                taxRate = daot.returnTaxRate(stateCheck);
                state = stateCheck;
                stateVer = false;
            } else {
                console.print("That is not a valid entry");
                console.print("make sure you input a capitalized two letter abreviation");
            }
        }

        Product tempProduct = new Product();

        boolean productVer = true;
        while (productVer) {//verrification for product

            String pType = console.readString("What is the product type assosiated with this order ");
            if (daop.verifyProduct(pType)) {
                tempProduct = daop.returnProduct(pType);
                productVer = false;
            } else {
                console.print("Did you mean...");
                for (Product p : daop.verifyProductList(pType)) {
                    console.print(p.getName());
                }
            }
        }

        String areacheck = console.readString("What is the area of material used (in square feet)");
        int area = Integer.parseInt(areacheck);

        Order tempOrder = new Order();

        Random randomizer = new Random();//assigning sales order number to order

        boolean randomizing = true;
        int random = 0;

        while (randomizing) {
            int counter = 0;
            int rand = randomizer.nextInt(2000000000);
            for (int check : daool.returnOrderNumbers()) {
                if (check == rand) {
                    counter++;
                } else {

                }
            }
            if (counter == 0) {
                random = rand;
                randomizing = false;
            } else {

            }

        }

        tempOrder.setOrderNumber(random);//setters for order
        tempOrder.setCustomerName(cName);
        tempOrder.setArea(area);
        tempOrder.setState(state);
        tempOrder.setProductType(tempProduct.getName());
        tempOrder.setMatSqFt(tempProduct.getMatSqFt());
        tempOrder.setLaborSqFt(tempProduct.getLaborSqFt());
        tempOrder.setTaxRate(taxRate);
        tempOrder.dynamicSetTaxCost();
        tempOrder.dynamicSetTotal();
        tempOrder.dynamicSetMatCost();
        tempOrder.dynamicSetLaborCost();
        //tempOrder.getTaxCost();
        int choice = console.readInt("Press 1 to commit. Press any other number to continue without committing");
        if (choice == 1) {
            console.print("order commited");
            console.print("your order number is " + random);
            daool.logOrder(tempOrder, date);
        } else {
            console.print("order not commited");

        }

    }

    public void displayOrders() {
        console.print("1: display by Order Number");
        console.print("2: display all orders for given date");
        int choice = console.readInt("");
        if (choice == 1) {
            boolean exists = false;//checks for existance of order
            int entry = console.readInt("Enter order number");
            ArrayList<Integer> checkList = daool.returnOrderNumbers();
            for (int i : checkList) {
                if (entry == i) {
                    exists = true;
                }
            }

            if (exists) {
                Order o = daool.returnOrderByNumber(entry);
                console.print("");
                console.print("ORDER NUMBER: " + o.getOrderNumber());
                console.print("CUSTOMER: " + o.getCustomerName() + "");
                console.print("MATERIAL: " + o.getProductType());
                console.print("STATE: " + o.getState());
                console.print("AREA: " + o.getArea() + "SQFT");
                console.print("LABOR RATE: $" + o.getLaborSqFt() + "SQFT");
                console.print("LABOR COST: $" + o.getLabCost());
                console.print("MATERIAL COST: $" + o.getMatCost());
                console.print("MATERIAL RATE: $" + o.getMatSqFt() + "SQFT");
                console.print("TAX RATE: %" + o.getTaxRate() + "");
                console.print("TAX COST: $" + o.getTaxCost());
                console.print("TOTAL $" + o.getTotal());
                console.print("");
            } else {
                console.print("order not found");

            }
        } else if (choice == 2) {

            String date = console.readString("Enter date for orders to display");
            ArrayList<Order> tempList = new ArrayList<>();
            tempList = daool.displayOrders(date);
            boolean dateExists = daool.dateVerification(date);
            if (dateExists) {//checks for existance of date
                for (Order o : tempList) {
                    console.print("");
                    console.print("ORDER NUMBER: " + o.getOrderNumber());
                    console.print("CUSTOMER: " + o.getCustomerName() + "");
                    console.print("MATERIAL: " + o.getProductType());
                    console.print("STATE: " + o.getState());
                    console.print("AREA: " + o.getArea() + "SQFT");
                    //console.print("LABOR RATE: $" + o.getLaborSqFt() + "SQFT");
                    //console.print("MATERIAL RATE: $" + o.getMatSqFt() + "SQFT");
                    //console.print("TAX RATE: %" + o.getTaxRate() + "");
                    console.print("TOTAL $" + o.getTotal());
                    console.print("");
                }

            } else {
                console.print("");
                console.print("no orders for this date");
                console.print("");
            }

        } else {
            console.print("not a valid option");
            return;
        }

    }

    public void editOrder() {
        String date = console.readString("What is the date of the order you wish to edit");
        int num = console.readInt("What is the number assoicaited with the order");
        String newDate;

        Order tempOrder = new Order();
        tempOrder = daool.findOrder(date, num);
        String newNameSet = tempOrder.getCustomerName();
        String newStateSet = tempOrder.getState();
        String newMaterialSet = tempOrder.getProductType();

        String yn = console.readString("Change customer name " + tempOrder.getCustomerName() + "? y/n");
        if (yn.equalsIgnoreCase("y")) {
            newNameSet = console.readString("What is the new customer Name?");
            tempOrder.setCustomerName(newNameSet);
        } else {

        }
        String yn2 = console.readString("Change State" + tempOrder.getState() + "? y/n");
        if (yn2.equalsIgnoreCase("y")) {
            String stateCheck = console.readString("What is the new State?  EX:OK");
            if (daot.stateVerify(stateCheck)) {
                newStateSet = stateCheck;
                tempOrder.setState(newStateSet);

            } else {
                console.print("That is not a valid entry");
            }
        } else {

        }

        String yn3 = console.readString("Change Material " + tempOrder.getProductType() + "? (y/n)");
        if (yn3.equalsIgnoreCase("y")) {
            String pType = console.readString("What is the product type assosiated with this order ");
            if (daop.verifyProduct(pType)) {
                newMaterialSet = pType;
                tempOrder.setProductType(newMaterialSet);

            } else {
                console.print("Did you mean...");
                for (Product p : daop.verifyProductList(pType)) {
                    console.print(p.getName());
                }
            }

        } else {

        }

        String ynTaxRate = console.readString("Change Tax Rate " + tempOrder.getTaxRate() + "? (y/n)");
        if (ynTaxRate.equalsIgnoreCase("y")) {
            double newTaxRate = console.readDouble("what is the new Tax Rate?");
            tempOrder.setTaxRate(newTaxRate);
        } else {

        }

        String ynMatSqFt = console.readString("Change material cost per square Foot " + tempOrder.getMatSqFt() + "? (y/n)");
        if (ynMatSqFt.equalsIgnoreCase("y")) {
            double newValue = console.readDouble("what is the new cost?");
            tempOrder.setMatSqFt(newValue);
        } else {

        }

        String ynLabSqFt = console.readString("Change Labor cost per square Foot " + tempOrder.getLaborSqFt() + "? (y/n)");
        if (ynLabSqFt.equalsIgnoreCase("y")) {
            double newValue = console.readDouble("what is the new cost?");
            tempOrder.setLaborSqFt(newValue);
        } else {

        }

        String ynLabcost = console.readString("Change Labor cost " + tempOrder.getLabCost() + "? (y/n)");
        if (ynLabcost.equalsIgnoreCase("y")) {
            double newValue = console.readDouble("what is the new cost?");
            tempOrder.setLabCost(newValue);
        } else {

        }

        String ynMatCost = console.readString("Change Material cost " + tempOrder.getMatCost() + "? (y/n)");
        if (ynMatCost.equalsIgnoreCase("y")) {
            double newValue = console.readDouble("what is the new cost?");
            tempOrder.setMatCost(newValue);
        } else {

        }

        String ynTaxCost = console.readString("Change Tax cost " + tempOrder.getTaxCost() + "? (y/n)");
        if (ynTaxCost.equalsIgnoreCase("y")) {
            double newValue = console.readDouble("what is the new cost?");
            tempOrder.setTaxCost(newValue);
        } else {

        }

        String ynTotal = console.readString("Change Total " + tempOrder.getTotal() + "? (y/n)");
        if (ynTotal.equalsIgnoreCase("y")) {
            double newValue = console.readDouble("what is the new total?");
            tempOrder.setTotal(newValue);
        } else {

        }

        String yn4 = console.readString("Change area " + tempOrder.getArea() + "? (y/n)");
        if (yn4.equalsIgnoreCase("y")) {
            double newArea = console.readDouble("what is the new area?");
            tempOrder.setArea(newArea);
        } else {

        }

        String yn5 = console.readString("Change Order Date?");
        if (yn5.equalsIgnoreCase("y")) {
            String newDatesdf = console.readString("what is the new date? EX:01032016");
            newDate = newDatesdf;
        } else {
            newDate = date;
        }
        daool.removeOrder(date, num);
        daool.logOrder(tempOrder, newDate);
    }

    public void removeOrder() {
        String date = console.readString("What is the date of the order you wish to remove");
        int order = console.readInt("What is the number assoicaited with the order");
        boolean orderExists = false;
        for (int n : daool.returnOrderNumbers()) {
            if (n == order) {
                orderExists = true;
                break;
            }
        }
        if (daool.dateVerification(date) && orderExists) {

            daool.removeOrder(date, order);
            //daool.clearList();
        } else {
            console.print("There are no orders for that date and order number");
        }
    }

    public void saveWork() {
        boolean saveIt;
        saveIt = daotc.returnTestCheck();
        if (saveIt) {
            console.print("testMode, cannot save");
            //daool.saveToFile();
        } else {
            daool.clearFiles();
            daool.saveToFile();
            console.print("Save successful");
        }
    }

    public void quit() {
        daool.floorQuotes();
    }
}
