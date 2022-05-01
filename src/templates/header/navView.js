import { html } from 'lit-html';

let navTemplate = html`
    <nav class="top-nav">
            <img src="images/logo.svg" alt="FXCM logo" />
        <ul>
            <li><a href="/risk" class="active">Risk</a></li>
            <li><a href="/dealing">Dealing</a></li>
            <li><a href="/ibops">IBOps</a></li>
            <li><a href="/admin">Admin</a></li>

            <li><a href="#">LOG OFF</a></li>
        </ul>
    </nav>
`;

export default function navView(ctx) {
    return navTemplate;
}
