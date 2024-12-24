$(document).ready(function () {


    //gasp animations
    const landingtimeline = gsap.timeline({ defaults: { duration: 1 } });

    // document.body.classList.add('active');
    landingtimeline.to(".topbar", { y: "0" }, 0);
    landingtimeline.to(".navbar-container", { y: "0" }, "<-0.4");
    landingtimeline.to(".alert-div", { x: "0" }, "<0.8");
    landingtimeline.to(".hero-link-container", { y: "0" }, "<0.5");
    // landingtimeline.fromTo('.hero-text-line', {scaleX: 0}, {scaleX: 1, transformOrigin: '100% 50%'}); 

    


    ScrollTrigger.batch(".vision-content-section", {
        once: true,
        start: "top 95%",
        onEnter: (element, triggers) => {
            gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });

        },
    });

    ScrollTrigger.batch(".vision-images", {
        once: true,
        start: "top 95%",
        onEnter: (element, triggers) => {
            gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });
            gsap.to(".student-image", { y: 0, duration: 0.6 })
            gsap.to(".student-image-background", { y: 0, duration: 0.5 })

        },
    });

    ScrollTrigger.batch(".journey-exerpt", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(element, { x: 0, opacity: 1 });

        },
    });

    ScrollTrigger.batch(".journey-title-container", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(element, { x: 0, opacity: 1 });

        },
    });

    ScrollTrigger.batch(".journey-grid-item", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });

        },
    });

    ScrollTrigger.batch(".lnews-header", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });
            gsap.to(".lnews-title", { y: 0, opacity: 1, stagger: 0.2, delay: 0.3 });
            gsap.to(".lnews-line", { y: 0, opacity: 1, stagger: 0.2, delay: 0.5 });
            gsap.to(".test-lnews", {
                y: 0,
                opacity: 1,
                stagger: 0.0,
                onComplete: () => {

                    document.querySelector(".lnews-news-option").classList.add("active");
                }
            }, "<0");
        },
    });

    ScrollTrigger.batch(".lnews-card", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });

        },
    });

    ScrollTrigger.batch(".m-used-header", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(element, { x: 0, opacity: 1, stagger: 0.2 });
            gsap.to(".m-used-title", { x: 0, opacity: 1, stagger: 0.2, delay: 0.3 });
            gsap.to(".m-used-options-container", { x: 0, opacity: 1, stagger: 0.2, delay: 0.6 });
            gsap.to(".m-used-card", {
                delay: 0,
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 2, // Total duration of stagger // Start staggering from the last item
                    stagger: 0.2 // Stagger each item
                }
            });



        },



    });

    ScrollTrigger.batch(".m-used-options-container ", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {


        },
    });

    ScrollTrigger.batch("footer", {
        once: true,
        start: "top 85%",
        onEnter: (element, triggers) => {
            gsap.to(".footer-item-container ul, .footer-item-container .footer-header, .footer-item-container .social-media-icon, .footer-item-container, .footer-logo-container, .footer-item-container .footer-store", { x: 0, opacity: 1, stagger: 0.15 });

        },
    });

    ScrollTrigger.batch(".footer-lower-container", {
        once: true,
        start: "top 100%",
        onEnter: (element, triggers) => {
            gsap.to(".copyrights-text", { x: 0, opacity: 1, stagger: 0.2 });
            gsap.to(".saudi-vision-container a", { x: 0, opacity: 1, stagger: 0.1, delay: 0.5 });

        },
    });




    const statValues = document.querySelectorAll('.stat-value');
    const statisticsSection = document.getElementById('statistics');

    // Function to count up
    const countUp = (statValue) => {
        const target = +statValue.getAttribute('data-target'); // Get target number
        let count = 0; // Start counting from 0
        const speed = 20000; // Duration of the animation

        const updateCount = () => {
            const increment = Math.ceil(target / (speed / 100)); // Calculate increment
            if (count < target) {
                count += increment; // Increment count
                if (count > target) count = target; // Cap at target
                statValue.textContent = count; // Update displayed value
                setTimeout(updateCount, 10); // Repeat
            }
        };

        updateCount(); // Start the counting
    };

    // Intersection Observer to trigger the count-up
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting for each statistic value
                $(".stat-number-container").addClass("active");
                statValues.forEach(statValue => {
                    countUp(statValue);
                });
                // Stop observing after triggering
                observer.unobserve(statisticsSection);
            }
        });
    });

    // Observe the statistics section
    observer.observe(statisticsSection);

    $(".vision-card").click(function () {
        $('.vision-card').removeClass("active");
        $(this).addClass("active");
    })


   
    $(".hamburger-container").click(function () {
        $(".top-navigation-menu, body, .topbar, .navmenu-overlay").addClass("active");
    })

    $(".top-nav-x-container").click(function () {
        $(".top-navigation-menu, body, .topbar, .navmenu-overlay").removeClass("active");
    })

    $(" .navmenu-overlay").click(function () {
        $(".top-navigation-menu, body, .topbar, .navmenu-overlay").removeClass("active");
    })

    //accessibility panel
    $(".accessiblity-image").click(function () {
        $(".acessibility-panel, .acess-overlay, .accessiblity-image").toggleClass("active");
        $(".login-logo-container").toggleClass("hidden");
    })

    $(".acess-overlay").click(function () {
        $(".acessibility-panel, .acess-overlay, .accessiblity-image").removeClass("active");
    })

    $(".accessibility-x").click(function () {
        $(".acessibility-panel, .acess-overlay, .accessiblity-image").removeClass("active");
        $(".login-logo-container").removeClass("hidden");
    })
    $('#rangeInput').on('input', function () {
        let value = this.value;
        let screenWidth = $(window).width();
        let fontSize;
    
        // Set font sizes based on screen width
        if (screenWidth < 600) { // Mobile screens
            if (value === "0") {
                fontSize = '0.75rem';
            } else if (value === "1") {
                fontSize = '0.80rem';
            } else if (value === "2") {
                fontSize = '0.85rem';
            } else if (value === "3") {
                fontSize = '0.90rem'; // Base size for mobile
            } else if (value === "4") {
                fontSize = '0.95rem';
            } else if (value === "5") {
                fontSize = '1.00rem';
            } else if (value === "6") {
                fontSize = '1.05rem';
            }
        } else { // Larger screens
            if (value === "0") {
                fontSize = '0.95rem';
            } else if (value === "1") {
                fontSize = '1rem';
            } else if (value === "2") {
                fontSize = '1.05rem';
            } else if (value === "3") {
                fontSize = '1.10rem'; // Base size for larger screens
            } else if (value === "4") {
                fontSize = '1.15rem';
            } else if (value === "5") {
                fontSize = '1.2rem';
            } else if (value === "6") {
                fontSize = '1.25rem';
            }
        }
    
        $('body').css('font-size', fontSize);
    });

    $(".tritanopia").click(function () {
        $(".color-control-image-container").removeClass("active")
        $(this).addClass("active")
        $(".main-container, .acessibility-panel, .accessibility-x").removeClass("achromatopsia protanopia deuteranopia tritanopia");
        $(".main-container, .acessibility-panel, .accessibility-x").addClass("tritanopia");
    })

    $(".deutranopia").click(function () {
        $(".color-control-image-container").removeClass("active")
        $(this).addClass("active")
        $(".main-container, .acessibility-panel, .accessibility-x").removeClass("achromatopsia protanopia deuteranopia tritanopia");
        $(".main-container, .acessibility-panel, .accessibility-x").addClass("deuteranopia");

    })

    $(".protanopia").click(function () {
        $(".color-control-image-container").removeClass("active")
        $(this).addClass("active")
        $(".main-container, .acessibility-panel, .accessibility-x").removeClass("achromatopsia protanopia deuteranopia tritanopia");
        $(".main-container, .acessibility-panel, .accessibility-x").addClass("protanopia");

    })

    $(".achromatopsia").click(function () {
        $(".color-control-image-container").removeClass("active")
        $(this).addClass("active")
        $(".main-container, .acessibility-panel, .accessibility-x").removeClass("achromatopsia protanopia deuteranopia tritanopia");
        $(".main-container, .acessibility-panel, .accessibility-x").addClass("achromatopsia");



    })

    $(".normal-option").click(function () {
        $(".color-control-image-container").removeClass("active")
        $(this).addClass("active")
        $(".main-container, .acessibility-panel, .accessibility-x").removeClass("achromatopsia protanopia deuteranopia tritanopia");

    })


    //alert-div
    $('.alert-div').click(function () {
        $('.alert-div-content, .half-circle-alert, .alert-div-image, .alert-div-overlay').toggleClass('active');
    });

    $('.alert-div-overlay').click(function () {
        $('.alert-div-content, .half-circle-alert, .alert-div-image, .alert-div-overlay').removeClass('active');
    });

    //vision section
    $(".vision-option-partnership").click(function () {
        $(this).addClass("active");
        $(".vision-option-finishing, .vision-option-planning").removeClass("active");

        $(".partnership-content").addClass("active");
        $(".planning-content, .finishing-content").removeClass("active");
    })


    $(".vision-option-finishing").click(function () {
        $(this).addClass("active");
        $(".vision-option-partnership, .vision-option-planning").removeClass("active");

        $(".finishing-content").addClass("active");
        $(".planning-content, .partnership-content").removeClass("active");
    })


    $(".vision-option-planning").click(function () {
        $(this).addClass("active");
        $(".vision-option-partnership, .vision-option-finishing").removeClass("active");

        $(".planning-content").addClass("active");
        $(".finishing-content, .partnership-content").removeClass("active");
    })

    //lnews options

    $(".lnews-events-option").click(function () {
        $(".lnews-option").removeClass("active");
        $(this).addClass("active");

        $(".lnews-cards-container").removeClass("active");
        $(".lnews-events-content").addClass("active")

    })

    $(".lnews-announcements-option").click(function () {
        $(".lnews-option").removeClass("active");
        $(this).addClass("active");

        $(".lnews-cards-container").removeClass("active");
        $(".lnews-announcements-content").addClass("active")

    })

    $(".lnews-news-option").click(function () {
        $(".lnews-option").removeClass("active");
        $(this).addClass("active");

        $(".lnews-cards-container").removeClass("active");
        $(".lnews-news-content").addClass("active")

    })

    //most used section
    $(".m-used-option-employees").click(function () {
        $(".m-used-option").removeClass("active");
        $(this).addClass("active");

        $(".m-used-options-grid-container").removeClass("active");
        $(".m-used-content-employees").addClass("active")

    })

    $(".m-used-option-members").click(function () {
        $(".m-used-option").removeClass("active");
        $(this).addClass("active");

        $(".m-used-options-grid-container").removeClass("active");
        $(".m-used-content-members").addClass("active")

    })

    $(".m-used-option-students").click(function () {
        $(".m-used-option").removeClass("active");
        $(this).addClass("active");

        $(".m-used-options-grid-container").removeClass("active");
        $(".m-used-content-students").addClass("active")

    })

    $('.nav-menu-header').click(function () {

        var $items = $(this).next('.nav-menu-items');
        $(".login-logo-container").hide();
        $items.toggleClass('active');
    });

    $('.menu-items-header').click(function (event) {
        event.stopPropagation(); 
        $(".login-logo-container").show();
      
        var $items = $(this).parent('.nav-menu-items');
        $items.removeClass('active');
    });


    // Check the current screen width
    function handleFooterToggle() {
        if ($(window).width() > 1200) { 
           
            $(".footer-header").removeAttr("data-bs-toggle");
           
            $(".footer-header").next('.footer-overflow-container').removeClass('accordion-collapse collapse');
           $(".footer-overflow-container").addClass("show");
        } else {
            $(".footer-overflow-container").removeClass("show");
            $(".footer-overflow-container").addClass("collapse");
            $(".footer-header").attr("data-bs-toggle", "collapse");
        }
    }

    // Initial check
    handleFooterToggle();

    // Run the function on window resize
    $(window).resize(function() {
        handleFooterToggle();
    });

    $(".language-popup-overlay").click(function(){
        $('.language-popup , .language-popup-overlay, .language-container').removeClass("active");
    })
    
    $(".language-container").click(function(){
       
        $('.language-popup , .language-popup-overlay, .language-container').toggleClass("active");
    })

    $('.language-option').click(function(){
        $('.language-option').removeClass("active")
        $(this).addClass("active")
        
    })
    
    });

    