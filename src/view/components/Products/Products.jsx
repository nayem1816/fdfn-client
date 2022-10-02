import React, { useEffect } from 'react';
import ProductsCard from './ProductsCard';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './../../../redux/features/productsSlice';

const Products = () => {
    const { data, loading, error } = useSelector(
        (state) => state.productsReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts('readProducts'));
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

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
                    {data.data?.map((product) => (
                        <SwiperSlide key={product?._id}>
                            <ProductsCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Products;
