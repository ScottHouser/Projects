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
            label{
                color:white;
            }
            .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
                background-color:gray;
            }


        </style>

    </head>
    <body>
        <script src="${pageContext.request.contextPath}/js/jquery-2.2.4.min.js"></script>
        <div class="container col-md-12" style="margin:1px;margin-right:1px;background-color:#c94248  ">

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
        <div class="row">
            <!--
            #2: Add a col to hold the summary table - have it take up half the row
            -->
            <div class="col-sm-6" style="margin-top:75px ">
                <h2 class="col-md-8 col-md-offset-4"><b><p style="color:white; ">Units<p></b></h2>
                <table id="unitTable" class="table table-hover">
                    <tr>
                        <th width="40%"><b><h3 style="color: white"><b>Make</b></h3></b></th>
                        <th width="30%"><b><h3 style="color: white"><b>Size</b></h3></b></th>
                        <th width="15%"></th>
                        <th width="15%"></th>
                    </tr>
                    <!--
                    #3: This holds the list of contacts - we will add rows dynamically
                    using jQuery
                    -->
                    <tbody id="contentRows"></tbody>
                </table>
            </div> <!-- End col div -->
            <!--
            #4: Add col to hold the new contact form - have it take up the other
            half of the row
            -->
            <div class="col-sm-6"style="margin-top:75px;">
                <h2 style="margin-bottom: 40px;color: white;" class="col-md-8 col-md-offset-4"><b>Add New Unit</b></h2>
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="add-make" class="col-xs-3 control-label">
                            Make:
                        </label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="add-make"
                                   placeholder="Make"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="add-model" class="col-xs-3 control-label">
                            Model:
                        </label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="add-model"
                                   placeholder="Model"/>
                        </div>
                    </div>

                    <!--                    Java – Spring MVC Tutorial: Contact List Application – Step 07: Client-Side View Functionality – Home Screen Page 6 of 20-->
                    <div class="form-group">
                        <label for="add-size" class="col-xs-3 control-label">
                            Size:
                        </label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="add-size"
                                   placeholder="Size"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="add-serial" class="col-xs-3 control-label">Serial#:</label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="add-serial"
                                   placeholder="Serial#"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="add-weights" class="col-xs-3 control-label">Weights:</label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control"
                                   id="add-weights"
                                   placeholder="Weights"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="add-notes" class="col-xs-3 control-label">Notes:</label>
                        <div class="col-xs-6">
                            <input type="text"
                                   class="form-control input"
                                   id="add-notes"
                                   placeholder="notes"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-offset-3 col-md-8">
                            <button type="submit"
                                    id="add-button"
                                    class="btn btn-primary btn-md">
                                Log Unit
                            </button>
                        </div>
                    </div>
                </form>
            </div> <!-- End col div -->
        </div> <!-- End row div -->
        <div id="validationErrors" style="color:white"></div>

    </div>

    <!--    <figure style="max-width: 1400px; max-width: 140rem;">
            <img sizes="86vw" srcset="http://www.energylandscapes.net/images/400/AF4A0631-
                 III-Rev-V-Sepia-WEB.jpg 400w, http://www.energylandscapes.net/images/800/AF4A0631-
                 III-Rev-V-Sepia-WEB.jpg 800w, http://www.energylandscapes.net/images/xl/AF4A0631-III-
                 Rev-V-Sepia-WEB.jpg 1400w" src="http://www.energylandscapes.net/images/xl/AF4A0631-III-Rev-V-Sepia-WEB.jpg" alt="Chevron, pumpjack, pump jack, Lufkin, Midland Texas, Permian Basin,  high resolution, sepia, black &amp; white, black and white, fine art, photo" title="At Days End Sepia Version photo" class="imgLarge" ondrag="return false" ondragstart="return false" oncontextmenu="return false" galleryimg="no" onmousedown="return false">
            <figcaption>
                <h1 class="photoTitle">At Days End Sepia Version</h1>
                <h2 class="photoLocation">Midland County Texas</h2>
                <div class="photoCaption"><p>At Days End features a Key Energy well servicing location and Lufkin pump jack on a Chevron lease in Southern Midland County Texas. &nbsp;The image is a high resolution 2:1 panorama available in fine art sizes up to 40x80". &nbsp;Fine Art Oil &amp; Gas Photography By Robert D. flaherty. Photo © copyright by Robert D. Flaherty.</p></div>
                <p><em><a href="http://www.energylandscapes.net/product/prints/161/">Purchase Prints</a></em></p>
            </figcaption>
        </figure>-->


    <%@include file="unittablefragment.jsp" %>
    <%@include file="uniteditmodal.jsp" %>
    <script src="${pageContext.request.contextPath}/js/jquery-2.2.4.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/UnitJavaScript.js"></script>

</body>
</html>

