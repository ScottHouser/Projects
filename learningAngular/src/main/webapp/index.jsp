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
<!--        <link href="${pageContext.request.contextPath}/js/angular.min.js">-->
<script src="${pageContext.request.contextPath}/js/jquery-2.2.4.min.js"></script>
        <!-- SWC Icon -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/img/icon.png">
<!--        <script src="${pageContext.request.contextPath}/js/angular.min.js"></script>-->
        <style>
              #test{
                /*               box-shadow:  5px 0px  #000000;*/
                box-shadow: inset 0px -30px 1px #000000;
                color:white;
                font-weight: bold;
                background-color: grey;
                /*                box-shadow:  -5px 0px  #000000;*/
            }
        </style>

    </head>
    <body ng-app="myApp">
        <div class="container">

            <!--            <hr/>
                        <div class="navbar">
                            <ul class="nav nav-tabs">
                                <li role="presentation" class="active"><a href="${pageContext.request.contextPath}/index.jsp">Home</a></li>
                                <li role="presentation"><a href="${pageContext.request.contextPath}/hello/sayhi">Hello Controller</a></li>
                            </ul>    
                        </div>-->

        </div>
        <div ng-controller="MainController">
       
<!--            <img src="{{image}}">-->
            
            
<div  ng-repeat="item in items">
<!--          <itemBlock itemX="item"></itemBlock>-->
<div class="col-xs-2 col-xs-offset-1" style="width:100px;height:130px;margin:0px;" id="test">
    <img class="image-responsive" style="width:50px;height:50px;" src="{{item.image}}">
    <br>
   
    <p>{{item.place}}
        
        {{item.price | currency}}</p>
   
    <p  ng-click="minusOne($index)">+ {{ item.stock }} </p>

</div>
        </div>
<input type="text" class="form-control" id="buy-input" placeholder="Place" style="width:300px;" ng-model="inputModelPlace">
<input type="text" class="form-control" id="buy-money" placeholder="Money" style="width:300px;" ng-model="inputModelMoney">
<button ng-click="minusStockByClick(inputModelPlace, inputModelMoney)" type="Button" class="btn btn-primary">BUY</button>





        </div>



<!--        directives
        <script src="${pageContext.request.contextPath}/js/directive1.js"></script>


         Modules 
        <script src="${pageContext.request.contextPath}/js/App.js"></script>


         Controllers 

        <script src="${pageContext.request.contextPath}/js/controller.js"></script>-->

        <!-- Placed at the end of the document so the pages load faster -->
<!--        <script src="${pageContext.request.contextPath}/js/jquery-2.2.4.min.js"></script>-->
        <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/angular.min.js"></script>
        
           <!-- Modules -->
        <script src="${pageContext.request.contextPath}/js/App.js"></script>

        
         <!--directives-->
        <script src="${pageContext.request.contextPath}/js/directive1.js"></script>


       

        <!-- Controllers -->

        <script src="${pageContext.request.contextPath}/js/controller.js"></script>


    </body>
</html>

