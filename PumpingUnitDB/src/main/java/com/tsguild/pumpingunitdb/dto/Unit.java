/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.dto;

import java.util.Objects;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *
 * @author apprentice
 */
public class Unit {

    private int trackingNumber;
    @NotEmpty(message = "You must supply a value for Make.")
    @Length(max = 20, message = "Make can be no more than 20 characters in length.")
    private String make;

    @Length(max = 50, message = "Make can be no more than 50 characters in length.")
    private String model;
    @NotEmpty(message = "You must supply a value for Size.")
    @Length(max = 10, message = "Make can be no more than 10 characters in length.")
    private String size;

    @Length(max = 30, message = "Make can be no more than 30 characters in length.")
    private String serialNumber;
    @NotEmpty(message = "You must supply a value for Weights.")
    @Length(max = 10, message = "Make can be no more than 10 characters in length.")
    private String weights;

    private String notes;

    public Unit() {
    }

    public Unit(int trackingNumber, String make, String model, String size, String serialNumber, String weights, String notes) {
        this.trackingNumber = trackingNumber;
        this.make = make;
        this.model = model;
        this.size = size;
        this.serialNumber = serialNumber;
        this.weights = weights;
        this.notes = notes;
    }

    public int getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(int trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getWeights() {
        return weights;
    }

    public void setWeights(String weights) {
        this.weights = weights;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 11 * hash + Objects.hashCode(this.make);
        hash = 11 * hash + Objects.hashCode(this.model);
        hash = 11 * hash + Objects.hashCode(this.size);
        hash = 11 * hash + Objects.hashCode(this.serialNumber);
        hash = 11 * hash + Objects.hashCode(this.weights);
        hash = 11 * hash + Objects.hashCode(this.notes);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Unit other = (Unit) obj;
        if (!Objects.equals(this.make, other.make)) {
            return false;
        }
        if (!Objects.equals(this.model, other.model)) {
            return false;
        }
        if (!Objects.equals(this.size, other.size)) {
            return false;
        }
        if (!Objects.equals(this.serialNumber, other.serialNumber)) {
            return false;
        }
        if (!Objects.equals(this.weights, other.weights)) {
            return false;
        }
        if (!Objects.equals(this.notes, other.notes)) {
            return false;
        }
        return true;
    }

}
