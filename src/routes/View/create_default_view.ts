import express from "express";

const router = express.Router();
router.get('/', async (req, res) => {
    res.sendFile("public/index.html", {root: "src"})
});


export {

    router as defaultView
}