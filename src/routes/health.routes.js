import { Router } from "express";
import { healthChecker } from "../controllers/health.controllers.js";

const router = Router();

router.route("/check").get(healthChecker);

export default router;