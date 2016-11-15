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
public class Product {
    private String name;
    private double laborSqFt;
    private double matSqFt;
    
    public Product(){
        
    }

    public Product(String name, double laborSqFt, double matSqFt) {
        this.name = name;
        this.laborSqFt = laborSqFt;
        this.matSqFt = matSqFt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getLaborSqFt() {
        return laborSqFt;
    }

    public void setLaborSqFt(double laborSqFt) {
        this.laborSqFt = laborSqFt;
    }

    public double getMatSqFt() {
        return matSqFt;
    }

    public void setMatSqFt(double matSqFt) {
        this.matSqFt = matSqFt;
    }
    
}
