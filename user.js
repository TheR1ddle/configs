// открывать результаты поиска в новой вкладке
user_pref("browser.search.openintab", true);

// Открывать новые вкладки в фоне
user_pref("browser.tabs.loadBookmarksInBackground", true);
// Открывать новые вкладки, которые вместо новых окон, в фоне
user_pref("browser.tabs.loadDivertedInBackground", true);

// Отсюда: https://habr.com/ru/post/548064/

// Данная настройка позволяет на десктопе увидеть ваши закладки с мобильной версии, если у вас подключена синхронизация. (Д)
user_pref("browser.bookmarks.showMobileBookmarks", true);

// При переключении вкладок отображаются превью страниц. (Д)
user_pref("browser.ctrlTab.previews", true);

// Настройки вкладок. Хочу отдельно отметить "tabMinWidth". В хроме, если открываешь множество вкладок, текст исчезает. А в Firefox данная настройка отвечает за минимальную длину вкладки. И если открыто больше вкладок, то они все равно не уменьшаются, а просто прячутся и появляются дополнительные кнопки управления вкладками. Для меня данная система очень удобна, так как я постоянно открываю множество страниц с одного и того же сайта и без текста нужно постоянно угадывать, какая именно страница где.
user_pref("browser.tabs.loadInBackground", true); //false  Открывать новые вкладки в фоне
user_pref("browser.tabs.tabMinWidth", 30);
user_pref("browser.tabs.warnOnClose", false);

// Ускорение отрисовки.
user_pref("gfx.use_text_smoothing_setting", true);
user_pref("gfx.webrender.enabled", true); // Раньше было выключено
user_pref("gfx.webrender.highlight-painted-layers", false);
user_pref("layers.acceleration.force-enabled", true); // Раньше было выключено

// включает эксперементальную поддержку нового кодека AV1.
user_pref("media.av1.enabled", true);

// Для воспроизведения video html5 с помощью ffmpeg.
user_pref("media.fragmented-mp4.exposed", true);
user_pref("media.fragmented-mp4.ffmpeg.enabled", true);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.youtubeonly", false);


///////////////////////////////////////////////////////////////////////////////////////////////////
// ПАРАГРАФ НИЖЕ ОБЯЗАТЕЛЕН К ПРОЧТЕНИЮ!
// Данные настройки НЕ уникальны, НЕ универсальны, НЕ подходят для слишком старых
// компьютеров (без осознанной шлифовки по себя). Ими НЕ стоит пользоваться, если вы не уверены в
// своих силах и не желаете тратить время на какие-либо эксперименты. Основная цель данного
// маленького проекта - это сбор всех интересных настроек с описаниями в одном месте, чтобы каждый
// мог настроить Firefox под свои собственные требования
///////////////////////////////////////////////////////////////////////////////////////////////////
// Данный USER.JS создан Sergey Twersky для портала COMSS.ru
// Распространяется под лицензией CC BY-NC-SA -> https://creativecommons.org/licenses/by-nc-sa/3.0/
// Взят отсюда: https://gist.github.com/sashka3076/2422abcf093030d906f1a7a79cb37814
///////////////////////////////////////////////////////////////////////////////////////////////////
// Для автоматической активации всех настроек вставьте в адресную строку about:profiles
// У используемого профиля - Корневой каталог - Открыть папку
// В открывшемся каталоге создать файл user.js (проверьте, что расширение именно .js)
// Скопируйте весь данный текст туда и сохраните
///////////////////////////////////////////////////////////////////////////////////////////////////
// Рекомендуемое ПО
// Firemin - https://www.rizonesoft.com/downloads/firemin/
// Сокращает потребление оперативной памяти браузером в несколько раз
// SpeedyFox - https://crystalidea.com/speedyfox
// Оптимизирует, путём сжатия баз данных, профиль для ускорения запуска и повышения производительности
///////////////////////////////////////////////////////////////////////////////////////////////////
// Рекомендуемые расширения
// Если вас беспокоят проблемы безопасности при веб серфинге, то установите расширение
// Netcraft -> https://addons.mozilla.org/ru/firefox/addon/netcraft-toolbar/
// Для усиления защиты вы можете установить еще и
// Bitdefender TrafficLight -> https://addons.mozilla.org/ru/firefox/addon/trafficlight/

// Для управления аккаунтами (паролями и логинами) строго рекомендую Bitwarden
// https://addons.mozilla.org/ru/firefox/addon/bitwarden-password-manager/

// Для блокировки рекламы используйте
// https://addons.mozilla.org/ru/firefox/addon/ublock-origin/
// В разделе Приватность рекомендуется активировать все фильтры
// Для блокировки рекламы на Youtube активируйте фильтр uBlock filters – Annoyances
// Для блокировки Yandex Direct достаточно добавить фильтр
// Counters - https://easylist-downloads.adblockplus.org/cntblock.txt
// Просто вставьте ссылку выше в текстовое поле Импортировать на странице Список фильтров в настройках uBlock
// И нажмите Применить

// Дополнительные расширения для защиты вашей приватности
// LocalCDN - https://addons.mozilla.org/ru/firefox/addon/localcdn-fork-of-decentraleyes/
// ClearURLs - https://addons.mozilla.org/ru/firefox/addon/clearurls/
// Cookie AutoDelete (требует осознанной настройки) - https://addons.mozilla.org/ru/firefox/addon/cookie-autodelete/
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// (!!!) Внимание! Автор не несёт никакой ответственности, как за указанное выше рекомендованное ПО и расширения,
// в случае взлома их инфраструктуры или перехода авторов на тёмную сторону силы, так и за использование настроек ниже.
///////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// 1. Настройки Интерфейса //////////////////////////////////
/////////////////////////////////////////////////////////////

// 1.1 Поддержка нового оформления интерфейса
// https://www.opennet.ru/opennews/art.shtml?num=54346
user_pref("browser.proton.enabled", true);
user_pref("browser.proton.contextmenus.enabled", true);
user_pref("browser.proton.appmenu.enabled", true); //в версиях до Firefox 87 ломает основное меню
user_pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", true);
user_pref("browser.proton.tabs.enabled", true);
// https://www.comss.ru/page.php?id=8835
user_pref("browser.proton.doorhangers.enabled", true);
user_pref("browser.proton.infobars.enabled", true);
user_pref("browser.proton.places-tooltip.enabled", true);
user_pref("browser.proton.urlbar.enabled", true);
user_pref("browser.aboutwelcome.design", true);

