 // sincrono -> tarefa é concluída uma após outra
 // assímcrono-> tarefas executadas em "segundo plano"
const consultaCEP = fetch ('https://viacep.com.br/ws/06755300/json/') // fatch recebe a URL da API 
    .then(resposta => resposta.json())  
    .then(r => {
        if(r.erro){
          throw Error('Esse CEP não existe!') 
        }else
        console.log(r)
    })
    .catch(erro => console.log(erro))  // catch sinaliza o erro 
    .finally(mensagem=> console.log('processo concluído'))
    
console.log(consultaCEP)