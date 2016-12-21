package com.tsguild.dontdelete;

import java.util.List;
import java.util.Map;
import javax.inject.Inject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
//@RequestMapping({"/hello"})
public class HomeController {
    
    private NewInterface dao;
    
   @Inject
    public HomeController(NewInterface dao) {
        this.dao = dao;
    }
        
    public HomeController() {
    }
    
//    @RequestMapping(value="/sayhi", method=RequestMethod.GET)
//    public String sayHi(Map<String, Object> model) {
//        model.put("message", "Hello from the controller" );
//        return "hello";
//    }
    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public String displayHomePage() {
        return "index";
    }
    
    @RequestMapping(value = {"/content"}, method = RequestMethod.GET)
    @ResponseBody
    public String getContent() {
        return dao.getContent();
    }
    
     @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = {"/delete"}, method = RequestMethod.DELETE)
    public void removePost() {
        dao.removeContent();
    }
}
