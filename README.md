# Rucode

##### /apps
- `/backend`
- `/web`
- `/packages` - папка с конфигами монорепа, также содержит папку `ui` с компонентами для фронта.

### Backend
Nestjs приложение
- `/src` - папка с модулями. 

    Каждый модуль работает с одной сущностью. У каждого модуля есть свой `service`, `resolver` и типы данных с которыми он работает: входные `inputs` и выходные `outputs`, и тип самой сущности `entity`.
- `/test` - папка с тестами (пока не используется).

### Web
Next.js приложение
- `/api` - папка содержащая все для взаимодействия с GraphQL API;
    
    - `/__generated__` - содержит сгенерированные с помощью `graphql-codegen` типы запросов;
    - `/services` - сервисы для отправки `query` и `mutation` под каждую сущность;
    - `client.ts` - здесь происходит инициализация и экспорт Apollo-клиента;
- `/pages` - страницы приложения (структура папок внутри еще не продумана);
- `codegen.ts` - файл с конфигом для генератора типов GraphQL;

# Старт проекта

Для начала работы необходимо сделать docker-compose из корня проекта, поднять образ PostgreSQL и ввести команду:
```
npm run dev
```
Для генерации GraphQL типов перейти в /apps/web/ и вызвать компилятор:
```
npm run compile
```
Для отображения профиля пользователя необходимо создать запись в базе. 

##### Пример запроса на создание пользователя:
```
mutation createUser($user: CreateUserInput!) {
  createUser(createUser: $user) {
    id
    email
    name
    createdAt
    updatedAt
  }
}
```
##### Payload:
```
{
  "user": {
    "email": "lol@aboba.com",
    "name": "Lolita Kekka",
    "password": "12345"
  }
}
```
##### Пример запроса на создание код-сниппета с привязкой к пользователю по `id`:
```
mutation createSnippet($snippet: CreateSnippetInput!) {
  createSnippet(createSnippet: $snippet) {
    name,
    html,
    css,
    js,
    id,
  }
}
```
##### Payload
```
{
  "snippet": {
    "name": "Первый проект!",
    "userId": ${id пользователя}
    "html": "<div class='app'>
                <h1>My first <span>Rucode</span> project!</h1>
                <button>Get started</button>
            </div>",
    "css": "",
    "js": "",
  }
}
```

### Страницы на фронте

###### localhost:3000
- `/profile/${id}`: профиль пользователя;
- `/code/new`: страница создания нового код-сниппета;
- `/code/${id}`: страница просмотра и редактирования существующего код-сниппета;
###### localhost:3001
- `/graphql`: интерактивная документация к GraphQL API;