import React from 'react';
import ProductsCard from './ProductsCard';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const productData = [
    {
        id: 1,
        name: 'FDFN 1',
    },
    {
        id: 2,
        name: 'FDFN 2',
    },
    {
        id: 3,
        name: 'FDFN 3',
    },
    {
        id: 4,
        name: 'FDFN 4',
    },
    {
        id: 5,
        name: 'FDFN 5',
    },
    {
        id: 6,
        name: 'FDFN 6',
    },
];

const Products = () => {
    return (
        <div className="container mx-auto">
            <div className="px-10 mt-10">
                <Typography variant="h6">Products</Typography>
            </div>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {productData.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductsCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Products;