// 1.2 Первичная отрисовка "скелета" интерфейса до реального отображения окна браузера
// https://www.ghacks.net/2021/01/25/firefox-nightly-uses-a-new-skeleton-ui-on-start-on-windows/
user_pref("browser.startup.preXulSkeletonUI", false);

// 1.3 Белое окно появляющееся до отображения интерфейса
// (Было заменено на SkeletonUI)
user_pref("browser.startup.blankWindow", false);

// 1.4 Что отобразит браузер после запуска
// Значения: 0 -> пустая вкладка, 1 -> домашняя страница, 2 -> последняя посещенная страница
// 3 -> восстановление вкладок открытых до закрытия окна браузера
user_pref("browser.startup.page", 3);

// 1.6 Минимальная ширина вкладки
user_pref("browser.tabs.tabMinWidth", 30);

// 1.7 Предупреждать при закрытии всех вкладок справа от текущей
user_pref("browser.tabs.warnOnClose", false);

// 1.8 Предупреждать при закрытии всех вкладок кроме активной
user_pref("browser.tabs.warnOnCloseOtherTabs", false);

// 1.15 Показывать URL адрес полностью, включая HTTPS://
user_pref("browser.urlbar.trimURLs", false);

// 1.16 Поисковые подсказки
// Установите False, если хотите сократить утечку данных о посещаемых сайтах в поисковик по-умолчанию
// 1.16.1 Поисковые подсказки в адресной строке
user_pref("browser.urlbar.suggest.searches", true);
// 1.16.2 Подсказки в адресной строке на основе истории браузера
user_pref("browser.urlbar.suggest.history",	true);
// 1.16.3 Поисковые подсказки в отдельном поисковом поле, которое обычно находится справа от адресной строки
user_pref("browser.search.suggest.enabled", true);

// 1.22 Включить доступ к экспериментальным настройкам в меню настроек
user_pref("browser.preferences.experimental", true);

// 1.23 Обновленный режим печати
user_pref("print.tab_modal.enabled", true);


// 1.32 Ленивая загрузка ранее открытых вкладок после перезапуска браузера
// true - загружается только активная вкладка, остальные вкладки загружаются по мере их открытия пользователем
// false - все вкладки загружаются одновременно после запуска браузера
user_pref("browser.sessionstore.restore_on_demand", true);

// 1.48 Количество строк подсказок в адресной строке
// Значение -1 полностью отключает подсказки
user_pref("browser.urlbar.maxRichResults", 10);

// 1.59 Декодировать URL, содержащий UTF8-символы, при копировании
user_pref("browser.urlbar.decodeURLsOnCopy", false); // Было true

// 1.60 Включить синхронизацию настроек интерфейса
user_pref("services.sync.prefs.sync.browser.uiCustomization.state", true);

// 1.63 Ввод поисковых запросов прямо в поисковом поле новой вкладки по умолчанию
// Без данной настройки ввод будет сразу перескакивать в адрессную строку
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true); // Было закоментировано, потом было false



// 2.1 Принудительная активация аппаратного ускорения при помощи видеокарты
// Не используйте данные настройки, если ваша видеокарта вероятно не поддерживает directx 10
// Также не рекомендуется использовать данные настройки на ESR (версии с длительной поддержкой)
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.all", true);
user_pref("gfx.canvas.azure.accelerated", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.force-active", true);
user_pref("layers.accelerate-all", true);

// 2.2 Настройки WebGL
// https://ru.wikipedia.org/wiki/WebGL
// Ряд пользователей рекомендуют отключать WebGL для лучшей безопасности,
// вы можете последовать этому совету, если вас не интересуют браузерные игры на HTML 5
// 2.2.1 Принудительная активация WebGL
user_pref("webgl.force-enabled", true);
// 2.2.2 Полное отключение WebGL
//user_pref("webgl.disabled", true);
// 2.2.3 Дополнительная обработка изображений с использованием WebGL
user_pref("webgl.angle.force-warp", true);
user_pref("webgl.msaa-force", true);
// 2.2.4 Выполнение отрисовки некоторых отдельных элементов страницы через WebGL в отдельном потоке
user_pref("gfx.offscreencanvas.enabled", true);

// 2.3 Дополнительная обработка выводимого изображения в режиме аппаратного ускорения.
user_pref("layers.mlgpu.enabled", true);

// 2.4 Принудительное декодирование видео видеокартой
user_pref("media.hardware-video-decoding.force-enabled", true);

// 2.5 Улучшение производительности JIT-компиляции
user_pref("javascript.options.warp", true);

// 2.6 Рендер PDF средствами видеокарты
user_pref("pdfjs.enableWebGL", true);

// 5.5 Активировать eSNI в режиме соединения через DOH для шифрования DNS запросов,
// чтобы скрыть их от вашего провайдера
// В актуальных версиях Firefox поддержка eSNI завершена
user_pref("network.security.esni.enabled", true);

// 5.9 Не отправить DNS серверу User Agent браузера
user_pref("network.trr.send_user-agent_headers", false);


// 5.6 Активация ECH (Encrypted Client Hello) - пришло вместо ESNI в FF 85, решает схожие задачи
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.use_https_rr_as_altsvc", true);

// 5.8 Частота с которой Firefox повторно обращается к DOH серверу для обновления данных
user_pref("network.trr.blacklist-duration", 60);

// 5.10 Отключить предварительный опрос DNS сервера об имеющихся на странице ссылках
// http://kb.mozillazine.org/Network.dns.disablePrefetch
// Установите оба значения true если желаете отключить данную функцию
// В значении false браузер будет заранее опрашивать DNS сервер
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);

// 6.1 Использовать HTTP/1.1 для загрузки нескольких файлов, не реконнектясь после каждого
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 8);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.pipelining.aggressive", true);

// 6.6 Удерживать соединение активным
user_pref("network.http.keep-alive", true);
user_pref("network.http.proxy.keep-alive", true);
user_pref("network.http.keep-alive.timeout", 300);

