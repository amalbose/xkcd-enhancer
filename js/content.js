$(".comicNav").append("<li><a id='explainLink' class='js-open-modal href='#' data-modal-id='popup'>Explain this Comic</a></li>");

$("html").prepend('<div id="popup" class="modal-box">  <header><a href="#" class="js-modal-close close">×</a></header><div class="modal-body"><iframe id="xpiFrame" src="" width="100%" height="700px"></iframe></div></div>');

$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('#explainLink').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
	var comicID = parseInt($('a[rel="prev"]').attr('href').replace(/\//g, ''))+1;
    $("#xpiFrame").attr("src", 'https://www.explainxkcd.com/wiki/index.php/'+comicID); 
    $(".modal-overlay").fadeTo(900, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(900, function() {
    $(".modal-overlay").remove();
  });
});
});
console.log(window.innerWidth*0.05);
document.getElementById("popup").style.left = window.innerWidth*0.05 + '!important';
