import { QuestionnaireForm } from '../interfaces/questionnaire.interface';

export const MOCK_CLINICAL_DETAILS: QuestionnaireForm[] = [
  {
    type: 'heading',
    label: 'Medical Intake',
    content: [
      {
        type: 'text',
        key: 'allergies',
        label: 'Allergies',
        content: null
      },
      {
        type: 'text',
        key: 'medications',
        label: 'Medications',
        content: null
      },
      {
        type: 'textarea',
        key: 'medical_problems',
        label: 'Medical Problems',
        content: null
      }
    ]
  },
  {
    type: 'heading',
    label: 'Acne Intake',
    content: [
      {
        type: 'boolean',
        key: 'family_accutane_usage',
        label: 'Has anyone in your family used Accutane?',
        content: null
      },
      {
        type: 'number',
        key: 'accutane_usage',
        label: 'How long have you had accutane?',
        unit: 'months',
        content: null
      },
      {
        type: 'boolean',
        key: 'acne_cysts',
        label: 'Are you having acne cysts under the skin?',
        content: null
      },
      {
        type: 'boolean',
        key: 'large_nodules',
        label: 'Are you having larger acne nodules on top of the skin?',
        content: null
      },
      {
        type: 'boolean',
        key: 'scarring',
        label: 'Are you having scarring?',
        content: null
      },
      {
        type: 'score',
        key: 'acne_bothering',
        label: 'How much is your acne bothering you cosmetically/socially?',
        low_range: 0,
        high_range: 10,
        content: null
      },
      {
        type: 'score',
        key: 'acne_severity',
        label: 'How severe would you rate your acne?',
        low_range: 0,
        high_range: 10,
        content: null
      }
    ]
  },
  {
    type: 'heading',
    label: 'Acne History',
    content: [
      {
        type: 'multi',
        key: 'acne_location',
        label: 'Where on the body is your acne?',
        choices: ['Face', 'Back', 'Chest', 'Other'],
        content: null
      },
      {
        type: 'boolean',
        key: 'used_accutane',
        label: 'Have you used Accutane before?',
        content: null
      },
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
  },
  {
    type: 'heading',
    label: 'Any questions?',
    content: [
      {
        type: 'textarea',
        label: 'What questions or concerns do you have about Accutane?',
        key: 'questions',
        content: null
      },
      {
        type: 'textarea',
        label: 'Anything else you want your AcneXpert doctor to know?',
        key: 'additional_questions',
        content: null
      }
    ]
  }
];
