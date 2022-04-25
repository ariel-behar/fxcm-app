import { html } from '../../../node_modules/lit-html/lit-html.js';

let navTemplate = html`
    <nav id="top-nav" class="container">
        <div>
            <img src="images/logo.svg" alt="FXCM logo" />
        </div>
        <ul>
            <li><a href="/risk" class="active">Risk</a></li>
            <li><a href="/dealing">Dealing</a></li>
            <li><a href="/ibops">IBOps</a></li>
            <li><a href="/admin">Admin</a></li>

            <li><a href="#">LOG OFF</a></li>
        </ul>
    </nav>
`;

export function navView(ctx) {
    return navTemplate;
}
