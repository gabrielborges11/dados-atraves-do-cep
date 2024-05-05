function buscarCep() {
    var cep = document.getElementById('cep').value;
    var uf = document.getElementById('uf');
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var rua = document.getElementById('rua');

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            uf.textContent = "estado: "+data.uf;
            cidade.textContent = "cidade: "+data.localidade;
            bairro.textContent = "bairro: "+data.bairro;
            rua.textContent = "rua: "+data.logradouro;
        })
        .catch(error => console.error('Erro ao buscar CEP:', error));
         uf.textContent = "erro ao procurar cep"
         cidade.textContent = ""
         bairro.textContent = ""
         rua.textContent = ""
}
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
       buscarCep()
    }
  });