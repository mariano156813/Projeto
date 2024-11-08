$(document).ready(function () {
  // Animação de esconder e aparecer o formulario
  $("#Button1").click(function () {
    $("#formulario").toggle(100);
  });
  // Animação de passar o cursor nos titulos dos projetos e deixar em negrito
  $('#Projeto1').mouseover(function () {
    $(this).css('font-weight', 'bold')
  })
  $('#Projeto1').mouseout(function () {
    $(this).css('font-weight', 'normal')
  })

  $('#Projeto2').mouseover(function () {
    $(this).css('font-weight', 'bold')
  })
  $('#Projeto2').mouseout(function () {
    $(this).css('font-weight', 'normal')
  })

  $('#Projeto3').mouseover(function () {
    $(this).css('font-weight', 'bold')
  })
  $('#Projeto3').mouseout(function () {
    $(this).css('font-weight', 'normal')
  })
  // animação de voltar para o topo
  $('#voltar').click(function () {
    $('html, body').animate({
      scrollTop: $('#inicio').offset().top
    }, 500, "swing");
  })
})