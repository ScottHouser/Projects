/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.dao;

import com.tsguild.pumpingunitdb.dto.Unit;
import com.tsguild.pumpingunitdb.dto.UnitMakeCount;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author apprentice
 */
public class UnitDaoReal implements UnitDao {

    // #1 - All SQL code is in the form of Prepared Statements
    private static final String SQL_INSERT_UNIT
            = "insert into UnitsTable (make, model, size, serialNumber, weights, notes) values (?, ?, ?, ?, ?, ?)";
    private static final String SQL_DELETE_UNIT
            = "delete from UnitsTable where trackingNumber = ?";
    private static final String SQL_SELECT_UNIT
            = "select * from UnitsTable where trackingNumber = ?";
    private static final String SQL_UPDATE_UNIT
            = "update UnitsTable set make = ?, model = ?, size = ?, serialNumber = ?, weights = ?, notes = ? where trackingNumber = ?";
    private static final String SQL_SELECT_ALL_UNITS
            = "select * from UnitsTable";
    private static final String SQL_SELECT_UNITS_BY_MAKE
            = "select * from UnitsTable where make = ?";
    private static final String SQL_SELECT_UNITS_BY_SIZE
            = "select * from UnitsTable where size = ?";
    private static final String SQL_SELECT_UNITS
            = "select * from UnitsTable";
    
    private static final String SQL_SELECT_UNIT_MAKE_COUNTS
            = "SELECT make, count(*) as num_units FROM UnitsTable group by make;";

    // #2a - Declare JdbcTemplate reference - the instance will be handed to us by Spring
    private JdbcTemplate jdbcTemplate;
    
    // #2b - We are using Setter Injection to direct Spring to hand us an instance of
    // the JdbcTemplate (see the Spring Configuration section below for configuration
    // details).
    
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // #3 - Wrap addContact in a transaction so the we are guaranteed to get the
    // correct LAST_INSERT_ID for our row.
    @Transactional(propagation = Propagation.REQUIRED, readOnly = false)
    @Override
    public Unit addUnit(Unit add) {
        jdbcTemplate.update(SQL_INSERT_UNIT,
                add.getMake(),
                add.getModel(),
                add.getSize(),
                add.getSerialNumber(),
                add.getWeights(),
                add.getNotes());
        add.setTrackingNumber(jdbcTemplate.queryForObject("select LAST_INSERT_ID()",
                Integer.class));
        return add;
    }

    @Override
    public void removeUnit(int unitId) {
        jdbcTemplate.update(SQL_DELETE_UNIT, unitId);
    }

    @Override
    public void updateUnit(Unit add) {
        jdbcTemplate.update(SQL_UPDATE_UNIT,
                add.getMake(),
                add.getModel(),
                add.getSize(),
                add.getSerialNumber(),
                add.getWeights(),
                add.getNotes(),
                add.getTrackingNumber());
    }

    @Override
    public List<Unit> getAllUnits() {
        return jdbcTemplate.query(SQL_SELECT_ALL_UNITS, new UnitMapper());
    }

    @Override
    public Unit getUnitsById(int unitId) {
        try {
            return jdbcTemplate.queryForObject(SQL_SELECT_UNIT,
                    new UnitMapper(), unitId);
        } catch (EmptyResultDataAccessException ex) {
            // there were no results for the given contact id - we just want to
            // return null in this case
            return null;
        }
    }

//    @Override
//    public List<Unit> searchUnits(Map<SearchTerm, String> criteria) {
//        return jdbcTemplate.query(SQL_SELECT_UNITS_BY_MAKE, new UnitMapper());
//
//    }
    @Override
    public List<Unit> searchUnits(Map<SearchTerm, String> criteria) {
        Map<Integer, Unit> unitMap = new HashMap<>();
        //ArrayList<Unit>asdt =new ArrayList<>();
        for(Unit u: jdbcTemplate.query(SQL_SELECT_ALL_UNITS, new UnitMapper())){
            unitMap.put(u.getTrackingNumber(), u);
        };
                
                
        
        
        
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

    private static final class UnitMapper implements RowMapper<Unit> {

        public Unit mapRow(ResultSet rs, int rowNum) throws SQLException {
            Unit unit = new Unit();
            unit.setTrackingNumber(rs.getInt("trackingNumber"));
            unit.setMake(rs.getString("make"));
            unit.setModel(rs.getString("model"));
            unit.setSize(rs.getString("size"));
            unit.setSerialNumber(rs.getString("serialNumber"));
            unit.setWeights(rs.getString("weights"));
            unit.setNotes(rs.getString("notes"));
            return unit;
        }
    }

    @Override
    public List<UnitMakeCount> getUnitMakeCount() {
        return jdbcTemplate.query(SQL_SELECT_UNIT_MAKE_COUNTS, new UnitMakeCountMapper());
    }

    private static final class UnitMakeCountMapper
            implements RowMapper<UnitMakeCount> {

        @Override
        public UnitMakeCount mapRow(ResultSet rs, int i) throws SQLException {
            UnitMakeCount count = new UnitMakeCount();
            count.setMakeForCount(rs.getString("make"));
            count.setNumMake(rs.getInt("num_units"));
            return count;
        }
    }

}
