import React from 'react';
import 'swiper/css';    
import '../subheading.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slideritems from './SliderItems.js';
import arrowleft from '../images/arrowleft.svg';
import arrowright from '../images/arrowright.svg';
import '../slider.css';

export default function Slider() {
    return (
      <section>
            <div className='subheading subhead-slider'>
                <h2 className='slider-head'>Testimonials</h2>
                <p className='slider-subtitle'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
            <div className='slider'>
                <Swiper
                  slidesPerView={1.85} // Показать одну карточку полностью и по половине с каждой стороны
                  centeredSlides={true} // Центральная карточка будет по центру

                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    navigation={{
                        nextEl: '.arrow-next',
                        prevEl: '.arrow-prev',
                    }}
                    pagination={{clickable: true, dynamicBullets: true}}
                >
                    {Slideritems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-items">
                                <div className="item-info">
                                    <div className='slider-item'>
                                        <p className="item-text">{item.text}</p>
                                        <div className="item-titles">
                                            <h3 className="item-title">{item.title}</h3>
                                            <h3 className="item-subtitle">{item.subtitle}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="slider-controls">
                    <button className="arrow-prev"><img src={arrowleft} alt=""/></button>
                    <button className="arrow-next"><img src={arrowright} alt=""/></button>
                </div>
                <div className="swiper-pagination"></div>                

                

                
            </div>
      </section>
          )
        }