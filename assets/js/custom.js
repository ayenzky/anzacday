$(document).ready(function() {
   $("#menu").sticky({topSpacing:0});
   $(".navigation").navigation({
      type: "overlay",
      gravity: "right",
      maxWidth: "180000px",
      labels: {
          closed: "<img src='/img/menu-button.svg'>",
          open: "<img src='/img/menu-button.svg'>"
      }
    });
   $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );
        
        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );
        
        

        return false;
    } );

});
// var $menu = $('.menu');

// $(document).mouseup(function (e) {
//    if (!$menu.is(e.target) // if the target of the click isn't the container...
//    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
//    {
// 	 $('body').removeClass('menu-opened');
//      $menu.removeClass('menu-open');
//   }
//  });

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=1037601643039892&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));