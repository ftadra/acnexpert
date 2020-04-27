import { QuestionnaireForm } from './questionnaire.interface';

export interface Case {
    created_time: string;
    drivers_license: string;
    followup_questionnaires: QuestionnaireForm;
    intake_questionnaire: QuestionnaireForm;
    intake_quiz: QuestionnaireForm;
    id: number;
}