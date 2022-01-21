import { clienteService } from "../service/cliente-server.js";

( async() => {
  const pegaURL = new URL(window.location);

  const id = pegaURL.searchParams.get("id");

  const inputNome = document.querySelector('[data-nome]');
  const inputemail = document.querySelector('[data-email]');

  try {
    const dados = await clienteService.detalhaCliente(id)
    inputNome.value = dados.nome;
    inputemail.value = dados.email;
  } catch (erro) {
    console.log(erro);
    window.location.href = "../telas/erro.html";
  }

  const formulario = document.querySelector('[data-form]');

  formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      await clienteService.atualizaCliente(id, inputNome.value, inputemail.value)
      window.location.href = "../telas/edicao_concluida.html";
    } catch (erro) {
      console.log(erro);
      window.location.href = "../telas/erro.html";
    }
  });
})();
