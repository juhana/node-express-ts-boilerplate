import express from "express";

const router = ( app: express.Application ): void => {
    app.get( "/", ( _req: express.Request, res: express.Response ) => {
        res.send( "API root" );
    });
};

export default router;
