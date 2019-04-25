import express from 'express';
import multer from 'multer';

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString().replace(/:/g, '-')} - ${file.originalname}`);
    }
});

const filefilters = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else cb(null, false);
}

const upload = multer({
    storage: Storage,
    limits: {
        fileSize: 1024 * 1024,
    },
    fileFilter: filefilters,
});
const PixRouter = express.Router();
PixRouter.post('/upload/pix', upload.single('productImage'), (req, res) => {

    console.log(req.file);
    if (req.file) {
        return res.status(201).json({
            msg: 'profile pix successfully uploaded',
            firstname: req.body.firstname,
            lastname: req.body.lastname,

        })
    }
    res.status(500).json({
        msg: 'failed to upload img',
    });

});
export default PixRouter;
