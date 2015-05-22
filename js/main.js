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
}