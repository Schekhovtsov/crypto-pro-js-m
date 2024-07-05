[![License][license-image]][license-url]

Асинхронный JavaScript API для работы с КриптоПРО ЭЦП Browser Plug-In

> **Является форком [crypto-pro-web/crypto-pro-js](https://github.com/crypto-pro-web/crypto-pro-js)**

## Отличия от оригинальной библиотеки:

Методы *createAttachedSignature*, *createDetachedSignature*, *addAttachdeSignature*, *addDetachedSignature* теперь имеют параметр signType, который принимает тип усовершенствованной подписи для создания (типы [описаны тут](https://docs.cryptopro.ru/cades/reference/cadescom/cadescom_enum/cadescom_cades_type) и ниже).

Оригинальная библиотека создаёт подпись только в формате PKCS7. Эта может создавать подпись любого переданного типа - CAdes BES, CAdES T, CAdES-X Long Type 1, PKCS7.

Тип по-умолчанию - PKCS7.

### Версионность

Пакет основан на версии 2.3.3 пакета [crypto-pro-web/crypto-pro-js](https://github.com/crypto-pro-web/crypto-pro-js)


<a name="lisense"></a>
### Лицензия
[MIT](/LICENSE)

[license-url]: /LICENSE
[license-image]: https://img.shields.io/github/license/webmasterskaya/crypto-pro-js