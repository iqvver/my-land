<script setup lang="ts">
import RunningLine from './modules/RunningLine.vue'
</script>

<template>
    <section class="hero-container">
        <div class="l-container hero__content">
            <div class="hero__logo-wrapper">
                <div v-for="img in 4">
                    <img src="~/public/icons/horse.svg" class="hero__logo-img" alt="horse" />
                </div>
                <div class="hero__logo-text">Клуб <br />четырех коней</div>
            </div>
            <h1 class="hero__title">
                Превратите уездный город
                <div>в столицу земного шара</div>
            </h1>
            <div class="hero__subtitle">
                Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам
            </div>
            <div class="hero__buttons">
                <div class="hero__button l-primary-button">Поддержать шахматную мысль</div>
                <div class="hero__button l-primary-button secondary">Подробнее о турнире</div>
            </div>
        </div>
    </section>
    <RunningLine />
</template>

<style lang="scss" scoped>
.hero {
    &-container {
        min-height: 700px;
        min-height: max(100%, 700px);
        background: url('~/public/images/hero.png'), rgba(233, 222, 212, 1);
        background-repeat: no-repeat;
        padding: 5px;
        background-blend-mode: multiply;

        @media (width < 900px) {
            background-position: center;
        }
    }

    &__content {
        padding: 26px 5px 0 5px;
        margin: 0 auto;

        @media (width < 900px) {
            padding: 15px;
        }
    }

    &__logo {
        &-wrapper {
            width: 245px;
            height: 36px;
            display: flex;
            align-items: center;
            gap: 2px;

            & img {
                height: 100%;
            }
        }
        &-text {
            display: flex;
            align-items: center;
            width: 147px;
            height: 100%;
            color: #595653;
            font-weight: 700;
            font-size: 16.6513px;
            line-height: 108%;
        }
    }

    &__title {
        width: 50%;
        margin-top: 62px;
        font-weight: 400;
        font-size: 60px;
        line-height: 110%;
        text-transform: uppercase;
        color: #313131;

        & div {
            text-align: center;
        }

        @media (width < 1100px) {
            font-size: 250%;
            width: 100%;
        }
    }

    &__subtitle {
        width: 50%;
        font-weight: 400;
        font-size: 18px;
        line-height: 130%;
        text-align: center;
        color: #313131;

        @media (width < 1100px) {
            width: 100%;
        }
    }

    &__buttons {
        display: flex;
        gap: 19px;
        margin-top: 40px;

        @media (width < 850px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    &__button {
        width: 263px;
        height: 72px;

        @media (width < 850px) {
            width: 80%;
        }

        @media (width < 450px) {
            width: 100%;
        }
    }
}
</style>
