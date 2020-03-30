export interface QuestionnaireField {
    key: string;
    type: string;
    label: string;
    desc?: string;
    content: null;
    low_range?: number;
    high_range?: number;
    choices?: string[];
    unit?: string;
}

export interface QuestionnaireForm {
    type: string;
    label: string;
    content: QuestionnaireField[];
}