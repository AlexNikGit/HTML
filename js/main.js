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
var arrowAnimationStep = 0;
var arrowAnimationTimer;
function doAnimateArrow( ) {     /* переделать на анимацию в CSS через добавочные стили, типа active и раздвижение в стороны вместе с разделительными частями экрана */
   if( arrowAnimationStep == 1 ) {
      document.getElementById("arrTL1").setAttribute("fill", "#fafafa");
      document.getElementById("arrBL1").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTR1").setAttribute("fill", "#fafafa");
      document.getElementById("arrBR1").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTL3").setAttribute("fill", "#fafafa");
      document.getElementById("arrBL3").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTR3").setAttribute("fill", "#fafafa");
      document.getElementById("arrBR3").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTL5").setAttribute("fill", "#fafafa");
      document.getElementById("arrBL5").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTR5").setAttribute("fill", "#fafafa");
      document.getElementById("arrBR5").setAttribute("fill", "#e1e1e1");

      document.getElementById("arrTL2").setAttribute("fill", "#afafaf");
      document.getElementById("arrBL2").setAttribute("fill", "#969696");
      document.getElementById("arrTR2").setAttribute("fill", "#afafaf");
      document.getElementById("arrBR2").setAttribute("fill", "#969696");
      document.getElementById("arrTL4").setAttribute("fill", "#afafaf");
      document.getElementById("arrBL4").setAttribute("fill", "#969696");
      document.getElementById("arrTR4").setAttribute("fill", "#afafaf");
      document.getElementById("arrBR4").setAttribute("fill", "#969696");
      arrowAnimationStep = 2;
   } else if( arrowAnimationStep == 2 ) {
      document.getElementById("arrTL1").setAttribute("fill", "#afafaf");
      document.getElementById("arrBL1").setAttribute("fill", "#969696");
      document.getElementById("arrTR1").setAttribute("fill", "#afafaf");
      document.getElementById("arrBR1").setAttribute("fill", "#969696");
      document.getElementById("arrTL3").setAttribute("fill", "#afafaf");
      document.getElementById("arrBL3").setAttribute("fill", "#969696");
      document.getElementById("arrTR3").setAttribute("fill", "#afafaf");
      document.getElementById("arrBR3").setAttribute("fill", "#969696");
      document.getElementById("arrTL5").setAttribute("fill", "#afafaf");
      document.getElementById("arrBL5").setAttribute("fill", "#969696");
      document.getElementById("arrTR5").setAttribute("fill", "#afafaf");
      document.getElementById("arrBR5").setAttribute("fill", "#969696");

      document.getElementById("arrTL2").setAttribute("fill", "#fafafa");
      document.getElementById("arrBL2").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTR2").setAttribute("fill", "#fafafa");
      document.getElementById("arrBR2").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTL4").setAttribute("fill", "#fafafa");
      document.getElementById("arrBL4").setAttribute("fill", "#e1e1e1");
      document.getElementById("arrTR4").setAttribute("fill", "#fafafa");
      document.getElementById("arrBR4").setAttribute("fill", "#e1e1e1");
      arrowAnimationStep = 1;
   }
   arrowAnimationTimer = setTimeout(doAnimateArrow, 500);
}
function procEnterMFocus( ) {
   document.getElementById( "wdgArrowBarLeft").classList.toggle( "active" );
   document.getElementById( "wdgArrowBarRight").classList.toggle( "active" );
   if( !arrowAnimationStep ) {
      arrowAnimationStep = 1;
      doAnimateArrow( );
   }
   else {
      arrowAnimationStep = 0;
      clearTimeout( arrowAnimationTimer );
   }
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
