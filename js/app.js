/* ======= ROCKET ======= */

const introHeight = document.querySelector('.home').offsetHeight;
const topButton = document.querySelector('.top-button');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > introHeight) {
        topButton.style.display = "flex"
    }
    else {
        topButton.style.display = "none"
    }
}

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})



/* ======= FADE ======= */

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        faders.forEach(fader => {
            fader.classList.remove('appear');
            appearOnScroll.observe(fader);
        })
    }
})



/* ======= LOADER ======= */

window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const navItems = document.querySelectorAll(".slide-in");
    const homeElements = document.querySelectorAll(".home-heading, .home-subheading");
    const angleDownIcon = document.querySelector(".slide-in-down");

    this.document.body.style.overflow = 'hidden';

    this.setTimeout(function() {
        loaderWrapper.style.opacity = "0";

        loaderWrapper.addEventListener('transitionend', function() {
            loaderWrapper.style.display = "none";
            document.body.style.overflow = 'auto';

            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('active');
                    if (index === navItems.length - 1) {
                        startHomeTextAnimation();
                    }
                }, index * 100);
            });
        }, { once: true });
    }, 3000);

    function startHomeTextAnimation() {
        homeElements.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
                if (index === homeElements.length - 1) {
                    startAngleDownIconAnimation();
                }
            }, index * 100);
        });
    }

    function startAngleDownIconAnimation() {
        angleDownIcon.classList.add('active');
    }
});



/* ======= LOGO RELOAD ======= */
const reloadLink = document.getElementById("reload-link");

reloadLink.addEventListener("click", function () {
    location.reload();
});

