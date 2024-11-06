<script setup lang="ts"></script>
<template>
    <section class="idea l-container">
        <div class="idea__text">
            Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: <text class="l-text-red">«Плодотворная дебютная идея»</text>
        </div>
        <div class="idea__img">
            <img src="~/public/images/idea.png" alt="idea" />
        </div>
    </section>
</template>
<style scoped lang="scss">
.idea {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    width: 100%;

    @media (width < 850px) {
        margin-top: 30px;
    }

    &__text {
        max-width: 57%;
        font-weight: 400;
        font-size: 36px;
        line-height: 135%;
        text-transform: uppercase;
        color: #313131;

        @media (width < 1100px) {
            font-size: 150%;
        }
    }

    &__img {
        max-width: 394px;

        & img {
            width: 100%;
        }
    }
}
</style>
