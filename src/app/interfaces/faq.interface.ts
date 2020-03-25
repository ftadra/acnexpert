export interface FaqGroup {
    title: string;
    items: FaqItem[];
}

export interface FaqItem {
    question: string;
    answer: string;
}