function openPage(tipo, endereco) {
  //TIPO = 1 ABRE LIVE ******* TIPO = 2 ABRE REPOSITÓRIO

  if (tipo === 1) {
    window.open(`https://renannevesc94.github.io/frontend-mentor/${endereco}`, '_blank');
  } else if (tipo === 2) {
    window.open(`https://github.com/renannevesc94/frontend-mentor/tree/main/${endereco}`, '_blank');
    
  }
}
