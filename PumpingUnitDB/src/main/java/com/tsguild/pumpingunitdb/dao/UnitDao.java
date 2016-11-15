/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.dao;

import com.tsguild.pumpingunitdb.dto.Unit;
import com.tsguild.pumpingunitdb.dto.UnitMakeCount;
import java.util.List;
import java.util.Map;

/**
 *
 * @author apprentice
 */
public interface UnitDao {

    Unit addUnit(Unit add);

    List<Unit> getAllUnits();

    Unit getUnitsById(int contactId);

    void removeUnit(int addId);

    void updateUnit(Unit add);
    
    List<Unit> searchUnits(Map<SearchTerm, String> criteria);
    
    public List<UnitMakeCount> getUnitMakeCount();
    
}
