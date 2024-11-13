<template>
    <section class="session l-container">
        <div class="session__img">
            <img src="~/public/images/session.png" alt="session" />
        </div>
        <div class="session__descr">
            <div class="session__text">
                и Сеанс одновременной игры
                <text class="l-text-red">в шахматы на 160 досках</text>
                гроссмейстера О. Бендера
            </div>
            <div class="session__table">
                <div class="session__table__item">Место проведения:</div>
                <div class="session__table__item session__table__item_bold">Клуб «Картонажник»</div>
                <div class="session__table__item">Дата и время мероприятия:</div>
                <div class="session__table__item session__table__item_bold">22 июня 1927 г. в 18:00</div>
                <div class="session__table__item">Стоимость входных билетов:</div>
                <div class="session__table__item session__table__item_bold">20 коп.</div>
                <div class="session__table__item">Плата за игру:</div>
                <div class="session__table__item session__table__item_bold">50 коп.</div>
                <div class="session__table__item">Взнос на телеграммы:</div>
                <div class="session__table__item session__table__item_bold">100 руб. 21 руб. 16 коп.</div>
            </div>
            <a class="session__link">По всем вопросам обращаться в администрацию к К. Михельсону</a>
        </div>
    </section>
</template>
<style scoped lang="scss">
.session {
    width: 100%;
    margin-top: 64px;
    display: flex;
    justify-content: space-between;
    gap: 44px;

    @media (width < 850px) {
        flex-direction: column;
        align-items: center;
    }

    &__descr {
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
        max-width: 40%;

        @media (width < 850px) {
            max-width: 50%;
        }
        @media (width < 550px) {
            max-width: 100%;
        }

        & img {
            width: 100%;
        }
    }

    &__link {
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        color: #3057a2;
        text-transform: none;
    }

    &__table {
        margin-top: 60px;
        display: grid;
        grid-template: repeat(5, 1fr) / repeat(2, 1fr);
        gap: 0px;
        text-transform: none;

        @media (width < 500px) {
            margin-top: 44px;
            grid-template: repeat(5, 1fr) / repeat(1, 1fr);
        }

        &__item {
            height: 56px;
            font-weight: 400;
            font-size: 20px;
            line-height: 120%;
            color: #313131;
            opacity: 0.7;
            padding: 10px 0;
            border-bottom: 2px solid #d0d0d0;
            border-right: 2px solid #d0d0d0;
            display: flex;
            align-items: center;

            @media (width < 1100px) {
                font-size: 70%;
            }

            @media (width < 500px) {
                height: 30px;
                border-bottom: none;
                border-right: none;
            }

            &_bold {
                font-weight: 600;
                color: #313131;
                opacity: 1;
                padding: 0 16px;
                border-right: none;

                @media (width < 500px) {
                    border-bottom: 2px solid #d0d0d0;
                    padding: 0;
                }
            }
        }
    }
}

.session__table__item:nth-child(9),
.session__table__item:nth-child(10) {
    border-bottom: none;
}
</style>
