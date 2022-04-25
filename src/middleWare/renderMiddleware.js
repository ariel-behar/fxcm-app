import { render } from "../../node_modules/lit-html/lit-html.js";
import { navView } from "../templates/navigation/navView.js";


let navContainer = document.getElementById('site-header');
let mainContainer = document.getElementById('site-content');

let renderPage = (templateResult) =>{
    render(templateResult, mainContainer);
}

let renderNavigation = (templateResult) => {
    render(templateResult, navContainer);
}

export async function renderMiddleware(ctx, next){
    renderNavigation(await navView(ctx))

    ctx.render = renderPage;

    next();
}

