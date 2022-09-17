local map = vim.api.nvim_set_keymap
local opt = {
    noremap = true,
    silent = true
}

map("n", "<C-u>", "10gk", opt)
map("n", "<C-d>", "10gj", opt)
map("n", "H", "^", opt)
map("n", "L", "$", opt)
map("n", "qq", ":q!<CR>", opt)
map("n", "<C-n>", ":nohl<CR>", opt)

map('v', '<', '<gv', opt)
map('v', '>', '>gv', opt)
