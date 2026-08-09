export interface CreateCertificationInput {
    name: string;
    issuer: string;
    credentialUrl: string;
    imageUrl: string;
}

export interface Certification extends CreateCertificationInput {
    certificationId: string;
    createdAt: string;
    updatedAt: string;
}