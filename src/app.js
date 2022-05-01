import page from '../node_modules/page/page.mjs'

import { renderMiddleware } from './middleWare/renderMiddleware.js';
import instrumentsView from './templates/views/instrumentsView.js';

import riskView from './templates/views/riskView.js'

page(renderMiddleware);

page('/', riskView);
page('/risk', riskView);
page('/index.html', riskView);
page('/home', riskView);

page('/instruments', instrumentsView);



page.start();