function buscaDados(){
    //recebe o nome da busca e pega o valor dele
    var nome = document.getElementById("buscanome").value;
    //armazena os dados recebido
    var result = document.getElementById("dados");

    //cria um novo objeto que acessa o servidor mysql
    var ajax = new XMLHttpRequest();
    
    result.innerHTML = '<img src="static/loading.gif" width="100px">';
    //metodo responsavel por requisitar 'processa.php'
    ajax.open("GET", "processa.php?buscanome=" + nome, true);

    //verifica se houve mudança de status
    ajax.onreadystatechange = function(){
        //verifica se é o status, que é o que se espera 
        if(ajax.readyState == 4){
            //verifica se o valor foi obtido com sucesso
            if(ajax.status == 200){
                //emite os resultados
                result.innerHTML = ajax.responseText;
            }
            else{
                //emite a mensagem de erro
                result.innerHTML = "Houve um erro na conexão AJAX: " + ajax.statusText;
            }
        }
    };

    //comando para fazer a busca
    ajax.send(null);

}

function insereDados(){
    //recebe o nome do formulario
    var nome = document.getElementById("insereNome").value;
    //recebe o endereco do formulario
    var endereco = document.getElementById("insereEndereco").value;
    //recebe o telefone do formulario
    var telefone = document.getElementById("insereTelefone").value;
    //recebe o email do formulario
    var email = document.getElementById("insereEmail").value;

    var resposta = document.getElementById("resposta");

    var ajax = new XMLHttpRequest();

    resposta.innerHTML = '<img src="static/loading.gif" width="100px">';

    ajax.open("GET", "processa.php?nome="+nome+"&endereco="+endereco+
    "&telefone="+telefone+"&email="+email, true);
    
    //verifica se houve mudança de status
    ajax.onreadystatechange = function(){
        //verifica se é o status, que é o que se espera 
        if(ajax.readyState == 4){
            //verifica se o valor foi obtido com sucesso
            if(ajax.status == 200){
                //emite os resultados
                resposta.innerHTML = ajax.responseText;
            }
            else{
                //emite a mensagem de erro
                resposta.innerHTML = "Houve um erro na conexão AJAX: " + ajax.statusText;
            }
        }
    };

    //comando para fazer a busca
    ajax.send(null);

}

function deletaUsuario(id){
    var result = document.getElementById("dados");

    //cria um novo objeto que acessa o servidor mysql
    var ajax = new XMLHttpRequest();
    
    result.innerHTML = '<img src="static/loading.gif" width="100px">';
    //metodo responsavel por requisitar 'processa.php'
    ajax.open("GET", "processa.php?deleta="+id, true);

    //verifica se houve mudança de status
    ajax.onreadystatechange = function(){
        //verifica se é o status, que é o que se espera 
        if(ajax.readyState == 4){
            //verifica se o valor foi obtido com sucesso
            if(ajax.status == 200){
                //emite os resultados
                result.innerHTML = ajax.responseText;
            }
            else{
                //emite a mensagem de erro
                result.innerHTML = "Houve um erro na conexão AJAX: " + ajax.statusText;
            }
        }
    };

    ajax.send(null);
}