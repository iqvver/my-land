<script setup lang="ts"></script>
<template>
    <section class="idea l-container desktop">
        <div class="idea__text">
            Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему:
            <text class="l-text-red">«Плодотворная дебютная идея»</text>
        </div>
        <div class="idea__img">
            <img src="~/public/images/idea.png" alt="idea" />
        </div>
    </section>
    <div class="idea l-container mobile">
        <div class="idea__text">
            Чтобы поддержать Международный васюкинский турнир
            <div class="idea__img">
                <img src="~/public/images/idea.png" alt="idea" />
            </div>
            посетите лекцию на тему: <text class="l-text-red">«Плодотворная дебютная идея»</text>
        </div>
    </div>
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
        @media (width < 1100px) {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    &__img {
        width: 100%;

        & img {
            width: 100%;
        }
    }
}

.desktop {
    @media (width < 600px) {
        display: none;
    }
}

.mobile {
    display: none;

    @media (width < 600px) {
        display: block;
    }
}
</style>
