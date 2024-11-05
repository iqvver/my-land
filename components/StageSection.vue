<script setup lang="ts"></script>
<template>
    <section class="stage l-container">
        <div class="stage__title">
            Этапы преображения
            <div class="stage__subtitle">Васюков</div>
        </div>
        <div class="stage__wrapper">
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
    </section>
</template>
<style scoped lang="scss">
.item__img {
    display: flex;
    position: relative;

    & img {
        position: sticky;
        width: 376px;
        height: 180px;
        transform: rotate(-5deg);
        margin-top: -100px;
    }
}
.stage__subtitle {
    display: flex;
    align-items: center;

    &::after {
        content: 'Будущие источники обогащения васюкинцев';
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: #3057a2;
        width: 280px;
        margin-left: 10px;
    }
}
.stage {
    margin-top: 200px;

    &__title {
        font-weight: 400;
        font-size: 54px;
        line-height: 120%;
        color: #313131;
        width: 60%;
        height: 48px;
        margin-bottom: 154px;
    }
    &__wrapper {
        display: grid;
        grid-template-rows: repeat(3, minmax(1fr, 112px));
        grid-template-columns: repeat(3, minmax(1fr, 394px));
        gap: 20px;
        width: 100%;
        height: 100%;
    }
    &__item {
        background-image: url('/public/images/card.png');
        background-color: #e9ded4;
        background-blend-mode: overlay;
        display: flex;
        padding: 20px;
        gap: 16px;

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

            &-two {
                grid-row: 3 / 4;
                grid-column: 2 / 4;
            }
        }
    }
}
</style>
