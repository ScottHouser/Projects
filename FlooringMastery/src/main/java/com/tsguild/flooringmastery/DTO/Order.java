/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery.DTO;

/**
 *
 * @author apprentice
 */
public class Order {
    private int orderNumber;
    private String customerName;
    private String state;
    private double taxRate;
    private String productType;
    private double area;
    private double matSqFt;
    private double laborSqFt;
    private double matCost;
    private double labCost;
    private double taxCost;
    private double total;
    

    public Order() {
    }

    public Order(int orderNumber, String customerName, String state, double taxRate, String productType, double area, double matSqFt, double laborSqFt,double matCost,double labCost,double taxCost,double total) {
        this.orderNumber = orderNumber;
        this.customerName = customerName;
        this.state = state;
        this.taxRate = taxRate;
        this.productType = productType;
        this.area = area;
        this.matSqFt = matSqFt;
        this.laborSqFt = laborSqFt;
        this.matCost=matCost;
        this.labCost=labCost;
        this.taxCost=taxCost;
        this.total=total;
        
        
    }

    public double getMatCost() {
        return matCost;
    }

    public void setMatCost(double m) {
        this.matCost = m;
    }

    public double getLabCost() {
        return labCost;
    }

    public void setLabCost(double l) {
        this.labCost = l;
    }

    public double getTaxCost() {
        return taxCost;
    }

    public void setTaxCost(double t) {
        this.taxCost = t;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double t) {
        this.total = t;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public double getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public double getMatSqFt() {
        return matSqFt;
    }

    public void setMatSqFt(double matSqFt) {
        this.matSqFt = matSqFt;
    }

    public double getLaborSqFt() {
        return laborSqFt;
    }

    public void setLaborSqFt(double laborSqFt) {
        this.laborSqFt = laborSqFt;
    }
    public void dynamicSetLaborCost(){
        this.labCost=(this.laborSqFt*this.area);
    }
    public void dynamicSetMatCost(){
        this.matCost=(this.matSqFt*this.area);
    }
    public void dynamicSetTaxCost(){
        this.taxCost=((this.matSqFt*this.area)+(this.laborSqFt*this.area))*(this.taxRate*.01);
    }
    public void dynamicSetTotal(){
        this.total=((this.matSqFt*this.area)+(this.laborSqFt*this.area))*(1+(this.taxRate*.01));
    }
}
