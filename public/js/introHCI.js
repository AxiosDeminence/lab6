'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	
	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get('/project/' + idNumber, projCallback);
}

function projCallback(response) {
	var htmlString = '<p>' + response.title + '</p>' +
					 '<p>' + response.date  + '</p>' +
					 '<img src="' + response.image + '" align="left" class="img-responsive" style="max-width:75%;margin-right:8px;">' +
					 response.summary;
	$('#project' + response.id + ' .details').html(htmlString);
}