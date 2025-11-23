;;;; ========================================================================================== ;;;;
;;;; Конфигурационный файл Emacs для Doom-Emacs
;;;; Автор: © Никита Казаков, 03.12.2024
;;;; E-mail: kazak715@yandex.ru
;;;; ------------------------------------------------------------------------------------------------------------------------------------------------------ ;;;;


;; Предварительные условия
;;
;;    Git 2.23+
;;    Emacs 27.1–29.2 ( Рекомендуется: 29.2 + native-comp )
;;    ripgrep 11.0+
;;    GNU find
;;    НЕОБЯЗАТЕЛЬНО: fd 7.3.0+ (улучшает производительность индексации файлов для некоторых команд)
;;
;; GENTOO:
;; echo "app-editors/emacs gui xft jit" >> /etc/portage/package.use/emacs
;; # required
;; emerge '>=dev-vcs/git-2.23' '>=sys-apps/ripgrep-11.0' sys-apps/findutils
;; # optional
;; emerge '>=sys-apps/fd-7.3.0'
;;
;; Debian/Ubuntu:
;; apt install ripgrep fd-find

;; Native compilation
;; https://www.masteringemacs.org/article/speed-up-emacs-libjansson-native-elisp-compilation
(if (and (fboundp 'native-comp-available-p)
       (native-comp-available-p))
  (message "Native compilation is available")
(message "Native complation is *not* available"))

;; https://github.com/QiangF/emacs-config3
(when (featurep 'native-compile)
  (setq native-comp-speed 2)
  (setq native-comp-async-jobs-number 6)
  (setq native-comp-jit-compilation t)
  (setq native-comp-async-report-warnings-errors nil)


;;;; ============================================================================================================ ;;;;
;;;; Персонализация
;;;; ------------------------------------------------------------------------------------------------------------ ;;;;
;; Использовать UTF-8 по умолчанию
(setq coding-system-for-read 'utf-8)
(setq coding-system-for-write 'utf-8)
(set-language-environment "UTF-8")
(set-default-coding-systems 'utf-8)

;; Шрифт
;; fc-list |grep Retina
;(set-frame-font "Fira Code Nerd Font Ret 12" nil t)
(set-frame-font "FiraCode Nerd Font Ret:style=Retina:size=14" nil t)

;; TABs
(setq-default indent-tabs-mode t)   ; Отключить возможность ставить отступы TAB'ом (если nil)
(setq-default tab-width 4)      	; Заменить TAB на 4 пробела
(setq-default standart-indent 4)	; Стандартный отступ - 4 пробела
(setq-default lisp-body-indent 2)   ; Сдвигать Lisp-выражения на 2 пробельных символа
(setq-default lisp-indent-function 'common-lisp-indent-function)

;; Длинные строки
(setq-default truncate-lines nil)   ; Переносить длинные строки визуально
(setq-default auto-fill-mode t)     ; Автоматическая обработка. Разрыв строки только по пробелу или Enter.

;; Выделять результаты поиска
(setq search-highlight        t)
(setq query-replace-highlight t)
(setq-default case-fold-search t)   ; Игнорировать регистр при поиске

;;; Scrolling
(setq scroll-preserve-screen-position 10) ; Показывать не менее 10 строк на экране
(setq scroll-step 1)                      ; Прокрутка на 1 строку
(setq scroll-conservatively 101)          ; Прокрутка консервативно (многие ставят 10000)
(setq scroll-margin 10)                   ; Прокручивать буфер до 10 строк при переходе к
                                          ; последней строке
                                          
;; Подсветка другим цветом изменённых символов
;(highlight-changes-mode t)                            ; Включить
;(setq-default global-font-lock-mode nil)              ; (1 - вкл.)
;(setq-default font-lock-support-mode ’lazy-lock-mode) ; Большие файлы подсвечиваются быстрее

;; Рисовать столбец края строки рекомендуемой длинны
(setq-default fill-column 120)
(setq-default
 whitespace-line-column 120
 whitespace-style       '(face lines-tail))
(whitespace-mode)
(add-hook 'prog-mode-hook #'whitespace-mode)

(electric-pair-mode 1)			    ; Автоматически вставлять закрывающиеся скобки

;; Файлы
(setq-default auto-compression-mode t) ; Включить возможность редактирования и просмотра сжатых файлов

;; Поведение
(cua-mode 1)                    	; Ctrl+C, Ctrl+V! Прямо как в Windows!
(desktop-save-mode 1)           	; Помнить, какие файлы были открыты в прошлый раз
(setq-default save-place t)         ; Помнить, где был курсор в прошлый раз
(fset 'yes-or-no-p 'y-or-n-p)   	; Вместо yes и no понимать y и n

(setq use-dialog-box nil)         	; Показывать диалоги t (если нет, то nil)

(setq create-lockfiles nil)       ; Отлкючение Локфайлов
(global-auto-revert-mode 1)       ; Автоматически обновлять файл, если он изменён другим приложением
(setq delete-old-versions 1)      ; Удалить старые резервные копии файлов
(setq version-control t)          ; Использовать контроль версий фалов
(setq inhibit-startup-screen t)   ; Запретить экран запуска
(setq default-fill-column 121)    ; Перенос текста на этом столбце
(fringe-mode '(8 . 0))            ; Органичиталь текста только слева
(setq x-select-enable-clipboard t); Общий буфер обмена с ОС
(setq make-backup-files t)        ; Запретить бэкапы nil, разрешить t
(setq auto-save-default nil)      ; Запретить автосохранение
(setq native-comp-async-report-warnings-errors nil) ; Не показывать Warning компиляции плагинов

;; Настройка графического интерфейса пользователя
(global-hl-line-mode 1)         ; Подсветка текущей строки
(global-display-line-numbers-mode 1) ; Показывать номера строк во всех буферах
(line-number-mode   t)          ; Показать номер строки в mode-line
(setq column-number-mode 1)     ; Номера строк слева
(column-number-mode t)          ; Показать номер столбца в mode-line
(menu-bar-mode t)               ; Показывать графическое меню (-1)
(scroll-bar-mode -1)            ; Показывать скроллбар
(tool-bar-mode -1)              ; Показывать тулбар
(blink-cursor-mode 1)           ; Курсор мигает
(show-paren-mode t)             ; Включить выделение выражений между скобками {}, [], ()
(setq show-paren-style 'mixed)  ; Выделять цветом выражения между скобками
(setq redisplay-dont-pause t)   ; Лучшая отрисовка буфера
(setq-default indicate-empty-lines t) ; Отсутствие строки выделить глифами рядом с полосой с номером строки
(setq-default indicate-buffer-boundaries 'left) ; Индикация только слева
(setq display-time-24hr-format t) ; 24-часовой временной формат в mode-line
(display-time-mode             t) ; Показывать часы в mode-line
(size-indication-mode          t) ; Размер файла в %-ах
(set-frame-parameter (selected-frame) 'alpha '(97 . 97)) ; Слегка прозрачный редактор
; Плавная попиксельная прокрутка
(when (fboundp 'pixel-scroll-precision-mode)
    (pixel-scroll-precision-mode 1))

;;;; ========================================================================================== ;;;;
;;;; Директории где, что хранится
;;;; ------------------------------------------------------------------------------------------ ;;;;
;; Здесь EMACS хранит настройки, задаваемые через customize
;(setq custom-file "~/.emacs.d/customize.el")
;(load-user-file "customize.el")
;; Бэкапы в специальной директории
(setq backup-directory-alist
    '((".*" . "~/.emacs.d/backups/")))
;; Автосохранения в специальной директории
(setq auto-save-file-name-transforms
    '((".*" "~/.emacs.d/autosaves/" t)))
    
;;;; ========================================================================================== ;;;;
;;;; straight.el
;;;; ------------------------------------------------------------------------------------------ ;;;;    
(defvar bootstrap-version)
(let ((bootstrap-file
       (expand-file-name
        "straight/repos/straight.el/bootstrap.el"
        (or (bound-and-true-p straight-base-dir)
            user-emacs-directory)))
      (bootstrap-version 7))
  (unless (file-exists-p bootstrap-file)
    (with-current-buffer
        (url-retrieve-synchronously
         "https://raw.githubusercontent.com/radian-software/straight.el/develop/install.el"
         'silent 'inhibit-cookies)
      (goto-char (point-max))
      (eval-print-last-sexp)))
  (load bootstrap-file nil 'nomessage))
  
;; Отключить штатный package.el
(setq package-enable-at-startup nil)
  
(straight-use-package 'use-package)
;; Указали, что недостающие пакеты нужно автоматически загружать и устанавливать.
(setq straight-use-package-by-default t)
    
;;;; ========================================================================================== ;;;;
;;;; Указываем дополнительные репозитории
;;;; ------------------------------------------------------------------------------------------ ;;;;
;(require 'package)
;(add-to-list 'package-archives '("melpa-stable" . "https://stable.melpa.org/packages/") t)
;(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
;(add-to-list 'package-archives '("nongnu" . "https://elpa.nongnu.org/nongnu/"))
;(package-initialize)
;(package-refresh-contents)
;;;; ========================================================================================== ;;;;
;;;; use-package
;;;; ------------------------------------------------------------------------------------------ ;;;;
;; Если пакет use-package не установлен, его нужно скачать и установить
;(unless (package-installed-p 'use-package)
;  (message "EMACS install use-package.el")
;  (package-refresh-contents)
;  (package-install 'use-package))
;; Активируем use-package
;(eval-when-compile
  ;; Следующая строка не нужна, если используется-package.el находится в ~/.emacs.d
  ;; (add-to-list 'load-path "~/.emacs.d/")
;  (require 'use-package))
;; Указали, что недостающие пакеты нужно автоматически загружать и устанавливать.
;(setq use-package-always-ensure t)


;;;; ****************************************************************************************** ;;;;
;;;; Пакеты
;;;; ****************************************************************************************** ;;;;
  
; Очень удобное окошко с деревом изменений по буферу. Сразу отменим запись дерева изменений в файл.
(use-package undo-tree
    :straight t
    :config
    (setq undo-tree-auto-save-history nil))
; Подружим undo-tree с evil.
;(setq evil-undo-system 'undo-tree
;      evil-undo-function 'undo-tree-undo)
(global-undo-tree-mode 1)
;(evil-set-undo-system 'undo-tree)
;(add-hook 'evil-local-mode-hook 'turn-on-undo-tree-mode)

; При выходе из редактора тот предупредит о не сохраненных буферах.
(use-package wgrep
    :straight t)
    
; Пакет projectile - крайне удобное средство для работы с проектами. Директории проектов распознаются по наличию в них
; поддиректории .git или файла .projectile. Среди прочего можно:
;
; Открывать файлы проекта по частичному совпадению в имени и пути.
; Тем же сособом можно переключаться между проектами.
; Назначать на ходу команды компиляции, запуска и отладки проекта и пользоваться ими.
; В файле .projectile можно назначать параметры отдельно для каждого проекта.
;
; Загрузим необходимые пакеты и сразу запретим Counsel предварительный показ буферов.
(use-package projectile
    :straight t
    :config
    (projectile-mode 1)
    (add-to-list 'projectile-project-root-files-bottom-up ".projectile")
    (projectile-load-known-projects))
(use-package counsel-projectile
    :straight t)
(use-package ibuffer-projectile
    :straight t
    :config
    (setq counsel-projectile-preview-buffers nil))
(use-package ibuffer-vc
    :straight t)
;;;; ========================================================================================== ;;;;
;;;; Интеграция Git в Emacs
;;;; https://magit.vc/manual/magit.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package magit
  :straight t
  :bind ("C-x g" . magit-status))
  
;;;; ========================================================================================== ;;;;
;;;; Web-mode
;;;; https://nickey.ru/20181110-my-emacs-config.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package web-mode
  :straight t
  :config
  (progn
    (add-to-list 'auto-mode-alist '("\\.phtml\\'" . web-mode))
    (add-to-list 'auto-mode-alist '("\\.html?\\'" . web-mode))
    (add-to-list 'auto-mode-alist '("\\.twig\\'" . web-mode))
    (add-to-list 'web-mode-engines-alist '("php" . "\\.php\\'"))))
    
;;;; ========================================================================================== ;;;;
;;;; YAML
;;;; https://nickey.ru/20181110-my-emacs-config.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package yaml-mode
  :straight t)
  
;;;; ========================================================================================== ;;;;
;;;; Markdown
;;;; https://nickey.ru/20181110-my-emacs-config.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
;(use-package markdown-mode
; :straight t)
(use-package markdown-mode
  :straight t
  :mode ("README\\.md\\'" . gfm-mode)
  :init (setq markdown-command "multimarkdown"))
(autoload 'markdown-mode "markdown-mode"
   "Major mode for editing Markdown files" t)
(add-to-list 'auto-mode-alist
             '("\\.\\(?:md\\|markdown\\|mkd\\|mdown\\|mkdn\\|mdwn\\)\\'" . markdown-mode))
(autoload 'gfm-mode "markdown-mode"
   "Major mode for editing GitHub Flavored Markdown files" t)
(add-to-list 'auto-mode-alist '("README\\.md\\'" . gfm-mode))

;;;; ========================================================================================== ;;;;
;;;; Nerd Icons
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package nerd-icons
  ;; :custom
  ;; The Nerd Font you want to use in GUI
  ;; "Symbols Nerd Font Mono" is the default and is recommended
  ;; but you can use any other Nerd Font if you want
  ;; (nerd-icons-font-family "Symbols Nerd Font Mono")
  )
;;;; ========================================================================================== ;;;;
;;;; Лигатуры
;;;; https://github.com/mickeynp/ligature.el
;;;; ------------------------------------------------------------------------------------------ ;;;;
;; This assumes you've installed the package via MELPA.
(use-package ligature
  :config
  ;; Enable the "www" ligature in every possible major mode
  (ligature-set-ligatures 't '("www"))
  ;; Enable traditional ligature support in eww-mode, if the
  ;; `variable-pitch' face supports it
  (ligature-set-ligatures 'eww-mode '("ff" "fi" "ffi"))
  ;; Enable all Cascadia Code ligatures in programming modes
  (ligature-set-ligatures 'prog-mode '("|||>" "<|||" "<==>" "<!--" "####" "~~>" "***" "||=" "||>"
                                       ":::" "::=" "=:=" "===" "==>" "=!=" "=>>" "=<<" "=/=" "!=="
                                       "!!." ">=>" ">>=" ">>>" ">>-" ">->" "->>" "-->" "---" "-<<"
                                       "<~~" "<~>" "<*>" "<||" "<|>" "<$>" "<==" "<=>" "<=<" "<->"
                                       "<--" "<-<" "<<=" "<<-" "<<<" "<+>" "</>" "###" "#_(" "..<"
                                       "..." "+++" "/==" "///" "_|_" "www" "&&" "^=" "~~" "~@" "~="
                                       "~>" "~-" "**" "*>" "*/" "||" "|}" "|]" "|=" "|>" "|-" "{|"
                                       "[|" "]#" "::" ":=" ":>" ":<" "$>" "==" "=>" "!=" "!!" ">:"
                                       ">=" ">>" ">-" "-~" "-|" "->" "--" "-<" "<~" "<*" "<|" "<:"
                                       "<$" "<=" "<>" "<-" "<<" "<+" "</" "#{" "#[" "#:" "#=" "#!"
                                       "##" "#(" "#?" "#_" "%%" ".=" ".-" ".." ".?" "+>" "++" "?:"
                                       "?=" "?." "??" ";;" "/*" "/=" "/>" "//" "__" "~~" "(*" "*)"
                                       "\\\\" "://"))
  ;; Enables ligature checks globally in all buffers. You can also do it
  ;; per mode with `ligature-mode'.
  (global-ligature-mode t))

;;;; ========================================================================================== ;;;;
;;;; LSP
;;;; https://sqrtminusone.xyz/configs/emacs/
;;;; https://www.mortens.dev/blog/emacs-and-the-language-server-protocol/index.html
;;;; ------------------------------------------------------------------------------------------ ;;;;  
(use-package hydra)

(use-package helm)

(use-package helm-lsp
  :config
  (defun netrom/helm-lsp-workspace-symbol-at-point ()
    (interactive)
    (let ((current-prefix-arg t))
      (call-interactively #'helm-lsp-workspace-symbol)))

  (defun netrom/helm-lsp-global-workspace-symbol-at-point ()
    (interactive)
    (let ((current-prefix-arg t))
      (call-interactively #'helm-lsp-global-workspace-symbol))))

(use-package lsp-mode
  :requires hydra helm helm-lsp
  :straight t
  :commands lsp
  :custom
    ;; what to use when checking on-save. "check" is default, I prefer clippy
    (lsp-rust-analyzer-cargo-watch-command "clippy")
    (lsp-eldoc-render-all t)
    (lsp-idle-delay 0.6)
    ;; enable / disable the hints as you prefer:
    (lsp-inlay-hint-enable t)
  ;; These are optional configurations.
  ;; See https://emacs-lsp.github.io/lsp-mode/page/lsp-rust-analyzer/#lsp-rust-analyzer-display-chaining-hints for a full list
    (lsp-rust-analyzer-display-lifetime-elision-hints-enable "skip_trivial")
    (lsp-rust-analyzer-display-chaining-hints t)
    (lsp-rust-analyzer-display-lifetime-elision-hints-use-parameter-names nil)
    (lsp-rust-analyzer-display-closure-return-type-hints t)
    (lsp-rust-analyzer-display-parameter-hints nil)
    (lsp-rust-analyzer-display-reborrow-hints nil)
  :config
    (add-hook 'python-mode-hook #'lsp)
  ;:hook (
    ;(python-mode . lsp)
    ;)
  (setq netrom--general-lsp-hydra-heads
        '(;; Xref
          ("d" xref-find-definitions "Definitions" :column "Xref")
          ("D" xref-find-definitions-other-window "-> other win")
          ("r" xref-find-references "References")
          ("s" netrom/helm-lsp-workspace-symbol-at-point "Helm search")
          ("S" netrom/helm-lsp-global-workspace-symbol-at-point "Helm global search")

          ;; Peek
          ("C-d" lsp-ui-peek-find-definitions "Definitions" :column "Peek")
          ("C-r" lsp-ui-peek-find-references "References")
          ("C-i" lsp-ui-peek-find-implementation "Implementation")

          ;; LSP
          ("p" lsp-describe-thing-at-point "Describe at point" :column "LSP")
          ("C-a" lsp-execute-code-action "Execute code action")
          ("R" lsp-rename "Rename")
          ("t" lsp-goto-type-definition "Type definition")
          ("i" lsp-goto-implementation "Implementation")
          ("f" helm-imenu "Filter funcs/classes (Helm)")
          ("C-c" lsp-describe-session "Describe session")

          ;; Flycheck
          ("l" lsp-ui-flycheck-list "List errs/warns/notes" :column "Flycheck"))

        netrom--misc-lsp-hydra-heads
        '(;; Misc
          ("q" nil "Cancel" :column "Misc")
          ("b" pop-tag-mark "Back")))
          
    ;; Create general hydra.
    (eval `(defhydra netrom/lsp-hydra (:color blue :hint nil)
            ,@(append
                netrom--general-lsp-hydra-heads
                netrom--misc-lsp-hydra-heads)))

    (add-hook 'lsp-mode-hook
            (lambda () (local-set-key (kbd "C-c C-l") 'netrom/lsp-hydra/body))))

(use-package lsp-ui
  :straight t
  :commands lsp-ui-mode
  :config
  ;(setq lsp-ui-doc-delay 2)
  ;(setq lsp-ui-sideline-show-hover nil)
  (setq lsp-ui-doc-enable t
        lsp-ui-doc-use-childframe t
        lsp-ui-doc-position 'top
        lsp-ui-doc-include-signature t
        lsp-ui-sideline-enable nil
        lsp-ui-flycheck-enable t
        lsp-ui-flycheck-list-position 'right
        lsp-ui-flycheck-live-reporting t
        lsp-ui-peek-enable t
        lsp-ui-peek-list-width 60
        lsp-ui-peek-peek-height 25
        lsp-ui-peek-always-show t
        lsp-ui-sideline-show-hover t)
  (add-hook 'lsp-mode-hook 'lsp-ui-mode)
)

(use-package all-the-icons
  :straight t)  
  
;;;; ========================================================================================== ;;;;
;;;; Автодополнение
;;;; https://nickey.ru/20181110-my-emacs-config.html
;;;; https://www.mortens.dev/blog/emacs-and-the-language-server-protocol/index.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package company
  :straight t
  :config
  (setq company-idle-delay 0.5) ;; how long to wait until popup
  ;; (company-begin-commands nil) ;; uncomment to disable popup
  (global-company-mode 1)
  (global-set-key (kbd "C-<tab>") 'company-complete)
  :bind
  (:map company-active-map
     ("C-n". company-select-next)
     ("C-p". company-select-previous)
     ("M-<". company-select-first)
     ("M->". company-select-last))
  (:map company-mode-map
    ("<tab>". tab-indent-or-complete)
    ("TAB". tab-indent-or-complete)))
(use-package company-box
  :straight t
  :hook (company-mode . company-box-mode))
(use-package yasnippet
  :straight t
  :config
  (yas-reload-all)
  (add-hook 'prog-mode-hook 'yas-minor-mode)
  (add-hook 'text-mode-hook 'yas-minor-mode))
  
;; Не доступен в репозитории
(use-package company-lsp
 :straight t
 :requires company
 :config
 (push 'company-lsp company-backends)
   ;; Disable client-side cache because the LSP server does a better job.
 (setq company-transformers nil
 company-lsp-async t
 company-lsp-cache-candidates nil))
(defun company-yasnippet-or-completion ()
 (interactive)
 (or (do-yas-expand)
 (company-complete-common)))
 
(defun check-expansion ()
  (save-excursion
    (if (looking-at "\\_>") t
      (backward-char 1)
      (if (looking-at "\\.") t
        (backward-char 1)
        (if (looking-at "::") t nil)))))
(defun do-yas-expand ()
  (let ((yas/fallback-behavior 'return-nil))
    (yas/expand)))
(defun tab-indent-or-complete ()
  (interactive)
  (if (minibufferp)
      (minibuffer-complete)
    (if (or (not yas/minor-mode)
            (null (do-yas-expand)))
        (if (check-expansion)
            (company-complete-common)
          (indent-for-tab-command)))))

          
;; Интерфейс компании с красивыми иконками.
;; https://sqrtminusone.xyz/configs/emacs/
(use-package company-box
  :straight t
  :if (display-graphic-p)
  :after (company)
  :hook (company-mode . company-box-mode))

;;;; ========================================================================================== ;;;;
;;;; Python
;;;; https://github.com/pwalsh/pipenv.el
;;;; https://sqrtminusone.xyz/configs/emacs/
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package pipenv
  :hook (python-mode . pipenv-mode)
  :init
  (setq
   pipenv-projectile-after-switch-function
   #'pipenv-projectile-after-switch-extended))
   
;(require 'pyenv-mode-auto)

(use-package python-black
  :straight t
  :commands (python-black-buffer)
  :config
  (setq python-black-command "black"))
  
(use-package py-isort
  :straight t
  :commands (py-isort-buffer py-isort-region))
  
;;;; 
  
;;;; ========================================================================================== ;;;;
;;;; JSON
;;;; https://sqrtminusone.xyz/configs/emacs/
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package json-mode
  :straight t
  :mode "\\.json\\'"
  :config
  (add-hook 'json-mode-hook #'smartparens-mode)
  (add-hook 'json-mode-hook #'treesit-fold-mode)
  (my/set-smartparens-indent 'json-mode))
  
;;;; ========================================================================================== ;;;;
;;;; Rust IDE
;;;; https://robert.kra.hn/posts/rust-emacs-setup/
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package rustic
  :ensure
  :bind (:map rustic-mode-map
              ("M-j" . lsp-ui-imenu)
              ("M-?" . lsp-find-references)
              ("C-c C-c l" . flycheck-list-errors)
              ("C-c C-c a" . lsp-execute-code-action)
              ("C-c C-c r" . lsp-rename)
              ("C-c C-c q" . lsp-workspace-restart)
              ("C-c C-c Q" . lsp-workspace-shutdown)
              ("C-c C-c s" . lsp-rust-analyzer-status))
  :config
  ;; uncomment for less flashiness
  ;; (setq lsp-eldoc-hook nil)
  ;; (setq lsp-enable-symbol-highlighting nil)
  ;; (setq lsp-signature-auto-activate nil)
  ;; comment to disable rustfmt on save
  (setq rustic-format-on-save t)
  (add-hook 'rustic-mode-hook 'rk/rustic-mode-hook))
(defun rk/rustic-mode-hook ()
  ;; so that run C-c C-c C-r works without having to confirm, but don't try to
  ;; save rust buffers that are not file visiting. Once
  ;; https://github.com/brotzeit/rustic/issues/253 has been resolved this should
  ;; no longer be necessary.
  (when buffer-file-name
    (setq-local buffer-save-without-query t))
  (add-hook 'before-save-hook 'lsp-format-buffer nil t))
(use-package flycheck :ensure)
(use-package cargo-mode
  :hook
  (rust-mode . cargo-minor-mode)
  :config
  (setq compilation-scroll-output t))
  
;;;; ========================================================================================== ;;;;
;;;; Common Lisp - Sly
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package sly-asdf
  :ensure t
  :defer t)
;(use-package sly-quicklisp
;  :ensure t
;  :defer t)
(use-package sly
  :ensure t
  :defer t
  :after (sly-asdf sly-quicklisp)
  :custom
  (inferior-lisp-program "/usr/bin/sbcl"))
(add-hook 'sly-mode-hook
          (lambda ()
            (unless (sly-connected-p)
              (save-excursion (sly)))))
(setq sly-net-coding-system 'utf-8-unix)
(add-hook 'lisp-mode-hook 'sly-editing-mode)

;; https://github.com/fukamachi/qlot
;; Relaunch the Emacs or load the config file.
;; Invoke M-- M-x slime RET qlot RET.
(setq sly-lisp-implementations
      '((sbcl ("sbcl") :coding-system utf-8-unix)
        (qlot ("qlot" "exec" "sbcl") :coding-system utf-8-unix)))

;;(use-package sly-clpm
;;  :straight
;;  (sly-clpm
;;   :type git
;;   :host github
;;   :repo "storvik/sly-clpm"
;;   :files ("*.el" "*.asd" "*.lisp")))
  
;;;; ========================================================================================== ;;;;
;;;; DIRED
;;;; https://sqrtminusone.xyz/configs/emacs/
;;;; ------------------------------------------------------------------------------------------ ;;;;
;; Показывает размеры каталогов
(use-package dired-du
  :straight t
  :commands (dired-du-mode)
  :config
  (setq dired-du-size-format t))

          
;;;; ========================================================================================== ;;;;
;;;; Дерево каталогов как в VSCode и т.п.
;;;; https://nickey.ru/20181110-my-emacs-config.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package treemacs
  :straight t
  :bind ("M-n M-n" . #'treemacs))
  
(use-package lsp-treemacs
  :ensure t)
  
;;;; ========================================================================================== ;;;;
;;;; Проверка орфографии
;;;; flyspell встроен в Emacs и использует утилиту aspell. Словари надо установить руками,
;;;; средствами операционной системы
;;;; https://nickey.ru/20181110-my-emacs-config.html
;;;; ------------------------------------------------------------------------------------------ ;;;;
(use-package flyspell
  :hook ((org-mode-hook . flyspell-mode)
         (text-mode-hook . flyspell-mode)
         (markdown-mode-hook . flyspell-mode)))
         

;;;; ========================================================================================== ;;;;
;;;; Тема оформления
;;;; ------------------------------------------------------------------------------------------ ;;;;
;(require 'sublime-themes)
;(load-theme 'spolsky t)
;(use-package afternoon-theme
; :straight t)
;(load-theme 'afternoon t)
;;;; https://github.innominds.com/doomemacs/themes
(use-package doom-themes
  :straight t
  :config
  ;; Global settings (defaults)
  (setq doom-themes-enable-bold t ; if nil, bold is universally disabled
        doom-themes-enable-italic t) ; if nil, italics is universally disabled
  (load-theme 'doom-bluloco-dark t)
  ;; Enable flashing mode-line on errors
  (doom-themes-visual-bell-config)
  ;; Enable custom neotree theme (all-the-icons must be installed!)
  (doom-themes-neotree-config)
  ;; or for treemacs users
  (setq doom-themes-treemacs-theme "doom-atom") ; use "doom-colors" for less minimal icon theme
  (doom-themes-treemacs-config)
  ;; Corrects (and improves) org-mode's native fontification.
  (doom-themes-org-config))
  
;;;; ========================================================================================== ;;;;
