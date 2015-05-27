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

function procMenuHeader( ) {
   document.getElementById( "wdlMenuHeader").classList.toggle( "active" );
   setTimeout( function( ) {
      var objStyle = document.getElementById( "btnMenuHeader" ).style;
      if( objStyle.backgroundImage )
         objStyle.backgroundImage = null;
      else objStyle.backgroundImage = "url('ico/panel_down.svg')";
   }, 300);      /* равно времени, установленному на анимацию в таблице стилей */
}
function procPanelLeft( ) {
   document.getElementById( "wdlPanelLeft").classList.toggle( "active" );
   setTimeout( function( ) {
      var objStyle = document.getElementById( "btnPanelLeft" ).style;
      if( objStyle.backgroundImage )
         objStyle.backgroundImage = null;
      else objStyle.backgroundImage = "url('ico/left_open.svg')";
   }, 300);      /* равно времени, установленному на анимацию в таблице стилей */
}
function procPanelRight( ) {
   document.getElementById( "wdlPanelRight").classList.toggle( "active" );
   setTimeout( function( ) {
      var objStyle = document.getElementById( "btnPanelRight" ).style;
      if( objStyle.backgroundImage )
         objStyle.backgroundImage = null;
      else objStyle.backgroundImage = "url('ico/right_open.svg')";
   }, 300);      /* равно времени, установленному на анимацию в таблице стилей */
}
