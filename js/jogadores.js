const elencoMasc = document.getElementById('elenco_masc');
const elencoFem = document.getElementById('elenco_fem');

function Jogadores() {  
  jogadores.forEach((jogador, indice) => {
    if (jogador["elenco"] == "feminino") {
      const divFem = document.createElement('div');
      divFem.id = `jogador${indice}`;
      divFem.onclick = () => Informacoes(indice);
      divFem.innerHTML = `
        <img src="${jogador["imagem"]}">
        <p>${jogador["nome"]}</p>
      `;
      divFem.style.border = '5px solid grey';
      elencoFem.appendChild(divFem);
    } else {
      const divMasc = document.createElement('div');
      divMasc.id = `jogador${indice}`;
      divMasc.onclick = () => Informacoes(indice);
      divMasc.innerHTML = `
        <img src="${jogador["imagem"]}">
        <p>${jogador["nome"]}</p>
      `;
      divMasc.style.border = '5px solid black';
      elencoMasc.appendChild(divMasc);
    }
  });
}

window.onload = () => {
  Jogadores();
}

function Informacoes(indiceJogador) {
  const jogador = jogadores[indiceJogador];
  console.log('falhou');
  localStorage.setItem('@Nome', jogador.nome);
  localStorage.setItem('@Imagem', jogador.imagem);
  localStorage.setItem('@Posicao', jogador.posicao);
  localStorage.setItem('@Descricao', jogador.descricao);
  localStorage.setItem('@NomeCompleto', jogador.nome_completo);
  localStorage.setItem('@Nascimento', jogador.nascimento);
  localStorage.setItem('@Altura', jogador.altura);

  window.location.href = './detalhes.html';
}