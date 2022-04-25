import { html } from '../../../node_modules/lit-html/lit-html.js';

let navTemplate = html`
    <nav>
        <img src="images/logo.svg" alt="FXCM logo" />
        <ul>
            <li><a href="/risk">Risk</a></li>
            <li><a href="/dealing">Dealing</a></li>
            <li><a href="/ibops"></a>IBOps</li>
            <li><a href="admin"></a>Admin</li>
        </ul>
    </nav>
`;

export function navView(ctx) {
    return navTemplate;
}