// 6.7 Предварительная загрузка ссылок
// http://kb.mozillazine.org/Network.prefetch-next
// (!) Включение (true) может привести к возможности обойти блокировщики рекламы и трекеров, но
// при этом данная настройка приносит большую пользу для медленных интернет соединений
user_pref("network.prefetch-next", false);

// 6.8 Предварительное соединение с сайтами при наведении мыши на ссылки и владки
// (!) Включение (true) может привести к возможности обойти блокировщики рекламы и трекеров, но
// при этом данная настройка приносит большую пользу для медленных интернет соединений
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enable-prefetch", false);

// 6.9 Предзагрузка документов или ресурсов, указанных через <link rel="preload">.
user_pref("network.preload", false);

// 7.0 Поддержка экспериментального протокола QUIC от Google для снижения задержек
user_pref("network.http.http3.enabled", true);
// Отсюда: https://ntc.party/t/%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-http3-quic/1823/12
// Чтобы работало с версии http3=29
user_pref("network.http.http3.support_version1", false);

// 7.6 Блокировка алгоритма SHA1
// Возможные значения 0=Все SHA1 сертификаты разрешены 1=Все SHA1 заблокированы
// 3=Разрешены только локальные сертификаты, например, установленные антивирусами
// 4=Разрешены локальные + подписанные в 2015 году или ранее
user_pref("security.pki.sha1_enforcement_level", 1);

// 7.7 Режим семейной безопасности в Windows 8.1
// Возможные значения 0=Режим не проверяется, сертификат не импортируется
// 1=Браузер видит данный режим, но сертификат не импортируется
// 2=При обнаружении режима семейной безопасности импортируется сертификат, дающий Windows возможность управлять трафиком браузера
user_pref("security.family_safety.mode", 0);

// 7.8 Проверка сертификатов на надёжности подписавшего их удостоверяющего центра
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// Возможные значения 0=Отключено 1=Разрешение для локально установленных (например антивирусом), 2=Строгая проверка
user_pref("security.cert_pinning.enforcement_level", 2);

// 7.9 Использовать CRLite для более быстрой проверки надежности удостоверяющих центров
// https://blog.mozilla.org/security/2020/01/09/crlite-part-2-end-to-end-design/
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

// 7.10 Заблокировать выполнение скриптов, загружающихся по открытому соединению, на https страницах
user_pref("security.mixed_content.block_active_content", true);

// 7.11 Запретить Flash плагину на https страницах обращаться к не зашифрованным ресурсам
user_pref("security.mixed_content.block_object_subrequest", true);

// 7.12 Блокировка небезопасных алгоритмов шифрования, уязвимых для хакерских атак
// 7.12.1 Отключение 3DES с размером ключа < 128 и отсутствием поддержки Perfect forward secrecy (PFS)
// по состоянию на 10.06.2021 данный шифр используется популярный хостинг изображений radikal.ru
// но для максимальной безопасности я рекомендую его отключить (установить значение false)
user_pref("security.ssl3.rsa_des_ede3_sha", true);
// 7.12.2 Отключение некоторых устаревших алгоритмов
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
// Шифр ниже до сих пор активно используется в рунете, например, сайтом nnmclub
// но для максимальной безопасности я рекомендую его отключить (установить значение false)
user_pref("security.ssl3.rsa_aes_256_sha", true); // no PFS
// 7.12.3 Отключение алгоритма 3DES с размером ключа < 128
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
// 7.12.4 Отключение поддержки шифрования с пустым ключом
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
// 7.12.5 Отключение слабы алгоритмов с ключеом в 40 бит
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
// 7.12.6 Отключение 56-битного алгоритма
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
// 7.12.7 Отключение поддержки корейского алгоритма шифрования SEED
user_pref("security.ssl3.rsa_seed_sha", false);
// 7.12.8 Отключение алгоритмов уязвимых для атаки Logjam
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
// 7.12.9 Отключение алгоритмов с поддержкой Elliptic-curve Diffie–Hellman (ECDH)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);
// 7.12.10 Отключение 256-битного алгоритма без поддержки PFS
user_pref("security.ssl3.rsa_camellia_256_sha", false);
// 7.12.11 Отключение гипотетически уязвимых алгоритмов
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", false);
// без алгоритма ниже не будет работать популярный rutracker
// тем не менее вы всегда сможете открыть сайт нажав кнопку "восстановить настройки по-умолчанию"
// чтобы открыть сайт, а после перезагрузки user.js вернет блокировку слабого алгоритма
// таким образом рекомендую данный алгоритм отключить, но оставлю его включенным для основной массы пользователей
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
// 7.12.12 Отключение еще нескольких слабы алгоритмов
// Отключение шифра ниже приводит к невозможности открыть официальный сайт skype
//user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false);
// Отключайте шифр ниже на своё усмотрение. Он довольно слабый, но часто использовался у некоторых банков и провайдеров
//user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false);

// 7.13 Отключение технологии 0-RTT (round-trip time)
// 0-RTT позволяет отправить часть данных серверу до согласования с ним шифрования,
// что может быть небезопасно в исключительных ситуациях
// (!) Данная настройка незначительно увеличивает время соединения с https сайтами
// https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/
user_pref("security.tls.enable_0rtt_data", false);

// 7.13.1  Отключение технологии, ускоряющей на 30% установку SSL соединения за счет
// объединения ряда запросов при согласовании зашифрованного канала
// Функция отключена, так как ранее Firefox имел уязвимость связанную с данной настройки,
// которая потенциально может быть до сих пор актуальна
// https://bugzilla.mozilla.org/show_bug.cgi?id=919877
user_pref("security.ssl.enable_false_start", false);

// 7.14 Уведомление о том, что сервер использует устаревший алгоритм шифрования
// (!) Данная настройка является страховкой на случай отключения (7.1)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// 7.15 Список доменов для которых разрешено устаревшее шифрования
// Пустая строка, чтобы убедиться, что параметр не был переназначен ранее
// (!) Настройка была удалена в Firefox 38. Оставлена здесь для обратной совместимости.
user_pref("security.ssl.renego_unrestricted_hosts", "");

