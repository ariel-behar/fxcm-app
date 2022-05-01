import { html } from 'lit-html';

let marketExposureTemplate = html`
    <section id="market-exposure-page">
        <form action="">
            <span> CCY </span>
            <input class="form-check-input" type="radio" name="currency" id="usd" value="usd" checked />
            <label class="form-check-label" for="usd"> USD </label>

            <input class="form-check-input" type="radio" name="currency" id="native" value="native" />
            <label class="form-check-label" for="native"> Native </label>
        </form>

        <article class="market-exposure-main-content">
            <div class="market-exposure-main-content__buttons">
                <button class="instruments-buttons">CFD</button>
                <button class="instruments-buttons">FX</button>
            </div>
            <div class="market-exposure-main-content__display">

                <h2>TABLE NEEDS TO BE Inserted</h2>
            
            
            </div>
        </article>
    </section>
`;

export default function marketExposureView(ctx) {
    ctx.render(marketExposureTemplate);
}
