var config = {
    lang: 'ru',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Saint Petersburg,Russia',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'ru',
            APPID: '2e21b84bc020789792c76eee511d575e'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?',
            'Доброе утро, красавчик!',
            'Удачного дня!',
            'Как спалось?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!',
            'Привет, молодец!',
            'Ты отлично выглядешь!',
            'Всего хорошего сегодня!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!',
            'Ты классный!)',
            'Ты хорошо выглядишь!',
            'Привет, секси!'
        ]
    },
    calendar: {
        maximumEntries: 6,
        url: "https://calendar.google.com/calendar/ical/poohpunx%40gmail.com/private-dc3e4d4746425ea08ab7f454f72465c9/basic.ics",
        url: "https://calendar.google.com/calendar/ical/ru.russian%23holiday%40group.v.calendar.google.com/public/basic.ics"
    },
    news: {
        //feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
        feed: 'https://news.yandex.ru/hardware.rss'
    }
}
