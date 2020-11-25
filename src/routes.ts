import { Router } from "express";

const router = Router()

router.post('./users', (request, response)){
    return Response.status(201).send();
}

export { router }