// 7.16 Поведение при обработке ошибок с установкой HTTPS соединения
// Возможные значения 0=Только сообщать об ошибке 1=Предзаполнить URL адрес для создания исключения
// 2=Предзаполнить url + а также предварительно загрузить сертификат сайта
user_pref("browser.ssl_override_behavior", 1);

// 7.17 Возможность в некоторых случаях добавить сайт в исключения для установки небезопасного соединения
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// 7.18 Отображать иконку и текст об потенциальной опасности незащищенных шифрованием сайтов
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);

// 7.19 Возможность дополнительно загружаемых на странице ресурсов вызывать окно для запроса авторизации
// Данная функция активно используется для фишингаи и кражи данных для авторизации
//Возможные значения: 0=запрет субресурсам вызывать окно авторизации
//1=запрет только для субресурсов, загружаемых с других доменов (серверов)
//2=вызов окна авторизации разрешен любым субресурсам
user_pref("network.auth.subresource-http-auth-allow", 1);

// 7.20 Отрисовка SVG OpenType шрифтов
// (!) Имеет потенциальные уязвимости и не рекомендуются к использованию
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// 7.21 Использование программируемых шрифтов Graphite
// В прошлом имели критические уязвимости и не рекомендуются к использованию
user_pref("gfx.font_rendering.graphite.enabled", false);

// 7.22 Отключение поддержки сторонних плагинов, таких как Flash, Java, Silverlight
user_pref("plugin.disable", true);
user_pref("plugin.scan.plid.all", false);
user_pref("plugin.default.state", 0);
user_pref("plugins.click_to_play", true);

// 7.23 Возможность JS-скриптов взаимодействовать с плагинами браузера
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("application.use_ns_plugin_finder", false);

// 7.24 Поддержка usb токенов для авторизации
// (!) Измените значения на true, если используете аппаратные средства авторизации
user_pref("security.webauth.u2f", false);
user_pref("security.webauth.webauthn", false);
user_pref("security.webauth.webauthn_enable_usbtoken", false);

// 7.25 Запрет скриптам закрывать текущее окно
user_pref("dom.allow_scripts_to_close_windows", false);

// 7.26 Запрет скриптам скрывать кнопку закрытия окна
user_pref("dom.disable_window_open_feature.close", true);

// 7.27 Запрет скриптам скрывать адресную строку
user_pref("dom.disable_window_open_feature.location", true);

// 7.28 Запрет скриптам передвигать и изменять размер окон браузера
user_pref("dom.disable_window_move_resize", true);

// 7.29 Открывать новые страницы в новой вкладке и никогда в новом окне
// Предохраняет от некоторых сценариев атак направленных на введение пользователя в заблуждение
user_pref("browser.link.open_newwindow", 3); // 1=В последнем активном окне или вкладке 2=В новом окне, 3=В новой вкладке
//http://kb.mozillazine.org/Browser.link.open_newwindow.restriction
user_pref("browser.link.open_newwindow.restriction", 0); // Запрещает обойти ограничение выше

// 7.30 Запрещает сайтам переназначать клавиши для быстрого доступа
// Возможные значения 1=Разрешить, 2=Заблокировать
user_pref("permissions.default.shortcuts", 2);

// 7.31 Отключаем заранее выданные разрешения на доступ к браузеру для некоторых доменов Mozilla
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

// 7.32 Запрет на обход запроса на разрешение для установки сторонних расширений
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// 7.33 Разрешение расширениям работать на любых сайтах, в том числе на сайтах Mozilla и Firefox
user_pref("extensions.webextensions.restrictedDomains", "");

// 7.34 Активация CSP (Content Security Policy)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// (!) CSP критически важный компонент защиты и его нельзя отключать не при каких условиях
user_pref("security.csp.enable", true);
// 7.34.1 Поддержка Subresource Integrity для скриптов и таблиц стилей, а также директивы script-nonce
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for#browser_compatibility
user_pref("security.csp.experimentalEnabled", true);

// 7.35 Задержка для некоторых диалогов подтверждения, например, установки расширений
// (!) Не устанавливайте значение 0, чтобы избежать случайных действий
user_pref("security.dialog_enable_delay", 700);

// 7.36 Отключить автоматическую установку некоторых инструментов разработки, например, ADB-helper
user_pref("devtools.webide.autoinstallFxdtAdapters", false);

// 7.37 Отключить возможность загружать напрямую файлы из некоторых архивов через протокол jar
// Функция несёт потенциальную опасность для атак типа межсайтовый скриптинг
// http://kb.mozillazine.org/Network.jar.open-unsafe-types
user_pref("network.jar.open-unsafe-types", false);

// 7.38 Автоматически убирать пароли из Url адресов
// Адрес типа http://user:pass@example будет заменён на http://user@www.example.com
user_pref("browser.fixup.hide_user_pass", true);

// 7.39 Локальные файлы имеют доступ только к файлам расположенным с ними в одном каталоге и подкаталогах,
//но не к списку каталогов
user_pref("security.fileuri.strict_origin_policy", true);

// 7.40 Очистка истории посещенныз веб-страниц от JS кода, который мог туда попасть
user_pref("browser.urlbar.filter.javascript", true);

// 7.41 Активация и принудительное использование чёрного списка опасных расширений, адонов,
// а также использование OneCRL для максимально быстрого получения информации об отозванных сертификатах
// https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.webextensions.tabhide.enabled", false);
user_pref("services.blocklist.update_enabled", true);
user_pref("services.blocklist.signing.enforced", true);
user_pref("extensions.checkUpdateSecurity", true);
// 7.41.1 Адрес для обновления чёрного списка с сокращенной передачей данных о браузере пользователя
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

// 7.42 Встроенная защита от опасных и вредоносных сайтов, предоставляемая Google и Mozilla
// Некоторые ресурсы предлагают отключать встроенную защиту для увеличения приватности, но
// необходимо отметить, что браузер загружает кэши опасных ресурсов без передачи каких-либо данных в Google
// Исключение только для проверки скаченных файлов, но данный функционал отключен в пункте (9.26)
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);

// 7.43 Проверка загрузок по базе известных опасных файлов
user_pref("browser.safebrowsing.downloads.enabled", true);

// 7.44 Отключение устаревшего протокола аутентификации ntlm v1
// https://ru.wikipedia.org/wiki/NTLM
// (!) В случае технической необходимости вы можете включить доступ к нему по https
// измени значение второй строчки на true
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);

