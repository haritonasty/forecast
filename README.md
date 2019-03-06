## Weather forecast React App

[![Build Status](https://travis-ci.com/haritonasty/forecast.svg?token=B58U9iPoxqXxExhvJm4a&branch=develop)](https://travis-ci.com/haritonasty/forecast)
[![Coverage Status](https://coveralls.io/repos/github/haritonasty/forecast/badge.svg?branch=configure-future-badges&t=VzvIPZ)](https://coveralls.io/github/haritonasty/forecast?branch=develop)
### Запуск
```
npm install
npm run start
```
Приложение запустится на [http://localhost:3000](http://localhost:3000)

![](./assets/screenshot.png)


### Функциональность
- Приложение отображает температуру, относительную влажность воздуха, скорость ветра и количество осадков для выбранного города на конкретную дату.
- Используется поиск городов (Google Places API) -> город добавится в список избранных ниже.
- Можно выбрать дату только из предыдущих 30 дней ([Weatherbit API](https://www.weatherbit.io/) free plan)

### Технические детали

- Приложение построено на основе шаблона [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- `styled components`
- `redux-saga`
- `reselect`
- `immutableJS`
- `npm run generate` для генерации компонентов
- Предустановленный список городов беру из json-файла через серверную прослойку


### Добавленные пакеты 
1. `react-datepicker` - удобно кастомизируемый, гибкий, использует date-fns
2. `react-places-autocomplete` - для поиска городов (прослойка для google places API) 



### Трудности
1. Можно ли записывать подхранилище как примитивный тип, если все остальные сделаны через `Immutable`? А то сейчас выходит, что у меня конструкция `date: {date: '11.11.11'}`
3. Не удалось полностью исключить верстку в `containers/`  для оберток, оберток-страниц в основном. Очень напрашивалось отделение `HomePage`, `NotFoundPage` в отдельную папку `pages`, а аккордеон для страны в папку `HOC`. Почитала про то, как люди делают и решила оставить все же все в `containers/`
4. Получились на мой взгляд очень раздутые саги, не придумала, как это можно улучшить. Возможно это случилось потому, что часть тех действий, что я там делаю, должны делаться все же на прокси-сервере.
5. Не получилось изящно хранить список городов (на мой взгляд). То есть, считаю тот вид, к которому я пришла удобным для масштабирумоемости: если надо где-то еще отрендерить список городов без groupBy по странам, то решение удобное. Либо есть более изящный GroupBy (:
6. Хотела писать на TS, но времени уходило на маленькие действия много, решила писать без TS для скорости.

