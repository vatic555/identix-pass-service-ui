export interface NextStepProps {
    nextStep: () => void;
}

export interface StateIdType {
    typeDid: string;
    typeTitle: string;
    nextStep: () => void;
}
