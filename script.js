// JavaScript
//console.log('Hello world!');

// ローディング画面
const percentageDisplay = document.querySelector('.percentage');
const progressBarFill = document.querySelector('.progress-bar .fill');
const loadingContainer = document.querySelector('#loading');
const mainContent = document.querySelector('#main-content');

let percentage = 0;
const duration = 1000; // 1 seconds
const interval = 30; // Update every 30ms
const increment = 100 / (duration / interval);

const intervalId = setInterval(() => {
    percentage += increment;
    if (percentage >= 100) {
        percentage = 100;
        clearInterval(intervalId);
        setTimeout(() => {
            loadingContainer.classList.add('hidden');
            mainContent.classList.add('visible');
            document.body.style.overflow = 'auto';
        }, 500); // Small delay before switching to main content
    }
    percentageDisplay.textContent = `${Math.round(percentage)}%`;
    progressBarFill.style.width = `${percentage}%`;
}, interval);

// コンテンツ
function animation() {
    loading.classList.add('loaded');
}

//実行する機能
const show = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['0 100px', 0]
            }
            entry.target.animate(keyframes, 500);

            //一度表示されたら止める
            obs.unobserve(entry.target);
        }
    });
}

//監視機能の設置
const observer = new IntersectionObserver(show);

//監視対象の指示
//observer.observe(document.querySelector('#img01'));

const images = document.querySelectorAll('.img');

images.forEach(img => {
    observer.observe(img);
});
