<script setup lang="ts">
const { title, name, img } = defineProps<{
    title: string
    name: string
    img: string
}>()
</script>
<template>
    <div class="card">
        <div class="card__img">
            <img :src="img" />
        </div>
        <div class="card__name">
            {{ name }}
        </div>
        <div class="card__title">
            {{ title }}
        </div>
        <div class="card__descr">Подробнее</div>
    </div>
</template>
<style scoped lang="scss">
.card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 394px;
    height: 464px;

    @media (width < 750px) {
       height: 400px;
    }

    @media (width < 600px) {
       height: 350px;
    }

    &__img {
        & img {
            width: 100%;
            height: auto;
        }
    }

    &__name {
        margin-top: 28px;
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        color: #313131;
    }

    &__title {
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        color: #313131;
        opacity: 0.6;
    }

    &__descr {
        margin-top: 10px;
        color: #3057a2;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 113px;
        height: 35px;
        border: 1px solid #3057a2;
        border-radius: 62px;
        position: absolute;
        bottom: 0;

        &:hover {
            background-color: #3057a2;
            color: #ffffff;
        }
    }
}
</style>
