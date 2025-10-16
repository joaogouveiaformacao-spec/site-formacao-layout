function carregarPagina(pagina) {
  fetch('conteudos/' + pagina)
    .then(response => {
      if (!response.ok) throw new Error('Erro ao carregar a página.');
      return response.text();
    })
    .then(html => {
      document.getElementById('conteudo').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('conteudo').innerHTML = "<p>Não foi possível carregar o conteúdo.</p>";
    });
}

function carregarImagem(nomeImagem) {
  const caminho = 'conteudos/imagens/' + nomeImagem;

  fetch(caminho)
    .then(response => {
      if (!response.ok) throw new Error('Imagem não encontrada.');
      document.getElementById('imagem').src = caminho;
    })
    .catch(error => {
      document.getElementById('imagem').src = '';
      document.getElementById('conteudo').innerHTML = "<p>Não foi possível carregar a imagem.</p>";
    });
}