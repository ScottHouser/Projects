/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.controller;

import com.tsguild.pumpingunitdb.dao.SearchTerm;
import com.tsguild.pumpingunitdb.dao.UnitDao;
import com.tsguild.pumpingunitdb.dto.Unit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.inject.Inject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author apprentice
 */
@Controller
public class SearchController {

    private UnitDao dao;

    @Inject
    public SearchController(UnitDao dao) {
        this.dao = dao;
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String displaySearchPage() {
        return "search";
    }

    @RequestMapping(value = "search/units", method = RequestMethod.POST)
    @ResponseBody
    public List<Unit> searchContacts(@RequestBody Map<String, String> searchMap) {
        // Create the map of search criteria to send to the DAO
        Map<SearchTerm, String> criteriaMap = new HashMap<>();

        // Determine which search terms have values, translate the String
        // keys into SearchTerm enums, and set the corresponding values
        // appropriately.
        String currentTerm = searchMap.get("make");
        if (!currentTerm.isEmpty()) {
            criteriaMap.put(SearchTerm.MAKE, currentTerm);
        }
        currentTerm = searchMap.get("model");

        if (!currentTerm.isEmpty()) {
            criteriaMap.put(SearchTerm.MODEL, currentTerm);
        }
        currentTerm = searchMap.get("size");
        if (!currentTerm.isEmpty()) {
            criteriaMap.put(SearchTerm.SIZE, currentTerm);
        }
        currentTerm = searchMap.get("serialNumber");
        if (!currentTerm.isEmpty()) {
            criteriaMap.put(SearchTerm.SERIAL_NUMBER, currentTerm);
        }
        currentTerm = searchMap.get("weights");
        if (!currentTerm.isEmpty()) {
            criteriaMap.put(SearchTerm.WEIGHTS, currentTerm);
        }
        currentTerm = searchMap.get("notes");
        if (!currentTerm.isEmpty()) {
            criteriaMap.put(SearchTerm.NOTES, currentTerm);
        }

        return dao.searchUnits(criteriaMap);
    }
}

//write out search controller methods and add to interface
