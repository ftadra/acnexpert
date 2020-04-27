import { QuestionnaireForm } from './questionnaire.interface';
import { Image } from './image.interface';

export interface Intake {
    form: QuestionnaireForm;
    front_face: Image;
    left_side_face: Image;
    right_side_face: Image;
    front_chest: Image;
    back: Image;
}

export interface IntakePost {
    form: QuestionnaireForm;
    front_face: boolean;
    left_side_face: boolean;
    right_side_face: boolean;
    front_chest: boolean;
    back: boolean;
}

export interface IntakePatch {
    form: QuestionnaireForm;
    front_face: File;
    left_side_face: File;
    right_side_face: File;
    front_chest: File;
    back: File;
}