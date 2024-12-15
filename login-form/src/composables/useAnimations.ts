import { gsap } from 'gsap'

interface IAnimationConfig {
  duration?: number
  ease?: string
  delay?: number
  onComplate?: () => void
}

export const useAnimations = () => {
  const slideOutToLeft = (el: Element, config: IAnimationConfig = {}) => {
    return gsap.to(el, {
      x: '-100%',
      opacity: 0,
      duration: config.duration || 0.3,
      ease: config.ease || 'power2.inOut',
      onComplete: config.onComplate,
    })
  }

  const fadeInBottom = (el: Element, config: IAnimationConfig = {}) => {
    return gsap.from(el, {
      opacity: 0,
      duration: config.duration || 0.9,
      ease: config.ease || 'power2.inOut',
      onComplete: config.onComplate,
    })
  }

  const slideOutToRight = (el: Element, config: IAnimationConfig = {}) => {
    return gsap.from(el, {
      x: '-100%',
      opacity: 0,
      duration: config.duration || 0.3,
      ease: config.ease || 'power2.inOut',
      onComplete: config.onComplate,
    })
  }

  const showPopupAnimation = (el: Element, config: IAnimationConfig) => {
    // Сначала покажем
    gsap.fromTo(
      el,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease || 'power2.out',
      },
    )

    // Потом скроем чере 4сек
    return gsap.to(el, {
      y: 100,
      opacity: 0,
      duration: config.duration,
      ease: config.ease || 'power2.in',
      delay: config.delay || 4,
      onComplete: config.onComplate,
    })
  }

  return {
    slideOutToLeft,
    fadeInBottom,
    slideOutToRight,
    showPopupAnimation,
  }
}
