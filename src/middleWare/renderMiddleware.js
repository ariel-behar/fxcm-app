import { render } from "../../node_modules/lit-html/lit-html.js";
import navView from "../templates/header/navView.js";
import footerView from '../templates/footer/footerView.js'

let headerContainer = document.querySelector('#site-header div:first-child');
let mainContainer = document.querySelector('#site-content div:first-child');
let footerContainer = document.querySelector('#site-footer div:first-child');

let renderPage = (templateResult) =>{
    render(templateResult, mainContainer);
}

let renderNavigation = (templateResult) => {
    render(templateResult, headerContainer);
}

let renderFooter = templateResult => {
    render(templateResult, footerContainer);
};

export async function renderMiddleware(ctx, next){
    renderNavigation(await navView(ctx))
    renderFooter(await footerView(ctx));

    ctx.render = renderPage;

    next();
}

