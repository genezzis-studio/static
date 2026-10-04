// 1. Defina os estilos CSS que serão aplicados no console
  const estiloTitulo = "color: red; font-size: 42px; font-weight: bold; -webkit-text-stroke: 1px black;";
  const estiloTexto = "color: #444; font-size: 16px; font-family: sans-serif; line-height: 1.5;";

  // 2. Função para renderizar a mensagem no console
  function exibirAvisoConsoleF12() {
    console.clear();
    console.log("%c{{@TRANSLATE.console_f12_title ?? @CONSOLE_F12_TITLE_FALLBACK }}", estiloTitulo);
    console.log(
      "%c{{@TRANSLATE.console_f12_text ?? @CONSOLE_F12_TEXT_FALBACK }}",
      estiloTexto
    );
  }

  exibirAvisoConsoleF12();