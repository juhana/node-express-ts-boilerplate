import express from "express";

import router from "./router";

const app: express.Application = express();
const port: number = Number( process.env.PORT ) || 3000;

// Register routes
router( app );

// Start the server
app.listen( port, () => {
    console.log( `Listening to http://localhost:${port} in ${process.env.NODE_ENV} environment` );
});