// 7.45 Активация SRI (Subresource Integrity) - метода проверки сторонних скриптовых-ресурсов от их подмены
// при загрузке из CDN (Content Delivery Network)
// https://en.wikipedia.org/wiki/Subresource_Integrity
user_pref("security.sri.enable", true);

// 7.46 Отключения автозаполнения на страницах незащищенных шифрованием (не https),
// а также предупреждение при вводе данных в формы, отправляющих данные без шифрования (по http)
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);

// 7.47 Запрет сайтам устанавливать соединения на критически важные порты, занятые I2P и Tor,
// а также блокировка некоторых портов, используемых ранее в хакерских атаках
user_pref("network.security.ports.banned", "4444,9050,9051,69,137,161,1719,1720,1723,6566,5060,5061,10080");

// 7.48 Запрещает сайтам использовать Offline App Cache без разрешения пользователя
user_pref("browser.offline-apps.notify", true);
user_pref("offline-apps.allow_by_default", false);

// 7.49 Отключение передачи полных URL адресов скрипту автоматической настройки прокси (PAC)
// Смягчает последствия уязвимости WPAD (Web Proxy Auto Discovery protocol) описанной в статье по ссылке ниже
// https://habrahabr.ru/company/mailru/blog/259521/
user_pref("network.proxy.autoconfig_url.include_path", false);

// 7.50 Сбрасываем пользовательский белый список сайтов, которым разрешено устаревшее шифрование
user_pref("security.tls.insecure_fallback_hosts", "");

// 7.51 Отключение Device Storage API, который позволит веб-страницам получать доступ к файловой системе
user_pref("device.storage.enabled", false);

// 7.52 Отключение File Handle API который предоставляет доступ к низкоуровневым файловым операциям
user_pref("dom.fileHandle.enabled", false);

// 7.53 Отключение доступа стороннего ПО, типа антивирусов, к основному процессу браузера
//https://wiki.mozilla.org/Platform/Integration/InjectEject/Launcher_Process/
user_pref("browser.launcherProcess.enabled", true);

// 7.54 Дополнительная изоляция вкладок и защита от межсайтового скриптинга
user_pref("browser.tabs.remote.separateFileUriProcess", true);
user_pref("browser.tabs.remote.separatePrivilegedContentProcess", true);
user_pref("browser.tabs.remote.useCrossOriginOpenerPolicy", true);
user_pref("browser.tabs.remote.useCrossOriginPolicy", true);

// 7.55 Отключение необязательного расширения протокола HTTP/2 - ORIGIN,
// потенциально снижающего безопасность
user_pref("network.http.originextension", false);

// 7.56 Отключение возможности сайтов обращаться к локальному компьютеру для анализа списка открытых портов
user_pref("network.proxy.no_proxies_on", "");

// 7.57 Отключение поддержки системного хранилища сертификатов, что защищает данные от перехвата антивирусами и программами типа AdGuard
user_pref("security.enterprise_roots.enabled", true);

// 7.58 Не обрезать пароли, превышающие максимально допустимую длину, при регистрации на некоторых сайтах.
// Вместо этого регистрация будет заблокирована, а поле со слишком длинным паролем подсвечено
// https://www.ghacks.net/2020/05/18/firefox-77-wont-truncate-text-exceeding-max-length-to-address-password-pasting-issues/
user_pref("editor.truncate_user_pastes", false);

// 7.59 Предупреждать о загрузке страниц со слабым шифрованием
// (?) аналог или дополнение к (7.14)
user_pref("security.warn_entering_weak", true);

// 7.60 Отключение raw TCP socket, позволяющего отправлять данные напрямую без использования протоколов
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-97/
user_pref("dom.mozTCPSocket.enabled", false);

// 7.61 Запрет передавать обработку основных протоколов внешнему приложению
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.protocol-handler.external.http", false);
user_pref("network.protocol-handler.external.https", false);
user_pref("network.protocol-handler.external.javascript", false);
user_pref("network.protocol-handler.external.moz-extension", false);
user_pref("network.protocol-handler.external.ftp", false);
user_pref("network.protocol-handler.external.file", false);
user_pref("network.protocol-handler.external.about", false);
user_pref("network.protocol-handler.external.chrome", false);
user_pref("network.protocol-handler.external.blob", false);
user_pref("network.protocol-handler.external.data", false);
user_pref("network.protocol-handler.external.magnet", true); //исключение для торрентов
// 7.61.1 Отключение всех протоколов, кроме указанных ниже
user_pref("network.protocol-handler.expose-all", false); //Функция отключения и список далее
user_pref("network.protocol-handler.expose.http", true);
user_pref("network.protocol-handler.expose.https", true);
user_pref("network.protocol-handler.expose.javascript", true);
user_pref("network.protocol-handler.expose.moz-extension", true);
user_pref("network.protocol-handler.expose.ftp", true);
user_pref("network.protocol-handler.expose.file", true);
user_pref("network.protocol-handler.expose.about", true);
user_pref("network.protocol-handler.expose.chrome", true);
user_pref("network.protocol-handler.expose.blob", true);
user_pref("network.protocol-handler.expose.data", true);
user_pref("network.protocol-handler.expose.magnet", true);

// 7.62 Запрет на установку расширений без цифровой подписи
// (!) Отключить запрет возможно только в версии Nightly или Developer
// https://wiki.mozilla.org/Addons/Extension_Signing
user_pref("xpinstall.signatures.required", true);

// 7.63 Автоматически обновлять расширения
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
user_pref("extensions.update.enabled", true);
user_pref("extensions.update.autoUpdateDefault", true);

// 7.64 Загружать список сайтов, предоставляемый Mozilla, обращаться к которым следует только по HTTPS
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
user_pref("network.stricttransportsecurity.preloadlist", true);

// 7.65 Уведомлять о попытке ввести пароль на незащищённой шифрованием странице
// https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/
user_pref("security.insecure_password.ui.enabled", true);

// 7.66 Отключение автоматического исправления неправильно введённых адресов
// Данная функция в некоторых сценариях потенциально может передать персональные данные поисковому или DNS серверу
// Создает дополнительные возможности для фишинга
user_pref("browser.fixup.alternate.enabled", false);

