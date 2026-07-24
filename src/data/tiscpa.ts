import { TISCPAStep } from '../types';

export const TISCPA_CASCADE: TISCPAStep[] = [
  {
    step: 1,
    title: 'Травма / Инфекция',
    description: 'Первичное повреждение тканей или инвазия патогена',
    molecules: ['Бактерии', 'Вирусы', 'ТMP'],
    color: '#ef4444'
  },
  {
    step: 2,
    title: 'DAMPs (Damage-Associated Molecular Patterns)',
    description: 'Молекулы, высвобождаемые из повреждённых клеток',
    molecules: ['HMGB1', 'HSP70', 'ATP', 'ДНК'],
    color: '#f97316'
  },
  {
    step: 3,
    title: 'PRRs (Pattern Recognition Receptors)',
    description: 'Рецепторы врождённого иммунитета распознают PAMPs/DAMPs',
    molecules: ['TLR4', 'TLR2', 'CD14', 'MD-2'],
    color: '#eab308'
  },
  {
    step: 4,
    title: 'Сигнальный каскад',
    description: 'Передача сигнала через адаптерные белки',
    molecules: ['MyD88', 'TIRAP', 'MAL'],
    color: '#84cc16'
  },
  {
    step: 5,
    title: 'Киназы',
    description: 'Активация киназ фосфорилированием',
    molecules: ['IRAK', 'TRAF6', 'TAK1'],
    color: '#22c55e'
  },
  {
    step: 6,
    title: 'IKK комплекс',
    description: 'Деградация IκBα, активация NF-κB',
    molecules: ['IKKα', 'IKKβ', 'NEMO', 'IκBα'],
    color: '#06b6d4'
  },
  {
    step: 7,
    title: 'NF-κB транслокация',
    description: 'Перемещение NF-κB в ядро',
    molecules: ['p65/RelA', 'p50', 'IκBα'],
    color: '#0ea5e9'
  },
  {
    step: 8,
    title: 'Транскрипция генов',
    description: 'Синтез цитокинов, хемокинов и молекул адгезии',
    molecules: ['IL-6', 'TNF-α', 'IL-1β', 'IL-8'],
    color: '#3b82f6'
  }
];

export const MOLECULAR_DETAILS = {
  hmgb1: 'High Mobility Group Box 1 - основной DAMP при сепсисе',
  hsp70: 'Heat Shock Protein 70 - молекулярный шаперон',
  tlr4: 'Toll-like receptor 4 - рецептор LPS',
  myD88: 'Myeloid differentiation primary response 88 - адаптерный белок',
  irak: 'Interleukin-1 receptor-associated kinase',
  traf6: 'TNF receptor-associated factor 6',
  tak1: 'TGF-β activated kinase 1',
  nfkb: 'Nuclear Factor kappa-light-chain-enhancer of activated B cells'
};
