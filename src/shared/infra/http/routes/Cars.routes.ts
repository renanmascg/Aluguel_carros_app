import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "@shared/infra/http/middleware//ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middleware/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

export { carsRoutes };
