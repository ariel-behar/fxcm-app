import page from '../node_modules/page/page.mjs'

import { renderMiddleware } from './middleWare/renderMiddleware.js';

import riskView from './templates/views/riskView.js'

page(renderMiddleware);

page('/', riskView);
page('/risk', riskView);
page('/index.html', riskView);
page('/home', riskView);



page.start();