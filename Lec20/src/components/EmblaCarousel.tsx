import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'

type Slide = {
  id: number
  title: string
  description: string
  image?: string
}

type EmblaCarouselProps = {
  slides: Slide[]
}

function EmblaCarousel({ slides }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    duration: 25,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateButtons = useCallback(() => {
    if (!emblaApi) return

    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateButtons()
    emblaApi.on('select', updateButtons)
    emblaApi.on('reInit', updateButtons)

    return () => {
      emblaApi.off('select', updateButtons)
      emblaApi.off('reInit', updateButtons)
    }
  }, [emblaApi, updateButtons])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__card">
                {slide.image && (
                  <img
                    className="embla__image"
                    src={slide.image}
                    alt={slide.title}
                  />
                )}

                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <button
          className="embla__button"
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          Previous
        </button>

        <button
          className="embla__button"
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default EmblaCarousel