// 7.67 Отключить автоматическое декодирование URL адресов с использованием кириллицы и других нестандартных символов
// Позволяет избежать фишинговых атак с подменной адреса, когда одна или несколько букв заменяются на похожий символ
user_pref("network.IDN_show_punycode", true);

// 7.68 Отключение фоновых запросов по HTTP, если в течении трёх секунд сервер не отвечает на запросы по HTTPS
// https://bugzilla.mozilla.org/buglist.cgi?bug_id=1642387,1660945
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// 7.69 Не предлагать сохранить пароль в приватных окнах
user_pref("signon.privateBrowsingCapture.enabled", false);

// 7.70 Защита свойства "window.name" от межсайтовых атак
user_pref("privacy.window.name.update.enabled", true);

// 7.71 Отключение протокола GIO, позволяющего обойти настройки прокси
// https://en.wikipedia.org/wiki/GVfs
user_pref("network.gio.supported-protocols", "");

// 7.72 Возможность сохранения, управления и авто заполнения информации о кредитных картах
user_pref("dom.payments.defaults.saveCreditCard", true);
user_pref("extensions.formautofill.creditCards", true);
user_pref("services.sync.engine.creditcards", true);
user_pref("extensions.formautofill.creditCards.available", true);
user_pref("extensions.formautofill.creditCards.enabled", true);
user_pref("services.sync.engine.creditcards.available", true);

// 7.74 Защита window.opener от изменения оригинальной вкладки при переходе по ссылкам
user_pref("dom.targetBlankNoOpener.enabled", true);

// 7.75 Запретить сайтам прямой доступ к кэшу
user_pref("dom.caches.enabled", false);

// 7.76 Проверять скаченный файлы установленным антивирусом
user_pref("browser.download.manager.scanWhenDone", true);

// 7.77 Отключить встроенный просмоторщик PDF
// (!)Популярная рекомендация по безопасности браузера,
// тем не менее в реальности любые уязвимости исправляются в нём очень быстро
// Отключение на ваше усмотрение (для отключения изменить на true)
user_pref("pdfjs.disabled", false);

// 7.79 Сохранять ли данные о сессии для восстановления после перезапуска
// Сохраняется: содержимое форм, положение полос прокрутки, файлы cookie и данные POST.
// http://kb.mozillazine.org/Browser.sessionstore.privacy_level
// Возможные значения и их эффекты
// 0=Хранить дополнительные данные сеанса для любого сайта (По умолчанию)
// 1=Хранить дополнительные данные сеанса только для не зашифрованных (не HTTPS) сайтов (Рекомендовано!)
// 2=Никогда не сохранять данные сеанса
user_pref("browser.sessionstore.privacy_level", 0);

// 7.80 Защита от уязвимости Spectre в процессорах Intel
// Отключение может незначительно повысить производительность браузера, но только на ваш страх и риск
user_pref("javascript.options.spectre.index_masking", true);
user_pref("javascript.options.spectre.jit_to_C++_calls", true);
user_pref("javascript.options.spectre.object_mitigations.barriers", true);
user_pref("javascript.options.spectre.object_mitigations.misc", true);
user_pref("javascript.options.spectre.string_mitigations", true);
user_pref("javascript.options.spectre.value_masking", true);

/////////////////////////////////////////////////////////////
// 8. Приватность ///////////////////////////////////////////
/////////////////////////////////////////////////////////////

// 8.1 Активация встроенной в Firefox защиты от отслеживания при помощи цифровых отпечатков
// https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting
user_pref("privacy.resistFingerprinting", true);

// 8.2 Отключение mozAddonManager Web API, позволяющего Mozilla получить данные о браузере в своём магазине расширений
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// 8.3 Защита от трекинга (отслеживания перемещения пользователя в сети)
// 8.3.1 Глобальный переключатель
user_pref("privacy.trackingprotection.enabled", true);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", true); //синхронизация настройки
// 8.3.2 Защита от трекеров считывающих цифровой отпечаток
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// 8.3.3 Защита от отслеживания со стороны социальных сетей
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// 8.3.4 Защита от криптомайнеров
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
// 8.3.5 Включить защиту в приватных окнах
user_pref("privacy.trackingprotection.pbmode.enabled", true);
// 8.3.6 Отключить назойливое уведомление о блокировке отслеживания
// Некоторые сайты могут работать неправильно из-за блокировки доступа к canvas api
// Например, вы не сможете вставить скриншот через ctrl+v в ВКонтакте
// Для отдельных сайтов вы можете дать разрешение через ctrl+I
// -> Permissions -> Извлекать данные Canvas -> Убрать чекбокс (галочку) -> Разрешить
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
// 8.3.7 Блокировать cookie социальных сетей там, где они не нужны
user_pref("privacy.socialtracking.block_cookies.enabled", true);

// 8.4 Активация защиты от отслеживания перемещений через редиректы
user_pref("privacy.purge_trackers.enabled", true);

// 8.5 Защита на основе сегментирования сети от суперкуков через кэш
user_pref("privacy.partition.network_state", true);
user_pref("privacy.partition.network_state.connection_with_proxy", true);

// 8.6 Изолировать кэш каждого сайта друг от друга
user_pref("browser.cache.cache_isolation", true);

// 8.7 Дополнительная изоляция вкладок в рамках домена
user_pref("fission.autostart", true);

// 8.9 Динамическая изоляция cokies
// Для максимальной анонимности рекомендует значенеи 5, блокирующее любые межсайтовые cookies
// Значение 4 блокиркует только известные Moziila cookie используемые для слежки
user_pref("network.cookie.cookieBehavior", 5);

// 8.10 Настройки referrer
// https://wiki.mozilla.org/Security/Referrer
// 8.10.1 Настройка когда отправлять referrer (источник перехода) сайтам
// Возможные значения 0=Всегда 1=Если совпадает базовый домен 2=Если полностью совпадает URL
// 2 - улучшает приватность, но ломает видео в Instagram, 1 - компромисный вариант, т.к. ломает лишь некоторые видео
user_pref("network.http.referer.XOriginPolicy", 1); // Было 0
// 8.10.2 CROSS ORIGIN: control the amount of information to send [FF52+]
// 0=Отправлять полный адрес, 1=адрес без запроса, 2=только хост + порт
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// 8.10.3 Подменять источник перехода на случайный
// Рекомендует включить поклонникам максимальной анонимности (перевести в true)
// По-умолчанию отключено, так как ломает некоторые сайты
user_pref("network.http.referer.spoofSource", false);

