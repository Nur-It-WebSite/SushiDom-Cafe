# Инструкция по настройке Google Sheets для кафе Cholpon

## Шаг 1: Создание Google Таблицы

1. Откройте [Google Sheets](https://sheets.google.com)
2. Создайте новую таблицу
3. Назовите её "Заказы Cholpon"
4. Создайте заголовки в первой строке:
   - A1: Дата
   - B1: Заказ
   - C1: Сумма
   - D1: Имя клиента
   - E1: Телефон
   - F1: Комментарий

## Шаг 2: Создание Google Apps Script

1. В Google Таблице нажмите **Расширения** → **Apps Script**
2. Удалите весь код по умолчанию
3. Вставьте следующий код:

```javascript
function doPost(e) {
  try {
    // Получаем данные из запроса
    const data = JSON.parse(e.postData.contents);

    // Открываем таблицу (замените ID_TABЛИЦЫ на ID вашей таблицы)
    const sheet = SpreadsheetApp.openById("ID_TABЛИЦЫ").getActiveSheet();

    // Добавляем новую строку с данными заказа
    sheet.appendRow([
      data.date,
      data.order,
      data.total,
      data.customerName,
      data.customerPhone,
      data.comment,
    ]);

    // Возвращаем успешный ответ
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Заказ успешно сохранен",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Возвращаем ошибку
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Шаг 3: Получение ID таблицы

1. В URL вашей Google Таблицы найдите ID
   - Пример URL: `https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit`
   - ID таблицы: `1ABC123XYZ456`
2. Замените `ID_TABЛИЦЫ` в коде на ваш ID

## Шаг 4: Развертывание как веб-приложение

1. В редакторе Apps Script нажмите **Развернуть** → **Новое развертывание**
2. Выберите тип: **Веб-приложение**
3. Настройки:
   - **Описание**: "Веб-приложение для заказов"
   - **Запуск от имени**: Ваш аккаунт
   - **У кого есть доступ**: Все
4. Нажмите **Развернуть**
5. Скопируйте **URL веб-приложения** (он будет выглядеть как `https://script.google.com/macros/s/...`)

## Шаг 5: Добавление URL в script.js

1. Откройте файл `script.js`
2. Найдите строку:
   ```javascript
   const googleSheetsUrl = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
3. Замените `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` на ваш URL веб-приложения
4. Сохраните файл

## Шаг 6: Авторизация (первый запуск)

1. При первом запросе Google попросит авторизовать скрипт
2. Нажмите **Разрешить** и следуйте инструкциям
3. После этого заказы будут автоматически сохраняться в таблицу

## Готово!

Теперь при оформлении заказа:

1. Заказ откроется в WhatsApp
2. Данные автоматически сохранятся в Google Таблицу

## Примечания

- Скрипт использует режим `no-cors`, поэтому ошибки CORS не будут видны в консоли
- Если отправка в Google Sheets не удалась, заказ всё равно откроется в WhatsApp
- Все данные сохраняются в формате JSON

## Безопасность

- URL веб-приложения можно использовать публично
- Скрипт проверяет формат данных перед сохранением
- Рекомендуется периодически проверять таблицу на наличие заказов
