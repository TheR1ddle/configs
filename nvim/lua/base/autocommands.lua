-- ~/.config/nvim/lua/autocommands.lua

local YankHighlightGrp = vim.api.nvim_create_augroup('YankHighlightGrp', {})
vim.api.nvim_create_autocmd('TextYankPost', {
    group = YankHighlightGrp,
    pattern = '*',
    callback = function()
        vim.highlight.on_yank({
        higroup = 'IncSearch',
        timeout = 40,
    })
  end,
})


-- Не автокомментировать новые линии при переходе на новую строку
vim.cmd [[autocmd BufEnter * set fo-=c fo-=r fo-=o]]


-- remove line lenght marker for selected filetypes
vim.cmd [[autocmd FileType text,markdown,html,xhtml,javascript setlocal cc=0]]


vim.cmd([[
filetype indent plugin on
syntax enable
]])


local function on_attach(client, buffer)
  -- This callback is called when the LSP is atttached/enabled for this buffer we could set keymaps related to LSP, etc here.
  -- Этот обратный вызов вызывается, когда LSP подключен / включен для этого буфера, мы могли бы установить ключевые карты, связанные с LSP, и т.д. Здесь.
end

-- Если изменился файл с плагинами, то перекомпилировать
vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost packer_install.lua source <afile> | PackerCompile
  augroup end
]])
