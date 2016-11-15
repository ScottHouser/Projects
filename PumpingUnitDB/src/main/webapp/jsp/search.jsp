<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Company Contacts</title>
        <!-- Bootstrap core CSS -->
        <link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">
        <!-- SWC Icon -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/img/icon.png">
        
        <style>
            body{
               

    background: url('http://www.energylandscapes.net/images/xl/AF4A0631-III-Rev-V-Sepia-WEB.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

            }
            .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
                background-color:gray;
            }
            label{
                color:white;
            }
        </style>
        
    </head>
    <body>
       
        <div class="container">
           
<!--            <div class="container col-md-12" style="margin:1px;margin-right:1px;background-color:#c94248  ">-->

             <hr/>
            <div style="padding:0px;background-color:white  " class="navbar-fixed-top">
                <ul class="nav nav-tabs">
                    <li><a style="padding:1px;" >
                            <img style="padding:0px;width:140px;height:70px;" src="http://www.pennenergy.com/content/dam/Pennenergy/online-articles/2013/April/Shores%20Lift%20Solutions%20logo.JPG.scale.LARGE.JPG" />
                        </a></li>
                    <li role="presentation" class="nav-item" style="padding-top:1px; "><a href="${pageContext.request.contextPath}/home"><h4><b>Home</b></h4></a></li>
                    <li role="presentation" class="nav-item" style="padding-top:1px; "><a href="${pageContext.request.contextPath}/search"><h4><b>Search</b></h4></a></li>
                    <li role="presentation" class="nav-item" style="padding-top:1px; "><a href="${pageContext.request.contextPath}/stats"><h4><b>Stats</b></h4></a></li>
                </ul>    
            </div>
            <!--            <h2>Home Page</h2>-->
        </div>
            <!--
            
           Java – Spring MVC Tutorial: Contact List Application – Step 10: Client-Side View Functionality Page 10 of 13
            Add a row to our container - this will hold the summary table and the
            search form.
            -->
            <div class="row">
                <!--
                Add a col to hold the summary table - have it take up half the row
                -->
                <div class="col-md-6"style="margin-top:60px;">
                    <h2 style="color:white;"><b>Search Results</b></h2>
                    <!-- Include the summary table HTML -->
                    <%@include file="unitssummarytable.jsp" %>
                </div> <!-- End col div -->
                <!--
                Add col to hole the search form - have it take up the other
                half of the row
                -->
                <div class="col-sm-6"style="margin-top:75px;">
                <h2 style="margin-bottom: 40px;color: white;" class="col-md-8 col-md-offset-4"><b>Search Units</b></h2>
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="search-make" class="col-xs-3 control-label">
                            Make:
                        </label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="search-make"
                                   placeholder="Make"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search-model" class="col-xs-3 control-label">
                            Model:
                        </label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="search-model"
                                   placeholder="Model"/>
                        </div>
                    </div>

                    <!--                    Java – Spring MVC Tutorial: Contact List Application – Step 07: Client-Side View Functionality – Home Screen Page 6 of 20-->
                    <div class="form-group">
                        <label for="serarch-size" class="col-xs-3 control-label">
                            Size:
                        </label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="search-size"
                                   placeholder="Size"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="serarch-serial" class="col-xs-3 control-label">Serial#:</label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="search-serial"
                                   placeholder="Serial#"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="serarch-weights" class="col-xs-3 control-label">Weights:</label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="search-weights"
                                   placeholder="Weights"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search-notes" class="col-xs-3 control-label">Notes:</label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control input"
                                   id="search-notes"
                                   placeholder="notes"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-offset-3 col-md-8">
                            <button type="button"
                                    id="search-button"
                                    class="btn btn-primary btn-md">
                                Search Units
                            </button>
                        </div>
                    </div>
                </form>
            </div> <!-- End col div -->
            </div> <!-- End row div -->
        </div>
        <!-- Include the HTML for the details and edit modal dialog boxes -->
        <%@include file="uniteditmodal.jsp" %>

        <!-- Placed at the end of the document so the pages load faster -->
         <script src="${pageContext.request.contextPath}/js/jquery-2.2.4.min.js"></script>
        
        <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/UnitJavaScript.js"></script>
    </body>
</html>
