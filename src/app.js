import page from '../node_modules/page/page.mjs'

import { renderMiddleware } from './middleWare/renderMiddleware.js';

import homeView from './templates/views/homeView.js'

page(renderMiddleware);

page('/', homeView);

page.start();