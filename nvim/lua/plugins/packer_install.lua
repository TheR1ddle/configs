-- Добавляем Packer как пакет в Neovim
-- vim.cmd [[packadd packer.nvim]]

-- Если нужно, чтобы Packer автоматически устанавливался на любом ПК, можно использовать следующий сниппет:
local install_path = vim.fn.stdpath('data')..'/site/pack/packer/start/packer.nvim'
if vim.fn.empty(vim.fn.glob(install_path)) > 0 then
  packer_bootstrap = vim.fn.system({'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path})
end

-- Используем данный коллбэк как список для плагинов
return require('packer').startup(function(use) -- Не везде в скобках есть 'use', но добавил на всякий случай

	-- Добавляем Packer в список, чтобы он обновлял сам себя
	use 'wbthomason/packer.nvim'

	-- набор Lua функций, используется как зависимость в большинстве
	-- плагинов, где есть работа с асинхронщиной
	use 'nvim-lua/plenary.nvim'

	-- LSP сервер
	use 'neovim/nvim-lspconfig'

	-- https://sharksforarms.dev/posts/neovim-rust/
	-- Visualize lsp progress
	use {
		"j-hui/fidget.nvim",
		config = function()
		require("plugins/fidget")
    end
  }

	-- Иконки для автодополнения
	use {
		'onsails/lspkind-nvim',
		config = function()
			require('plugins/lspkind')
		end
	}

	-- Инсталлер для серверов LSP
	use {
		'williamboman/nvim-lsp-installer',
		config = function()
			require('plugins/lsp-installer')
		end
	}

	-- Удобное меню для обозрения проблем LSP
	use {
		"folke/trouble.nvim",
		requires = "kyazdani42/nvim-web-devicons",
		config = function()
			require("plugins/trouble")
		end,
	}

	-- Автодополнение
	use {
		'hrsh7th/nvim-cmp',
		requires = {
			'L3MON4D3/LuaSnip',
			'saadparwaiz1/cmp_luasnip',
			'hrsh7th/cmp-nvim-lsp',
			'hrsh7th/cmp-path',
			'hrsh7th/cmp-emoji',
			'hrsh7th/cmp-nvim-lsp-signature-help',
			'hrsh7th/cmp-nvim-lua',
			'hrsh7th/cmp-buffer' -- https://habr.com/ru/post/586808/
		},
		config = function()
			require('plugins/cmp')
		end
	}

	-- навигация по файлам, fzf, работа с буферами и многое другое
	-- https://github.com/nvim-telescope/telescope.nvim
	-- если больше привыкли к файловому дереву, есть альтернатива - nvim-tree
 	-- https://github.com/kyazdani42/nvim-tree.lua
	use {
		'nvim-telescope/telescope.nvim',
		requires = { {'nvim-lua/plenary.nvim'} },
		config = function()
			require('plugins/telescope')
		end
	}

	-- https://github.com/nvim-treesitter/nvim-treesitter/wiki/Installation
    -- emerge  dev-util/tree-sitter-cli
    -- emerge nodejs
    -- emerge nerd-fonts
	use {
        'nvim-treesitter/nvim-treesitter',
        run = function()
            local ts_update = require('nvim-treesitter.install').update({ with_sync = true })
            ts_update()
        end,
        config = function()
			require('plugins/treesitter')
		end
    }

    -- https://github.com/numToStr/Comment.nvim
    use {
		'numToStr/Comment.nvim',
		config = function()
			-- require('Comment').setup()
			require('plugins/comment')
		end
	}

	-- https://sharksforarms.dev/posts/neovim-rust/
	-- See hrsh7th other plugins for more great completion sources!
	-- Snippet engine
	use('hrsh7th/vim-vsnip')

	-- Adds extra functionality over rust analyzer
	--use("simrat39/rust-tools.nvim")
	use {
		'simrat39/rust-tools.nvim',
		config = function()
			require('plugins/rust-tools')
		end
	}


    -- https://github.com/folke/neodev.nvim
    use {
        "folke/neodev.nvim",
    --    config = function()
    --        require('plugins/neodev')
    --    end
    }
	-- https://github.com/rcarriga/nvim-dap-ui
	use {
		"rcarriga/nvim-dap-ui",
		requires = {"mfussenegger/nvim-dap"},
		require("neodev").setup({
			library = { plugins = { "nvim-dap-ui" }, types = true },
		})
	}


	-- https://habr.com/ru/post/586808/
    -----------------------------------------------------------
    -- PYTHON
    -----------------------------------------------------------
    --- Шапка с импортами приводим в порядок
    use 'fisadev/vim-isort' -- emerge dev-python/isort && dev-python/pynvim
    -- Поддержка темплейтом jinja2
    use 'mitsuhiko/vim-jinja'


    -----------------------------------------------------------
    -- HTML и CSS
    -----------------------------------------------------------
    -- Подсвечивает закрывающий и откры. тэг. Если, где-то что-то не закрыто, то не подсвечивает.
    use 'idanarye/breeze.vim'
    -- Закрывает автоматом html и xml тэги. Пишешь <h1> и он автоматом закроется </h1>
    use 'alvan/vim-closetag'
    -- Подсвечивает #ffffff
    use 'ap/vim-css-color'

    -----------------------------------------------------------
    -- РАЗНОЕ
    -----------------------------------------------------------
    -- Даже если включена русская раскладка vim команды будут работать
    use 'powerman/vim-plugin-ruscmd'
    -- 'Автоформатирование' кода для всех языков
    use 'Chiel92/vim-autoformat'
    -- ]p - вставить на строку выше, [p - ниже
    use 'tpope/vim-unimpaired'
    -- Переводчик рус - англ
    use 'skanehira/translate.vim'
    --- popup окошки
    use 'nvim-lua/popup.nvim'
    -- Обрамляет или снимает обрамление. Выдели слово, нажми S и набери <h1>
    use 'tpope/vim-surround'
    -- Считает кол-во совпадений при поиске
    use 'google/vim-searchindex'
    -- Может повторять через . vimsurround
    use 'tpope/vim-repeat'
    -- Стартовая страница, если просто набрать vim в консоле
    use 'mhinz/vim-startify'
    -- Комментирует по gc все, вне зависимости от языка программирования
    use {
        'numToStr/Comment.nvim',
        config = function()
            require('plugins/comment')
        end
    }
    -- Обрамляет строку в теги по ctrl- y + ,
    use 'mattn/emmet-vim'
    -- Закрывает автоматом скобки
    use 'cohama/lexima.vim'
    -- Линтер, работает для всех языков
    use 'dense-analysis/ale'

    -- https://github.com/akinsho/bufferline.nvim
    use {
		'akinsho/bufferline.nvim',
		tag = "v3.*",
		requires = 'nvim-tree/nvim-web-devicons',
		config = function()
			require('plugins/bufferline')
		end
	}

	-- https://github.com/nvim-lualine/lualine.nvim
	use {
		'nvim-lualine/lualine.nvim',
		requires = { 'kyazdani42/nvim-web-devicons', opt = true },
		config = function()
			require('plugins/lualine')
		end
	}

	-- Git https://github.com/lewis6991/gitsigns.nvim
	use {
		'lewis6991/gitsigns.nvim',
		-- tag = 'release' -- To use the latest release (do not use this if you run Neovim nightly or dev builds!)
		config = function()
			require('plugins/gitsigns')
		end
	}


	use {
		"nvim-neo-tree/neo-tree.nvim",
		branch = "v1.x",
		requires = {
			"nvim-lua/plenary.nvim",
			"nvim-tree/nvim-web-devicons", -- not strictly required, but recommended
			"MunifTanjim/nui.nvim",
		},
		config = function()
			require('plugins/neo-tree')
		end
    }


    -- Темы оформления
    -- https://github.com/uloco/bluloco.nvim
    use {
        'uloco/bluloco.nvim',
        requires = { 'rktjmp/lush.nvim' },
        config = function()
            require('plugins/bluloco')
        end
    }


    -- Автоматическая установка и обновление плагинов и менеджера плагинов
	if packer_bootstrap then
		require('packer').sync()
	end
end)
