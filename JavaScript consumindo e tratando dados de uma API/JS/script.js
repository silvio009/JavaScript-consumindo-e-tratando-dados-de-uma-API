 // sincrono -> tarefa é concluída uma após outra
 // assímcrono-> tarefas executadas em "segundo plano"
async function buscarEndereco(cep){
  const mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = "";
    try{
      const consultaCEP =  await fetch (`https://viacep.com.br/ws/${cep}/json/`) // fatch recebe a URL da API // async ---> await
      const consultaCEPConvertida = await consultaCEP.json()
      if ( consultaCEP.erro){
        throw Error ('Esse CEP é inválido !')
      }
      // iniciando a auto preechimento dos campos (cidade/ logradouro / estado) com base no Cep fornecido!
      const cidade = document.getElementById('cidade');
      const logradouro = document.getElementById('endereco');
      const estado = document.getElementById('estado');
      const bairro = document.getElementById('bairro');

      cidade.value = consultaCEPConvertida.localidade
      logradouro.value = consultaCEPConvertida.logradouro;
      estado.value = consultaCEPConvertida.uf;
      bairro.value = consultaCEPConvertida.bairro;
      

      console.log(consultaCEPConvertida)
      return consultaCEPConvertida;
  } catch(erro){
    mensagemErro.innerHTML =`<p> Esse CEP está incorreto. Tente novamente!</p>`
    console.log(erro)
  }
}

// -> buscando o cep e aplicando o valor no buscaEndereco 
 const cep = document.getElementById('cep');
 cep.addEventListener("focusout", () => buscarEndereco(cep.value));

