const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true
  }
})

timeline
  .from('.box', { duration: .5, x: '-100vw', stagger: .5})