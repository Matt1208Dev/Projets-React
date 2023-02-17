import { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    });

    // Fonction de Slide vers la gauche avec gestion du "spam click"
    const prevSlide = () => {
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({
                index: slideAnim.index - 1,
                inProgress: true
            });

            // La valeur de slideAnim.index est la même que ci-dessus car setTimeOut fait appel à l'état du state à l'entrée dans prevSlide, et ne tient pas compte de la modification précédente
            setTimeout(() => {
                setSlideAnim({
                    index: slideAnim.index - 1,
                    inProgress: false
                });
            }, 400);

        } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
            setSlideAnim({
                index: dataSlider.length,
                inProgress: true
            });

            setTimeout(() => {
                setSlideAnim({
                    index: dataSlider.length,
                    inProgress: false
                });
            }, 400);
        }
    }

    // Fonction de Slide vers la droite avec gestion du "spam click"
    const nextSlide = () => {
        if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
            setSlideAnim({
                index: slideAnim.index + 1,
                inProgress: true
            });

            setTimeout(() => {
                setSlideAnim({
                    index: slideAnim.index + 1,
                    inProgress: false
                });
            }, 400);
        } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
            setSlideAnim({
                index: 1,
                inProgress: true
            })

            setTimeout(() => {
                setSlideAnim({
                    index: 1,
                    inProgress: false
                });
            }, 400);
        }
    }

    const moveDot = index => {
        setSlideAnim({
            index: index,
            inProgress: false
        })
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={`${process.env.PUBLIC_URL}/Imgs/img${index + 1}.jpg`} alt={obj.title} title={obj.title} />
                    </div>
                )
            })
            }
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <BtnSlider moveSlide={nextSlide} direction={"next"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => {
                    return <div
                        className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(index + 1)}
                    >
                    </div>
                })
                }
            </div>
        </div>
    )
}
