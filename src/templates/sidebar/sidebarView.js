
import { html } from 'lit-html';

function onNavHover(e) {
    let nav = document.querySelector('.sidebar-menu')
    let spans = document.querySelectorAll('.sidebar-menu ul li a span');

    nav.style.width = '300px';

    spans.forEach(span => {
        span.style.transition = 'all 1s';
        span.style.transitionDelay = '0.6s';
        span.style.opacity = 1;
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
        });
}

let sibebarTemplate = (onNavHover, onNavOut) => html`
    <nav @mouseover="${onNavHover}" @mouseout="${onNavOut}" class="sidebar-menu__nav">
        <ul>
            <li>
                <a href=""><i class="bi bi-arrow-down-up"></i> <span>P&L</span></a>
            </li>
            <li>
                <a href=""><i class="bi bi-file-earmark-spreadsheet"></i><span>Market Exposure xlsx</span></a>
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
