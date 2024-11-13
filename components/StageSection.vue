<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const config = {
    itemsToShow: 1,
    itemsToScroll: 1,
    wrapAround: true,
    modelValue: 1,
}

const carouselRef = ref(0)
const currentSlide = ref(0)
const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()
</script>
<template>
    <section class="stage l-container">
        <div class="stage__title">
            Этапы преображения
            <div class="stage__subtitle">Васюков</div>
        </div>
        <div class="stage__wrapper desktop">
            <div class="stage__item">
                <div class="stage__item__number">1</div>
                <div class="stage__item__text">Строительство железнодорожной магистрали Москва-Васюки</div>
            </div>
            <div class="stage__item">
                <div class="stage__item__number">2</div>
                <div class="stage__item__text">
                    Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов
                </div>
            </div>
            <div class="stage__item stage__item__merger">
                <div class="stage__item__number">3</div>
                <div class="stage__item__text">
                    Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры,
                    шоколадных конфет
                </div>
            </div>
            <div class="stage__item">
                <div class="stage__item__number">4</div>
                <div class="stage__item__text">Строительство дворца для турнира</div>
            </div>
            <div class="stage__item">
                <div class="stage__item__number">5</div>
                <div class="stage__item__text">Размещение гаражей для гостевого автотранспорта</div>
            </div>
            <div class="stage__item">
                <div class="stage__item__number">6</div>
                <div class="stage__item__text">
                    Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов
                </div>
            </div>
            <div class="stage__item stage__item__merger-two">
                <div class="stage__item__number">7</div>
                <div class="stage__item__text item__img">
                    <div>
                        Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей
                        во все концы света, включая Лос-Анжелос и Мельбурн
                    </div>
                    <img src="~/public/images/plane.png" alt="plane" />
                </div>
            </div>
        </div>
        <div class="stage__wrapper mobile">
            <Carousel ref="carouselRef" v-bind="config" v-model="currentSlide">
                <template #addons>
                    <div class="slide__btn">
                        <button @click="prev"><img src="../public/icons/arrowLeft.svg" /></button>
                        <Pagination />
                        <button @click="next"><img src="../public/icons/arrowRight.svg" /></button>
                    </div>
                </template>
                <Slide class="slide" key="1">
                    <div class="stage__item">
                        <div class="stage__item__number">1</div>
                        <div class="stage__item__text">Строительство железнодорожной магистрали Москва-Васюки</div>
                    </div>
                    <div class="stage__item">
                        <div class="stage__item__number">2</div>
                        <div class="stage__item__text">
                            Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов
                        </div>
                    </div>
                </Slide>
                <Slide class="slide" key="2">
                    <div class="stage__item">
                        <div class="stage__item__number">3</div>
                        <div class="stage__item__text">
                            Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов,
                            икры, шоколадных конфет
                        </div>
                    </div>
                </Slide>
                <Slide class="slide" key="3">
                    <div class="stage__item">
                        <div class="stage__item__number">4</div>
                        <div class="stage__item__text">Строительство железнодорожной магистрали Москва-Васюки</div>
                    </div>
                    <div class="stage__item">
                        <div class="stage__item__number">5</div>
                        <div class="stage__item__text">
                            Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов
                        </div>
                    </div>
                </Slide>
                <Slide class="slide" key="4">
                    <div class="stage__item">
                        <div class="stage__item__number">6</div>
                        <div class="stage__item__text">
                            Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов
                            и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн
                        </div>
                    </div>
                </Slide>
                <Slide class="slide" key="5">
                    <div class="stage__item">
                        <div class="stage__item__number">7</div>
                        <div class="stage__item__text">
                            Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов,
                            икры, шоколадных конфет
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>
<style scoped lang="scss">
.slide {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    justify-content: center;
    height: 200px;

    & div {
        align-items: center;
    }

    &__btn {
        margin-top: 28px;
        display: flex;
        justify-content: center;
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

            @media (width < 850px) {
                width: 34px;
                height: 34px;
            }

            &:hover {
                background-color: #fbce51;
            }
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
.item__img {
    display: flex;
    position: relative;

    & img {
        position: sticky;
        width: 376px;
        height: 180px;
        transform: rotate(-5deg);
        margin-top: -100px;

        @media (width < 945px) {
            font-size: 250%;
            margin-top: 0;
        }

        @media (width < 550px) {
            display: none;
        }
    }
}
.stage__subtitle {
    display: flex;
    align-items: center;

    @media (width < 850px) {
        flex-direction: column;
        align-items: normal;
    }

    &::after {
        content: 'Будущие источники обогащения васюкинцев';
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: #3057a2;
        margin-left: 10px;

        @media (width < 850px) {
            margin-left: 0px;
        }
    }
}
.stage {
    margin-top: 200px;
    width: 100%;

    @media (width < 850px) {
        margin-top: 100px;
    }

    @media (width < 650px) {
        margin-top: 30px;
    }

    &__title {
        font-weight: 400;
        font-size: 54px;
        line-height: 120%;
        color: #313131;
        width: 60%;
        height: 48px;
        margin-bottom: 154px;

        @media (width < 850px) {
            width: 100%;
            font-size: 300%;
            margin-bottom: 100px;
        }

        @media (width < 460px) {
            margin-bottom: 150px;
        }
    }
    &__wrapper {
        padding: 10px;
        width: 100%;
        display: grid;
        grid-template: repeat(3, minmax(112px, 1fr)) / repeat(3, minmax(1fr, 394px));
        gap: 20px;

        @media (width < 1000px) {
            grid-template: repeat(4, max-content) / repeat(2, 50%);
            gap: 10px;
        }

        @media (width < 550px) {
            grid-template: repeat(7, max-content) / 100%;
            gap: 10px;
        }
    }
    &__item {
        width: auto;
        background-image: url('/public/images/card.png');
        background-blend-mode: overlay;
        background-color: #e9ded4;
        display: flex;
        padding: 20px;
        gap: 16px;
        height: 100%;

        @media (width < 850px) {
            gap: 10px;
            padding: 10px;
        }

        &__number {
            min-width: 36px;
            height: 36px;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
        }
        &__text {
            font-weight: 500;
            font-size: 20px;
            line-height: 120%;
            color: #313131;
        }

        &__merger {
            grid-row: 1 / 3;
            grid-column: 3 / 4;

            @media (width < 1000px) {
                grid-row: auto;
                grid-column: auto;
            }

            &-two {
                grid-row: 3 / 4;
                grid-column: 2 / 4;

                @media (width < 1000px) {
                    grid-row: auto;
                    grid-column: 1 / 3;
                }

                @media (width < 550px) {
                    grid-row: auto;
                    grid-column: auto;
                }
            }
        }
    }
}

.desktop {
    @media (width < 500px) {
        display: none;
    }
}

.mobile {
    display: none;

    @media (width < 500px) {
        display: block;
    }
}
</style>
