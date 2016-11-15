/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.flooringmastery;

import com.tsguild.flooringmastery.Controller.FloorController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author apprentice
 */
public class App {
    public static void main(String[] args) {
        
        ApplicationContext ctxFactory=new ClassPathXmlApplicationContext("applicationContext.xml");
        FloorController controller=ctxFactory.getBean("controller", FloorController.class);
        controller.run();
    }
    
}
