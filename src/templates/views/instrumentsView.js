import { html } from 'lit-html';

let instrumentsTemplate = html`
    <section id="instruments-page">
        <aside class="data-boxes-aside">
            <div class="data-box">
                <h3>Total PnL</h3>
                <p></p>
            </div>
            <div class="data-box">
                <h3>CFD PnL</h3>
                <p></p>
            </div>
            <div class="data-box">
                <h3>FX PnL</h3>
                <p></p>
            </div>
            <div class="data-box">
                <h3>Shares & Crypto</h3>
                <p></p>
            </div>
        </aside>

        <div class="instruments-main-content">
            <div class="instruments-main-content__buttons">
                <button class="instruments-buttons">CFD</button>
                <button class="instruments-buttons">FX</button>
                <button class="instruments-buttons">PORTFOLIO</button>
            </div>

            <div class="instruments-main-content__display">
                <img src="/images/table_large.png" alt="Table" />
            </div>
        </div>
    </section>
`;

export default function instrumentsView(ctx) {
    ctx.render(instrumentsTemplate);
}
