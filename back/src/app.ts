import express from "express";
import catchAll from "./3-middleware/catch-all";
import logRequest from "./3-middleware/log-request";
import routeNotFound from "./3-middleware/route-not-found";
import videosController from "./6-controllers/videos-controller"
import postsController from "./6-controllers/posts-controller"
import authController from "./6-controllers/auth-controllers"
import expressFileUpload from 'express-fileupload'
import cors from "cors"

const server = express();
server.use(express.static('src/1-assets/images'))
server.use(express.json());
server.use(cors({origin:"http://localhost:3000"}))
server.use(expressFileUpload());

// Binding our middleware
server.use(logRequest);

// http://localhost:3001/api/books
server.use('/api', authController);
server.use('/api', videosController);
server.use('/api', postsController);

server.use('*', routeNotFound);

// Binding the Catch all Middleware
server.use(catchAll);

server.listen(3001, () => console.log('Listining to http://localhost:3001'))

