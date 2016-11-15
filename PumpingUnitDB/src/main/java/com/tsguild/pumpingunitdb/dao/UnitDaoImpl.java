/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.dao;

import com.tsguild.pumpingunitdb.dto.Unit;
import com.tsguild.pumpingunitdb.dto.UnitMakeCount;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;

/**
 *
 * @author apprentice
 */
public class UnitDaoImpl implements UnitDao {

    private Map<Integer, Unit> unitMap = new HashMap<>();
    // used to assign ids to Contacts - simulates the auto increment
    // primary key for Contacts in a database
    private static int unitIdCounter = 1;

    @Override
    public Unit addUnit(Unit add) {
        add.setTrackingNumber(unitIdCounter);
        unitIdCounter++;
        unitMap.put(add.getTrackingNumber(), add);
        return add;
    }

    @Override
    public void removeUnit(int addId) {
        unitMap.remove(addId);
    }

    @Override
    public void updateUnit(Unit add) {
        unitMap.put(add.getTrackingNumber(), add);
    }

    @Override
    public List<Unit> getAllUnits() {
        Collection<Unit> c = unitMap.values();
        return new ArrayList(c);
    }

    @Override
    public Unit getUnitsById(int contactId) {
        return unitMap.get(contactId);
    }

    @Override
    public List<Unit> searchUnits(Map<SearchTerm, String> criteria) {
        // Get all the search terms from the map
        String makeCriteria = criteria.get(SearchTerm.MAKE);
        String modelCriteria = criteria.get(SearchTerm.MODEL);
        String sizeCriteria = criteria.get(SearchTerm.SIZE);
        String serialCriteria = criteria.get(SearchTerm.SERIAL_NUMBER);
        String weightsCriteria = criteria.get(SearchTerm.WEIGHTS);
        String notesCriteria = criteria.get(SearchTerm.NOTES);
        // Declare all the predicate conditions
        Predicate<Unit> makeMatches;
        Predicate<Unit> modelMatches;
        Predicate<Unit> sizeMatches;
        Predicate<Unit> serialMatches;
        Predicate<Unit> weightsMatches;
        Predicate<Unit> notesMatches;

        // Placeholder predicate - always returns true. Used for search terms
        // that are empty
        Predicate<Unit> truePredicate = (c) -> {
            return true;
        };
        // Assign values to predicates. If a given search term is empty, just
        // assign the default truePredicate, otherwise assign the predicate that
        // properly filters for the given term.
        makeMatches = (makeCriteria == null || makeCriteria.isEmpty())
                ? truePredicate
                : (c) -> c.getMake().equals(makeCriteria);

        modelMatches = (modelCriteria == null || modelCriteria.isEmpty())
                ? truePredicate
                : (c) -> c.getModel().equals(modelCriteria);

        sizeMatches = (sizeCriteria == null || sizeCriteria.isEmpty())
                ? truePredicate
                : (c) -> c.getSize().equals(sizeCriteria);

        serialMatches = (serialCriteria == null || serialCriteria.isEmpty())
                ? truePredicate
                : (c) -> c.getSerialNumber().equals(serialCriteria);
        weightsMatches = (weightsCriteria == null || weightsCriteria.isEmpty())
                ? truePredicate
                : (c) -> c.getWeights().equals(weightsCriteria);

        notesMatches = (notesCriteria == null || notesCriteria.isEmpty())
                ? truePredicate
                : (c) -> c.getNotes().equals(notesCriteria);
        // Return the list of Contacts that match the given criteria. To do this we
        // just AND all the predicates together in a filter operation.
        return unitMap.values().stream()
                .filter(makeMatches
                        .and(modelMatches)
                        .and(sizeMatches)
                        .and(serialMatches)
                        .and(weightsMatches)
                        .and(notesMatches))
                .collect(Collectors.toList());
    }

    @Override
    public List<UnitMakeCount> getUnitMakeCount() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}
