<template>
    <marquee class="line" direction="right">
        <li class="line__item">&#9679; Дело помощи утопающим — дело рук самих утопающих!</li>
        <li class="line__item">&#9679; Шахматы двигают вперед не только культуру, но и экономику!</li>
        <li class="line__item">&#9679; Лед тронулся, господа присяжные заседатели!</li>
    </marquee>
</template>
<style scoped lang="scss">
.line {
    background-color: red;
    margin: 90px auto;
    width: 100%;
    height: 60px;
    font-weight: 400;
    font-size: 22px;
    line-height: 110%;
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 5px;

    &__item {
        display: inline;
        margin-right: 50px;
    }
}
</style>
