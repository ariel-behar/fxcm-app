import { html } from 'lit-html';

let riskViewTemplate = html`
    <section id="risk-page">
        <article class="risk-page__article">
            <div class="risk-page__article__content">
                <header>P&L Summary</header>
                <table>
                    <thead>
                        <tr>
                            <th><a href="">TOTAL</a></th>
                            <th>850,000</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="">CFD</a></td>
                            <td>(200,000)</td>
                        </tr>
                        <tr>
                            <td><a href="">FX</a></td>
                            <td>1,050,000</td>
                        </tr>
                        <tr>
                            <td><a href="">DD1</a></td>
                            <td>1,000,000</td>
                        </tr>
                        <tr>
                            <td><a href="">DD2</a></td>
                            <td>(150,000)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <article class="risk-page__article">
            <div class="risk-page__article__content">
                <header>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Dow Jones</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Item</a></li>
                            <li><a class="dropdown-item" href="#">Item</a></li>
                            <li><a class="dropdown-item" href="#">Item</a></li>
                        </ul>
                    </div>

                    <span class="big-num">33,286.25</span>

                    <span class="small-num">+653.61 (+2,00%)</span>
                </header>
                <div></div>
            </div>
            <div class="risk-page__article__charts-instruments">
                <p>
                    <a href="">Candlestick Chart</a>
                    |
                    <a href="" class="active">Line Chart</a>
                </p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Instruments</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Item</a></li>
                        <li><a class="dropdown-item" href="#">Item</a></li>
                        <li><a class="dropdown-item" href="#">Item</a></li>
                    </ul>
                </div>
            </div>
        </article>

        <article class="risk-page__article">
            <div class="risk-page__article__content">
                <header>Client vs. Hedging PnL</header>
                <table>
                    <thead>
                        <tr>
                            <th>Group</th>
                            <th>Client</th>
                            <th>Hedge</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CFD - DD2</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>FX - DDW</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>CFD - DD1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>FX - DD1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <article class="risk-page__article">
            <div id="top-movers-carousel" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#top-movers-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">Item</button>
                    <button type="button" data-bs-target="#top-movers-carousel" data-bs-slide-to="1" aria-label="Slide 2">Item</button>
                    <button type="button" data-bs-target="#top-movers-carousel" data-bs-slide-to="2" aria-label="Slide 3">Item</button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div class="risk-page__article__content">
                            <header>Top Movers</header>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>DD2 Net</th>
                                        <th>DD1 Net</th>
                                        <th>Net</th>
                                        <th>Client NOP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="">GER30</a>
                                        </td>
                                        <td>150,000</td>
                                        <td>250,000</td>
                                        <td>400,000</td>
                                        <td>10,500,000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">US30</a>
                                        </td>
                                        <td>250,000</td>
                                        <td>(850,000)</td>
                                        <td>(850,000)</td>
                                        <td>-100,500,000</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        ;
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="..." class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#top-movers-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#top-movers-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </article>
    </section>
`;

export default function riskView(ctx) {
    ctx.render(riskViewTemplate);
}


        