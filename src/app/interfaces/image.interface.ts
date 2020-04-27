export interface Image {
    [index: number]: {
        url: "https://image-bucket-dev.s3.amazonaws.com/";
        payload: ImageAWSPayload;
    };
}

export interface ImageAWSPayload {
    AWSAccessKeyId: string;
    key: string;
    policy: string;
    signature: string;
}

