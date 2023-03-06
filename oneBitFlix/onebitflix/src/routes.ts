import express from "express";
import { authController } from "./controllers/authController";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { ensureAuth } from "./middlewares/auth";
import { episodesController } from "./controllers/episodesController";
import { favoritesController } from "./controllers/favoritesController";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", ensureAuth, categoriesController.index);
router.get("/categories/:id", ensureAuth, categoriesController.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", ensureAuth, coursesController.seacrh);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", episodesController.stream);

router.post("/favorites", ensureAuth, favoritesController.save);

export { router };
