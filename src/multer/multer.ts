import { diskStorage } from 'multer';
import { extname } from 'path';

// Multer configuration to store files on disk
export const multerConfig = {
    storage: diskStorage({
        destination: './uploads', // Folder where files will be stored
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const fileExt = extname(file.originalname);
            cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`); // e.g., profile-1234567890.png
        },
    }),
};


