export interface LargeVCCardProps {
    did: string;
    status: string;
    issued?: string;
    img: string;
    firstName?: string;
    lastName?: string;
    citizenship?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
    id?: string;
    rawData?: string;
    country?: string;
    city?: string;
    address?: string;
}

export interface Status {
    status: string;
}
