export interface BeforeAfterItem {
    name: string;
    occupation: string;
    age: number;
    story: string;
    images: {
        before: string;
        after: string;
    };
    clinical: {
        dosage: string;
        body_part: 'facial' | 'body' | 'back';
        acne_free: string;
    };
}
