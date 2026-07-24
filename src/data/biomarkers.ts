import { Biomarker } from '../types';

export const BIOMARKERS: Biomarker[] = [
  {
    id: 'il6',
    name: 'IL-6 (Интерлейкин-6)',
    unit: 'pg/mL',
    normal: '< 50',
    critical: '> 500',
    category: 'inflammatory'
  },
  {
    id: 'crp',
    name: 'CRP (С-реактивный белок)',
    unit: 'mg/L',
    normal: '< 10',
    critical: '> 200',
    category: 'inflammatory'
  },
  {
    id: 'pct',
    name: 'PCT (Прокальцитонин)',
    unit: 'ng/mL',
    normal: '< 0.5',
    critical: '> 2.0',
    category: 'infection'
  },
  {
    id: 'ldh',
    name: 'LDH (Лактатдегидрогеназа)',
    unit: 'U/L',
    normal: '< 250',
    critical: '> 400',
    category: 'metabolism'
  },
  {
    id: 'ddimer',
    name: 'D-dimer',
    unit: 'µg/L',
    normal: '< 500',
    critical: '> 2000',
    category: 'barrier'
  },
  {
    id: 'lactate',
    name: 'Лактат',
    unit: 'mmol/L',
    normal: '0.5-1.5',
    critical: '> 4.0',
    category: 'metabolism'
  },
  {
    id: 'ifabp',
    name: 'I-FABP (Intestinal Fatty Acid Binding Protein)',
    unit: 'pg/mL',
    normal: '< 150',
    critical: '> 500',
    category: 'barrier'
  },
  {
    id: 'pla2',
    name: 'PLA2-II (Фосфолипаза A2)',
    unit: 'ng/mL',
    normal: '< 5',
    critical: '> 20',
    category: 'inflammatory'
  },
  {
    id: 'hladr',
    name: 'HLA-DR',
    unit: '%',
    normal: '> 30',
    critical: '< 30',
    category: 'immune'
  },
  {
    id: 'wbc',
    name: 'Лейкоциты (WBC)',
    unit: '×10⁹/L',
    normal: '4.5-11.0',
    critical: '> 15 или < 2',
    category: 'inflammatory'
  },
  {
    id: 'tnf',
    name: 'TNF-α (Фактор некроза опухоли)',
    unit: 'pg/mL',
    normal: '< 8',
    critical: '> 50',
    category: 'inflammatory'
  },
  {
    id: 'il10',
    name: 'IL-10 (Интерлейкин-10)',
    unit: 'pg/mL',
    normal: '< 10',
    critical: '> 100',
    category: 'inflammatory'
  }
];

export const BIOMARKER_MAP = new Map(BIOMARKERS.map(b => [b.id, b]));
