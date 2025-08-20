// HELLO
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sentence-1',
    start: 'top 0',
    end: 'bottom center',
    scrub: true,
    // markers: true,
    pin: true
  }
})

timeline1
  .from('.sentence-1 span', {
    x: '-100vw',
    stagger: .5
  })

// MY NAME
const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sentence-2',
    start: 'top 0',
    end: 'bottom center',
    scrub: true,
    // markers: true,
    pin: true
  }
})

timeline2
  .from('.sentence-2 span:first-child', { x: '-100vw', y: '100vh' })
  .from('.sentence-2 span:last-child', { x: '100vw', y: '-100vh' }, '<')

// IS
const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sentence-3',
    start: 'top 0',
    end: 'bottom center',
    scrub: true,
    // markers: true,
    pin: true
  }
})

timeline3
  .from('.sentence-3 span:first-child', { x: '-100vw', scale: 8 })
  .from('.sentence-3 span:last-child', { x: '100vw', scale: 8 }, '<')


// ELMER
const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sentence-4',
    start: 'top 0',
    end: 'bottom center',
    scrub: true,
    markers: true,
    pin: true
  }
})

timeline4
  .from('.sentence-4 span', { y: '100vh', opacity: 0, stagger: .25 })
  .to('.sentence-4 span', { scale: 2 })
  .to('.sentence-4 span', { scale: 1 })
  .to('.sentence-4 span', { color: 'white' })
  .to('body', { backgroundColor: 'black' }, '<')
  .from('.sentence-4 .title', { opacity: 0 })