import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
@Injectable()
export class CloudinaryService {
    constructor() {
        v2.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

    }

    async uploadImage(filePath: string): Promise<UploadApiErrorResponse | UploadApiResponse> {
        return new Promise((resolve, reject) => {
            v2.uploader.upload(filePath, { folder: 'hallapp' }, (err, result) => {
                if (err) return reject(err);
                else return resolve(result);
            });
        })
    }
}
