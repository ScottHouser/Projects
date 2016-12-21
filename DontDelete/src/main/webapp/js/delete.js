$(document).ready(function () {

    loadMainPage();
//    loadMainPagePopular();
//    hashLoadFront();

    $('#delete').click(function (event) {
        event.preventDefault();
        
        $.ajax({
            type: 'DELETE',
            url: '/DontDelete/delete' 

        }).success(function (data) {
           loadMainPage();
        });

    });

});
function loadMainPage(){
    
    $.ajax({
        url: "/DontDelete/content",
        type: "GET"
    }).success(function (data) {
        processContent(data);
       
    });

};

function processContent(posts) {
    var testDiv = $('#body');
    testDiv.append(posts);
    


}
