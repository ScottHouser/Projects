/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tsguild.pumpingunitdb.controller;

import com.tsguild.pumpingunitdb.dao.UnitDao;
import com.tsguild.pumpingunitdb.dto.Unit;
import java.util.List;
import javax.inject.Inject;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author apprentice
 */
@Controller
public class HomeController {

    private UnitDao dao;

    @Inject
    public HomeController(UnitDao dao) {
        this.dao = dao;
    }

    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public String displayHomePage() {
        return "index";
    }
//    @RequestMapping(value = {"/stats"}, method = RequestMethod.GET)
//    public String displayStatsPage() {
//        return "Stats";
//    }
//    @RequestMapping(value = { "/search"}, method = RequestMethod.GET)
//    public String displaySearch() {
//        return"search";
//    }

    @RequestMapping(value = "/unit/{trackingNumber}", method = RequestMethod.GET)
    @ResponseBody
    public Unit getUnit(@PathVariable("trackingNumber") int id) {

        return dao.getUnitsById(id);
    }

    @RequestMapping(value = "/unit", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Unit createUnit(@Valid @RequestBody Unit unit) {

        dao.addUnit(unit);

        return unit;
    }

    @RequestMapping(value = "/unit/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUnit(@PathVariable("id") int id) {
        // remove the Contact associated with the given id from the data layer
        dao.removeUnit(id);
    }

    @RequestMapping(value = "/units", method = RequestMethod.GET)
    @ResponseBody
    public List<Unit> getAllUnits() {
        // get all of the Contacts from the data layer
        return dao.getAllUnits();
    }

    @RequestMapping(value = "/unit/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void putUnit(@PathVariable("id") int id, @RequestBody Unit unit) {
        // set the value of the PathVariable id on the incoming Contact object
        // to ensure that a) the contact id is set on the object and b) that
        // the value of the PathVariable id and the Contact object id are the
        // same.
        unit.setTrackingNumber(id);
        // update the contact
        //dao.removeUnit(id);
        dao.updateUnit(unit);
        //dao.removeUnit(id);
    }

}
