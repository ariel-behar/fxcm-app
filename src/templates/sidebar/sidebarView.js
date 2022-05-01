
import { html } from 'lit-html';

function onNavHover(e) {
    let nav = document.querySelector('.sidebar-menu')
    let spans = document.querySelectorAll('.sidebar-menu ul li a span');

    nav.style.width = '300px';

    spans.forEach(span => {
        span.style.transition = 'all 1s';
        span.style.transitionDelay = '0.8s';
        span.style.opacity = 1;
        setTimeout(() => {
             span.classList.add('active');
        }, 500);
    })
}

function onNavOut(e) {
        let nav = document.querySelector('.sidebar-menu');
        let spans = document.querySelectorAll('.sidebar-menu ul li a span');

        nav.style.width = '40px';

        spans.forEach(span => {
            span.style.transition = '0.1s';
            span.style.transitionDelay = '0s';
            span.style.opacity = 0;
            span.classList.remove('active');

        });
}

let sibebarTemplate = (onNavHover, onNavOut) => html`
    <nav @mouseenter="${onNavHover}" @mouseleave="${onNavOut}" class="sidebar-menu__nav">
        <ul class="primary-list">
            <li>
                <a href="/instruments"><i class="bi bi-arrow-down-up"></i> <span>P&L</span></a>
                <ul>
                    <li>
                        <a href=""> <span>Total</span></a>
                    </li>
                    <li>
                        <a href=""> <span>CFD</span></a>
                    </li>
                    <li>
                        <a href=""><span>FX</span></a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/market-exposure"><i class="bi bi-file-earmark-spreadsheet"></i><span>Market Exposure</span></a>
            </li>
            <li>
                <a href=""><i class="bi bi-bar-chart-line-fill"></i> <span>Live Risk Stats</span></a>
            </li>
            <li>
                <a href=""><i class="bi bi-bar-chart-line"></i><span>Risk Stats</span></a>
            </li>
            <li>
                <a href=""><i class="bi bi-person-circle"></i> <span>Risk Admin</span></a>
            </li>
        </ul>
    </nav>
`;

export default function sidebarView(ctx) {
    let sidebarTemplateResult = sibebarTemplate(onNavHover, onNavOut);

    return sidebarTemplateResult;
}
