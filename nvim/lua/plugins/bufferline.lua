-- https://github.com/akinsho/bufferline.nvim
require("bufferline").setup{}

require('keys/alias')
-- Переключение вкладок с помщью TAB или shift-tab (akinsho/bufferline.nvim)
nm('<Tab>', ':BufferLineCycleNext<CR>')
nm('<S-Tab>', ':BufferLineCyclePrev<CR>')
