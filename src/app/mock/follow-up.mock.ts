import { QuestionnaireForm } from '../interfaces/questionnaire.interface';

export const MOCK_FOLLOW_UP: QuestionnaireForm[] = [
  {
    type: 'heading',
    label: 'Acne Intake',
    content: [
      {
        type: 'boolean',
        key: 'new_medications',
        label: 'Any new medications?',
        content: null
      },
      {
        type: 'select',
        key: 'effective',
        label: 'Has the treatment been effective?',
        desc: 'We expect significant improvement starting after you have completed 2 months of treatment',
        choices: [
          'No improvement yet',
          'Mild improvement',
          'Some improvement',
          'Excellent improvement'
        ],
        content: null
      },
      {
        type: 'multi',
        key: 'side_effects',
        label: 'Any side effects?',
        desc: 'This list of side effects are expected/common for most patients to experience',
        choices: [
          'Dry skin',
          'Rash',
          'Dry nose/mouth',
          'Nose bleeds',
          'Back pain',
          'Other joint pain'
        ],
        content: null
      },
    ]
  },
  {
    type: 'heading',
    label: 'Acne History',
    content: [
      {
        type: 'boolean',
        key: 'is_pregnant',
        label: 'Are you pregnant or planning pregnancy?',
        content: null
      },
      {
        type: 'boolean',
        key: 'conditions',
        label: 'Do you have any of the following conditions?',
        desc: 'Text that goes under need a better name for this field',
        content: null
      },
      {
        type: 'boolean',
        key: 'medications',
        label: 'Do you take any of the following?',
        desc: 'Text that goes under need a better name for this field',
        content: null
      },
      {
        type: 'multi',
        label: 'Do you use birth control?',
        key: 'birth_control',
        choices: [
          'Oral birth control',
          'Condoms',
          'Hormonal IUD (Mirena, Kyleena, Liletta, Skyla)',
          'Copper IUD (Paraguard)',
          'Hormonal under the skin implant (implanon)',
          'Nuvaring',
          'Tubal ligation',
          'Hysterectomy',
          'Other'
        ],
        content: null
      }
    ]
  }
];