// 8.11 Сообщать сайтам об отказе от отслеживания
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);

// 8.12 Включить контейнеры для запуска изолированного друг от друга набора владок
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// 8.13 Отключить отправку beacon - специфических HTTP-данных для веб-аналитики
// https://en.wikipedia.org/wiki/Web_beacon
user_pref("beacon.enabled", false);

// 8.14 Аудит ссылок
// 8.14.1 Отключить аудит ссылок, когда браузер заранее проверяет их доступность
user_pref("browser.send_pings", false);
// 8.14.2 Проводить аудит только в рамках одного хоста
user_pref("browser.send_pings.require_same_host", true);

// 8.15 Маскировка локали браузера с национальной под английскую
// user_pref("general.useragent.locale", "en-US");
// user_pref("intl.accept_languages", "en-US, en");
// user_pref("javascript.use_us_english_locale", true);

// 8.16 Игнорирование локали операционной системы и использование значения в (8.15)
// user_pref("intl.locale.matchOS", false);

// 8.17 Отключить доступ к сервису геолокации операционной системы
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]

// 8.18 Отключить логирование геолокации в консоль
user_pref("geo.provider.network.logging.enabled", false);
user_pref("geo.wifi.logging.enabled", false);

// 8.19 Использовать сервера геолокации от Mozilla, а не Google
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// 8.20 Отключить сохранение географических адресов в браузере для авто заполнения
user_pref("extensions.formautofill.addresses.enabled", false);

// 8.21 Отключить инструмент для мониторинга скорости загрузки элементов веб-страницы
//user_pref("dom.enable_performance_observer", false); //отключение ломает https://accounts.firefox.com/
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_user_timing", false);

// 8.22 Настройка поисковых систем с отключением географической специфики
// user_pref("browser.search.countryCode", "US");
// user_pref("browser.search.geoSpecificDefaults", false);
// user_pref("browser.search.geoSpecificDefaults.url", "");
// user_pref("browser.search.geoip.url", "");
// user_pref("browser.search.region", "US");
// user_pref("browser.search.update", false);

// 8.23 Отключить специфичные для русской локализации предустановленные поисковые службы
user_pref("browser.search.hiddenOneOffs", "Amazon.com,Twitter,Price.ru,Mail.ru,Поиск Mail.Ru,OZON.ru");

// 8.25 Отключить передачу в Google данных о загруженных файлах
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// 8.26 Не проверять пароли на утечки через SafeBrowsing
user_pref("browser.safebrowsing.passwords.enabled", false);

// 8.27 Отключить встроенное расширение для создания скриншотов
// user_pref("extensions.screenshots.disabled", true);
// user_pref("extensions.screenshots.system-disabled", true);
// user_pref("extensions.screenshots.upload-disabled", true);

// 8.28 Настройки WebRTC (Web Real-Time Communication) - технологии для видео и аудио стриминга через браузер
// 8.28.1  Отключить WebRTC полностью
user_pref("media.peerconnection.enabled", false);
// 8.28.2  Ограничить утечки IP адреса через WebRTC
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true); // [FF51+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // [FF70+]

// 8.29 Отключить поддержку передачи содержимого экрана браузера по сети
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// 8.30 Настройки разрешений для использования камеры и микрофона
// Возможные значения 0=всегда спрашивать, 1=разрешить, 2=заблокировать
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.microphone", 0);

// 8.31 Запрет Web Workers, используемых для фонового выполнения JavaScript-операций
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.workers.enabled", false);
user_pref("dom.workers.websocket.enabled", false);

// 8.32 Отключить службу пуш-уведомлений
// 8.32.1 Отключает сам механизм
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
// 8.32.2 Полностью убирает предложения сайтов подписаться на уведомления
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// 8.33 Настройка для получения фоновых уведомлений от сайтов
// Возможные значения 0=всегда спрашивать, 1=разрешить, 2=заблокировать
user_pref("permissions.default.desktop-notification", 2);

// 8.34 Отключить Battery Status API, позволяющий сайтам получить доступ к данным о заряде аккумулятора
user_pref("dom.battery.enabled", false);

// 8.35 Запретить доступ к списку доступных медиа-устройств
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// 8.36 Отключить использование цветовой схемы операционной системы
user_pref("browser.display.use_system_colors", false);

// 8.37 Не сообщать настоящий номер сборки браузера (установлено значение, которое использует Tor Browser)
user_pref("general.buildID.override", "20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// 8.38 Запрещает WebGL передавать данные о видекарте и установленном видео драйвере
user_pref("webgl.enable-debug-renderer-info", false);

// 8.39 Отключает WebAudio API, который может быть использован для отслеживания
user_pref("dom.webaudio.enabled", false);

// 8.40 Отключает авто дополнение длинных поисковых запросов, чтобы избежать утечки личных текстов через поиск
user_pref("browser.urlbar.richSuggestions.tail", false);

// 8.41 Отключить пред загрузку страниц, предлагаемых авто дополнением в адресной строке
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// 8.42 Запрещает передачу сайтам подробной информации о графических возможностях системы.
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);

// 8.43 Отключение Network API - Позволяет определить параметры соединение пользователя с сетью.
user_pref("dom.netinfo.enabled", false);
user_pref("dom.network.enabled", false);

// 8.44 Отключение протокола SPDY, который может хранить идентификатор и поддерживает экстремально длительные соединения
user_pref("network.http.spdy.enabled", false);

// 8.45 Отключить предзагрузку стандартного интерфейса новой вкладки, чтобы избежать нежелательных соединений
user_pref("browser.newtab.preload", false);

// 8.46 Поддержка встроенных твитов и постов из инстаграмм на сторонних ресурсах
//user_pref("urlclassifier.trackingSkipURLs", "*.twitter.com, *.twimg.com"); // hidden
//user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // hidden

// 8.47 Не создавать эскизы посещенных страниц для иконок на странице новой вкладки Firefox по-умолчанию
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
user_pref("browser.pagethumbnails.capturing_disabled", false);

