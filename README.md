# Фичи:

- Создать день (с настроением)
- Добавить туду в день
- Добавить текст в день
- Добавить картинку в день

- Закончить туду и прикрепить ссылку на коммит или текст (опционально)
- Закончить день (все незакомпличенные туду фейлятся и день больше нельзя модифицировать)

## Модели

### Модель дня:

- mood: String,
- date: Date,
- todos: Array[Todo]
- texts: Array[Text]
- images: Array[Images]
- isCompleted: Boolean

### Модель туду:

- text: String,
- isCompleted: Boolean,
- link: String | null,
- text: String | null

### Модель картинки:

- imageUrl: String,
- title: String | null,
- text: String | null

### Модель текста:

- title: String | null,
- text: String
