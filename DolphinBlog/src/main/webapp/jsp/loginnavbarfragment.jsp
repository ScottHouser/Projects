<div>
    <nav class="navbar navbar-inverse" style="height:59px;">
        <div class="container-fluid">
            <ul id="nav-bar-login" class="nav nav-pills navbar-left">
                <li role="presentation" class="active"><a href="${pageContext.request.contextPath}/home"><h5>Home</h5></a></li>
<!--                <li role="presentation"><a href="${pageContext.request.contextPath}/blogpost"><h5>Blog Example Page</h5></a></li>-->
                 <li id="d" class="dropdown">
                    <a id="a" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"><h5>Dolphins  <span class="caret"></span></h5></a>
                    <ul id="dolphins-dropdown-login" class="dropdown-menu">
                        <!-- THIS IS WHERE WE CAN EITHER PUT SOME SORT OF JSTL <c forEach> or we
                              CAN USE JavaScript TO APPEND STATIC PAGES with their titles-->
<!--                        <li role="presentation"><a href="${pageContext.request.contextPath}/pages/Popinov"><h5>Popinov</h5></a></li>
                        <li role="separator" class="divider"></li>
                        <li role="presentation"><a href="${pageContext.request.contextPath}/pages/Vladimir"><h5>Vladimir</h5></a></li>-->
                    </ul>
                </li>
            </ul>
        </div>
</div>