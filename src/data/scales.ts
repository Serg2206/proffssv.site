import { ClinicalScale } from '../types';

export const CLINICAL_SCALES: ClinicalScale[] = [
  {
    id: 'qsofa',
    name: 'qSOFA (Quick SOFA)',
    description: 'Инструмент скрининга для выявления риска сепсиса',
    parameters: [
      { name: 'Измененное психическое состояние', value: 1, weight: 1 },
      { name: 'Систолическое АД ≤100 mmHg', value: 1, weight: 1 },
      { name: 'Частота дыхания ≥22/мин', value: 1, weight: 1 }
    ],
    interpretation: 'Сумма ≥2 указывает на высокий риск сепсиса, требуется немедленное лечение'
  },
  {
    id: 'alvarado',
    name: 'Шкала Алварадо',
    description: 'Диагностика острого аппендицита',
    parameters: [
      { name: 'Мигрирующая боль RLQ', value: 1, weight: 1 },
      { name: 'Анорексия', value: 1, weight: 1 },
      { name: 'Тошнота/рвота', value: 1, weight: 1 },
      { name: 'Боль RLQ', value: 2, weight: 1 },
      { name: 'Положительный симптом Макберни', value: 1, weight: 1 },
      { name: 'Положительный симптом Роусинга', value: 2, weight: 1 },
      { name: 'Повышенная температура (≥38.3°C)', value: 1, weight: 1 },
      { name: 'Лейкоцитоз >10000/mm³', value: 2, weight: 1 },
      { name: 'Сдвиг влево (палочкоядерные ≥75%)', value: 1, weight: 1 }
    ],
    interpretation: 'Сумма ≥7: Высокая вероятность аппендицита, требуется визуализация'
  },
  {
    id: 'bisap',
    name: 'BISAP Score',
    description: 'Оценка тяжести острого панкреатита в первые 24 часа',
    parameters: [
      { name: 'BUN >25 mg/dL', value: 1, weight: 1 },
      { name: 'Нарушение вментального статусе', value: 1, weight: 1 },
      { name: 'SIRS критерии ≥2', value: 1, weight: 1 },
      { name: 'Возраст >60 лет', value: 1, weight: 1 },
      { name: 'Плевральный выпот присутствует', value: 1, weight: 1 }
    ],
    interpretation: 'Каждый балл = 5% в-ть летального исхода. BISAP ≥3 требует ICU'
  },
  {
    id: 'sirs',
    name: 'SIRS (Systemic Inflammatory Response Syndrome)',
    description: 'Критерии системной воспалительной реакции',
    parameters: [
      { name: 'Температура >38°C или <36°C', value: 1, weight: 1 },
      { name: 'Частота сердцебиения >90/мин', value: 1, weight: 1 },
      { name: 'Частота дыхания >20/мин (PaCO2 <32 mmHg)', value: 1, weight: 1 },
      { name: 'Лейкоциты >12000 или <4000 или >10% палочек', value: 1, weight: 1 }
    ],
    interpretation: 'SIRS при наличии предполагаемой инфекции = сепсис (≥2 критериев)'
  },
  {
    id: 'apache2',
    name: 'APACHE II Score',
    description: 'Оценка тяжести состояния в реанимации',
    parameters: [
      { name: 'Острая физиологическая оценка', value: 0, weight: 1 },
      { name: 'Возраст', value: 0, weight: 1 },
      { name: 'Хроническое заболевание здоровья', value: 0, weight: 1 }
    ],
    interpretation: 'Максимум 71 балл. Каждые +1 = +7-10% в-ть летального исхода'
  }
];

export const SCALE_MAP = new Map(CLINICAL_SCALES.map(s => [s.id, s]));
