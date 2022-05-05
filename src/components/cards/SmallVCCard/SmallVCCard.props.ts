export interface SmallVCCardProps {
    title: string;
    did: string;
    status: 'Active' | 'Expired';
    img: string;
    verificationStatus?: string;
    sendToVerifier?: boolean;
}

