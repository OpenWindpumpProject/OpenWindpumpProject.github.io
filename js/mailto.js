/* 
 * embeds the form content into a mailto:URL
 */

function mailTo() {
    var link = "mailto:m.hammer@green-desert.info"
             //+ "?cc=myCCaddress@example.com"
             + "?subject=" + encodeURI("OWP Contact Form: " + document.getElementById('contact_subject').value)
             + "&body=Name: " + encodeURI(document.getElementById('contact_name').value)
             //+ escape("\nE-Mail: " + document.getElementById('contact_email').value)
             + encodeURI("\nMessage: " + document.getElementById('contact_message').value)
    ;
 
    window.location.href = link;
}

