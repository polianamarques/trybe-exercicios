import validator from 'validator';

//seleciona pelos ids, os campos em nossa página

const campoDetexto = document.getElementById("value");
const botao = document.getElementById("button");
const seletor = document.getElementById("option");
const textoDeSaida = document.getElementById("answer");

// Vamos usar o preventDefault() para evitar que, ao
    // clicar no botão, ele recarregue a página
botao.addEventListener('click', (event) => {
    event.preventDefault();
});

// Aqui, criamos um objeto cujas chaves são os tipos a
  // serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.
    // O objeto 'campos' possui as chaves com o mesmo nome
  // das opções do seletor em nossa página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, 4),
    url: validator.isURL(campoDeTexto.value),
  };
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;

