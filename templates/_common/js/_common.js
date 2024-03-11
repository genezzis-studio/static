	$(document).ready(function(){
        $('#btnEnviarContato').click(function (event) {
          event.preventDefault();
          var botao = $('#btnEnviarContato');
          botao.prop('disabled', true); // Desabilita o botão

          $.ajax({
              url: '{{@site.url}}/cadastrar/contato',
              data: $('#formEnviarContato *').serialize(),
              type:'POST',
              dataType: 'json',
              beforeSend: function(){ 
              $("#btnEnviarContato").html("Processando, aguarde ... <i class='fa fa-spinner fa-spin'></i>"); // Exibe o spinner enquanto processa
            }
          })
          .done(function(result) {
          // SE retorno ajax igual a 200
          if(result.status_code ===200){
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 5000,
              width: 420,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              html: '&nbsp;&nbsp;<strong class="text-success"> Seus dados de contato, foram recebidos com sucesso. Por favor, aguarde que um de nossos especialistas, irá entrar em contato com você.</strong>',
            })
          } 

          // SENÃO SE resposta igual a 404
          else {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 5000,
              width: 420,
             timerProgressBar: true,
             didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

            Toast.fire({
              icon: 'error',
              html: '&nbsp;&nbsp;<strong class="text-danger">'+result.msg+'</strong>',
            })
          }
        })
        .fail(function(jqXHR, textStatus ) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops... Algo deu errado !',
            text: 'Ocorreu um erro inesperado, e não conseguimos processar a sua requisição.',
            footer: '<a href="https://forms.gle/shPZFjdDvsY1Yft76" target="_blank" class="text-danger" title="Gostaria de ajudar-nos a corrigir esta falha ? Clique no link e reporte este erro"><i class="fas fa-bug"></i>&nbsp;&nbsp;Ajude-nos a melhorar o aplicativo. Reporte esta falha.</a>'
        })//END Swal.fire()

        })
        .always(function(result) {
        $("#btnEnviarContato").html("Enviar Mensagem"); // retornar o valor original do botão
        botao.prop('disabled', false); // Reabilita o botão
        });
      })//END click()
    });//end document.ready()
	
	// Texto Copyrigth Genezzis
	var GNZ_Copyright_Txt = document.getElementById("gnz-copyright");
	GNZ_Copyright_Txt.insertAdjacentHTML("afterend", '<div id="gnz-copyright-txt">Desenvolvido com <i class="fa fa-heart text-danger"></i> utilizando <a href="https://genezzis.com/utm_source/{{@REALM}}" title="Crie um site incrível, agora mesmo com Genezzis Studio!"><img src="https://res.cloudinary.com/genezzis/image/upload/v1655516936/gnz_studio/logoGenezzisStudio-v1.png" align="center" alt="Genezzis Studio" style="height: 40px;"></a></div>');