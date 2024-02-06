import { Router } from "express";
import {
  getDBfilters,
  getHATEOAS,
} from "../controlles/joyeriaControlles.js";

export const router = Router();
router.get("/joyas/:id"); 
router.get("/joyas/filtros", getDBfilters); 
router.get("/joyas", getHATEOAS);





