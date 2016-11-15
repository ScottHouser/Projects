/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.dao;

import com.tsguild.pumpingunitdb.dto.Unit;
import java.util.List;
import java.util.Map;
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
public class UnitDaoTest {
    UnitDaoImpl testDao;
//    Unit[] UnitsForTesting = {
//        new Unit(1, "Lufkin", "Fido", "Fuzzy", "horse", "stuff","notes"),
//        new Unit(123, "Perky", "Fuzzy", "cat", 4),
//        new Unit(345, "Slick", "Sick", "dog", 80),
//        new Unit(456, "Boo", "Rabies", "dog", 12),
//        new Unit(567, "Dork", "Rabies", "chicken", 6),
//        
//    };
    Unit unitForTesting1=new Unit(1, "Lufkin", "Fido", "Fuzzy", "horse", "stuff","notes");
    Unit unitForTesting1duplicate=new Unit(1, "Lufkin", "Fido", "Fuzzy", "horse", "stuff","notes");
    Unit unitForTesting2=new Unit();
    Unit unitForTesting3=new Unit();
    
    
    public UnitDaoTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
         // Make a new BLANK DAO canvas to paint on!!!
        // Testing! So exciting! So artistic! So magical!
        // Doge approved!!!
        testDao = new UnitDaoImpl();
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of addUnit method, of class UnitDao.
     */
    
    @Test
    public void addOneToEmptyDaoTest() {
        // Step1: Make a Pet
        Unit fido = new Unit(234, "Lufkin", "Wide-Skid", "228", "9080KDKD","CC","Bad");

        // Step2: Add pet to dao
        testDao.addUnit(fido);

        // Step3: get pet out of dao by id
        String hopefullyFido = testDao.addUnit(fido).getMake();

        // Step4: Make sure the pet added looks like the pet retrieved
        // We can only use assertEquals here because we overrode the .equals method in Pet
        Assert.assertEquals("stored, vs. retrieved does not match",
                "Lufkin", hopefullyFido);
        //        Assert.assertEquals("Added/GetByID pet id did not match.", fido.getId(), hopefullyFido.getId());
        //        Assert.assertEquals("Added/GetByID pet name did not match 'fido' as expected", "fido", hopefullyFido.getId());
    }

     @Test
    public void testAgainstEmptyDAO() {
        Assert.assertEquals("Expected count does not match after adding one.", 0, testDao.getAllUnits().size());
        Assert.assertNull("Asking for a non existant should return null.", testDao.getUnitsById(445));
        Assert.assertNotNull("List of all should not be null.", testDao.getAllUnits());
        Assert.assertEquals("Expected count of 'all' is nonzero with empty DAO.", 0, testDao.getAllUnits().size());
    }
    
    @Test
    public void testAddOneUnit() {
        Unit petToAdd = unitForTesting1;
        testDao.addUnit(petToAdd);
        Assert.assertEquals("Expected count does not match after adding one.", 1, testDao.getAllUnits().size());
        Assert.assertEquals("Returned does not match expected.", petToAdd, testDao.getUnitsById(petToAdd.getTrackingNumber()));
        Assert.assertNotNull("List of all should not be null.", testDao.getAllUnits());
        Assert.assertEquals("Expected count of 'all' does not match after adding one pet.", 1, testDao.getAllUnits().size());
        Assert.assertTrue("Returned does not match expected.", testDao.getAllUnits().contains(petToAdd));

    }
    
//    @Test
//    public void testReplaceOnePet() {
//        //Unit petToAdd = unitForTesting1;
//        testDao.addUnit(unitForTesting1);
//        testDao.addUnit(unitForTesting1duplicate);
//        Assert.assertEquals("Expected pet count does not match after replacing one pet.", 1, testDao.getAllUnits().size());
//        //Assert.assertEquals("Replaced pet get does not match expected.", unitForTesting1duplicate, testDao.getPet(unitForTesting1duplicate.getTrackingNumber()));
//        Assert.assertNotNull("List of all pets should not be null.", testDao.getAllUnits());
//       Assert.assertEquals("Expected pet count of 'all pets' does not match after replacing one pet.", 1, testDao.getAllUnits().size());
//        Assert.assertTrue("Returned pet in getAllPets does not match expected.", testDao.getAllUnits().contains(unitForTesting1duplicate));
//    }
//    @Test
//    public void testAddUnit() {
//        System.out.println("addUnit");
//        Unit add = null;
//        UnitDao instance = new UnitDao();
//        Unit expResult = null;
//        Unit result = instance.addUnit(add);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of removeUnit method, of class UnitDao.
//     */
//    @Test
//    public void testRemoveUnit() {
//        System.out.println("removeUnit");
//        int addId = 0;
//        UnitDao instance = new UnitDao();
//        instance.removeUnit(addId);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of updateUnit method, of class UnitDao.
//     */
//    @Test
//    public void testUpdateUnit() {
//        System.out.println("updateUnit");
//        Unit add = null;
//        UnitDao instance = new UnitDao();
//        instance.updateUnit(add);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of getAllUnits method, of class UnitDao.
//     */
//    @Test
//    public void testGetAllUnits() {
//        System.out.println("getAllUnits");
//        UnitDao instance = new UnitDao();
//        List<Unit> expResult = null;
//        List<Unit> result = instance.getAllUnits();
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of getUnitsById method, of class UnitDao.
//     */
//    @Test
//    public void testGetUnitsById() {
//        System.out.println("getUnitsById");
//        int contactId = 0;
//        UnitDao instance = new UnitDao();
//        Unit expResult = null;
//        Unit result = instance.getUnitsById(contactId);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of searchUnits method, of class UnitDao.
//     */
//    @Test
//    public void testSearchUnits() {
//        System.out.println("searchUnits");
//        Map<SearchTerm, String> criteria = null;
//        UnitDao instance = new UnitDao();
//        List<Unit> expResult = null;
//        List<Unit> result = instance.searchUnits(criteria);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
    
}
