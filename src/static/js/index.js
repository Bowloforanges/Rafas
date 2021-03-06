//On init hide sections that are not the main one
/*$("#harvest-section").hide();
$("#settings-section").hide();*/
// Also hide popups
$("#confirmation-popup").hide();
$("#edit-entry-popup").hide();


//Fake navigation
/*function toggleSection(sectionName) {
    switch (sectionName) {
        case 'sensors':
            $("#harvest-section").hide();
            $("#settings-section").hide();
            $("#sensors-section").show();
            break;
        case 'harvest':
            $("#settings-section").hide();
            $("#sensors-section").hide();
            $("#harvest-section").show();
            break;
        case 'settings':
            $("#harvest-section").hide();
            $("#sensors-section").hide();
            $("#settings-section").show();
            break;
        
        default:
            alert("none");
            break;
    }
}*/

/* Toggles confirmation popup */
function toggleEditEntryPopup(isClosed) {

    if(isClosed){
        $(document).unbind('scroll');
        $('body').css({'overflow':'visible'});
    } else if(!isClosed) {
        $('body').css({'overflow':'hidden'});
        $(document).bind('scroll',function () { 
             window.scrollTo(0, 975); 
        });
    }

    $("#edit-entry-popup").toggle();

}
/* Toggles confirmation popup */
function toggleConfirmationPopup(isClosed) {

    if(isClosed){
        $(document).unbind('scroll');
        $('body').css({'overflow':'visible'});
    } else if(!isClosed) {
        $('body').css({'overflow':'hidden'});
        $(document).bind('scroll',function () { 
             window.scrollTo(0, 975); 
        });
    }

    $("#confirmation-popup").toggle();

}

