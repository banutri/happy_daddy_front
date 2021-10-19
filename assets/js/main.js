$(document).ready(function () {

// Search bar
  $('#modalSearch').modal({
    dismissible: false,
    onOpenEnd:function(){
      $('input[name=searchQuery]').focus();
    },
    onCloseEnd:function(){
      $('input[name=searchQuery]').val("");
    },
    
  });

  $('#searchBarForm').on('submit',function(event){
    event.preventDefault();
    let searchQuery = $('input[name=searchQuery]').val();
    console.log(searchQuery);
  })

  $('.btn-submit-searchquery').on('click',function(){
    $('#searchBarForm').submit();
  })
// End search bar

// Sidenav Trigger
  $('.sidenav-trigger-custom').on('click',function(){
    $('.sidenav').sidenav('open');
  });
// End Sidenav Trigger



// ========== Init Functions ============ //

// Sidenavabr
$('.sidenav').sidenav();



// Tooltip
$('.tooltipped').tooltip();

// Dropdown
$(".dropdown-trigger").dropdown();

// ========== End Init Functions ========= //

});

