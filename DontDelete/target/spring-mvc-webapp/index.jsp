<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Index Page</title>
        <!-- Bootstrap core CSS -->
        <link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">

        <!-- SWC Icon -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/img/icon.png">

        <style>
            @import url('https://fonts.googleapis.com/css?family=Oswald');
            #main{
                margin-top:100px;
                height:300px;
                width:500px;
                border-radius: 25px;
                border: 2px solid #637593;
                padding: 20px; 
                
            }
            #title{
                margin:0px;
                font-family: 'Oswald', sans-serif;
            }
            #text{
                margin:0px;
                font-family: 'Oswald', sans-serif;
            }
            #text-div{
                margin-top:50px;
            }
            #button-div{
                margin-top:50px;
            }
            #delete{
                font-family: 'Oswald', sans-serif;
                width:100px;
            }

        </style>
    </head>
    <body id="body">
<!--        <div  class="container" id="main">


            <div class="col-md-12">
                <center><h3 id="title">DONT DELETE MY WEBSITE!</h3></center>
            </div>
            <div id="text-div" class="col-md-12">
                <center><h5 id="text">It's hardly even a website. Its like one JSP and some styling. Unfortunately It's entire existence is dependent on an 
                            SQL database that can be deleted with the click of a button. Don't do it man... Don't do it...  </h5></center>
            </div>
            <div id="button-div" class="col-md-12">
                <center> <button id="delete" type="button" class="btn btn-danger">DELETE</button></center>
            </div>

        </div>-->
        <div id="divToFill"></div>
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="${pageContext.request.contextPath}/js/jquery-2.2.4.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/delete.js"></script>

    </body>
</html>
<!--<h1>Spring MVC Application from Archetype</h1>
            <hr/>
            <div class="navbar">
                <ul class="nav nav-tabs">
                        <li role="presentation" class="active"><a href="${pageContext.request.contextPath}/index.jsp">Home</a></li>
                        <li role="presentation"><a href="${pageContext.request.contextPath}/hello/sayhi">Hello Controller</a></li>
                </ul>    
            </div>
            <h2>Home Page</h2>-->
