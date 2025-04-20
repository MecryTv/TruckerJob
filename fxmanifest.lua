fx_version 'cerulean'
game 'gta5'

author 'MecryTv'
description 'Trucker Job with custom UI'
version '1.0.0'

ui_page 'ui/dist/ui/browser/index.html'

files {
    'ui/dist/browser/index.html',
    'ui/dist/browser/**/*',
}

client_scripts 'client.lua'
shared_scripts 'config.lua'