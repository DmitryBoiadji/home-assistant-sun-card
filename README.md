# *Notice about this repository*

This is a fork of a fork from [Edwardtfn's attempt to save original one from AitorDB](https://github.com/edwardtfn/home-assistant-sun-card).  
I just added a Daylight feature at the top of the card and changed some screenshots below.


Edwardtfn's description will follow: 

*As you may know, this repo was duplicated from AitorDB/home-assistant-sun-card which was archived on 2023-03-10, and just like this one, multiple other forks have been created in a rush to preserve this nice card in Home Assistant. And since then our fork have received some pull requests from users who wanted to contribute to this card.*

*However, one of the other forks, named [rejuvenate/lovelace-horizon-card](https://github.com/rejuvenate/lovelace-horizon-card), has received more development and is now the recommended card to use for your Home Assistant installation. Therefore, we encourage you to switch to that repository for any future updates or contributions.*

*We understand that it may take some time for everyone to switch to the new repository, so we will keep this repository available for a while to give users a chance to migrate. However, we will not be actively developing or maintaining this repository going forward.*

*If you have contributed to this repository in the past, we appreciate your efforts and would like to kindly ask you to consider contributing to the [rejuvenate/lovelace-horizon-card](https://github.com/rejuvenate/lovelace-horizon-card) repository as well. Your help is greatly appreciated, and we hope to see you there!*

#
#
#

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

# Home Assistant Sun card
Home Assistant Sun card based on Google Weather design

## Preview
![Light mode preview](https://github.com/DmitryBoiadji/home-assistant-sun-card/blob/main/src/assets/screenshots/light.png?raw=true)
![Dark mode preview](https://github.com/DmitryBoiadji/home-assistant-sun-card/blob/main/src/assets/screenshots/dark.png?raw=true)

## Requirements
- This card uses [Sun integration](https://www.home-assistant.io/integrations/sun/) so it needs to be enabled

## Install
### HACS (recommended)

Home Assistant Sun card is available as a custom repository on HACS.
In order to install it, please follow these steps:
1. Ooen HACS in your Home Assistant
1. Click on the 3-dots menu in the top right and select "Custom repositories"
1. Use the following information:
    - Repository: https://github.com/edwardtfn/home-assistant-sun-card
    - Category: Lovelace
1. Click "Add"
1. Search for "Sun card" on HACS directory and select the entry related to this card
1. Click "Download"
1. Follow the instructions from HACS and reload the page at the end

Note: I'm working on publishing this back into HACS default directory and will update the status here.

### Manually
1. Download the `home-assistant-sun-card.js` file from the [latest release available](https://github.com/edwardtfn/home-assistant-sun-card/releases) and save it in your `config/www/community/home-assistant-sun-card/` folder.
1. Go to `Settings > Dashboard` in Home Assistant
    1. Click on the 3-dots menu in the top right and select `Resources`.
    1. Click on the button `+ Add resource`.
    1. Add `/local/community/home-assistant-sun-card/home-assistant-sun-card.js` to the URL.
    1. Choose `Javascript Module` as Resource type.

## Set up
### Using UI
1. Go to your dashboard, enter in edit mode and click on `Add card`, you should be able to find `Custom: Sun card` in the list.
1. Once in the UI editor you can modify the card behavior by adding some of the config that you will find below

Note: If `Custom: Sun card` doesn't appear you will have to reload cleaning the cache.

### Using YAML
1. You just need to add a new card with `type: 'custom:sun-card'` to your cards list and any of the config that you will find below if you want to customize more your card.

Note: If you get an error similar to this `Custom element doesn't exist` you will have to reload cleaning the cache.

## Config
| Name          | Accepted values      | Description                          | Default                                             |
|---------------|----------------------|--------------------------------------|-----------------------------------------------------|
| darkMode      | `boolean`            | Changes card colors to dark or light | Home assistant dark mode state                      |
| language      | `string`<sup>1</sup> | Changes card language                | Home assistant language or english if not supported |
| showAzimuth   | `boolean`            | Displays azimuth in the footer       | `false`                                             |
| showElevation | `boolean`            | Displays elevation in the footer     | `false`                                             |
| timeFormat    | `'12h'`/`'24h'`      | Displayed time format                | Locale based on Home assistant language             |
| title         | `string`             | Card title                           | Doesn't display a title by default                  |         |

(<sup>1</sup>) Supported languages: `da`, `de`, `en`, `es`, `et`, `fi`, `fr`, `hu`, `it`, `nl`, `pl`, `pt-BR`, `ru`, `sl`, `sv`

## Known issues
- Home assistant seems to provide next events instead today's one 

## References
=> This repo was duplicated from [AitorDB/home-assistant-sun-card](https://github.com/AitorDB/home-assistant-sun-card) which was archived on 2023-03-10.
