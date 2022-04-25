import { html } from 'lit-html';

let footerTemplate = html`
    <footer>
        <p> &copy; FXCM </p>
    </footer>

`;

export default function navView(ctx) {
    return footerTemplate;
}
