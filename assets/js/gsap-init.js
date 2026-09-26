/**
 * Eye Catch Media - Premium GSAP & ScrollTrigger Animation Engine
 * Transforms the static news & magazine website into a modern, dynamic,
 * and professionally animated experience.
 */

(function ($) {
  "use strict";

  // Check for GSAP availability
  if (typeof gsap === "undefined") {
    console.warn("GSAP library not detected. Animations skipped.");
    return;
  }

  // Register ScrollTrigger plugin
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Detect Reduced Motion preference for accessibility
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    console.info("Prefers-reduced-motion active: running in high-accessibility mode.");
    // Make all section lines visible immediately
    document.querySelectorAll(".sec-title.has-line").forEach(function (el) {
      el.classList.add("gsap-line-active");
    });
    return;
  }

  // Global Animation Config
  const CONFIG = {
    ease: "power3.out",
    easeBack: "back.out(1.5)",
    easeSmooth: "power2.out",
    duration: 0.85,
    staggerDelay: 0.12,
  };

  /**
   * 1. Hero Section Entrance Animation
   * Triggered smoothly once preloader begins closing or is dismissed
   */
  function initHeroAnimation() {
    const heroSection = document.getElementById("hero-section") || document.querySelector(".space");
    if (!heroSection) return;

    const heroTl = gsap.timeline({
      defaults: { ease: CONFIG.ease, duration: CONFIG.duration },
    });

    // 1. Breaking News Ticker Slide-in
    if (document.querySelector(".news-area")) {
      heroTl.from(".news-area", {
        y: -20,
        opacity: 0,
        duration: 0.7,
      }, 0.1);
    }

    // 2. Main Center Hero Card (Spotlight)
    const centerCard = heroSection.querySelector(".col-xl-6 .blog-style3");
    if (centerCard) {
      const centerImg = centerCard.querySelector(".blog-img img");
      const centerCat = centerCard.querySelector(".category");
      const centerTitle = centerCard.querySelector(".box-title-30, h3");
      const centerMeta = centerCard.querySelector(".blog-meta");

      heroTl.from(centerCard, {
        y: 40,
        opacity: 0,
        duration: 0.95,
        clearProps: "transform,opacity",
      }, 0.2);

      if (centerImg) {
        heroTl.from(centerImg, {
          scale: 1.12,
          duration: 1.2,
          ease: "power2.out",
          clearProps: "transform",
        }, 0.2);
      }

      if (centerCat) {
        heroTl.from(centerCat, {
          scale: 0.6,
          opacity: 0,
          duration: 0.5,
          ease: CONFIG.easeBack,
          clearProps: "transform,opacity",
        }, 0.45);
      }

      if (centerTitle) {
        heroTl.from(centerTitle, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          clearProps: "transform,opacity",
        }, 0.4);
      }

      if (centerMeta) {
        heroTl.from(centerMeta, {
          y: 15,
          opacity: 0,
          duration: 0.6,
          clearProps: "transform,opacity",
        }, 0.55);
      }
    }

    // 3. Left Column Featured Cards (Business & Sports)
    const leftCards = heroSection.querySelectorAll(".col-xl-3:first-child .blog-style3");
    if (leftCards.length) {
      heroTl.from(leftCards, {
        y: 45,
        opacity: 0,
        stagger: 0.16,
        duration: 0.85,
        clearProps: "transform,opacity",
      }, 0.35);

      const leftImgs = heroSection.querySelectorAll(".col-xl-3:first-child .blog-style3 .blog-img img");
      if (leftImgs.length) {
        heroTl.from(leftImgs, {
          scale: 1.1,
          stagger: 0.16,
          duration: 1.1,
          ease: "power2.out",
          clearProps: "transform",
        }, 0.35);
      }
    }

    // 4. Right Column Tabs & Compact News List
    const rightNav = heroSection.querySelector(".col-xl-3:last-child .nav.tab-menu");
    const rightCards = heroSection.querySelectorAll(".col-xl-3:last-child .tab-content .active .blog-style2");

    if (rightNav) {
      heroTl.from(rightNav, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        clearProps: "transform,opacity",
      }, 0.45);
    }

    if (rightCards.length) {
      heroTl.from(rightCards, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        clearProps: "transform,opacity",
      }, 0.55);
    }
  }

  /**
   * 2. GSAP ScrollTrigger Animations for Every Section
   */
  function initScrollAnimations() {
    if (typeof ScrollTrigger === "undefined") return;

    // --- A. Section Titles & Decorative Line Animations ---
    document.querySelectorAll(".sec-title.has-line").forEach(function (titleEl) {
      const sectionContainer = titleEl.closest("section, div.space, div.container, div.space-bottom") || titleEl.parentElement;
      const controls = sectionContainer ? sectionContainer.querySelectorAll(".sec-btn, .filter-menu, .icon-box") : [];

      ScrollTrigger.create({
        trigger: titleEl,
        start: "top 88%",
        once: true,
        onEnter: function () {
          // Slide & Fade in the title text
          gsap.fromTo(titleEl, 
            { y: 24, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.75, 
              ease: CONFIG.ease,
              clearProps: "transform,opacity",
              onComplete: function () {
                // Trigger line expansion
                titleEl.classList.add("gsap-line-active");
              }
            }
          );

          // Animate section action controls (arrows, filters)
          if (controls.length) {
            gsap.fromTo(controls,
              { x: 20, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.65, delay: 0.15, ease: CONFIG.ease, clearProps: "transform,opacity" }
            );
          }
        },
      });
    });

    // --- B. Trending News Section ---
    const trendingSection = document.getElementById("trending-section") || document.querySelector("#blog-slide1")?.closest("div");
    if (trendingSection) {
      const trendingSlides = trendingSection.querySelectorAll(".th-carousel .blog-style1");
      if (trendingSlides.length) {
        ScrollTrigger.create({
          trigger: trendingSection,
          start: "top 82%",
          once: true,
          onEnter: function () {
            gsap.fromTo(trendingSlides,
              { y: 40, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.1, 
                duration: 0.8, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          },
        });
      }
    }

    // --- C. Technology News Section ---
    const techSection = document.getElementById("technology-section") || document.querySelector(".filter-active-cat1")?.closest("section");
    if (techSection) {
      const bigTechCard = techSection.querySelector(".blog-style1.style-big");
      const gridTechCards = techSection.querySelectorAll(".two-column .blog-style1");

      ScrollTrigger.create({
        trigger: techSection,
        start: "top 80%",
        once: true,
        onEnter: function () {
          if (bigTechCard) {
            gsap.fromTo(bigTechCard,
              { y: 45, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: CONFIG.ease, clearProps: "transform,opacity" }
            );
            const bigImg = bigTechCard.querySelector(".blog-img img");
            if (bigImg) {
              gsap.fromTo(bigImg,
                { scale: 1.1 },
                { scale: 1, duration: 1.1, ease: "power2.out", clearProps: "transform" }
              );
            }
          }

          if (gridTechCards.length) {
            gsap.fromTo(gridTechCards,
              { y: 35, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.08, 
                duration: 0.75, 
                delay: 0.15, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }
        },
      });
    }

    // --- D. International News Section ---
    const intlSection = document.getElementById("international-section") || document.querySelector("#nav2-one")?.closest("section");
    if (intlSection) {
      const intlMainCards = intlSection.querySelectorAll(".col-xl-8 .blog-style1");
      const intlTabCards = intlSection.querySelectorAll(".col-xl-4 .tab-pane.active .blog-style2");

      ScrollTrigger.create({
        trigger: intlSection,
        start: "top 80%",
        once: true,
        onEnter: function () {
          if (intlMainCards.length) {
            gsap.fromTo(intlMainCards,
              { y: 40, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.15, 
                duration: 0.85, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }

          if (intlTabCards.length) {
            gsap.fromTo(intlTabCards,
              { y: 25, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.1, 
                duration: 0.7, 
                delay: 0.2, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }
        },
      });
    }

    // --- E. Latest Video Playlist Section ---
    const videoSection = document.getElementById("video-playlist-section") || document.querySelector(".blog-tab-slide")?.closest("div.space");
    if (videoSection) {
      const videoTabs = videoSection.querySelectorAll(".blog-tab .tab-btn");
      const mainVideoCard = videoSection.querySelector(".blog-tab-slide .blog-style8");
      const mainPlayBtn = videoSection.querySelector(".blog-tab-slide .play-btn");

      ScrollTrigger.create({
        trigger: videoSection,
        start: "top 78%",
        once: true,
        onEnter: function () {
          // Stagger video list on left
          if (videoTabs.length) {
            gsap.fromTo(videoTabs,
              { x: -30, opacity: 0 },
              { 
                x: 0, 
                opacity: 1, 
                stagger: 0.1, 
                duration: 0.75, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }

          // Main video featured display on right
          if (mainVideoCard) {
            gsap.fromTo(mainVideoCard,
              { scale: 0.96, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.9, delay: 0.15, ease: CONFIG.ease, clearProps: "transform,opacity" }
            );
          }

          // Play button pop animation
          if (mainPlayBtn) {
            gsap.fromTo(mainPlayBtn,
              { scale: 0.4, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.7, delay: 0.45, ease: CONFIG.easeBack, clearProps: "transform,opacity" }
            );
          }
        },
      });
    }

    // --- F. Popular News & Sidebar Section ---
    const popSection = document.getElementById("popular-news-section") || document.querySelector(".filter-active")?.closest("section");
    if (popSection) {
      const popNewsCards = popSection.querySelectorAll(".filter-active .blog-style4");
      const sidebarWidgets = popSection.querySelectorAll(".sidebar-area .widget");

      ScrollTrigger.create({
        trigger: popSection,
        start: "top 80%",
        once: true,
        onEnter: function () {
          if (popNewsCards.length) {
            gsap.fromTo(popNewsCards,
              { y: 35, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.1, 
                duration: 0.8, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }

          if (sidebarWidgets.length) {
            gsap.fromTo(sidebarWidgets,
              { x: 30, opacity: 0 },
              { 
                x: 0, 
                opacity: 1, 
                stagger: 0.12, 
                duration: 0.75, 
                delay: 0.2, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }
        },
      });
    }

    // --- G. Featured Posts Carousel Section ---
    const featSection = document.getElementById("featured-posts-section") || document.querySelector("#blog-slide3")?.closest("div.space-bottom");
    if (featSection) {
      const featCards = featSection.querySelectorAll(".th-carousel .blog-style1");
      if (featCards.length) {
        ScrollTrigger.create({
          trigger: featSection,
          start: "top 82%",
          once: true,
          onEnter: function () {
            gsap.fromTo(featCards,
              { y: 40, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.12, 
                duration: 0.85, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          },
        });
      }
    }

    // --- H. Footer Widgets & Copyright Section ---
    const footerSection = document.getElementById("main-footer") || document.querySelector("footer.footer-wrapper");
    if (footerSection) {
      const footerWidgets = footerSection.querySelectorAll(".widget-area .widget");
      const copyrightBar = footerSection.querySelector(".copyright-wrap");

      ScrollTrigger.create({
        trigger: footerSection,
        start: "top 85%",
        once: true,
        onEnter: function () {
          if (footerWidgets.length) {
            gsap.fromTo(footerWidgets,
              { y: 35, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                stagger: 0.1, 
                duration: 0.8, 
                ease: CONFIG.ease,
                clearProps: "transform,opacity"
              }
            );
          }

          if (copyrightBar) {
            gsap.fromTo(copyrightBar,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.35, ease: CONFIG.ease, clearProps: "transform,opacity" }
            );
          }
        },
      });
    }

    // --- I. Subtle Parallax on Ad Banners ---
    document.querySelectorAll(".header-ads img, .widget-ads img, a[href*='themeholy'] img").forEach(function (banner) {
      gsap.to(banner, {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }

  /**
   * 3. Interactive Tab Switching Animations
   * Adds modern micro-animations whenever the user switches tabs
   */
  function initTabTransitions() {
    $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      const targetPane = $($(e.target).data("bs-target"));
      if (!targetPane.length) return;

      const cards = targetPane.find(".blog-style2, .blog-style1, .border-blog");
      if (cards.length) {
        gsap.fromTo(cards,
          { y: 18, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.06, 
            duration: 0.45, 
            ease: CONFIG.ease,
            clearProps: "transform,opacity"
          }
        );
      }

      // Refresh ScrollTrigger after tab layout update
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    });

    // Isotope filter changes
    $(".filter-menu").on("click", "button", function () {
      setTimeout(function () {
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 400);
    });
  }

  /**
   * 4. Lifecycle & Preloader Integration
   */
  let hasHeroInitialized = false;

  function runHero() {
    if (hasHeroInitialized) return;
    hasHeroInitialized = true;
    initHeroAnimation();
  }

  // Preloader skip button handler
  $(document).on("click", ".preloaderCls", function () {
    setTimeout(runHero, 250);
  });

  // Window load / DOM ready integration
  $(document).ready(function () {
    initScrollAnimations();
    initTabTransitions();

    // If preloader is already hidden or absent, run hero immediately
    if (!$(".preloader").is(":visible") || $(".preloader").length === 0) {
      setTimeout(runHero, 150);
    }
  });

  $(window).on("load", function () {
    // When window finishes loading and preloader fades out:
    setTimeout(function () {
      runHero();
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 450);
  });

  // Fallback safety trigger (ensure animations run even if preloader script is interrupted)
  setTimeout(function () {
    runHero();
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, 1800);

})(jQuery);
