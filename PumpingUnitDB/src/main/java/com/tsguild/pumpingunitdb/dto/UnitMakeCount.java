/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.dto;

/**
 *
 * @author apprentice
 */
public class UnitMakeCount {
 private String makeForCount;
 private int numMake;
 public String getMakeForCount() {
 return makeForCount;
 }
 public void setMakeForCount(String make) {
 this.makeForCount = make;
 }

 public int getNumMake() {
 return numMake;
 }
 
 public void setNumMake(int numMake) {
 this.numMake = numMake;
 } 
    
}
