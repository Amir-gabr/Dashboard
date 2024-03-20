//
//
let scroller = document.querySelector("#scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () =>
{
    let scrolling = document.documentElement.scrollTop;
    scroller.style.width = `${(scrolling / height) * 100}%`;
});
//
//
// company
let companySection = document.querySelector(".company");
let ticktsNumber = document.querySelectorAll(".company .four .info .box .num ");

function startCount(ele)
{
    let goal =  ele.dataset.goal
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(counter)
        }
    }, 3000 / goal);
    
};
let started = false;
window.addEventListener("scroll", () =>
{
    if (window.scrollY>= companySection.offsetTop - 200) {
        if (!started) {
            ticktsNumber.forEach((num)=>startCount(num))
        };
        started = true;
    };
   
});
//
//
// company three target details progress span
let allTarget = document.querySelectorAll(".company .three .target .details .progress span ");

window.addEventListener("scroll", () =>
{
    if (window.scrollY>= companySection.offsetTop - 200) {
        allTarget.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
})





















































































