import express from "express"
import { getAllTrainers } from "../controllers/trainer";


const router = express.Router()

router.get("/", getAllTrainers);
// router.delete("/:id", deleteTrainer); 

export default router