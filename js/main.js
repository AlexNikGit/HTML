function procEnterClick( ) {
   document.getElementById( "ilSideLeft").classList.toggle( "active" );
   document.getElementById( "ilSideRight" ).classList.toggle( "active" );
   setTimeout( function( ) {
      document.getElementById( "ilEnterButton" ).classList.toggle( "active" );
   }, 250);
   setTimeout( function( ) {
      document.getElementById( "wdlEnter" ).style.display = "none";
      document.getElementById( "wdlLogin" ).style.display = "block";
   }, 1500);
};

function procMenuHeader( ) { document.getElementById( "wdlMenuHeader").classList.toggle( "active" ); }
function procPanelLeft( ) { document.getElementById( "wdlPanelLeft").classList.toggle( "active" ); }
function procPanelRight( ) { document.getElementById( "wdlPanelRight").classList.toggle( "active" ); }