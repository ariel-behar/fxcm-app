import { html } from '../../../node_modules/lit-html/lit-html.js';

let homeViewTemplate = html`
    <h1>Home View</h1>
`

export default function homeView(ctx) {
    
    ctx.render(homeViewTemplate);
}