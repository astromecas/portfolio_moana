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
    p2: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade em grupo</p>
        <h4>Videomanifesto Modernista</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H3 e H24</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade propõe a criação de um videomanifesto, em grupo, sobre um tema atual. O objetivo é apresentar uma opinião, usar argumentos e criatividade, além de se inspirar nas características dos manifestos modernistas.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:150%;overflow:hidden;border-radius:6px;will-change:transform;max-width:240px;margin:0 auto;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;" src="https://www.youtube.com/embed/O736ISMCq7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <p class="ativ-critica"><em>"Achei a atividade interessante e criativa, pois permite aprender sobre o Modernismo de uma forma diferente. Também ajuda a desenvolver a argumentação, a criatividade e o trabalho em equipe."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">produção textual — inglês</p>
        <h4>Favorite Artist, Movie & Song</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H25</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu na produção de um texto em inglês sobre um artista, um filme e uma música favoritos. Foi necessário pesquisar informações sobre cada escolha, além de explicar a importância pessoal de cada uma. A atividade também trabalhou o uso do <strong>Simple Past</strong> e a habilidade H25.</p>
        <a class="embed-link doc-link" href="https://docs.google.com/document/d/1HbWPGETB7_Oilm4NgDBGeQ7WOvAR9ApiIbJO3o-AfiA/edit?usp=sharing" target="_blank" rel="noopener">↗ Ver Atividade no Google Docs</a>
        <p class="ativ-critica"><em>"A atividade foi interessante por relacionar o inglês aos gostos pessoais dos alunos, tornando o aprendizado mais dinâmico. Porém, poderia incluir uma apresentação oral para estimular também a comunicação em inglês."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">redação enem</p>
        <h4>Dissertação — Autodiagnóstico nas Redes Sociais</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H22</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu na produção de uma redação sobre <strong>os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil</strong>. O objetivo foi desenvolver a argumentação e a reflexão sobre um tema atual e relevante para a sociedade.</p>
        <div class="embed-wrapper" style="text-align: center; margin: 1rem 0;">
          <img src="img/redacao_autodiagnostico.png" alt="Dissertação Enem - Nota 720" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
        </div>
        <p class="ativ-critica"><em>"A atividade foi importante por abordar um problema presente no cotidiano, incentivando uma visão crítica sobre o uso das redes sociais e a saúde mental. O tema também permitiu desenvolver a capacidade de argumentação e conscientização."</em></p>
      </div>
    `,
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
    p2: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">pesquisa estatística</p>
        <h4>Apresentação Estatística — Tempo de Tela x Exaustão Matinal</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C4, H27, H28, H29</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu em uma pesquisa sobre a relação entre o <strong>tempo de tela durante a noite e a exaustão matinal de estudantes do Ensino Médio</strong>. Foram coletados e analisados dados, utilizando frequências, moda estatística e gráficos para apresentar os resultados.</p>
        <a class="embed-link doc-link" href="https://docs.google.com/presentation/d/1TQP93z6lky2vZ-aQi3W0Vm57Z4gi0T1C1LmsqWLROPA/edit?usp=sharing" target="_blank" rel="noopener">↗ Ver Apresentação no Google Slides</a>
        <p class="ativ-critica"><em>"A atividade foi interessante por relacionar a estatística a uma situação presente no cotidiano dos estudantes. Além de desenvolver conhecimentos matemáticos, possibilitou interpretar dados e refletir sobre os hábitos dos jovens."</em></p>
      </div>
    `,
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
    p2: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">atividade em grupo</p>
        <h4>Mural Interativo — Saúde Pública & Meio Ambiente</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C2, C11, C3, H15, H18, C4, H23</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu na criação de um <strong>mural interativo em grupo</strong> sobre impactos ambientais, saúde pública, saneamento básico e prevenção. Minha participação foi na elaboração de um <strong>formulário de perguntas</strong>, acessado pelos visitantes por meio de um QR Code.</p>
        <div class="embed-wrapper" style="max-width: 100% !important; display: flex; flex-direction: row; gap: 0.8rem; justify-content: center; align-items: center; margin: 1.2rem 0;">
          <img src="img/mural_natureza_geral.jpg" alt="Visão geral do Mural Interativo" style="width: 58%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); object-fit: cover;">
          <img src="img/mural_natureza.png" alt="Cartaz Saúde em Primeiro Lugar" style="width: 38%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); object-fit: cover;">
        </div>
        <p class="ativ-critica"><em>"A atividade foi interessante por unir <strong>pesquisa, tecnologia e conscientização</strong>, tornando a aprendizagem mais interativa. A participação na criação do formulário também permitiu contribuir de forma criativa para o trabalho em grupo."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">seminário & pesquisa</p>
        <h4>Seminário sobre Estequiometria na Indústria</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C2, H6, H7, H9</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu em uma pesquisa sobre a <strong>produção de amônia e fertilizantes</strong>, abordando o processo Haber-Bosch e sua importância para a agricultura e a segurança alimentar. O trabalho também envolveu aspectos de estequiometria, impactos ambientais, sustentabilidade e dependência de matérias-primas.</p>
        <a class="embed-link doc-link" href="https://docs.google.com/presentation/d/1hTpepTcqyh_MWB4pYwpJPJ8Qa6pa3b9nnobsZVRF0Sg/edit?usp=sharing" target="_blank" rel="noopener">↗ Ver Apresentação no Google Slides</a>
        <p class="ativ-critica"><em>"A atividade foi interessante por relacionar a <strong>Química com a agricultura, a economia e questões ambientais</strong>. O estudo da amônia mostrou como os cálculos estequiométricos são importantes para a produção industrial e para o uso eficiente dos recursos."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">cartilha informativa</p>
        <h4>Cartilha — Eletricidade e o Corpo Humano</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C1, H3, H4, C2, H12, C4, H13</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu na produção de uma <strong>cartilha informativa sobre a relação entre eletricidade e o corpo humano</strong>, abordando a condução de impulsos elétricos, os riscos de choques e formas de prevenção.</p>
        <div class="embed-wrapper">
          <div style="position: relative; width: 100%; height: 0; padding-top: 64.7059%; overflow: hidden; border-radius: 6px; will-change: transform;">
            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none;" src="https://www.canva.com/design/DAHS9bozRq8/6JN_2YmM6QKjPI4Vb5bYIA/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHS9bozRq8/6JN_2YmM6QKjPI4Vb5bYIA/view?utm_content=DAHS9bozRq8&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">↗ Cartilha Eletricidade — Canva</a>
        </div>
        <p class="ativ-critica"><em>"A atividade foi interessante por relacionar conceitos de <strong>Física com situações do cotidiano</strong>, permitindo compreender os efeitos da eletricidade no organismo e a importância de adotar medidas de segurança."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">prática experimental</p>
        <h4>Portfólio Digital de Eletroquímica</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> C2, H7, H9 e H11</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu no registro de uma <strong>prática experimental de Eletroquímica</strong>, reunindo observações, hipóteses e resultados sobre as transformações de energia presentes nas reações químicas.</p>
        <a class="embed-link doc-link" href="https://sites.google.com/estudante.sesisenai.org.br/gammy/eletroqu%C3%ADmica-no-enem" target="_blank" rel="noopener">↗ Abrir no Google Sites (Eletroquímica)</a>
        <p class="ativ-critica"><em>"A atividade foi importante por aproximar a <strong>teoria da prática</strong>, permitindo observar os conceitos de Eletroquímica de forma experimental e desenvolver a capacidade de levantar hipóteses e analisar resultados."</em></p>
      </div>
    `,
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
    p2: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">pesquisa & dossiê</p>
        <h4>Dossiê Histórico-Analítico — Fascismo Italiano</h4>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu na produção, em dupla, de um <strong>dossiê histórico-analítico sobre o Fascismo Italiano</strong>, utilizando pesquisa bibliográfica e análise de uma fonte histórica primária para compreender o contexto e os impactos do período.</p>
        <div class="embed-wrapper">
          <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; overflow: hidden; border-radius: 6px; will-change: transform;">
            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none;" src="https://www.canva.com/design/DAHOVO5kCHA/qy2Pg9ep1It-ai1nabor5w/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHOVO5kCHA/qy2Pg9ep1It-ai1nabor5w/view?utm_content=DAHOVO5kCHA&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">↗ Fascismo Italiano — Canva</a>
        </div>
        <p class="ativ-critica"><em>"A atividade foi importante por estimular a <strong>pesquisa e a análise crítica de fontes históricas</strong>, permitindo compreender o Fascismo além dos acontecimentos, considerando também seus interesses, consequências e a visão dos contemporâneos."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">análise de filme</p>
        <h4>Apresentação: Totalitarismo no Cinema — Maze Runner</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H10, H22, H26 e H27</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade consistiu na análise do filme <strong>Maze Runner</strong>, relacionando cenas, falas e comportamentos com as características dos <strong>regimes totalitários</strong> estudadas em aula.</p>
        <div class="embed-wrapper">
          <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; overflow: hidden; border-radius: 6px; will-change: transform;">
            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none;" src="https://www.canva.com/design/DAHKN-Gc3hQ/quRFOhe7i4a8viN8HV2qhA/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHKN-Gc3hQ/quRFOhe7i4a8viN8HV2qhA/view?utm_content=DAHKN-Gc3hQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">↗ Totalitarismo no Cinema — Canva</a>
        </div>
        <p class="ativ-critica"><em>"A atividade foi interessante por utilizar o cinema como forma de <strong>compreender e interpretar conceitos históricos</strong>, tornando o conteúdo mais próximo e facilitando a identificação de práticas de controle e poder."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">análise sociológica</p>
        <h4>É Isto um Homem? — Desumanização e Pessoas em Situação de Rua</h4>
        <p class="ativ-hab"><strong>Habilidades:</strong> H10, H22, H26 e H27</p>
        <p class="ativ-obj"><strong>Objetivo:</strong> A atividade relacionou a leitura de Primo Levi e a desumanização no Holocausto com a realidade das pessoas em situação de rua. Por meio de reportagens, dados e fontes acadêmicas, analisamos preconceitos e discursos que negam a dignidade desse grupo.</p>
        <div class="embed-wrapper">
          <div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; overflow: hidden; border-radius: 6px; will-change: transform;">
            <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none;" src="https://www.canva.com/design/DAHNS7Rp3sc/rLCu-9ROec24oQhtwYrhBQ/view?embed" allowfullscreen allow="fullscreen"></iframe>
          </div>
          <a class="embed-link" href="https://www.canva.com/design/DAHNS7Rp3sc/rLCu-9ROec24oQhtwYrhBQ/view?utm_content=DAHNS7Rp3sc&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">↗ Apresentação — Canva</a>
        </div>
        <p class="ativ-critica"><em>"A pesquisa me fez perceber que a desumanização ainda está presente na sociedade atual. Muitas vezes, julgamos pessoas em situação de rua sem compreender suas histórias, o que reforça sua exclusão e invisibilidade."</em></p>
      </div>
    `,
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
    p2: `
      <div class="bloco atividade-card">
        <p class="ativ-tag">desafio prático</p>
        <h4>Desafio BP Web — Plataforma IoT & Web API</h4>
        <p class="ativ-hab" style="color: var(--ouro-dim); margin-bottom: 0.5rem; display: block; font-size: 0.75rem;"><em>* Programação de Aplicativos e Desenvolvimento de Sistemas</em></p>
        <p class="ativ-hab"><strong>Habilidades:</strong> H1, H4, H6</p>
        <p class="ativ-obj"><strong>Descrição:</strong> Desenvolvimento do desafio prático BP Web, integrando sistemas embarcados a uma plataforma web por meio de rotas de telemetria. A aplicação foi hospedada e publicada na nuvem utilizando a Render.</p>
        <div class="embed-wrapper" style="text-align: center; margin: 1rem 0;">
          <img src="img/desafio_bp_web.png" alt="Dashboard do Desafio BP Web" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
        </div>
        <a class="embed-link doc-link" href="https://rinhasenai2026-ngji.onrender.com/" target="_blank" rel="noopener">↗ Acessar Aplicação Web (Render)</a>
        <p class="ativ-critica"><em>"A atividade me ajudou a compreender melhor a integração entre hardware e software, além de desenvolver meus conhecimentos em APIs, comunicação HTTP e deploy. Foi um desafio que exigiu atenção e resolução de problemas, principalmente na integração e publicação da aplicação."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">projeto iot</p>
        <h4>Protótipo de Semáforo Inteligente</h4>
        <p class="ativ-hab" style="color: var(--ouro-dim); margin-bottom: 0.5rem; display: block; font-size: 0.75rem;"><em>* Internet das Coisas (IoT)</em></p>
        <p class="ativ-obj"><strong>Descrição:</strong> Montagem de um circuito eletrônico simulando o funcionamento de um semáforo inteligente, com controle dos LEDs por microcontrolador e programação das etapas de transição.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;z-index:1;" src="https://www.youtube.com/embed/nkRhrmmJBz4?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <!-- Overlay Sólido para esconder o nome do canal/autor no topo do vídeo -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 62px; background: #141008; z-index: 2; pointer-events: none;"></div>
          </div>
        </div>
        <p class="ativ-critica"><em>"A atividade me ajudou a entender melhor a relação entre programação e componentes eletrônicos. Também desenvolvi minha lógica de programação ao criar a sequência de funcionamento do semáforo."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">projeto iot</p>
        <h4>Controle Básico de Saída Digital — Ligar LED</h4>
        <p class="ativ-hab" style="color: var(--ouro-dim); margin-bottom: 0.5rem; display: block; font-size: 0.75rem;"><em>* Internet das Coisas (IoT)</em></p>
        <p class="ativ-obj"><strong>Descrição:</strong> Projeto de automação com microcontrolador, utilizando GPIO para controlar o acendimento e o tempo de um LED.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden;border-radius:6px;will-change:transform;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;z-index:1;" src="https://www.youtube.com/embed/j95tsOfhthg?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <!-- Overlay Sólido para esconder o nome do canal/autor no topo do vídeo -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 62px; background: #141008; z-index: 2; pointer-events: none;"></div>
          </div>
        </div>
        <p class="ativ-critica"><em>"A atividade foi importante para entender, na prática, como programação e eletrônica se relacionam. Também desenvolvi conhecimentos básicos de microcontroladores, GPIO e linguagem C/C++."</em></p>
      </div>

      <div class="bloco atividade-card">
        <p class="ativ-tag">projeto iot</p>
        <h4>Controle de LED com Botão (Lógica Toggle Interativa)</h4>
        <p class="ativ-hab" style="color: var(--ouro-dim); margin-bottom: 0.5rem; display: block; font-size: 0.75rem;"><em>* Internet das Coisas (IoT)</em></p>
        <p class="ativ-obj"><strong>Descrição:</strong> Desenvolvimento de um sistema em que um botão controla o estado de um LED, alternando seu funcionamento a cada pressionamento e utilizando debounce para evitar falhas de leitura.</p>
        <div class="embed-wrapper">
          <div style="position:relative;width:100%;height:0;padding-top:150%;overflow:hidden;border-radius:6px;will-change:transform;max-width:240px;margin:0 auto;">
            <iframe loading="lazy" style="position:absolute;width:100%;height:100%;top:0;left:0;border:none;z-index:1;" src="https://www.youtube.com/embed/KcOSBOOBPlU?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <!-- Overlay Sólido para esconder o nome do canal/autor no topo do vídeo -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 62px; background: #141008; z-index: 2; pointer-events: none;"></div>
          </div>
        </div>
        <p class="ativ-critica"><em>"A atividade me ajudou a compreender melhor a leitura de entradas digitais e o controle de dispositivos. Também foi importante para perceber como pequenos detalhes, como o ruído do botão, podem afetar o funcionamento de um sistema."</em></p>
      </div>
    `,
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
