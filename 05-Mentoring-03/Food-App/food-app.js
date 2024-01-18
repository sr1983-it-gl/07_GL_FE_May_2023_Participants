

import {MainPanelController} from "./main-panel/main-panel-controller.js"
import { CartController } from "./cart/cart-controller.js";
import { MCIntegrationController } from "./mc-integration/mc-integration-controller.js";

const mainPanelController = new MainPanelController();
mainPanelController.init();


const cartController = new CartController();
cartController.init();


const mcIntegrationController = new MCIntegrationController(cartController);
mcIntegrationController.init();

cartController.cartView.setMCIntegrationView(mcIntegrationController.mcIntegrationView);