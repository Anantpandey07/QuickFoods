import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    next();
};

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),

body("RoomNo").isString().notEmpty().withMessage("RoomNo must be a string"),

body("Hostel").isString().notEmpty().withMessage("Hostel name must be string"),

handleValidationErrors,
]