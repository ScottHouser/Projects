//DOCUMENT READY FUNCTIONS
$(document).ready(function () {
    loadUnits();


    // NEW CODE START
    // on click for our add button
    $('#add-button').click(function (event) {
        // we don’t want the button to actually submit
        // we'll handle data submission via ajax
        event.preventDefault();
        // Make an Ajax call to the server. HTTP verb = POST, URL = contact
        $.ajax({
            type: 'POST',
            url: 'unit',
            // Build a JSON object from the data in the form
            data: JSON.stringify({
                make: $('#add-make').val(),
                model: $('#add-model').val(),
                size: $('#add-size').val(),
                serialNumber: $('#add-serial').val(),
                weights: $('#add-weights').val(),
                notes: $('#add-notes').val()

            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'dataType': 'json'
        }).success(function (data, status) {
            // If the call succeeds, clear the form and reload the summary table
            $('#add-make').val('');
            $('#add-model').val('');
            $('#add-size').val('');
            $('#add-serial').val('');
            $('#add-weights').val('');
            $('#add-notes').val('');
            $('#validationErrors').empty();
            loadUnits();
            //return false;
        }).error(function (data, status) {
        // #2 - Go through each of the fieldErrors and display the associated error
        // message in the validationErrors div
        $.each(data.responseJSON.fieldErrors, function (index, validationError) {
            var errorDiv = $('#validationErrors');
            errorDiv.append(validationError.message).append($('<br>'));
        });

    });
    });

    $('#edit-button').click(function (event) {
        // prevent the button press from submitting the whole page
        event.preventDefault();
        var test = $('#unit-id-edit').val();
        var test2 = $('#unit-id').val();
        var element = $(event.relatedTarget);
        var petId = element.data('unit-id-edit');
        var petId = element.data('unit-id');
        var asd = $('#unit-id-edit').innerHtml;
        var as5d = $('#edit-size').val();
        // Ajax call -
        // Method - PUT
        // URL - contact/{id}
        // Just reload all of the Contacts upon success
        $.ajax({
            type: 'PUT',
            url: 'unit/' + $('#unit-id-edit').val(),
            data: JSON.stringify({
                make: $('#edit-make').val(),
                model: $('#edit-model').val(),
                size: $('#edit-size').val(),
                serialNumber: $('#edit-serial').val(),
                weights: $('#edit-weights').val(),
                notes: $('#edit-notes').val()
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'dataType': 'json'
        }).success(function () {
            loadUnits();
        });
    });

    $('#search-button').click(function (event) {
        // we don’t want the button to actually submit
        // we'll handle data submission via ajax
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'search/units',
            data: JSON.stringify({
                make: $('#search-make').val(),
                model: $('#search-model').val(),
                size: $('#search-size').val(),
                serialNumber: $('#search-serial').val(),
                weights: $('#search-weights').val(),
                notes: $('#search-notes').val()
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'dataType': 'json'
        }).success(function (data, status) {
            $('#search-make').val('');
            $('#search-model').val('');
            $('#search-size').val('');
            $('#search-serial').val('');
            $('#search-weights').val('');
            $('#search-notes').val('');
            fillUnitTable(data, status);
        });
    });


});

///////////////////////////////////////
//000000 00    00 00    00
//00     00    00 000   00
//000000 00    00 00 0  00
//00     00    00 00  0 00
//00     00    00 00   000
//00     00000000 00    00 ctions
///////////////////////////////////////



function fillUnitTable(unitList, status) {
    // clear the previous list
    clearUnitTable();
    // grab the tbody element that will hold the new list of contacts
    var uTable = $('#contentRows');
    // Make an Ajax GET call to the 'contacts' endpoint. Iterate through
    // each of the JSON objects that are returned and render them to the
    // summary table.
    $.ajax({
        url: "units"
    }).success(function (data, status) {
        $.each(unitList, function (index, unit) {
            uTable.append($('<tr>')
                    .append($('<td>')
                            .append($('<a style="font-weight:bold;font-size:x-large;color:white;">')
                                    .attr({
                                        'data-unit-id': unit.trackingNumber,
                                        'data-toggle': 'modal',
                                        'data-target': '#detailsModal'

                                    })
                                    .text(unit.make)
                                    ) // ends the <a> tag
                            ) // ends the <td> tag for the contact name
                    .append($('<td style="font-weight:bold;font-size:x-large;color:white;">').text(unit.size))
                    .append($('<td>')
                            .append($('<button type="button" class="btn btn-primary btn-md">')
                                    .attr({
                                        'data-unit-id-edit': unit.trackingNumber,
                                        'data-toggle': 'modal',
                                        'data-target': '#editModal'
                                    })
                                    .text('Edit')
                                    ) // ends the <a> tag
                            ) // ends the <td> tag for Edit
                    .append($('<td>')
                            .append($('<button type="button" class="btn btn-primary btn-md">')
                                    .attr({
                                        'onClick': 'deleteUnit(' + unit.trackingNumber + ')'
                                    })
                                    .text('Delete')
                                    ) // ends the <a> tag
                            ) // ends the <td> tag for Delete
                    ); // ends the <tr> for this Contact
        }); // ends the 'each' function
    });
}

function fillSearchTable() {
    // clear the previous list
    clearSearchTable();
    // grab the tbody element that will hold the new list of contacts
    var uTable = $('#contentRows');
    // Make an Ajax GET call to the 'contacts' endpoint. Iterate through
    // each of the JSON objects that are returned and render them to the
    // summary table.
    $.ajax({
        url: "units"
    }).success(function (data, status) {
        $.each(data, function (index, unit) {
            uTable.append($('<tr>')
                    .append($('<td>')
                            .append($('<a style="font-weight:bold;font-size:x-large;color:white;">')
                                    .attr({
                                        'data-unit-id': unit.trackingNumber,
                                        'data-toggle': 'modal',
                                        'data-target': '#detailsModal'

                                    })
                                    .text(unit.make)
                                    ) // ends the <a> tag
                            ) // ends the <td> tag for the contact name
                    .append($('<td style="font-weight:bold;font-size:x-large;color:white;">').text(unit.size))
                    .append($('<td>')
                            .append($('<button type="button" class="btn btn-primary btn-md">')
                                    .attr({
                                        'data-unit-id-edit': unit.trackingNumber,
                                        'data-toggle': 'modal',
                                        'data-target': '#editModal'
                                    })
                                    .text('Edit')
                                    ) // ends the <a> tag
                            ) // ends the <td> tag for Edit
                    .append($('<td>')
                            .append($('<button type="button" class="btn btn-primary btn-md">')
                                    .attr({
                                        'onClick': 'deleteUnit(' + unit.trackingNumber + ')'
                                    })
                                    .text('Delete')
                                    ) // ends the <a> tag
                            ) // ends the <td> tag for Delete
                    ); // ends the <tr> for this Contact
        }); // ends the 'each' function
    });
}


function deleteUnit(trackingNumber) {
    var answer = confirm("Do you really want to delete this Unit?");
    if (answer === true) {
        $.ajax({
            type: 'DELETE',
            url: 'unit/' + trackingNumber
        }).success(function () {
            loadUnits();
        });
    }
}

function loadUnits() {
    // Make an Ajax GET call to the 'contacts' endpoint. Iterate through
    // each of the JSON objects that are returned and render them to the
    // summary table.
    $.ajax({
        url: "units"
    }).success(function (data, status) {
        fillUnitTable(data, status);
    });
}


function clearUnitTable() {
    $('#contentRows').empty();
}
function clearSearchTable() {
    $('#SearchRows').empty();
}



// #1 - NEW CODE
// This code runs in response to the show.bs.modal event - it gets the correct
// contact data and renders it to the dialog
$('#detailsModal').on('show.bs.modal', function (event) {
    // Get the element that triggered this event - in our case it is a contact
    // name link in the summary table. This link has an attribute that contains
    // the contactId for the given contact. We'll use that to retrieve the
    // contact's details.
    var element = $(event.relatedTarget);
    // grab the contact id
    var trackingNumber = element.data('unit-id');

    // PLACEHOLDER: Eventually we'll make an ajax call to the server to get the
    // details for this contact but for now we'll load the dummy
    // data


    var modal = $(this);
    $.ajax({
        type: 'GET',
        url: 'unit/' + trackingNumber
    }).success(function (unit) {

        modal.find('#unit-id').text(unit.trackingNumber);
        modal.find('#unit-make').text(unit.make);
        modal.find('#unit-model').text(unit.model);
        modal.find('#unit-size').text(unit.size);
        modal.find('#unit-serial').text(unit.serialNumber);
        modal.find('#unit-weights').text(unit.weights);
        modal.find('#unit-notes').text(unit.notes);

    });
});

$('#editModal').on('show.bs.modal', function (event) {

    var element = $(event.relatedTarget);

    var unitId = element.data('unit-id-edit');
    // PLACEHOLDER: Eventually we'll make an ajax call to the server to get the
    // details for this contact but for now we'll load the dummy
    // data
    var modal = $(this);
    $.ajax({
        type: 'GET',
        url: 'unit/' + unitId
    }).success(function (unit) {

        modal.find('#unit-id-edit').val(unit.trackingNumber);
        modal.find('#edit-make').val(unit.make);
        modal.find('#edit-model').val(unit.model);
        modal.find('#edit-size').val(unit.size);
        modal.find('#edit-serial').val(unit.serialNumber);
        modal.find('#edit-weights').val(unit.weights);
        modal.find('#edit-notes').val(unit.notes);
    });
});

// on click for our search button
//$('#search-button').click(function (event) {
//    // we don’t want the button to actually submit
//    // we'll handle data submission via ajax
//    event.preventDefault();
//    $.ajax({
//        type: 'POST',
//        url: 'search/units',
//        data: JSON.stringify({
//            make: $('#search-make').val(),
//            model: $('#search-model').val(),
//            size: $('#search-size').val(),
//            serialNumber: $('#search-serial').val(),
//            weights: $('#search-weights').val(),
//            notes: $('#search-notes').val()
//        }),
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//        'dataType': 'json'
//    }).success(function (data, status) {
//        $('#search-make').val('');
//        $('#search-model').val('');
//        $('#search-size').val('');
//        $('#search-serial').val('');
//        $('#search-weights').val('');
//        $('#search-notes').val('');
//        //fillSearchTable(data, status);
//    });
//});


///////////////////////////
//TEST DATA
///////////////////////////
var testUnitData = [
    {
        trackingNumber: "1",
        make: "Lufkin",
        model: "High prime wide skid",
        size: "456",
        serialNumber: "166A900LK",
        weights: "CC",
        notes: "Bad saddle bearing and missing gardrails"},
    {
        trackingNumber: "2",
        make: "American",
        model: "Low prime wide skid",
        size: "640",
        serialNumber: "90034222",
        weights: "SS",
        notes: "Cracks in skid. Needs carrier bar"}

];

var dummyDetailsContact =
        {
            trackingNumber: "3",
            make: "American",
            model: "Low prime wide skid",
            size: "640",
            serialNumber: "90034222",
            weights: "SS",
            notes: "Cracks in skid. Needs carrier bar"
        };

var dummyEditContact =
        {
            trackingNumber: "4",
            make: "American",
            model: "Low prime wide skid",
            size: "640",
            serialNumber: "90034222",
            weights: "SS",
            notes: "Cracks in skid. Needs carrier bar"
        };