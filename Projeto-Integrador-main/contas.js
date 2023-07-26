let contas = JSON.parse(localStorage.getItem("contas")) || [
  {
    email: "teste@teste.com",
    senha: "123"
  }
];

function validarLogin() {
  let email = document.getElementById("email-login").value;
  let senha = document.getElementById("password-login").value;

  // Verifica se a conta existe
  let conta = contas.find(function(conta) {
    return conta.email === email && conta.senha === senha;
  });

  if (conta) {
    //alert("Login bem-sucedido!");
    window.location.href = "/home/dionathan/Documents/Faculdade/ProjetoIntegrador/telainicial.html";
  } else {
    alert("Email ou senha inválidos!");
  }
}

function excluirConta() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  // Verifica se a conta existe na lista de contas
  let contaExistente = contas.find(function(conta) {
    return conta.email === email && conta.senha === senha;
  });

  if (contaExistente) {
    // Remove a conta da lista
    contas = contas.filter(function(conta) {
      return conta.email !== email;
    });

    localStorage.setItem("contas", JSON.stringify(contas));

    alert("Conta excluída com sucesso!");
  } else {
    alert("Email ou senha inválidos!");
  }
}

document.getElementById("criar-conta-btn").addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  // Verifica se o email já existe
  let contaExistente = contas.find(function(conta) {
    return conta.email === email;
  });

  if (contaExistente) {
    alert("Já existe uma conta com esse email!");
  } else {
    // Adiciona a nova conta à lista
    let novaConta = {
      email: email,
      senha: senha
    };
    contas.push(novaConta);
    localStorage.setItem("contas", JSON.stringify(contas));
    alert("Conta criada com sucesso!");
  }
});
