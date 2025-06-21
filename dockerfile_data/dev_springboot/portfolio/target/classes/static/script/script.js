console.log("JS 파일 정상 로딩됨");
document.addEventListener('DOMContentLoaded', function() {
    new TypeIt('#typeit', {
        speed: 90,
        startDelay: 300,
    }).type('안녕하세요! 반갑습니다 :)', {delay: 1000}).go();
    
    const cards = document.querySelectorAll(".pcard");
    const tooltip = document.getElementById("tooltip");
    
    cards.forEach(card => {
        const message = card.dataset.tooltip;

        card.addEventListener("mouseenter", () => {
            tooltip.innerText = message;
            tooltip.style.display = "block";

            hideTimeout = setTimeout(() => {
                tooltip.style.display = "none";
            }, 1800);
        });

        card.addEventListener("mousemove", (e) => {
            tooltip.style.left = e.clientX + 10 + "px";
            tooltip.style.top = e.clientY + 10 + "px";

            const tooltipRect = tooltip.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            if (x + tooltipRect.width > windowWidth) {
                x = windowWidth - tooltipRect.width - 10;
            }
            if (y + tooltipRect.height > windowHeight) {
                y = windowHeight - tooltipRect.height - 10;
            }

            tooltip.style.left = x + "px";
            tooltip.style.top = y + "px";
        });

        card.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
            clearTimeout(hideTimeout);
        });
    });
});