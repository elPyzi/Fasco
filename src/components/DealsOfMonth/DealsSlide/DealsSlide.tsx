import { useState } from 'react';
import './DealsSlide.scss';

const DealsSlide = () => {
    const initialSlides = [
        'src/assets/images/pic/deals/item1.png',
        'src/assets/images/pic/deals/item2.png',
        'src/assets/images/pic/deals/item3.png',
    ];

    const [slides, setSlides] = useState<string[]>(initialSlides);

    const handleNextSlide = () => {
        setSlides((prevSlides) => [
            ...prevSlides.slice(1), // Берем все элементы, начиная с 1 эл
            prevSlides[0], // Перемещаем первый элемент в конец
        ]);
    };

    const handlePrevSlide = () => {
        setSlides((prevSlides) => [
            prevSlides[prevSlides.length - 1], // Последний элемент становится первым
            ...prevSlides.slice(0, -1), // Берем остольный кроме последнего
        ]);
    };

    return (
        <div className="slide-show">
            <div className="slide-show__pages">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`slide-show__current-item ${
                            index === 0 ? 'active' : ''
                        }`}
                    >
                        <div></div>
                    </div>
                ))}
            </div>

            <div className="slide-show__controllers">
                <button
                    type="button"
                    className="controller prev-slide"
                    onClick={handlePrevSlide}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.99994 15L0.999938 8L7.99994 1"
                            stroke="#B6B6B6"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className="controller next-slide"
                    onClick={handleNextSlide}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.00018 1L8.00018 8L1.00019 15"
                            stroke="black"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* Слайды */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === 0 ? 'active' : ''}`}
                >
                    <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`slide-img ${index === 0 ? 'active' : ''}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default DealsSlide;
