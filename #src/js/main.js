import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { userMenu } from "./layouts/layouts.js";
userMenu();
//* ----------------------------------------------------------------------------
import { openMainMenu, addFafouritItems, } from "./layouts/layouts.js";
openMainMenu(); addFafouritItems();

import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();
