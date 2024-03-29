import { Router } from 'express';
import multer from 'multer';
import uploads from './config/uploads';


import uploadConfig from './config/uploads';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images') , OrphanagesController.create);

routes.get('/orphanages/:id', OrphanagesController.show); 
routes.get('/orphanages', OrphanagesController.index); 

export default routes;