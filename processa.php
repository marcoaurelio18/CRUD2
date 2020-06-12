<?php 

//banco de dados
$server = 'localhost';
$user = 'gerente';
$password = '123456789';
$base = 'alunos';
$connection = new mysqli($server, $user, $password, $base) or die("Falha na conexão");
//busca
//verifica se o metodo GET foi realizado
if(isset($_GET['buscanome'])){
   
    $nome = $_GET['buscanome'];
    echo $nome;
    if(empty($nome)){
        $query = "SELECT * FROM alunos";
    }
    else{
        $query = "SELECT * FROM alunos WHERE nome LIKE '%$nome%'";
    }
    //executa a sql
    $sql = $connection->query($query);
    //verifica o numero de linhas do resultado
    $contagem = $sql->num_rows;
    sleep(1);
    //so exibe resultado se aparecer alguma linha no sql
    if($contagem > 0){
       //exibe os resultados
       echo "<table class='table table-hover table-striped'>
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Telefone</th>
                          <th>Email</Th>
                          <th>Endereco</th>
                          <th>Deletar</th>
                      <tr>
                  </thead>
                  <tbody>";
       while($linha = $sql->fetch_array()){
          echo '<tr>';
          echo '<td>'.$linha['id'].'</td>';
          echo '<td>'.$linha['nome'].'</td>';
          echo '<td>'.$linha['email'].'</td>';
          echo '<td>'.$linha['telefone'].'</td>';
          echo '<td>'.$linha['endereco'].'</td>';
          echo '<td><a onclick="deletaUsuario('.$linha['id'].');" class="btn btn-danger">Deletar</a></td>';
          echo '</tr>';
       }
    }
    else{
        echo "<span class='alert alert-danger' role='alert'>Nenhum registro encontrado!</span>";
    }
}
elseif(!empty($_GET['nome']) and
    !empty($_GET['endereco']) and
    !empty($_GET['telefone']) and
    !empty($_GET['email'])
){
    
    //define o valor das variaveis
    $nome = $_GET['nome'];
	$telefone = $_GET['telefone'];
	$endereco = $_GET['endereco'];
	$email = $_GET['email'];

    //insere no banco de dados
	$query = "INSERT INTO alunos(nome, telefone, endereco, email) VALUES('$nome', '$telefone', '$endereco', '$email')";
    
    sleep(1);
    
    //executa a sql
	$sql = $connection->query($query);
    
    echo "<span class='alert alert-success' role='alert'>Inserido com sucesso</span>";
}
elseif(isset($_GET['deleta'])){
    $id = $_GET['deleta'];

    $query = "DELETE FROM alunos WHERE id = '$id'";
    
    sleep(1);
    
    //executa a sql
	$sql = $connection->query($query);
    
    echo "<span class='alert alert-success' role='alert'>Deletado com sucesso</span>";
}
else{
    echo "<span class='alert alert-danger' role='alert'>UM erro ocorreu. Por favor,
     preencha todos os campos </span>";
}
?>
