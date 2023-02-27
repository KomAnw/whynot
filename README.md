# Why not jump
###  > Команда "whynot?" <
####  
![Жанр](https://img.shields.io/badge/%D0%96%D0%B0%D0%BD%D1%80%20%D0%B8%D0%B3%D1%80%D1%8B-%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B5%D1%80-green?style=for-the-badge&logo=appveyor)

![Игроки](https://img.shields.io/badge/%D0%9A%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20%D0%B8%D0%B3%D1%80%D0%BE%D0%BA%D0%BE%D0%B2-%D0%9E%D0%B4%D0%B8%D0%BD-green?style=for-the-badge&logo=appveyor)

![Сложность](https://img.shields.io/badge/%D0%A1%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F-orange?style=for-the-badge&logo=appveyor)

![Оффлайн](https://img.shields.io/badge/Offline-Да-blue?style=for-the-badge&logo=appveyor)
--------
![Язык](https://img.shields.io/github/languages/top/KomAnw/whynot?style=for-the-badge&logo=appveyor)

![Пулреквесты](https://img.shields.io/github/issues-pr-closed-raw/KomAnw/whynot?style=for-the-badge&logo=appveyor)

![Старс](https://img.shields.io/github/stars/KomAnw/whynot?style=social)
----------------

## Его история
#### Наш герой — маленькое милое существо, живущее в мире, где все взаимодействуют с удивительными платформами. 
#### Он был обычным жителем своего мира, пока не узнал о таинственном гигантском замке, который находится на самом верху мира...

## Скриншоты
![Start page](https://i.postimg.cc/LgZYnqBj/Screenshot-from-2023-02-27-13-40-27.png)
![Game menu](https://i.postimg.cc/dk3TcNhH/Screenshot-from-2023-02-27-13-41-37.png)

## Demo
[![Watch the video](https://i.postimg.cc/SQWwss9X/Screenshot-from-2023-02-27-13-55-02.png)](https://youtu.be/3EKMsZVjtaA)
### Как запускать?

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev`
3. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент
4. Выполните команду `yarn dev --scope=server` чтобы запустить только server


### Как добавить зависимости?
В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента 
```yarn lerna add {your_dep} --scope client```

Для сервера
```yarn lerna add {your_dep} --scope server```

И для клиента и для сервера
```yarn lerna add {your_dep}```


Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
```yarn lerna add {your_dep} --dev --scope server```


### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

```yarn test```

### Линтинг

```yarn lint```

### Форматирование prettier

```yarn format```

### Production build

```yarn build```

И чтобы посмотреть что получилось


`yarn preview --scope client`
`yarn preview --scope server`

## Хуки
В проекте используется [lefthook](https://github.com/evilmartians/lefthook)
Если очень-очень нужно пропустить проверки, используйте `--no-verify` (но не злоупотребляйте :)

## Ой, ничего не работает :(

Откройте issue, я приду :)

## Автодеплой статики на vercel
Зарегистрируйте аккаунт на [vercel](https://vercel.com/)
Следуйте [инструкции](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
В качестве `root directory` укажите `packages/client`

Все ваши PR будут автоматически деплоиться на vercel. URL вам предоставит деплоящий бот

## Production окружение в докере
Перед первым запуском выполните `node init.js`


`docker compose up` - запустит три сервиса
1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`
 
## Вспомогательные материалы
- [Проект в Figma](https://www.figma.com/file/qufzePhfdMeFfO7b92dHAZ/Game?node-id=0%3A1&t=wJEZXp78TQ96NCbv-0)  
- [Линковка страниц игры](https://www.figma.com/file/sGcJQ8snD3ds0yy7WZDoFt/%D0%9B%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%B8%D0%B3%D1%80%D1%8B)  

## Как создавался проект
Однажды было пятеро разработчиков, которые хотели создать мини-браузерную игру. Они были взволнованы идеей и решили работать вместе, чтобы воплотить свою задумку в жизнь.

Первый разработчик был экспертом в геймдизайне. Он создал общую концепцию игры, включая игровую механику и различные уровни, которые игрокам нужно было пройти.

Второй разработчик был мастером фронт-энд веб-разработки. Он разработал пользовательский интерфейс игры, обеспечивая его визуальную привлекательность и удобство использования.

Третий разработчик был опытным бэк-энд разработчиком. Он создал серверный код, который позволял игрокам сохранять свой прогресс и соревноваться друг с другом в таблице лидеров.

Четвертый разработчик был экспертом в физике игр. Он работал над игровым движком, обеспечивая реалистичность и увлекательность движений игроков и объектов в игре.

Наконец, пятый разработчик был опытным тестировщиком. Он тщательно тестировал игру, чтобы убедиться, что она не содержит ошибок и обеспечивает плавный игровой процесс.

Вместе пять разработчиков работали неутомимо, каждый внося свой уникальный вклад в проект. Они регулярно общались и тесно сотрудничали, чтобы убедиться, что различные компоненты игры работают вместе безупречно.

После нескольких недель усердной работы мини-браузерная игра была готова. Она стала огромным успехом, и игроки со всего мира заходили, чтобы соревноваться друг с другом и занять место в таблице лидеров.

Разработчики гордились своим достижением и праздновали вместе, выпивая за успешное сотрудничество и создание увлекательной и захватывающей игры. С тех пор они продолжали работать вместе, используя свой коллективный опыт, чтобы создавать еще более захватывающие проекты.
###### Написано chatGPT специально для команды "whynot?"
 
## Авторы
- [@KomAnw](https://github.com/KomAnw) 
- [@efes2002](https://github.com/efes2002)  
- [@Kosurij](https://github.com/Kosurij)  
- [@m0000Amir](https://github.com/m0000Amir)  
- [@MikhailSamigullin](https://github.com/MikhailSamigullin)  

 ##  Почему мы называемся "whynot?"
#### А почему бы и нет? **:-D**

## Понравился проект?

### > [ Поставь звезду!](https://github.com/KomAnw/whynot)  <

