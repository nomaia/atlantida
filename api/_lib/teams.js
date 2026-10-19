// ============================================================
//  EDITE AQUI as equipes que vão concorrer.
//  - id: não mude depois que a votação começar
//  - url: link do portal publicado (opcional, deixe '' para esconder)
//  - cor: cor de destaque do card / barra do placar
// ============================================================
export const TEAMS = [
  {
    id: '1',
    equipe: 'Equipe 1',
    portal: 'Nome do Portal',
    descricao: 'Slogan ou breve descrição do portal da equipe.',
    url: '',
    cor: '#22d3ee', // ciano bioluminescente
  },
  {
    id: '2',
    equipe: 'Equipe 2',
    portal: 'Nome do Portal',
    descricao: 'Slogan ou breve descrição do portal da equipe.',
    url: '',
    cor: '#ff8a70', // coral
  },
  {
    id: '3',
    equipe: 'Equipe 3',
    portal: 'Nome do Portal',
    descricao: 'Slogan ou breve descrição do portal da equipe.',
    url: '',
    cor: '#a78bfa', // água-viva
  },
];

export const TEAM_IDS = TEAMS.map((t) => t.id);
