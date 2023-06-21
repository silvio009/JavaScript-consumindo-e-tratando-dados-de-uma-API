 // sincrono -> tarefa é concluída uma após outra
 // assímcrono-> tarefas executadas em "segundo plano"
async function buscarEndereco(CEP){
    try{
      const consultaCEP =  await fetch (`https://viacep.com.br/ws/${CEP}/json/`) // fatch recebe a URL da API // async ---> await
      const consultaCEPConvertida = await consultaCEP.json()
      if ( consultaCEP.erro){
        throw Error ('Esse CEP é inválido !')
      }
      console.log(consultaCEPConvertida)
      return consultaCEPConvertida;
  } catch(erro){
    console.log(erro)
  }
}

