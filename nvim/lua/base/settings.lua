-- https://pcnews.ru/blogs/koldovskoj_neovim_cast_vtoraa_konfig_vsevlasta-1217068.html#gsc.tab=0
-----------------------------------------------------------
-- ОБЩИЕ ОПЦИИ
-----------------------------------------------------------
vim.opt.mouse = 'a'              --Включит мышь
vim.opt.encoding = 'utf-8'       --Кодировка
vim.opt.showcmd = true           --Отображение команд
vim.opt.swapfile = false         --Не создаем свап файлы

-----------------------------------------------------------
-- ВИЗУАЛЬНЫЕ ОПЦИИ
-----------------------------------------------------------
-- Включаем нумерацию строк
vim.opt.number = true            --Номер строк сбоку
vim.opt.wrap = true              --Длинные линии будет видно
vim.opt.guifont = { "Hack Regular Nerd Font Complete Mono", "h10" }

-- 2 spaces for selected filetypes
--vim.cmd [[
--autocmd FileType xml,html,xhtml,css,scss,javascript,lua,yaml,htmljinja setlocal shiftwidth=2 tabstop=2
--]]

vim.opt.so = 5                   --Отступ курсора от края экрана
vim.opt.foldcolumn = '2'         --Ширина колонки для фолдов
-- Разделитель на 119 символов
vim.opt.colorcolumn =  '119'     --Расположение цветной колонки

-- Подсветка строки с курсором
vim.opt.cursorline = true        -- Подсветка строки с курсором
vim.opt.termguicolors = true     --  24-bit RGB colors

-- Компактный вид у тагбара и Отк. сортировка по имени у тагбара
--vim.g.tagbar_compact = 1
--vim.g.tagbar_sort = 0


--[[ Настройка панелей ]]--

-- Возможность отката назад
vim.opt.undofile = true


-- Вертикальные сплиты становятся справа
-- По умолчанию панели в Neovim ставятся в зависимости от расположения текущей панели. Данная настройка поможет нам держать панели в порядке
vim.opt.splitright = true

-- Горизонтальные сплиты становятся снизу
vim.opt.splitbelow = true

--[[ Дополнительные настройки ]]--
-- Используем системный буфер обмена
vim.opt.clipboard = 'unnamedplus'

-- Отключаем дополнение файлов в конце
vim.opt.fixeol = false

-- Автодополнение (встроенное в Neovim)
-- menuone: всплывающее окно (popup), даже если есть только одно совпадение
-- noinsert: не вставляйте текст до тех пор, пока не будет сделан выбор
-- noselect: не выполняйте автоматический выбор, плагин nvim-cmp справится с этим за нас.
vim.opt.completeopt = 'menuone,noselect,noinsert'

-- Словари рус eng
vim.opt.spelllang= { 'en_us', 'ru' }

-----------------------------------------------------------
-- Цветовая схема
-----------------------------------------------------------
--cmd'colorscheme onedark'
vim.cmd('colorscheme bluloco')
