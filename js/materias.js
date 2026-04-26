// materias.js

const BLOQUEADO = `
  <div class="bloco-lock">
    <span class="lock-icon">🔒</span>
    <p class="lock-txt">em breve</p>
    <p class="lock-sub">este trimestre ainda está em andamento.</p>
  </div>
`;

const materias = {

  ling: {
    vol: 'volume i',
    titulo: 'Linguagens & Códigos',
    p1: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade avaliativa</p>
        <h4>A Paixão de G.H.</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H4 e H22</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Analisar o livro "A Paixão Segundo G.H." pela ótica da Sociologia. A tarefa consistiu em apresentar uma mini-aula e criar um mapa conceitual explicando como a invisibilidade das classes sociais e a construção do "nojo" justificam o comportamento da personagem.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; margin: 1rem 0; width: 100%;">
          <div class="embed-wrapper" style="margin: 0; max-width: 48%; width: 100%;">
            <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
              <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHFCgcj82o/swzynf_V_P_vGalfOEu1ng/view?embed" allowfullscreen allow="fullscreen"></iframe>
            </div>
            <a class="embed-link" href="https://www.canva.com/design/DAHFCgcj82o/swzynf_V_P_vGalfOEu1ng/view" target="_blank" rel="noopener">↗ Apresentação Sociologia</a>
          </div>

          <div class="embed-wrapper" style="margin: 0; max-width: 48%; width: 100%;">
            <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
              <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHGfutPX7E/EejBasKT7JZJ2rBsrAmC0w/view?embed" allowfullscreen allow="fullscreen"></iframe>
            </div>
            <a class="embed-link" href="https://www.canva.com/design/DAHGfutPX7E/EejBasKT7JZJ2rBsrAmC0w/view" target="_blank" rel="noopener">↗ Mapa Mental</a>
          </div>
        </div>
        <p class="ativ-critica"><em>"Gostei da atividade, pois me ajudou a entender que o 'surto' de G.H. foi, na verdade, a quebra de sua bolha de privilégios. Foi muito interessante notar como o conceito de 'imundo' é inventado pela sociedade para manter as classes sociais separadas."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade de aula</p>
        <h4>Game Literário</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H15</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Revisar as escolas literárias brasileiras, do Quinhentismo ao Simbolismo, por meio da pesquisa e da criação de um jogo digital no Wordwall, desenvolvendo conhecimento, organização de ideias, criatividade e trabalho em grupo.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHHtGdUNfc/3PL5a4eZF0P7vcvBuJn_IA/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHHtGdUNfc/3PL5a4eZF0P7vcvBuJn_IA/view" target="_blank" rel="noopener">↗ Game Literário — Canva</a>
        </div>
        <p class="ativ-critica"><em>"Gostei da atividade, pois foi uma forma diferente e mais dinâmica de aprender literatura. Criar o jogo ajudou a fixar melhor o conteúdo e tornou o estudo mais interessante e interativo."</em></p>
      </div>
    `,
    p2: BLOQUEADO,
    p3: BLOQUEADO
  },

  mat: {
    vol: 'volume ii',
    titulo: 'Matemática & suas Tecnologias',
    p1: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade de filme</p>
        <h4>Quebrando a Banca — Análise do Filme</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C5, H30, H31</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Aplicar o pensamento probabilístico e estatístico através da análise do filme. A atividade explorou como a contagem de cartas pode ser usada para prever resultados em eventos aleatórios, além de exigir a criação de um roteiro original que utilize conceitos matemáticos como base da trama.</p>
        <a class="embed-link doc-link" href="https://docs.google.com/document/d/1ZjQK5TQ5KeB0ISEi5LDO4EVnBgzKs_pTnWHvvM3JYUM/edit?usp=sharing" target="_blank" rel="noopener">↗ Ver Atividade no Google Docs</a>
        <p class="ativ-critica"><em>"O filme mostra que o 'azar' no cassino pode ser vencido com estratégia e controle emocional. Aprendi que a matemática é uma ferramenta de poder que, quando bem aplicada, permite prever riscos e tomar decisões mais inteligentes, tanto no jogo quanto na vida real."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">criação de jogo</p>
        <h4>Jogo Quebrando a Banca</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C5, H30, H31</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Desenvolver um jogo original que utilize Análise Combinatória e Probabilidade, inspirado na estratégia do filme Quebrando a Banca. O desafio incluiu criar regras, prototipar o jogo e testar a viabilidade matemática das apostas e estratégias de ganho.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHHlZabhkA/7Y9Kqmqd7ymQA2wkbePH-A/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHHlZabhkA/7Y9Kqmqd7ymQA2wkbePH-A/view" target="_blank" rel="noopener">↗ Jogo MTM — Canva</a>
        </div>
        <p class="ativ-critica"><em>"Criamos um jogo que transforma fórmulas em decisões reais. Foi o momento de tirar o Princípio Fundamental da Contagem e as Permutações do papel para ver como eles ditam as chances de vitória."</em></p>
      </div>
    `,
    p2: BLOQUEADO,
    p3: BLOQUEADO
  },

  nat: {
    vol: 'volume iii',
    titulo: 'Ciências da Natureza',
    p1: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade criativa</p>
        <h4>Meme sobre Evolucionismo</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C3, H15, H18</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Explicar a evolução de forma criativa. Criar um arco-íris no qual Darwin reage com ironia a diferentes "adaptações", fossilizando o comportamento humano atual.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:125%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHCVYJRHTI/iTMoqveN07zN8NphWVRJxw/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHCVYJRHTI/iTMoqveN07zN8NphWVRJxw/view" target="_blank" rel="noopener">↗ Meme Evolucionismo — Canva</a>
        </div>
        <p class="ativ-critica"><em>"O humor reside na ilusão de Darwin ao questionar se a seleção natural 'evoluiu para isso'. Foi uma atividade divertida que me permitiu aplicar a teoria biológica de forma sarcástica, percebendo que a evolução nem sempre se parece com 'progresso' quando observamos nossos hábitos modernos."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">apresentação</p>
        <h4>Se já sabemos que os combustíveis fósseis poluem, por que ainda usamos?</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C1, H1, C2, H9, H11</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Analisar por que o mundo ainda não encontrou uma maneira de substituir os combustíveis fósseis. O foco foi compreender a alta densidade energética desses combustíveis e os desafios tecnológicos e estruturais que impedem uma transição rápida.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHE886JkV4/qRw-Yb2ym9rOJY0XrYvXOg/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHE886JkV4/qRw-Yb2ym9rOJY0XrYvXOg/view" target="_blank" rel="noopener">↗ Combustíveis Fósseis — Canva</a>
        </div>
        <p class="ativ-critica"><em>"É preciso entender que setores como o de transportes e o industrial dependem de combustíveis fósseis porque estes fornecem muita energia por volume. Essa dependência é tanto técnica quanto econômica — a infraestrutura global ainda representa um grande obstáculo para as energias limpas."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">relatório de atividade prática</p>
        <h4>Disputa de Eletricidade</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C1, H1, C2, H7, H9, H11, H12</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Analisar na prática os processos de eletrização por atrito e indução. O foco foi entender por que materiais condutores (metais) são atraídos por corpos eletrizados (cano) e como a escolha dos materiais influencia a quantidade de carga gerada.</p>
        <a class="embed-link doc-link" href="https://docs.google.com/document/d/1tgqZuUlZjXz-Muvr2ctU7sftYVhTaL3dBd2NRCxo6i0/edit?usp=sharing" target="_blank" rel="noopener">↗ Ver Relatório no Google Docs</a>
        <p class="ativ-critica"><em>"Foi interessante observar a 'mágica' da física acontecer: ao atritar o cano, criamos um desequilíbrio de elétrons que atraiu o metal por indução. Aprendi que a escolha do metal e do tipo de material para atrito é estratégica, pois a série triboelétrica define quem ganha ou perde mais carga."</em></p>
      </div>
    `,
    p2: BLOQUEADO,
    p3: BLOQUEADO
  },

  hum: {
    vol: 'volume iv',
    titulo: 'Ciências Humanas & Sociais',
    p1: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">pesquisa e apresentação</p>
        <h4>Geopolítica</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C1, H1, H2, H3, H4, H5</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu em pesquisar e criar uma apresentação detalhada sobre um país específico, coletando dados atualizados para permitir a comparação entre diferentes realidades nacionais.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHBNNaCgWs/2ESptS_kLNnj_gVEoGNiSg/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHBNNaCgWs/2ESptS_kLNnj_gVEoGNiSg/view" target="_blank" rel="noopener">↗ Geopolítica — Canva</a>
        </div>
        <p class="ativ-critica"><em>"Ao pesquisar os dados reais de uma nação, percebi que a geopolítica não é apenas sobre mapas, mas sobre como economia, localização e indicadores sociais definem o poder de um país no cenário mundial. Essa base de dados foi essencial para nos preparar para o seminário de comparação entre as nações."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">projeto — jornal histórico</p>
        <h4>A Grande Guerra</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C3, H15, H16, H20, C6, H39</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Criar a capa de um jornal standard (75×60cm) no estilo do início do século XX. O desafio foi atuar como um jornalista da época, escrevendo matérias autorais sobre a Grande Guerra e a Revolução Russa, respeitando o contexto político e a nacionalidade escolhida para o periódico.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:125%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.canva.com/design/DAHFtb6yBko/2SWn00G6YYWMpRfyGGa1UA/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHFtb6yBko/2SWn00G6YYWMpRfyGGa1UA/view" target="_blank" rel="noopener">↗ Jornal Humanas — Canva</a>
        </div>
        <p class="ativ-critica"><em>"Foi um exercício intenso de escrita e design histórico. Aprendi como o ponto de vista de um país altera a narrativa de um conflito e o quão denso era o jornalismo antes do domínio das imagens. Formatar tudo no Canva seguindo o padrão da época me ajudou a entender a comunicação como uma ferramenta geopolítica poderosa."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">trabalho escrito</p>
        <h4>Imperialismo no séc. XIX — Exploração do Congo</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C2, H8, H10, H12</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> Analisar como a Segunda Revolução Industrial impulsionou a corrida por colônias na África e Ásia. O trabalho consistiu em criar uma narrativa visual em 5 etapas sobre a história do Congo, desde o período pré-colonial até os dias atuais, focando nos impactos da exploração europeia.</p>
        <a class="embed-link doc-link" href="https://docs.google.com/document/d/199PXoHD51BlJDaAf5dnx6gTPthP0X5F9WR1JoLoNMNg/edit?usp=sharing" target="_blank" rel="noopener">↗ Ver Trabalho no Google Docs</a>
        <p class="ativ-critica"><em>"Foi chocante compreender, através do exemplo do Congo, que a 'missão civilizadora' europeia serviu apenas para mascarar um regime de exploração brutal. Aprendi que o desenvolvimento industrial das potências dependeu diretamente da violência colonial e que os problemas atuais do país são heranças dessa partilha forçada."</em></p>
      </div>
    `,
    p2: BLOQUEADO,
    p3: BLOQUEADO
  },

  tec: {
    vol: 'volume v',
    titulo: 'Técnico — Desenvolvimento de Sistemas',
    p1: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade avaliativa</p>
        <h4>Grand Prix</h4>
        <p class="ativ-hab" style="color: var(--ouro); margin-bottom: 0.8rem;"><em>* Esta atividade vale para todas as matérias do 1º Trimestre.</em></p>
        <p class="ativ-obj"><strong>Descrição:</strong> Participei do Grand Prix SENAI 2026, uma competição de inovação em que desenvolvemos o projeto Gammy para um desafio de eficiência energética, com foco no reaproveitamento do calor de sistemas de ar-condicionado. Estruturamos um Lean Canvas para validar a solução e, durante o processo, desenvolvi habilidades como trabalho em equipe, organização de ideias e tomada de decisão sob pressão.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.youtube.com/embed/CZZmJzWEinw?si=AFWfyerAUbutcBx_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <p class="ativ-critica"><em>"A atividade é importante por simular o ambiente do mercado de trabalho, integrando conhecimentos técnicos com o desenvolvimento de habilidades essenciais, como pensamento crítico e visão empreendedora, para criar soluções em pouco tempo."</em></p>
      </div>
    `,
    p2: BLOQUEADO,
    p3: BLOQUEADO
  }

};

let aberta = null;

function abrirMateria(id) {
  const btn = document.querySelector(`button[onclick="abrirMateria('${id}')"]`);

  if (btn && !btn.classList.contains('livro-aberto')) {
    btn.classList.add('livro-aberto');
    setTimeout(() => {
      abrirMateriaModal(id);
    }, 650);
  } else {
    abrirMateriaModal(id);
  }
}

function abrirMateriaModal(id) {
  aberta = materias[id];

  document.getElementById('modalVol').textContent = aberta.vol;
  document.getElementById('modalTtl').textContent = aberta.titulo;

  document.querySelectorAll('.aba').forEach((b, i) => b.classList.toggle('on', i === 0));
  mostrarPainel('p1');

  document.getElementById('modal').classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

function fecharMateria() {
  document.getElementById('modal').classList.remove('aberto');
  document.body.style.overflow = '';
  document.querySelectorAll('.livro-aberto').forEach(b => b.classList.remove('livro-aberto'));
}

function mostrarPainel(id) {
  document.getElementById('modalConteudo').innerHTML = `
    <div class="painel ${id === 'p1' ? 'ativo' : ''}" id="p1">${aberta.p1}</div>
    <div class="painel ${id === 'p2' ? 'ativo' : ''}" id="p2">${aberta.p2}</div>
    <div class="painel ${id === 'p3' ? 'ativo' : ''}" id="p3">${aberta.p3}</div>
  `;
}

function trocarAba(btn, id) {
  document.querySelectorAll('.aba').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.painel').forEach(p => p.classList.remove('ativo'));
  var alvo = document.getElementById(id);
  if (alvo) alvo.classList.add('ativo');
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) fecharMateria();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharMateria();
});
