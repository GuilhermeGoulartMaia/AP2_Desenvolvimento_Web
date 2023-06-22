window.onload = () => {
    lerInfos();
  };
  
  let divDetalhes = document.getElementById('detalhes');
  let btvoltar = document.getElementById('voltar');
  
  btvoltar.addEventListener('click', () => {
    window.history.back();
  });
  
  function lerInfos() {
    divDetalhes.innerHTML = `
      <div class="container">
        <div class="image">
          <img src="${localStorage.getItem('@Imagem')}">
        </div>
        <div class="info">
          <h1>${localStorage.getItem('@Nome')}</h1>
          <h2>${localStorage.getItem('@Posicao')}</h2>
          <p>${localStorage.getItem('@Descricao')}</p>
          <strong>Nome completo: </strong><span>${localStorage.getItem('@Nome')}</span>
          <strong>Nascimento: </strong><span>${localStorage.getItem('@Nascimento')}</span>
          <strong>Altura: </strong><span>${localStorage.getItem('@Altura')}</span>
        </div>
      </div>
    `;
  }