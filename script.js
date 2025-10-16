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