// 8.48 Отключает инструмент для анализа сетевого трафика
user_pref("network.traffic_analyzer.enabled", false);

// 8.49 Отключение отслеживания через идентификаторы SSL соединений
// https://www.ssl.com/article/tracking-users-with-tls/
user_pref("security.ssl.disable_session_identifiers", true);

// 8.50 Инструмент для отслеживание положения мыши на экране веб-приложения
user_pref("canvas.hitregions.enabled", false);

// 8.51 Отключить возможнсоть удалённой откладки браузера
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.chrome.enabled", false);

// 8.52 Отключает геолокацию с использованием GPS-устройств через gpsd.
user_pref("geo.provider.use_gpsd", false);

// 8.53 Отключить телеметрию для вкладок в режиме приватного просмотра
// https://www.opennet.ru/opennews/art.shtml?num=49073
user_pref("browser.engagement.total_uri_count.pbm", false);

////////////////////////////////////////////////////////////
// 9. Телеметрия ///////////////////////////////////////////
////////////////////////////////////////////////////////////

// (!) Обратите внимание, что телеметрия - это важный инструмент, который помогает Mozilla
// делать Firefox лучше. При желании помочь компании, вы можете выборочно удалить данные настройки.

// 9.1 Отключение основных инструментов и каналов передачи данных с телеметрией
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.datacollection.infoURL", "");
user_pref("corroborator.enabled", false);
user_pref("browser.chrome.errorReporter.infoURL", "");
user_pref("browser.newtabpage.activity-stream.impressionId", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);

// 9.2 Сообщить Mozilla о нежелании передавать свои данные
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);

// 9.3 Дополнительный инструмент для передачи данных о конфигурации ПК пользователя
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);

// 9.4 Отключить передачу дополнительной информации
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);

// 9.5 Не передавать данные о доступности сетевых ресурсов
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.production.endpoint", "");

// 9.6 Не передавать данные о сайтах, которые Firefox поддерживает не полностью или с ошибками
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");

// 9.7 Не отправлять данные о падении Flash плагина
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// 9.8 Не отправлять адрес страницы, вызвавшей падение плагина
user_pref("dom.ipc.plugins.reportCrashURL", false);

// 9.9 Отключить страницу с рекомендацией расширений, использующую Google Analytics
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);

// 9.10 Отключить передачу данных об использовании и настройке страницы новой вкладки по-умолчанию
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.enhanced", false);

// 9.11 Отключить загрузку на странице новой вкладки рекомендуемого контента и ссылок на сайты спонсоров
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// 9.12 Отключить сбор данных об установленных расширения и темах
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("lightweightThemes.update.enabled", false);

// 9.13 Отключение всевозможных экспериментов Mozilla, которые компания может проводить на случайных клиентах
user_pref("browser.onboarding.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.optoutstudies.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.user_id", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("network.allow-experiments", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);

// 9.14 Отключить передачу данных о сайтах, приводящих к падению браузера
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// 9.15 Отключить автоматическое обнаружение веб-страницы для подключения в Wi-File
//(!!!) Настройка отключена, так как сломает подключение к Wi-Fi для ноутбуков в некоторых аэропортах и гостиницах
//user_pref("captivedetect.canonicalURL", "");
//user_pref("network.captive-portal-service.enabled", false);

// 9.15 Не собирать данные о качестве интернет соединения
user_pref("network.connectivity-service.enabled", false);

// 9.16 Отключить телеметрию связанную с проигрыванием медиа контента
user_pref("media.video_stats.enabled", false);
user_pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process","false");

// 9.17 Отключить интеграцию с социальными сетями
user_pref("social.enabled", false);
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

// 9.18 Отключает добавление в New Tab Page Tiles сайтов спонсоров Mozilla и сбор статистики кликов по ним
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:application/json,{}");

// 9.19 Отключает предупреждение о вышеописанной рекламе при первом открытии New Tab Page
user_pref("browser.newtabpage.introShown", true);

// 9.20 Отключает загрузку рекламы сервисов от самой Mozilla (Sync, Hello, версия для Android, VPN) в about:home.
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.privatebrowsing.vpnpromourl", "");

// 9.21 Отключить ежедневную передачу данных на сервера Mozilla о версии браузера, операционной системе и языковой локали
user_pref("app.feedback.baseURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.update.url.details", "");

// 9.22 Firefox может показывать некоторые рекомендации по функциям, исходя из типа сайтов, которые вы посещаете
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);

// 9.22 Отключить рекомендации адонов и функций на странице новой вкладки
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// 9.23 Не передавать данные об ошибках при установке зашифрованного SSL соединения
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// 9.24 Отключает добавление сайтов из Alexa Top 500 в список автодополнения адресной строки при запуске нового профиля
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// 9.25 Отключает новую версию страницы новой вкладки, которая будет подгружаться с сервера Мозиллы
user_pref("browser.newtabpage.remote", false);
user_pref("browser.newtabpage.remote.content-signing-test", false);

// 9.26 Отключает предложения оценить работу Firefox и отправить пожертвования Mozilla.
user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.url", "");

// 9.27 Не показывать ссылки на спонсоркий контент в адресной строке
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.partnerlink.campaign.topsites", "");

//////////////////////////////////////////////////////////////
// 10. Отключение потенциально ненужного функционала /////////
//////////////////////////////////////////////////////////////

// 10.3 Отключение встроенного стороннего расширения Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

// 10.14 Отключить поддержку устройств виртуальной реальности
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.openvr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.osvr.enabled", false);
user_pref("dom.vr.cardboard.enabled", false);
user_pref("dom.vr.autoactivate.enabled", false);
user_pref("dom.vr.external.enabled", false);

// 10.15 Всегда блокировать запросы на поддержку устройств виртуальной реальности
user_pref("permissions.default.xr", 2);

// 10.28 Отключает передачу по сети рисуемых браузером кадров специальному отладочному вьюверу
user_pref("gfx.layerscope.enabled", false);
user_pref("gfx.layerscope.port", 100000);

// 10.29 Запрещаем службам поддержки доступности доступ к браузеру
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.handler.enabled", false);
user_pref("devtools.accessibility.enabled", false);

