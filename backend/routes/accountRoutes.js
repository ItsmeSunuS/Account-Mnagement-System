import express from "express";
import {verifyToken} from "../middleware/authMiddleware.js";
import {
getBalance,
transferMoney,
getStatement
} from "../controllers/accountController.js";

const router = express.Router();

router.get("/balance",verifyToken,getBalance);
router.post("/transfer",verifyToken,transferMoney);
router.get("/statement",verifyToken,getStatement);

export default router;