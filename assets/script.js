$(function(){
  var num_img = document.getElementById("images").childElementCount;
  var creazione_pallino = false;
  var num_pallini = 0;
  
  for(var i=0; i<num_img; i++){

    var contenuto_precedente = document.getElementById("counter").innerHTML;
    parseInt(i);
    document.getElementById("counter").innerHTML=contenuto_precedente+ '<div class="button circle" id=pallino"' + i + '></div>';
  
  }
  var primo_pallino = $('.button.circle').first().addClass('active');
  primo_pallino.addClass('active')
  $('.fa-chevron-right').click(function(){
    
    var pallino_attivo = $('.button.circle.active');
    var immagine_attiva = $('li.active');

    immagine_attiva.removeClass('active');
    pallino_attivo.removeClass('active');

    pallino_attivo.next().addClass('active');
    immagine_attiva.next().addClass('active');
    
})
$('.fa-chevron-left').click(function(){
  var pallino_attivo = $('.button.circle.active');
  var immagine_attiva = $('li.active');

  immagine_attiva.removeClass('active');
  pallino_attivo.removeClass('active');

  pallino_attivo.prev().addClass('active');
  immagine_attiva.prev().addClass('active');
})


})



