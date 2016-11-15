

$(document).ready(function () {
    drawChart();
});

    function drawChart() {
        $.get('stats/chart').success(function (data) {
            
            var dataTable = new google.visualization.DataTable(data); 
                
                    var options = {
                        title: 'Units',
                        vAxis: {title: 'Make', titleTextStyle: {color: 'red'}},
                        hAxis: {title: 'Num Make', titleTextStyle: {color: 'red'}}, 'width': 500,
                        'height': 400
                    }; 
                    var chart =
                    new
                    google.visualization.BarChart(document.getElementById('chart_div'));
            
            chart.draw(dataTable, options);
        });
    }

;