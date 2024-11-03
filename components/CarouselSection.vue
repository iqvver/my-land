<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import CarouselCard from './modules/CarouselCard.vue'
import RunningLine from './modules/RunningLine.vue'

const config = {
    itemsToShow: 3,
    itemsToScroll: 1,
    wrapAround: true,
    modelValue: 1,
}
const carouselRef = ref(0)
const currentSlide = ref(0)
const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const playerList = [
    {
        id: 0,
        title: 'Чемпион мира по шахматам',
        name: 'Хозе-Рауль Капабланка',
        img: '/_nuxt/public/images/player.png',
    },
    {
        id: 1,
        title: 'Чемпион мира по шахматам',
        name: 'Эммануил Ласкер',
        img: '/_nuxt/public/images/player.png',
    },
    {
        id: 2,
        title: 'Чемпион мира по шахматам',
        name: 'Александр Алехин',
        img: '/_nuxt/public/images/player.png',
    },
    {
        id: 3,
        title: 'Чемпион мира по шахматам',
        name: 'Арон Нимцович',
        img: '/_nuxt/public/images/player.png',
    },
    {
        id: 4,
        title: 'Чемпион мира по шахматам',
        name: 'Рихард Рети',
        img: '/_nuxt/public/images/player.png',
    },
    {
        id: 5,
        title: 'Гроссмейстер',
        name: 'Остап Бендер',
        img: '/_nuxt/public/images/player.png',
    },
]
</script>
<template>
    <section class="carou l-container">
        <div class="carou__header">
            <div class="carou__title">Участники турнира</div>
            <div class="carou__btn">
                <button @click="prev"><img src="../public/icons/arrowLeft.svg" /></button>
                <div class="carou__btn_descr">
                    {{ currentSlide + 1 }}<text>/ {{ playerList.length }}</text>
                </div>
                <button @click="next"><img src="../public/icons/arrowRight.svg" /></button>
            </div>
        </div>
        <Carousel ref="carouselRef" v-bind="config" v-model="currentSlide">
            <Slide v-for="slide in playerList" :key="slide.id">
                <div class="carou__item">
                    <CarouselCard :title="slide.title" :name="slide.name" :img="slide.img" />
                </div>
            </Slide>
        </Carousel>
    </section>
    <RunningLine />
</template>

<style scoped lang="scss">
.carou {
    margin-top: 200px;
    margin-bottom: 140px;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__title {
        font-weight: 400;
        font-size: 54px;
        line-height: 120%;
        text-transform: uppercase;
        color: #313131;
    }

    &__btn {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 16px;

        & button {
            width: 44px;
            height: 44px;
            background-color: #313131;
            border: none;
            border-radius: 100%;
            font-size: 18px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &_descr {
            display: flex;
            gap: 5px;

            & text {
                color: #9b9b9b;
            }
        }
    }
}

.carousel {
    margin-top: 60px;
}
</style>
