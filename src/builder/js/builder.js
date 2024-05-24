var htmlElements = {
    icons: ['<i class="rt-icon2-mobile2"></i>', '<i class="rt-icon2-laptop2"></i>', '<i class="rt-icon2-desktop2"></i>', '<i class="rt-icon2-tablet2"></i>', '<i class="rt-icon2-phone2"></i>', '<i class="rt-icon2-document"></i>', '<i class="rt-icon2-calendar"></i>', '<i class="rt-icon2-picture"></i>', '<i class="rt-icon2-pictures"></i>', '<i class="rt-icon2-video"></i>', '<i class="rt-icon2-camera"></i>', '<i class="rt-icon2-printer"></i>', '<i class="rt-icon2-toolbox"></i>', '<i class="rt-icon2-wallet"></i>', '<i class="rt-icon2-gift"></i>', '<i class="rt-icon2-hourglass"></i>', '<i class="rt-icon2-lock"></i>', '<i class="rt-icon2-megaphone"></i>', '<i class="rt-icon2-telescope"></i>', '<i class="rt-icon2-gears"></i>', '<i class="rt-icon2-key"></i>', '<i class="rt-icon2-attachment"></i>', '<i class="rt-icon2-pricetags"></i>', '<i class="rt-icon2-lightbulb"></i>', '<i class="rt-icon2-layers"></i>', '<i class="rt-icon2-pencil"></i>', '<i class="rt-icon2-tools"></i>', '<i class="rt-icon2-tools-2"></i>', '<i class="rt-icon2-paintbrush"></i>', '<i class="rt-icon2-magnifying-glass"></i>', '<i class="rt-icon2-beaker"></i>', '<i class="rt-icon2-wine"></i>', '<i class="rt-icon2-globe"></i>', '<i class="rt-icon2-map-pin"></i>', '<i class="rt-icon2-upload"></i>', '<i class="rt-icon2-download"></i>', '<i class="rt-icon2-global"></i>', '<i class="rt-icon2-compass"></i>', '<i class="rt-icon2-quote"></i>', '<i class="rt-icon2-quote2"></i>', '<i class="rt-icon2-tag"></i>', '<i class="rt-icon2-link"></i>', '<i class="rt-icon2-cabinet"></i>', '<i class="rt-icon2-calendar2"></i>', '<i class="rt-icon2-calendar3"></i>', '<i class="rt-icon2-file"></i>', '<i class="rt-icon2-phone3"></i>', '<i class="rt-icon2-tablet3"></i>', '<i class="rt-icon2-window"></i>', '<i class="rt-icon2-monitor"></i>', '<i class="rt-icon2-ipod"></i>', '<i class="rt-icon2-tv"></i>', '<i class="rt-icon2-film2"></i>', '<i class="rt-icon2-microphone"></i>', '<i class="rt-icon2-drink"></i>', '<i class="rt-icon2-drink2"></i>', '<i class="rt-icon2-drink3"></i>', '<i class="rt-icon2-coffee2"></i>', '<i class="rt-icon2-mug"></i>', '<i class="rt-icon2-icecream"></i>', '<i class="rt-icon2-cake2"></i>', '<i class="rt-icon2-checkmark"></i>', '<i class="rt-icon2-cancel"></i>', '<i class="rt-icon2-plus"></i>', '<i class="rt-icon2-minus"></i>', '<i class="rt-icon2-cog2"></i>', '<i class="rt-icon2-health"></i>', '<i class="rt-icon2-suitcase2"></i>', '<i class="rt-icon2-suitcase3"></i>', '<i class="rt-icon2-picture2"></i>', '<i class="rt-icon2-time"></i>', '<i class="rt-icon2-checkmark2"></i>', '<i class="rt-icon2-cancel2"></i>', '<i class="rt-icon2-upload2"></i>', '<i class="rt-icon2-location"></i>', '<i class="rt-icon2-download2"></i>', '<i class="rt-icon2-basket"></i>', '<i class="rt-icon2-gamepad"></i>', '<i class="rt-icon2-phone4"></i>', '<i class="rt-icon2-image"></i>', '<i class="rt-icon2-map"></i>', '<i class="rt-icon2-trashcan"></i>', '<i class="rt-icon2-graduate"></i>', '<i class="rt-icon2-lab"></i>', '<i class="rt-icon2-tie"></i>', '<i class="rt-icon2-football"></i>', '<i class="rt-icon2-eightball"></i>', '<i class="rt-icon2-bowling"></i>', '<i class="rt-icon2-bowlingpin"></i>', '<i class="rt-icon2-baseball"></i>', '<i class="rt-icon2-soccer"></i>', '<i class="rt-icon2-3dglasses"></i>', '<i class="rt-icon2-microwave"></i>', '<i class="rt-icon2-refrigerator"></i>', '<i class="rt-icon2-oven"></i>', '<i class="rt-icon2-washingmachine"></i>', '<i class="rt-icon2-mouse"></i>', '<i class="rt-icon2-medal"></i>', '<i class="rt-icon2-magnifier"></i>', '<i class="rt-icon2-stack"></i>', '<i class="rt-icon2-stack2"></i>', '<i class="rt-icon2-stack3"></i>', '<i class="rt-icon2-pil"></i>', '<i class="rt-icon2-injection"></i>', '<i class="rt-icon2-thermometer"></i>', '<i class="rt-icon2-library"></i>', '<i class="rt-icon2-auction"></i>', '<i class="rt-icon2-justice"></i>', '<i class="rt-icon2-pencil2"></i>', '<i class="rt-icon2-male"></i>', '<i class="rt-icon2-female"></i>', '<i class="rt-icon2-pictures2"></i>', '<i class="rt-icon2-compass2"></i>', '<i class="rt-icon2-clipboard"></i>', '<i class="rt-icon2-ruler"></i>', '<i class="rt-icon2-heart"></i>', '<i class="rt-icon2-cloud"></i>', '<i class="rt-icon2-star"></i>', '<i class="rt-icon2-tv2"></i>', '<i class="rt-icon2-sound"></i>', '<i class="rt-icon2-video2"></i>', '<i class="rt-icon2-trash"></i>', '<i class="rt-icon2-user"></i>', '<i class="rt-icon2-key2"></i>', '<i class="rt-icon2-search2"></i>', '<i class="rt-icon2-settings"></i>', '<i class="rt-icon2-camera2"></i>', '<i class="rt-icon2-tag2"></i>', '<i class="rt-icon2-lock2"></i>', '<i class="rt-icon2-bulb"></i>', '<i class="rt-icon2-pen"></i>', '<i class="rt-icon2-diamond2"></i>', '<i class="rt-icon2-display"></i>', '<i class="rt-icon2-location2"></i>', '<i class="rt-icon2-eye"></i>', '<i class="rt-icon2-bubble"></i>', '<i class="rt-icon2-stack4"></i>', '<i class="rt-icon2-cup"></i>', '<i class="rt-icon2-phone5"></i>', '<i class="rt-icon2-news"></i>', '<i class="rt-icon2-mail"></i>', '<i class="rt-icon2-like"></i>', '<i class="rt-icon2-photo"></i>', '<i class="rt-icon2-note"></i>', '<i class="rt-icon2-clock"></i>', '<i class="rt-icon2-paperplane"></i>', '<i class="rt-icon2-params"></i>', '<i class="rt-icon2-banknote"></i>', '<i class="rt-icon2-data"></i>', '<i class="rt-icon2-music"></i>', '<i class="rt-icon2-megaphone2"></i>', '<i class="rt-icon2-study"></i>', '<i class="rt-icon2-lab2"></i>', '<i class="rt-icon2-food"></i>', '<i class="rt-icon2-t-shirt"></i>', '<i class="rt-icon2-fire"></i>', '<i class="rt-icon2-clip"></i>', '<i class="rt-icon2-shop"></i>', '<i class="rt-icon2-calendar4"></i>', '<i class="rt-icon2-wallet2"></i>', '<i class="rt-icon2-vynil"></i>', '<i class="rt-icon2-truck"></i>', '<i class="rt-icon2-world"></i>', '<i class="rt-icon2-sun"></i>', '<i class="rt-icon2-moon"></i>', '<i class="rt-icon2-cloudy"></i>', '<i class="rt-icon2-lightning"></i>', '<i class="rt-icon2-rainy"></i>', '<i class="rt-icon2-rainy2"></i>', '<i class="rt-icon2-snowy"></i>', '<i class="rt-icon2-snowy2"></i>', '<i class="rt-icon2-weather"></i>', '<i class="rt-icon2-store"></i>', '<i class="rt-icon2-out"></i>', '<i class="rt-icon2-in"></i>', '<i class="rt-icon2-in-alt"></i>', '<i class="rt-icon2-home"></i>', '<i class="rt-icon2-lightbulb2"></i>', '<i class="rt-icon2-anchor"></i>', '<i class="rt-icon2-feather"></i>', '<i class="rt-icon2-expand"></i>', '<i class="rt-icon2-maximize"></i>', '<i class="rt-icon2-search3"></i>', '<i class="rt-icon2-add"></i>', '<i class="rt-icon2-subtract"></i>', '<i class="rt-icon2-close2"></i>', '<i class="rt-icon2-book"></i>', '<i class="rt-icon2-spinner"></i>', '<i class="rt-icon2-play"></i>', '<i class="rt-icon2-stop"></i>', '<i class="rt-icon2-pause"></i>', '<i class="rt-icon2-forward"></i>', '<i class="rt-icon2-rewind"></i>', '<i class="rt-icon2-sound2"></i>', '<i class="rt-icon2-sound-alt"></i>', '<i class="rt-icon2-soundoff"></i>', '<i class="rt-icon2-inbox"></i>', '<i class="rt-icon2-inbox-alt"></i>', '<i class="rt-icon2-envelope"></i>', '<i class="rt-icon2-compose"></i>', '<i class="rt-icon2-newspaper-alt"></i>', '<i class="rt-icon2-calendar5"></i>', '<i class="rt-icon2-hyperlink"></i>', '<i class="rt-icon2-trash2"></i>', '<i class="rt-icon2-menu"></i>', '<i class="rt-icon2-gallery"></i>', '<i class="rt-icon2-calculator"></i>', '<i class="rt-icon2-clock2"></i>', '<i class="rt-icon2-portfolio"></i>', '<i class="rt-icon2-user2"></i>', '<i class="rt-icon2-users"></i>', '<i class="rt-icon2-heart2"></i>', '<i class="rt-icon2-chat"></i>', '<i class="rt-icon2-comments"></i>', '<i class="rt-icon2-screen"></i>', '<i class="rt-icon2-iphone"></i>', '<i class="rt-icon2-instagram"></i>', '<i class="rt-icon2-pin-alt"></i>', '<i class="rt-icon2-camera3"></i>', '<i class="rt-icon2-chevron-down"></i>', '<i class="rt-icon2-chevron-left"></i>', '<i class="rt-icon2-chevron-right"></i>', '<i class="rt-icon2-chevron-up"></i>', '<i class="rt-icon2-quote3"></i>', '<i class="rt-icon2-search4"></i>', '<i class="rt-icon2-triangle-down"></i>', '<i class="rt-icon2-triangle-left"></i>', '<i class="rt-icon2-triangle-right"></i>', '<i class="rt-icon2-triangle-up"></i>', '<i class="rt-icon2-file-empty"></i>', '<i class="rt-icon2-files-empty"></i>', '<i class="rt-icon2-file-text2"></i>', '<i class="rt-icon2-file-picture"></i>', '<i class="rt-icon2-file-music"></i>', '<i class="rt-icon2-file-play"></i>', '<i class="rt-icon2-file-video"></i>', '<i class="rt-icon2-file-zip"></i>', '<i class="rt-icon2-phone6"></i>', '<i class="rt-icon2-quotes-left"></i>', '<i class="rt-icon2-quotes-right"></i>', '<i class="rt-icon2-spinner6"></i>', '<i class="rt-icon2-magnet"></i>', '<i class="rt-icon2-google"></i>', '<i class="rt-icon2-google-plus"></i>', '<i class="rt-icon2-google-plus2"></i>', '<i class="rt-icon2-google-plus3"></i>', '<i class="rt-icon2-google-drive"></i>', '<i class="rt-icon2-facebook"></i>', '<i class="rt-icon2-facebook2"></i>', '<i class="rt-icon2-facebook3"></i>', '<i class="rt-icon2-instagram2"></i>', '<i class="rt-icon2-twitter"></i>', '<i class="rt-icon2-twitter2"></i>', '<i class="rt-icon2-twitter3"></i>', '<i class="rt-icon2-feed2"></i>', '<i class="rt-icon2-feed3"></i>', '<i class="rt-icon2-feed4"></i>', '<i class="rt-icon2-youtube5"></i>', '<i class="rt-icon2-youtube2"></i>', '<i class="rt-icon2-youtube3"></i>', '<i class="rt-icon2-youtube4"></i>', '<i class="rt-icon2-vimeo"></i>', '<i class="rt-icon2-vimeo2"></i>', '<i class="rt-icon2-vimeo3"></i>', '<i class="rt-icon2-lanyrd"></i>', '<i class="rt-icon2-flickr"></i>', '<i class="rt-icon2-flickr2"></i>', '<i class="rt-icon2-flickr3"></i>', '<i class="rt-icon2-flickr4"></i>', '<i class="rt-icon2-picassa"></i>', '<i class="rt-icon2-picassa2"></i>', '<i class="rt-icon2-dribbble"></i>', '<i class="rt-icon2-dribbble2"></i>', '<i class="rt-icon2-dribbble3"></i>', '<i class="rt-icon2-dropbox"></i>', '<i class="rt-icon2-github3"></i>', '<i class="rt-icon2-wordpress"></i>', '<i class="rt-icon2-wordpress2"></i>', '<i class="rt-icon2-joomla"></i>', '<i class="rt-icon2-blogger"></i>', '<i class="rt-icon2-blogger2"></i>', '<i class="rt-icon2-tumblr"></i>', '<i class="rt-icon2-tumblr2"></i>', '<i class="rt-icon2-apple"></i>', '<i class="rt-icon2-android"></i>', '<i class="rt-icon2-windows"></i>', '<i class="rt-icon2-windows8"></i>', '<i class="rt-icon2-skype"></i>', '<i class="rt-icon2-reddit"></i>', '<i class="rt-icon2-linkedin"></i>', '<i class="rt-icon2-linkedin2"></i>', '<i class="rt-icon2-lastfm"></i>', '<i class="rt-icon2-lastfm2"></i>', '<i class="rt-icon2-delicious"></i>', '<i class="rt-icon2-stumbleupon"></i>', '<i class="rt-icon2-stumbleupon2"></i>', '<i class="rt-icon2-pinterest"></i>', '<i class="rt-icon2-pinterest2"></i>', '<i class="rt-icon2-html5"></i>', '<i class="rt-icon2-html52"></i>', '<i class="rt-icon2-css3"></i>', '<i class="rt-icon2-chrome"></i>', '<i class="rt-icon2-firefox"></i>', '<i class="rt-icon2-IE"></i>', '<i class="rt-icon2-opera"></i>', '<i class="rt-icon2-safari"></i>', '<i class="rt-icon2-times2"></i>', '<i class="rt-icon2-tick"></i>', '<i class="rt-icon2-plus2"></i>', '<i class="rt-icon2-minus2"></i>', '<i class="rt-icon2-equals"></i>', '<i class="rt-icon2-divide"></i>', '<i class="rt-icon2-chevron-right2"></i>', '<i class="rt-icon2-chevron-left2"></i>', '<i class="rt-icon2-arrow-right-thick"></i>', '<i class="rt-icon2-arrow-left-thick"></i>', '<i class="rt-icon2-home2"></i>', '<i class="rt-icon2-arrow-forward"></i>', '<i class="rt-icon2-arrow-back"></i>', '<i class="rt-icon2-link2"></i>', '<i class="rt-icon2-image2"></i>', '<i class="rt-icon2-delete-outline"></i>', '<i class="rt-icon2-cloud-storage"></i>', '<i class="rt-icon2-heart3"></i>', '<i class="rt-icon2-attachment2"></i>', '<i class="rt-icon2-media-pause"></i>', '<i class="rt-icon2-group"></i>', '<i class="rt-icon2-chart-pie"></i>', '<i class="rt-icon2-chart-line"></i>', '<i class="rt-icon2-chart-bar"></i>', '<i class="rt-icon2-chart-area"></i>', '<i class="rt-icon2-globe2"></i>', '<i class="rt-icon2-eye2"></i>', '<i class="rt-icon2-cog3"></i>', '<i class="rt-icon2-camera4"></i>', '<i class="rt-icon2-refresh"></i>', '<i class="rt-icon2-info-large"></i>', '<i class="rt-icon2-zoom"></i>', '<i class="rt-icon2-zoom-out"></i>', '<i class="rt-icon2-zoom-in"></i>', '<i class="rt-icon2-sort-numerically"></i>', '<i class="rt-icon2-sort-alphabetically"></i>', '<i class="rt-icon2-input-checked"></i>', '<i class="rt-icon2-calender"></i>', '<i class="rt-icon2-spanner"></i>', '<i class="rt-icon2-phone7"></i>', '<i class="rt-icon2-media-rewind"></i>', '<i class="rt-icon2-adjust-brightness"></i>', '<i class="rt-icon2-waves"></i>', '<i class="rt-icon2-social-twitter"></i>', '<i class="rt-icon2-social-facebook"></i>', '<i class="rt-icon2-social-dribbble"></i>', '<i class="rt-icon2-media-stop"></i>', '<i class="rt-icon2-media-record"></i>', '<i class="rt-icon2-media-play"></i>', '<i class="rt-icon2-media-fast-forward"></i>', '<i class="rt-icon2-media-eject"></i>', '<i class="rt-icon2-social-vimeo"></i>', '<i class="rt-icon2-social-tumbler"></i>', '<i class="rt-icon2-social-skype"></i>', '<i class="rt-icon2-social-pinterest"></i>', '<i class="rt-icon2-social-linkedin"></i>', '<i class="rt-icon2-social-last-fm"></i>', '<i class="rt-icon2-social-github"></i>', '<i class="rt-icon2-social-flickr"></i>', '<i class="rt-icon2-at"></i>', '<i class="rt-icon2-times-outline"></i>', '<i class="rt-icon2-plus-outline"></i>', '<i class="rt-icon2-minus-outline"></i>', '<i class="rt-icon2-tick-outline"></i>', '<i class="rt-icon2-th-large-outline"></i>', '<i class="rt-icon2-equals-outline"></i>', '<i class="rt-icon2-divide-outline"></i>', '<i class="rt-icon2-chevron-right-outline"></i>', '<i class="rt-icon2-chevron-left-outline"></i>', '<i class="rt-icon2-arrow-right-outline"></i>', '<i class="rt-icon2-arrow-left-outline"></i>', '<i class="rt-icon2-th-small-outline"></i>', '<i class="rt-icon2-th-menu-outline"></i>', '<i class="rt-icon2-th-list-outline"></i>', '<i class="rt-icon2-home-outline"></i>', '<i class="rt-icon2-arrow-up-outline"></i>', '<i class="rt-icon2-arrow-forward-outline"></i>', '<i class="rt-icon2-arrow-down-outline"></i>', '<i class="rt-icon2-arrow-back-outline"></i>', '<i class="rt-icon2-trash3"></i>', '<i class="rt-icon2-rss-outline"></i>', '<i class="rt-icon2-message"></i>', '<i class="rt-icon2-location-outline"></i>', '<i class="rt-icon2-link-outline"></i>', '<i class="rt-icon2-image-outline"></i>', '<i class="rt-icon2-export-outline"></i>', '<i class="rt-icon2-cross"></i>', '<i class="rt-icon2-wi-fi-outline"></i>', '<i class="rt-icon2-star-outline"></i>', '<i class="rt-icon2-media-pause-outline"></i>', '<i class="rt-icon2-mail2"></i>', '<i class="rt-icon2-heart-outline"></i>', '<i class="rt-icon2-flash-outline"></i>', '<i class="rt-icon2-cancel-outline"></i>', '<i class="rt-icon2-arrow-move-outline"></i>', '<i class="rt-icon2-watch"></i>', '<i class="rt-icon2-warning-outline"></i>', '<i class="rt-icon2-time2"></i>', '<i class="rt-icon2-radar-outline"></i>', '<i class="rt-icon2-lock-open-outline"></i>', '<i class="rt-icon2-location-arrow-outline"></i>', '<i class="rt-icon2-info-outline"></i>', '<i class="rt-icon2-backspace-outline"></i>', '<i class="rt-icon2-attachment-outline"></i>', '<i class="rt-icon2-user-outline"></i>', '<i class="rt-icon2-user-delete-outline"></i>', '<i class="rt-icon2-user-add-outline"></i>', '<i class="rt-icon2-lock-closed-outline"></i>', '<i class="rt-icon2-group-outline"></i>', '<i class="rt-icon2-chart-pie-outline"></i>', '<i class="rt-icon2-chart-line-outline"></i>', '<i class="rt-icon2-chart-bar-outline"></i>', '<i class="rt-icon2-chart-area-outline"></i>', '<i class="rt-icon2-video-outline"></i>', '<i class="rt-icon2-point-of-interest-outline"></i>', '<i class="rt-icon2-map2"></i>', '<i class="rt-icon2-key-outline"></i>', '<i class="rt-icon2-infinity-outline"></i>', '<i class="rt-icon2-globe-outline"></i>', '<i class="rt-icon2-eye-outline"></i>', '<i class="rt-icon2-cog-outline"></i>', '<i class="rt-icon2-camera-outline"></i>', '<i class="rt-icon2-support"></i>', '<i class="rt-icon2-scissors-outline"></i>', '<i class="rt-icon2-refresh-outline"></i>', '<i class="rt-icon2-info-large-outline"></i>', '<i class="rt-icon2-download-outline"></i>', '<i class="rt-icon2-battery-low"></i>', '<i class="rt-icon2-zoom-outline"></i>', '<i class="rt-icon2-zoom-out-outline"></i>', '<i class="rt-icon2-zoom-in-outline"></i>', '<i class="rt-icon2-tag3"></i>', '<i class="rt-icon2-tabs-outline"></i>', '<i class="rt-icon2-pin-outline"></i>', '<i class="rt-icon2-message-typing"></i>', '<i class="rt-icon2-directions"></i>', '<i class="rt-icon2-battery-full"></i>', '<i class="rt-icon2-battery-charge"></i>', '<i class="rt-icon2-pencil3"></i>', '<i class="rt-icon2-folder"></i>', '<i class="rt-icon2-folder-delete"></i>', '<i class="rt-icon2-folder-add"></i>', '<i class="rt-icon2-edit"></i>', '<i class="rt-icon2-document2"></i>', '<i class="rt-icon2-document-delete"></i>', '<i class="rt-icon2-document-add"></i>', '<i class="rt-icon2-brush"></i>', '<i class="rt-icon2-thumbs-up"></i>', '<i class="rt-icon2-thumbs-down"></i>', '<i class="rt-icon2-pen2"></i>', '<i class="rt-icon2-sort-numerically-outline"></i>', '<i class="rt-icon2-sort-alphabetically-outline"></i>', '<i class="rt-icon2-social-last-fm-circular"></i>', '<i class="rt-icon2-social-github-circular"></i>', '<i class="rt-icon2-compass3"></i>', '<i class="rt-icon2-code-outline"></i>', '<i class="rt-icon2-calender-outline"></i>', '<i class="rt-icon2-business-card"></i>', '<i class="rt-icon2-arrow-up"></i>', '<i class="rt-icon2-arrow-right"></i>', '<i class="rt-icon2-arrow-left"></i>', '<i class="rt-icon2-document-text"></i>', '<i class="rt-icon2-clipboard2"></i>', '<i class="rt-icon2-calculator2"></i>', '<i class="rt-icon2-arrow-minimise-outline"></i>', '<i class="rt-icon2-arrow-maximise-outline"></i>', '<i class="rt-icon2-arrow-down"></i>', '<i class="rt-icon2-gift2"></i>', '<i class="rt-icon2-film3"></i>', '<i class="rt-icon2-bell"></i>', '<i class="rt-icon2-anchor-outline"></i>', '<i class="rt-icon2-world-outline"></i>', '<i class="rt-icon2-shopping-bag"></i>', '<i class="rt-icon2-power-outline"></i>', '<i class="rt-icon2-notes-outline"></i>', '<i class="rt-icon2-device-tablet"></i>', '<i class="rt-icon2-device-phone"></i>', '<i class="rt-icon2-device-laptop"></i>', '<i class="rt-icon2-device-desktop"></i>', '<i class="rt-icon2-briefcase"></i>', '<i class="rt-icon2-stopwatch"></i>', '<i class="rt-icon2-spanner-outline"></i>', '<i class="rt-icon2-puzzle-outline"></i>', '<i class="rt-icon2-printer2"></i>', '<i class="rt-icon2-lightbulb3"></i>', '<i class="rt-icon2-flag-outline"></i>', '<i class="rt-icon2-contacts"></i>', '<i class="rt-icon2-weather-stormy"></i>', '<i class="rt-icon2-weather-shower"></i>', '<i class="rt-icon2-weather-partly-sunny"></i>', '<i class="rt-icon2-weather-downpour"></i>', '<i class="rt-icon2-weather-cloudy"></i>', '<i class="rt-icon2-plane-outline"></i>', '<i class="rt-icon2-phone-outline"></i>', '<i class="rt-icon2-microphone-outline"></i>', '<i class="rt-icon2-weather-windy"></i>', '<i class="rt-icon2-weather-windy-cloudy"></i>', '<i class="rt-icon2-weather-sunny"></i>', '<i class="rt-icon2-weather-snow"></i>', '<i class="rt-icon2-weather-night"></i>', '<i class="rt-icon2-media-stop-outline"></i>', '<i class="rt-icon2-media-rewind-outline"></i>', '<i class="rt-icon2-media-record-outline"></i>', '<i class="rt-icon2-media-play-outline"></i>', '<i class="rt-icon2-media-fast-forward-outline"></i>', '<i class="rt-icon2-media-eject-outline"></i>', '<i class="rt-icon2-wine2"></i>', '<i class="rt-icon2-waves-outline"></i>', '<i class="rt-icon2-ticket"></i>', '<i class="rt-icon2-tags2"></i>', '<i class="rt-icon2-plug"></i>', '<i class="rt-icon2-headphones"></i>', '<i class="rt-icon2-credit-card"></i>', '<i class="rt-icon2-coffee3"></i>', '<i class="rt-icon2-book2"></i>', '<i class="rt-icon2-beer"></i>', '<i class="rt-icon2-volume"></i>', '<i class="rt-icon2-volume-up"></i>', '<i class="rt-icon2-volume-mute"></i>', '<i class="rt-icon2-volume-down"></i>', '<i class="rt-icon2-social-vimeo-circular"></i>', '<i class="rt-icon2-social-twitter-circular"></i>', '<i class="rt-icon2-social-pinterest-circular"></i>', '<i class="rt-icon2-social-linkedin-circular"></i>', '<i class="rt-icon2-social-facebook-circular"></i>', '<i class="rt-icon2-social-dribbble-circular"></i>', '<i class="rt-icon2-tree"></i>', '<i class="rt-icon2-thermometer2"></i>', '<i class="rt-icon2-social-tumbler-circular"></i>', '<i class="rt-icon2-social-skype-outline"></i>', '<i class="rt-icon2-social-flickr-circular"></i>', '<i class="rt-icon2-social-at-circular"></i>', '<i class="rt-icon2-shopping-cart"></i>', '<i class="rt-icon2-messages"></i>', '<i class="rt-icon2-leaf"></i>', '<i class="rt-icon2-feather2"></i>', '<i class="rt-icon2-keyboard_arrow_down"></i>', '<i class="rt-icon2-keyboard_arrow_left"></i>', '<i class="rt-icon2-keyboard_arrow_right"></i>', '<i class="rt-icon2-keyboard_arrow_up"></i>', '<i class="rt-icon2-directions_bus"></i>', '<i class="rt-icon2-directions_car"></i>', '<i class="rt-icon2-directions_ferry"></i>', '<i class="rt-icon2-directions_subway"></i>', '<i class="rt-icon2-directions_railway"></i>', '<i class="rt-icon2-directions_walk"></i>', '<i class="rt-icon2-flight"></i>', '<i class="rt-icon2-restaurant_menu"></i>', '<i class="rt-icon2-wifi"></i>', '<i class="rt-icon2-cake"></i>', '<i class="rt-icon2-favorite_outline"></i>', '<i class="rt-icon2-lock_open"></i>', '<i class="rt-icon2-lock_outline"></i>', '<i class="rt-icon2-perm_identity"></i>', '<i class="rt-icon2-search"></i>', '<i class="rt-icon2-eye3"></i>', '<i class="rt-icon2-paper-clip"></i>', '<i class="rt-icon2-mail3"></i>', '<i class="rt-icon2-image3"></i>', '<i class="rt-icon2-clock3"></i>', '<i class="rt-icon2-watch2"></i>', '<i class="rt-icon2-camera5"></i>', '<i class="rt-icon2-video3"></i>', '<i class="rt-icon2-monitor2"></i>', '<i class="rt-icon2-cog4"></i>', '<i class="rt-icon2-heart4"></i>', '<i class="rt-icon2-layers2"></i>', '<i class="rt-icon2-paper"></i>', '<i class="rt-icon2-search5"></i>', '<i class="rt-icon2-microphone2"></i>', '<i class="rt-icon2-umbrella2"></i>', '<i class="rt-icon2-moon2"></i>', '<i class="rt-icon2-thermometer3"></i>', '<i class="rt-icon2-drop"></i>', '<i class="rt-icon2-sun2"></i>', '<i class="rt-icon2-cloud2"></i>', '<i class="rt-icon2-map3"></i>', '<i class="rt-icon2-head"></i>', '<i class="rt-icon2-briefcase2"></i>', '<i class="rt-icon2-speech-bubble"></i>', '<i class="rt-icon2-globe3"></i>', '<i class="rt-icon2-tag4"></i>', '<i class="rt-icon2-star2"></i>', '<i class="rt-icon2-plus3"></i>', '<i class="rt-icon2-minus3"></i>', '<i class="rt-icon2-check2"></i>', '<i class="rt-icon2-cross2"></i>', '<i class="rt-icon2-help"></i>', '<i class="rt-icon2-files"></i>', '<i class="rt-icon2-file2"></i>', '<i class="rt-icon2-browser"></i>', '<i class="rt-icon2-wifi-full"></i>', '<i class="rt-icon2-microphone3"></i>', '<i class="rt-icon2-trashcan2"></i>', '<i class="rt-icon2-search6"></i>', '<i class="rt-icon2-calendar6"></i>', '<i class="rt-icon2-heart5"></i>', '<i class="rt-icon2-star3"></i>', '<i class="rt-icon2-clock4"></i>', '<i class="rt-icon2-users2"></i>', '<i class="rt-icon2-user3"></i>', '<i class="rt-icon2-creditcards"></i>', '<i class="rt-icon2-calculator3"></i>', '<i class="rt-icon2-bag"></i>', '<i class="rt-icon2-diamond3"></i>', '<i class="rt-icon2-drink4"></i>', '<i class="rt-icon2-shorts"></i>', '<i class="rt-icon2-coffee4"></i>', '<i class="rt-icon2-map4"></i>', '<i class="rt-icon2-syringe"></i>', '<i class="rt-icon2-pill"></i>', '<i class="rt-icon2-lab3"></i>', '<i class="rt-icon2-mug2"></i>', '<i class="rt-icon2-chart"></i>', '<i class="rt-icon2-pencil4"></i>', '<i class="rt-icon2-envelope-o"></i>', '<i class="rt-icon2-star-o"></i>', '<i class="rt-icon2-film"></i>', '<i class="rt-icon2-check"></i>', '<i class="rt-icon2-close"></i>', '<i class="rt-icon2-remove"></i>', '<i class="rt-icon2-times"></i>', '<i class="rt-icon2-cog"></i>', '<i class="rt-icon2-gear"></i>', '<i class="rt-icon2-trash-o"></i>', '<i class="rt-icon2-file-o"></i>', '<i class="rt-icon2-clock-o"></i>', '<i class="rt-icon2-tags"></i>', '<i class="rt-icon2-thumbs-o-up"></i>', '<i class="rt-icon2-thumbs-o-down"></i>', '<i class="rt-icon2-heart-o"></i>', '<i class="rt-icon2-phone"></i>', '<i class="rt-icon2-umbrella"></i>', '<i class="rt-icon2-lightbulb-o"></i>', '<i class="rt-icon2-user-md"></i>', '<i class="rt-icon2-stethoscope"></i>', '<i class="rt-icon2-suitcase"></i>', '<i class="rt-icon2-coffee"></i>', '<i class="rt-icon2-cutlery"></i>', '<i class="rt-icon2-file-text-o"></i>', '<i class="rt-icon2-building-o"></i>', '<i class="rt-icon2-hospital-o"></i>', '<i class="rt-icon2-ambulance"></i>', '<i class="rt-icon2-medkit"></i>', '<i class="rt-icon2-angle-left"></i>', '<i class="rt-icon2-angle-right"></i>', '<i class="rt-icon2-angle-up"></i>', '<i class="rt-icon2-angle-down"></i>', '<i class="rt-icon2-desktop"></i>', '<i class="rt-icon2-laptop"></i>', '<i class="rt-icon2-tablet"></i>', '<i class="rt-icon2-mobile"></i>', '<i class="rt-icon2-mobile-phone"></i>', '<i class="rt-icon2-quote-left"></i>', '<i class="rt-icon2-quote-right"></i>', '<i class="rt-icon2-youtube"></i>', '<i class="rt-icon2-file-pdf-o"></i>', '<i class="rt-icon2-file-word-o"></i>', '<i class="rt-icon2-file-excel-o"></i>', '<i class="rt-icon2-file-powerpoint-o"></i>', '<i class="rt-icon2-file-image-o"></i>', '<i class="rt-icon2-file-photo-o"></i>', '<i class="rt-icon2-file-picture-o"></i>', '<i class="rt-icon2-file-archive-o"></i>', '<i class="rt-icon2-file-zip-o"></i>', '<i class="rt-icon2-file-audio-o"></i>', '<i class="rt-icon2-file-sound-o"></i>', '<i class="rt-icon2-file-movie-o"></i>', '<i class="rt-icon2-file-video-o"></i>', '<i class="rt-icon2-file-code-o"></i>', '<i class="rt-icon2-paper-plane-o"></i>', '<i class="rt-icon2-send-o"></i>', '<i class="rt-icon2-futbol-o"></i>', '<i class="rt-icon2-soccer-ball-o"></i>', '<i class="rt-icon2-birthday-cake"></i>', '<i class="rt-icon2-diamond"></i>', '<i class="rt-icon2-whatsapp"></i>', '<i class="rt-icon2-chevron-down2"></i>', '<i class="rt-icon2-chevron-left3"></i>', '<i class="rt-icon2-chevron-right3"></i>', '<i class="rt-icon2-chevron-small-down"></i>', '<i class="rt-icon2-chevron-small-left"></i>', '<i class="rt-icon2-chevron-small-right"></i>', '<i class="rt-icon2-chevron-small-up"></i>', '<i class="rt-icon2-chevron-thin-down"></i>', '<i class="rt-icon2-chevron-thin-left"></i>', '<i class="rt-icon2-chevron-thin-right"></i>', '<i class="rt-icon2-chevron-thin-up"></i>', '<i class="rt-icon2-chevron-up2"></i>', '<i class="rt-icon2-code"></i>', '<i class="rt-icon2-light-bulb"></i>', '<i class="rt-icon2-magnifying-glass2"></i>', '<i class="rt-icon2-map5"></i>', '<i class="rt-icon2-scissors"></i>', '<i class="rt-icon2-tools2"></i>', '<i class="rt-icon2-box"></i>', '<i class="rt-icon2-write"></i>', '<i class="rt-icon2-clock5"></i>', '<i class="rt-icon2-search7"></i>', '<i class="rt-icon2-trash4"></i>', '<i class="rt-icon2-envelope2"></i>', '<i class="rt-icon2-bubble2"></i>', '<i class="rt-icon2-camera6"></i>', '<i class="rt-icon2-image4"></i>', '<i class="rt-icon2-tag5"></i>', '<i class="rt-icon2-heart6"></i>', '<i class="rt-icon2-video-camera"></i>', '<i class="rt-icon2-cart"></i>', '<i class="rt-icon2-film4"></i>', '<i class="rt-icon2-home3"></i>', '<i class="fa fa-angellist"></i>', '<i class="fa fa-area-chart"></i>', '<i class="fa fa-at"></i>', '<i class="fa fa-bell-slash"></i>', '<i class="fa fa-bell-slash-o"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-binoculars"></i>', '<i class="fa fa-birthday-cake"></i>', '<i class="fa fa-bus"></i>', '<i class="fa fa-calculator"></i>', '<i class="fa fa-cc"></i>', '<i class="fa fa-cc-amex"></i>', '<i class="fa fa-cc-discover"></i>', '<i class="fa fa-cc-mastercard"></i>', '<i class="fa fa-cc-paypal"></i>', '<i class="fa fa-cc-stripe"></i>', '<i class="fa fa-cc-visa"></i>', '<i class="fa fa-copyright"></i>', '<i class="fa fa-eyedropper"></i>', '<i class="fa fa-futbol-o"></i>', '<i class="fa fa-google-wallet"></i>', '<i class="fa fa-ils"></i>', '<i class="fa fa-ioxhost"></i>', '<i class="fa fa-lastfm"></i>', '<i class="fa fa-lastfm-square"></i>', '<i class="fa fa-line-chart"></i>', '<i class="fa fa-meanpath"></i>', '<i class="fa fa-newspaper-o"></i>', '<i class="fa fa-paint-brush"></i>', '<i class="fa fa-paypal"></i>', '<i class="fa fa-pie-chart"></i>', '<i class="fa fa-plug"></i>', '<i class="fa fa-shekel"></i>', '<i class="fa fa-sheqel"></i>', '<i class="fa fa-slideshare"></i>', '<i class="fa fa-soccer-ball-o"></i>', '<i class="fa fa-toggle-off"></i>', '<i class="fa fa-toggle-on"></i>', '<i class="fa fa-trash"></i>', '<i class="fa fa-tty"></i>', '<i class="fa fa-twitch"></i>', '<i class="fa fa-wifi"></i>', '<i class="fa fa-yelp"></i>', '<i class="fa fa-adjust"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-archive"></i>', '<i class="fa fa-area-chart"></i>', '<i class="fa fa-arrows"></i>', '<i class="fa fa-arrows-h"></i>', '<i class="fa fa-arrows-v"></i>', '<i class="fa fa-asterisk"></i>', '<i class="fa fa-at"></i>', '<i class="fa fa-automobile"></i>', '<i class="fa fa-ban"></i>', '<i class="fa fa-bank"></i>', '<i class="fa fa-bar-chart"></i>', '<i class="fa fa-bar-chart-o"></i>', '<i class="fa fa-barcode"></i>', '<i class="fa fa-bars"></i>', '<i class="fa fa-beer"></i>', '<i class="fa fa-bell"></i>', '<i class="fa fa-bell-o"></i>', '<i class="fa fa-bell-slash"></i>', '<i class="fa fa-bell-slash-o"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-binoculars"></i>', '<i class="fa fa-birthday-cake"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-book"></i>', '<i class="fa fa-bookmark"></i>', '<i class="fa fa-bookmark-o"></i>', '<i class="fa fa-briefcase"></i>', '<i class="fa fa-bug"></i>', '<i class="fa fa-building"></i>', '<i class="fa fa-building-o"></i>', '<i class="fa fa-bullhorn"></i>', '<i class="fa fa-bullseye"></i>', '<i class="fa fa-bus"></i>', '<i class="fa fa-cab"></i>', '<i class="fa fa-calculator"></i>', '<i class="fa fa-calendar"></i>', '<i class="fa fa-calendar-o"></i>', '<i class="fa fa-camera"></i>', '<i class="fa fa-camera-retro"></i>', '<i class="fa fa-car"></i>', '<i class="fa fa-caret-square-o-down"></i>', '<i class="fa fa-caret-square-o-left"></i>', '<i class="fa fa-caret-square-o-right"></i>', '<i class="fa fa-caret-square-o-up"></i>', '<i class="fa fa-cc"></i>', '<i class="fa fa-certificate"></i>', '<i class="fa fa-check"></i>', '<i class="fa fa-check-circle"></i>', '<i class="fa fa-check-circle-o"></i>', '<i class="fa fa-check-square"></i>', '<i class="fa fa-check-square-o"></i>', '<i class="fa fa-child"></i>', '<i class="fa fa-circle"></i>', '<i class="fa fa-circle-o"></i>', '<i class="fa fa-circle-o-notch"></i>', '<i class="fa fa-circle-thin"></i>', '<i class="fa fa-clock-o"></i>', '<i class="fa fa-close"></i>', '<i class="fa fa-cloud"></i>', '<i class="fa fa-cloud-download"></i>', '<i class="fa fa-cloud-upload"></i>', '<i class="fa fa-code"></i>', '<i class="fa fa-code-fork"></i>', '<i class="fa fa-coffee"></i>', '<i class="fa fa-cog"></i>', '<i class="fa fa-cogs"></i>', '<i class="fa fa-comment"></i>', '<i class="fa fa-comment-o"></i>', '<i class="fa fa-comments"></i>', '<i class="fa fa-comments-o"></i>', '<i class="fa fa-compass"></i>', '<i class="fa fa-copyright"></i>', '<i class="fa fa-credit-card"></i>', '<i class="fa fa-crop"></i>', '<i class="fa fa-crosshairs"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-cubes"></i>', '<i class="fa fa-cutlery"></i>', '<i class="fa fa-dashboard"></i>', '<i class="fa fa-database"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-dot-circle-o"></i>', '<i class="fa fa-download"></i>', '<i class="fa fa-edit"></i>', '<i class="fa fa-ellipsis-h"></i>', '<i class="fa fa-ellipsis-v"></i>', '<i class="fa fa-envelope"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-envelope-square"></i>', '<i class="fa fa-eraser"></i>', '<i class="fa fa-exchange"></i>', '<i class="fa fa-exclamation"></i>', '<i class="fa fa-exclamation-circle"></i>', '<i class="fa fa-exclamation-triangle"></i>', '<i class="fa fa-external-link"></i>', '<i class="fa fa-external-link-square"></i>', '<i class="fa fa-eye"></i>', '<i class="fa fa-eye-slash"></i>', '<i class="fa fa-eyedropper"></i>', '<i class="fa fa-fax"></i>', '<i class="fa fa-female"></i>', '<i class="fa fa-fighter-jet"></i>', '<i class="fa fa-file-archive-o"></i>', '<i class="fa fa-file-audio-o"></i>', '<i class="fa fa-file-code-o"></i>', '<i class="fa fa-file-excel-o"></i>', '<i class="fa fa-file-image-o"></i>', '<i class="fa fa-file-movie-o"></i>', '<i class="fa fa-file-pdf-o"></i>', '<i class="fa fa-file-photo-o"></i>', '<i class="fa fa-file-picture-o"></i>', '<i class="fa fa-file-powerpoint-o"></i>', '<i class="fa fa-file-sound-o"></i>', '<i class="fa fa-file-video-o"></i>', '<i class="fa fa-file-word-o"></i>', '<i class="fa fa-file-zip-o"></i>', '<i class="fa fa-film"></i>', '<i class="fa fa-filter"></i>', '<i class="fa fa-fire"></i>', '<i class="fa fa-fire-extinguisher"></i>', '<i class="fa fa-flag"></i>', '<i class="fa fa-flag-checkered"></i>', '<i class="fa fa-flag-o"></i>', '<i class="fa fa-flash"></i>', '<i class="fa fa-flask"></i>', '<i class="fa fa-folder"></i>', '<i class="fa fa-folder-o"></i>', '<i class="fa fa-folder-open"></i>', '<i class="fa fa-folder-open-o"></i>', '<i class="fa fa-frown-o"></i>', '<i class="fa fa-futbol-o"></i>', '<i class="fa fa-gamepad"></i>', '<i class="fa fa-gavel"></i>', '<i class="fa fa-gear"></i>', '<i class="fa fa-gears"></i>', '<i class="fa fa-gift"></i>', '<i class="fa fa-glass"></i>', '<i class="fa fa-globe"></i>', '<i class="fa fa-graduation-cap"></i>', '<i class="fa fa-group"></i>', '<i class="fa fa-hdd-o"></i>', '<i class="fa fa-headphones"></i>', '<i class="fa fa-heart"></i>', '<i class="fa fa-heart-o"></i>', '<i class="fa fa-history"></i>', '<i class="fa fa-home"></i>', '<i class="fa fa-image"></i>', '<i class="fa fa-inbox"></i>', '<i class="fa fa-info"></i>', '<i class="fa fa-info-circle"></i>', '<i class="fa fa-institution"></i>', '<i class="fa fa-key"></i>', '<i class="fa fa-keyboard-o"></i>', '<i class="fa fa-language"></i>', '<i class="fa fa-laptop"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-legal"></i>', '<i class="fa fa-lemon-o"></i>', '<i class="fa fa-level-down"></i>', '<i class="fa fa-level-up"></i>', '<i class="fa fa-life-bouy"></i>', '<i class="fa fa-life-buoy"></i>', '<i class="fa fa-life-ring"></i>', '<i class="fa fa-life-saver"></i>', '<i class="fa fa-lightbulb-o"></i>', '<i class="fa fa-line-chart"></i>', '<i class="fa fa-location-arrow"></i>', '<i class="fa fa-lock"></i>', '<i class="fa fa-magic"></i>', '<i class="fa fa-magnet"></i>', '<i class="fa fa-mail-forward"></i>', '<i class="fa fa-mail-reply"></i>', '<i class="fa fa-mail-reply-all"></i>', '<i class="fa fa-male"></i>', '<i class="fa fa-map-marker"></i>', '<i class="fa fa-meh-o"></i>', '<i class="fa fa-microphone"></i>', '<i class="fa fa-microphone-slash"></i>', '<i class="fa fa-minus"></i>', '<i class="fa fa-minus-circle"></i>', '<i class="fa fa-minus-square"></i>', '<i class="fa fa-minus-square-o"></i>', '<i class="fa fa-mobile"></i>', '<i class="fa fa-mobile-phone"></i>', '<i class="fa fa-money"></i>', '<i class="fa fa-moon-o"></i>', '<i class="fa fa-mortar-board"></i>', '<i class="fa fa-music"></i>', '<i class="fa fa-navicon"></i>', '<i class="fa fa-newspaper-o"></i>', '<i class="fa fa-paint-brush"></i>', '<i class="fa fa-paper-plane"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-paw"></i>', '<i class="fa fa-pencil"></i>', '<i class="fa fa-pencil-square"></i>', '<i class="fa fa-pencil-square-o"></i>', '<i class="fa fa-phone"></i>', '<i class="fa fa-phone-square"></i>', '<i class="fa fa-photo"></i>', '<i class="fa fa-picture-o"></i>', '<i class="fa fa-pie-chart"></i>', '<i class="fa fa-plane"></i>', '<i class="fa fa-plug"></i>', '<i class="fa fa-plus"></i>', '<i class="fa fa-plus-circle"></i>', '<i class="fa fa-plus-square"></i>', '<i class="fa fa-plus-square-o"></i>', '<i class="fa fa-power-off"></i>', '<i class="fa fa-print"></i>', '<i class="fa fa-puzzle-piece"></i>', '<i class="fa fa-qrcode"></i>', '<i class="fa fa-question"></i>', '<i class="fa fa-question-circle"></i>', '<i class="fa fa-quote-left"></i>', '<i class="fa fa-quote-right"></i>', '<i class="fa fa-random"></i>', '<i class="fa fa-recycle"></i>', '<i class="fa fa-refresh"></i>', '<i class="fa fa-remove"></i>', '<i class="fa fa-reorder"></i>', '<i class="fa fa-reply"></i>', '<i class="fa fa-reply-all"></i>', '<i class="fa fa-retweet"></i>', '<i class="fa fa-road"></i>', '<i class="fa fa-rocket"></i>', '<i class="fa fa-rss"></i>', '<i class="fa fa-rss-square"></i>', '<i class="fa fa-search"></i>', '<i class="fa fa-search-minus"></i>', '<i class="fa fa-search-plus"></i>', '<i class="fa fa-send"></i>', '<i class="fa fa-send-o"></i>', '<i class="fa fa-share"></i>', '<i class="fa fa-share-alt"></i>', '<i class="fa fa-share-alt-square"></i>', '<i class="fa fa-share-square"></i>', '<i class="fa fa-share-square-o"></i>', '<i class="fa fa-shield"></i>', '<i class="fa fa-shopping-cart"></i>', '<i class="fa fa-sign-in"></i>', '<i class="fa fa-sign-out"></i>', '<i class="fa fa-signal"></i>', '<i class="fa fa-sitemap"></i>', '<i class="fa fa-sliders"></i>', '<i class="fa fa-smile-o"></i>', '<i class="fa fa-soccer-ball-o"></i>', '<i class="fa fa-sort"></i>', '<i class="fa fa-sort-alpha-asc"></i>', '<i class="fa fa-sort-alpha-desc"></i>', '<i class="fa fa-sort-amount-asc"></i>', '<i class="fa fa-sort-amount-desc"></i>', '<i class="fa fa-sort-asc"></i>', '<i class="fa fa-sort-desc"></i>', '<i class="fa fa-sort-down"></i>', '<i class="fa fa-sort-numeric-asc"></i>', '<i class="fa fa-sort-numeric-desc"></i>', '<i class="fa fa-sort-up"></i>', '<i class="fa fa-space-shuttle"></i>', '<i class="fa fa-spinner"></i>', '<i class="fa fa-spoon"></i>', '<i class="fa fa-square"></i>', '<i class="fa fa-square-o"></i>', '<i class="fa fa-star"></i>', '<i class="fa fa-star-half"></i>', '<i class="fa fa-star-half-empty"></i>', '<i class="fa fa-star-half-full"></i>', '<i class="fa fa-star-half-o"></i>', '<i class="fa fa-star-o"></i>', '<i class="fa fa-suitcase"></i>', '<i class="fa fa-sun-o"></i>', '<i class="fa fa-support"></i>', '<i class="fa fa-tablet"></i>', '<i class="fa fa-tachometer"></i>', '<i class="fa fa-tag"></i>', '<i class="fa fa-tags"></i>', '<i class="fa fa-tasks"></i>', '<i class="fa fa-taxi"></i>', '<i class="fa fa-terminal"></i>', '<i class="fa fa-thumb-tack"></i>', '<i class="fa fa-thumbs-down"></i>', '<i class="fa fa-thumbs-o-down"></i>', '<i class="fa fa-thumbs-o-up"></i>', '<i class="fa fa-thumbs-up"></i>', '<i class="fa fa-ticket"></i>', '<i class="fa fa-times"></i>', '<i class="fa fa-times-circle"></i>', '<i class="fa fa-times-circle-o"></i>', '<i class="fa fa-tint"></i>', '<i class="fa fa-toggle-down"></i>', '<i class="fa fa-toggle-left"></i>', '<i class="fa fa-toggle-off"></i>', '<i class="fa fa-toggle-on"></i>', '<i class="fa fa-toggle-right"></i>', '<i class="fa fa-toggle-up"></i>', '<i class="fa fa-trash"></i>', '<i class="fa fa-trash-o"></i>', '<i class="fa fa-tree"></i>', '<i class="fa fa-trophy"></i>', '<i class="fa fa-truck"></i>', '<i class="fa fa-tty"></i>', '<i class="fa fa-umbrella"></i>', '<i class="fa fa-university"></i>', '<i class="fa fa-unlock"></i>', '<i class="fa fa-unlock-alt"></i>', '<i class="fa fa-unsorted"></i>', '<i class="fa fa-upload"></i>', '<i class="fa fa-user"></i>', '<i class="fa fa-users"></i>', '<i class="fa fa-video-camera"></i>', '<i class="fa fa-volume-down"></i>', '<i class="fa fa-volume-off"></i>', '<i class="fa fa-volume-up"></i>', '<i class="fa fa-warning"></i>', '<i class="fa fa-wheelchair"></i>', '<i class="fa fa-wifi"></i>', '<i class="fa fa-wrench"></i>', '<i class="fa fa-file"></i>', '<i class="fa fa-file-archive-o"></i>', '<i class="fa fa-file-audio-o"></i>', '<i class="fa fa-file-code-o"></i>', '<i class="fa fa-file-excel-o"></i>', '<i class="fa fa-file-image-o"></i>', '<i class="fa fa-file-movie-o"></i>', '<i class="fa fa-file-o"></i>', '<i class="fa fa-file-pdf-o"></i>', '<i class="fa fa-file-photo-o"></i>', '<i class="fa fa-file-picture-o"></i>', '<i class="fa fa-file-powerpoint-o"></i>', '<i class="fa fa-file-sound-o"></i>', '<i class="fa fa-file-text"></i>', '<i class="fa fa-file-text-o"></i>', '<i class="fa fa-file-video-o"></i>', '<i class="fa fa-file-word-o"></i>', '<i class="fa fa-file-zip-o"></i>', '<i class="fa fa-circle-o-notch fa-spin"></i>', '<i class="fa fa-cog fa-spin"></i>', '<i class="fa fa-gea fa-spinr"></i>', '<i class="fa fa-refresh fa-spin"></i>', '<i class="fa fa-spinner fa-spin"></i>', '<i class="fa fa-check-square"></i>', '<i class="fa fa-check-square-o"></i>', '<i class="fa fa-circle"></i>', '<i class="fa fa-circle-o"></i>', '<i class="fa fa-dot-circle-o"></i>', '<i class="fa fa-minus-square"></i>', '<i class="fa fa-minus-square-o"></i>', '<i class="fa fa-plus-square"></i>', '<i class="fa fa-plus-square-o"></i>', '<i class="fa fa-square"></i>', '<i class="fa fa-square-o"></i>', '<i class="fa fa-cc-amex"></i>', '<i class="fa fa-cc-discover"></i>', '<i class="fa fa-cc-mastercard"></i>', '<i class="fa fa-cc-paypal"></i>', '<i class="fa fa-cc-stripe"></i>', '<i class="fa fa-cc-visa"></i>', '<i class="fa fa-credit-card"></i>', '<i class="fa fa-google-wallet"></i>', '<i class="fa fa-paypal"></i>', '<i class="fa fa-area-chart"></i>', '<i class="fa fa-bar-chart"></i>', '<i class="fa fa-bar-chart-o"></i>', '<i class="fa fa-line-chart"></i>', '<i class="fa fa-pie-chart"></i>', '<i class="fa fa-bitcoin"></i>', '<i class="fa fa-btc"></i>', '<i class="fa fa-cny"></i>', '<i class="fa fa-dollar"></i>', '<i class="fa fa-eur"></i>', '<i class="fa fa-euro"></i>', '<i class="fa fa-gbp"></i>', '<i class="fa fa-ils"></i>', '<i class="fa fa-inr"></i>', '<i class="fa fa-jpy"></i>', '<i class="fa fa-krw"></i>', '<i class="fa fa-money"></i>', '<i class="fa fa-rmb"></i>', '<i class="fa fa-rouble"></i>', '<i class="fa fa-rub"></i>', '<i class="fa fa-ruble"></i>', '<i class="fa fa-rupee"></i>', '<i class="fa fa-shekel"></i>', '<i class="fa fa-sheqel"></i>', '<i class="fa fa-try"></i>', '<i class="fa fa-turkish-lira"></i>', '<i class="fa fa-usd"></i>', '<i class="fa fa-won"></i>', '<i class="fa fa-yen"></i>', '<i class="fa fa-align-center"></i>', '<i class="fa fa-align-justify"></i>', '<i class="fa fa-align-left"></i>', '<i class="fa fa-align-right"></i>', '<i class="fa fa-bold"></i>', '<i class="fa fa-chain"></i>', '<i class="fa fa-chain-broken"></i>', '<i class="fa fa-clipboard"></i>', '<i class="fa fa-columns"></i>', '<i class="fa fa-copy"></i>', '<i class="fa fa-cut"></i>', '<i class="fa fa-dedent"></i>', '<i class="fa fa-eraser"></i>', '<i class="fa fa-file"></i>', '<i class="fa fa-file-o"></i>', '<i class="fa fa-file-text"></i>', '<i class="fa fa-file-text-o"></i>', '<i class="fa fa-files-o"></i>', '<i class="fa fa-floppy-o"></i>', '<i class="fa fa-font"></i>', '<i class="fa fa-header"></i>', '<i class="fa fa-indent"></i>', '<i class="fa fa-italic"></i>', '<i class="fa fa-link"></i>', '<i class="fa fa-list"></i>', '<i class="fa fa-list-alt"></i>', '<i class="fa fa-list-ol"></i>', '<i class="fa fa-list-ul"></i>', '<i class="fa fa-outdent"></i>', '<i class="fa fa-paperclip"></i>', '<i class="fa fa-paragraph"></i>', '<i class="fa fa-paste"></i>', '<i class="fa fa-repeat"></i>', '<i class="fa fa-rotate-left"></i>', '<i class="fa fa-rotate-right"></i>', '<i class="fa fa-save"></i>', '<i class="fa fa-scissors"></i>', '<i class="fa fa-strikethrough"></i>', '<i class="fa fa-subscript"></i>', '<i class="fa fa-superscript"></i>', '<i class="fa fa-table"></i>', '<i class="fa fa-text-height"></i>', '<i class="fa fa-text-width"></i>', '<i class="fa fa-th"></i>', '<i class="fa fa-th-large"></i>', '<i class="fa fa-th-list"></i>', '<i class="fa fa-underline"></i>', '<i class="fa fa-undo"></i>', '<i class="fa fa-unlink"></i>', '<i class="fa fa-angle-double-down"></i>', '<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>', '<i class="fa fa-angle-double-up"></i>', '<i class="fa fa-angle-down"></i>', '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-up"></i>', '<i class="fa fa-arrow-circle-down"></i>', '<i class="fa fa-arrow-circle-left"></i>', '<i class="fa fa-arrow-circle-o-down"></i>', '<i class="fa fa-arrow-circle-o-left"></i>', '<i class="fa fa-arrow-circle-o-right"></i>', '<i class="fa fa-arrow-circle-o-up"></i>', '<i class="fa fa-arrow-circle-right"></i>', '<i class="fa fa-arrow-circle-up"></i>', '<i class="fa fa-arrow-down"></i>', '<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>', '<i class="fa fa-arrow-up"></i>', '<i class="fa fa-arrows"></i>', '<i class="fa fa-arrows-alt"></i>', '<i class="fa fa-arrows-h"></i>', '<i class="fa fa-arrows-v"></i>', '<i class="fa fa-caret-down"></i>', '<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>', '<i class="fa fa-caret-square-o-down"></i>', '<i class="fa fa-caret-square-o-left"></i>', '<i class="fa fa-caret-square-o-right"></i>', '<i class="fa fa-caret-square-o-up"></i>', '<i class="fa fa-caret-up"></i>', '<i class="fa fa-chevron-circle-down"></i>', '<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>', '<i class="fa fa-chevron-circle-up"></i>', '<i class="fa fa-chevron-down"></i>', '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-up"></i>', '<i class="fa fa-hand-o-down"></i>', '<i class="fa fa-hand-o-left"></i>', '<i class="fa fa-hand-o-right"></i>', '<i class="fa fa-hand-o-up"></i>', '<i class="fa fa-long-arrow-down"></i>', '<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>', '<i class="fa fa-long-arrow-up"></i>', '<i class="fa fa-toggle-down"></i>', '<i class="fa fa-toggle-left"></i>', '<i class="fa fa-toggle-right"></i>', '<i class="fa fa-toggle-up"></i>', '<i class="fa fa-arrows-alt"></i>', '<i class="fa fa-backward"></i>', '<i class="fa fa-compress"></i>', '<i class="fa fa-eject"></i>', '<i class="fa fa-expand"></i>', '<i class="fa fa-fast-backward"></i>', '<i class="fa fa-fast-forward"></i>', '<i class="fa fa-forward"></i>', '<i class="fa fa-pause"></i>', '<i class="fa fa-play"></i>', '<i class="fa fa-play-circle"></i>', '<i class="fa fa-play-circle-o"></i>', '<i class="fa fa-step-backward"></i>', '<i class="fa fa-step-forward"></i>', '<i class="fa fa-stop"></i>', '<i class="fa fa-youtube-play"></i>', '<i class="fa fa-adn"></i>', '<i class="fa fa-android"></i>', '<i class="fa fa-angellist"></i>', '<i class="fa fa-apple"></i>', '<i class="fa fa-behance"></i>', '<i class="fa fa-behance-square"></i>', '<i class="fa fa-bitbucket"></i>', '<i class="fa fa-bitbucket-square"></i>', '<i class="fa fa-bitcoin"></i>', '<i class="fa fa-btc"></i>', '<i class="fa fa-cc-amex"></i>', '<i class="fa fa-cc-discover"></i>', '<i class="fa fa-cc-mastercard"></i>', '<i class="fa fa-cc-paypal"></i>', '<i class="fa fa-cc-stripe"></i>', '<i class="fa fa-cc-visa"></i>', '<i class="fa fa-codepen"></i>', '<i class="fa fa-css3"></i>', '<i class="fa fa-delicious"></i>', '<i class="fa fa-deviantart"></i>', '<i class="fa fa-digg"></i>', '<i class="fa fa-dribbble"></i>', '<i class="fa fa-dropbox"></i>', '<i class="fa fa-drupal"></i>', '<i class="fa fa-empire"></i>', '<i class="fa fa-facebook"></i>', '<i class="fa fa-facebook-square"></i>', '<i class="fa fa-flickr"></i>', '<i class="fa fa-foursquare"></i>', '<i class="fa fa-ge"></i>', '<i class="fa fa-git"></i>', '<i class="fa fa-git-square"></i>', '<i class="fa fa-github"></i>', '<i class="fa fa-github-alt"></i>', '<i class="fa fa-github-square"></i>', '<i class="fa fa-gittip"></i>', '<i class="fa fa-google"></i>', '<i class="fa fa-google-plus"></i>', '<i class="fa fa-google-plus-square"></i>', '<i class="fa fa-google-wallet"></i>', '<i class="fa fa-hacker-news"></i>', '<i class="fa fa-html5"></i>', '<i class="fa fa-instagram"></i>', '<i class="fa fa-ioxhost"></i>', '<i class="fa fa-joomla"></i>', '<i class="fa fa-jsfiddle"></i>', '<i class="fa fa-lastfm"></i>', '<i class="fa fa-lastfm-square"></i>', '<i class="fa fa-linkedin"></i>', '<i class="fa fa-linkedin-square"></i>', '<i class="fa fa-linux"></i>', '<i class="fa fa-maxcdn"></i>', '<i class="fa fa-meanpath"></i>', '<i class="fa fa-openid"></i>', '<i class="fa fa-pagelines"></i>', '<i class="fa fa-paypal"></i>', '<i class="fa fa-pied-piper"></i>', '<i class="fa fa-pied-piper-alt"></i>', '<i class="fa fa-pinterest"></i>', '<i class="fa fa-pinterest-square"></i>', '<i class="fa fa-qq"></i>', '<i class="fa fa-ra"></i>', '<i class="fa fa-rebel"></i>', '<i class="fa fa-reddit"></i>', '<i class="fa fa-reddit-square"></i>', '<i class="fa fa-renren"></i>', '<i class="fa fa-share-alt"></i>', '<i class="fa fa-share-alt-square"></i>', '<i class="fa fa-skype"></i>', '<i class="fa fa-slack"></i>', '<i class="fa fa-slideshare"></i>', '<i class="fa fa-soundcloud"></i>', '<i class="fa fa-spotify"></i>', '<i class="fa fa-stack-exchange"></i>', '<i class="fa fa-stack-overflow"></i>', '<i class="fa fa-steam"></i>', '<i class="fa fa-steam-square"></i>', '<i class="fa fa-stumbleupon"></i>', '<i class="fa fa-stumbleupon-circle"></i>', '<i class="fa fa-tencent-weibo"></i>', '<i class="fa fa-trello"></i>', '<i class="fa fa-tumblr"></i>', '<i class="fa fa-tumblr-square"></i>', '<i class="fa fa-twitch"></i>', '<i class="fa fa-twitter"></i>', '<i class="fa fa-twitter-square"></i>', '<i class="fa fa-vimeo-square"></i>', '<i class="fa fa-vine"></i>', '<i class="fa fa-vk"></i>', '<i class="fa fa-wechat"></i>', '<i class="fa fa-weibo"></i>', '<i class="fa fa-weixin"></i>', '<i class="fa fa-windows"></i>', '<i class="fa fa-wordpress"></i>', '<i class="fa fa-xing"></i>', '<i class="fa fa-xing-square"></i>', '<i class="fa fa-yahoo"></i>', '<i class="fa fa-yelp"></i>', '<i class="fa fa-youtube"></i>', '<i class="fa fa-youtube-play"></i>', '<i class="fa fa-youtube-square"></i>', '<i class="fa fa-ambulance"></i>', '<i class="fa fa-h-square"></i>', '<i class="fa fa-hospital-o"></i>', '<i class="fa fa-medkit"></i>', '<i class="fa fa-plus-square"></i>', '<i class="fa fa-stethoscope"></i>', '<i class="fa fa-user-md"></i>', '<i class="fa fa-wheelchair"></i>'],
    buttons: ['<a class="theme_button" href="#">Regular</a>', '<a class="theme_button color1" href="#">Color 1</a>', '<a class="theme_button color2" href="#">Color 2</a>', '<a class="theme_button inverse" href="#">Inverse</a>']
};
"use strict";
var isLocalFile = "file:" == location.protocol
  , templateImages = [];
isLocalFile || jQuery.post("builder/getimages.php", {
    img: 1
}).done(function(e) {
    jQuery.each(jQuery.parseJSON(e), function(e, a) {
        templateImages.push(a.value)
    })
});
var canBeSortable = ["#box_wrapper", '[class^="container"]', ".row", "[class*='col-']"]
  , canBeSelected = ["[class*='col-']"]
  , canBeDroppable = ["#box_wrapper", '[class^="container"]', ".row", "[class*='col-']"];
function initDroppable() {}
function initSortable() {
    jQuery(canBeSortable.join()).sortable({
        delay: 300
    })
}
function initDragable() {
    jQuery(".drag-element").each(function() {
        var e = jQuery(this).data("connect");
        jQuery(this).draggable({
            scope: e,
            connectToSortable: e,
            appendTo: "body",
            helper: "clone",
            revert: "invalid",
            start: function(e, a) {
                if (jQuery("body").hasClass("tinymce"))
                    return !1
            },
            stop: function(a, n) {
                jQuery(e).each(function() {
                    if (jQuery(this)[0] === jQuery(n.helper).parent()[0]) {
                        var e = jQuery(n.helper).data("layout");
                        jQuery(n.helper).replaceWith(e),
                        initSortable()
                    }
                })
            }
        })
    })
}
function destroySortable() {
    jQuery(canBeSortable.join()).sortable("destroy"),
    jQuery("p, h1, h2, h3, h4, h5, h6").removeAttr("style"),
    jQuery('[class*="col-"]').removeAttr("style id spellcheck contenteditable").removeClass("mce-content-body")
}
function disableSortable() {
    jQuery(canBeSortable.join()).sortable("disable")
}
function enableSortable() {
    jQuery(canBeSortable.join()).sortable("enable")
}
function initTinyMCE() {
    var e = [];
    jQuery.each(angular.element("body").scope().$storage.pages, function(a, n) {
        e.push({
            title: "Page: " + a + ".html",
            value: a + ".html"
        })
    }),
    jQuery.each(angular.element("body").scope().$storage.sections, function(a, n) {
        e.push({
            title: "Saved section: #" + a,
            value: "#" + a
        })
    }),
    jQuery("#box_wrapper > *").each(function() {
        var a = jQuery(this).attr("id");
        a && e.push({
            title: "Section on this page: #" + a,
            value: "#" + a
        })
    });
    var a = []
      , n = ["advlist autolink lists link image charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars fullscreen", "insertdatetime media nonbreaking save table contextmenu directionality", "emoticons template paste textcolor colorpicker textpattern", "icon iconsocial"];
    if (isLocalFile) {
        t = "code";
        n.push("code")
    } else {
        jQuery.post("builder/getimages.php", {
            img: 1
        }).done(function(e) {
            jQuery.each(jQuery.parseJSON(e), function(e, n) {
                a.push(n)
            })
        }),
        n.push("codemagic");
        var t = "codemagic"
    }
    tinymce.init({
        selector: '[class*="col-"].selected',
        inline: !0,
        themes: "inlite",
        element_format: "html",
        schema: "html5",
        valid_elements: "*[*]",
        invalid_elements: "script,applet",
        browser_spellcheck: !0,
        forced_root_block: "",
        menubar: !0,
        plugins: n,
        link_list: e,
        image_list: a,
        style_formats_merge: !0,
        style_formats: [{
            title: "Main Background Color",
            inline: "span",
            classes: "main_bg_color"
        }, {
            title: "Dark Background Color",
            inline: "span",
            classes: "dark_bg_color"
        }, {
            title: "Darkgrey Background Color",
            inline: "span",
            classes: "darkgrey_bg_color"
        }, {
            title: "Highlight 1",
            inline: "span",
            classes: "highlight"
        }, {
            title: "Highlight 2",
            inline: "span",
            classes: "highlight2"
        }, {
            title: "Darker color ",
            inline: "span",
            classes: "grey"
        }],
        toolbar1: "undo redo | styleselect | removeformat | bullist numlist | link image media | charmap icon iconsocial " + t,
        image_advtab: !0,
        menu: {},
        setup: function(e) {
            e.on("focus", function(e) {}),
            e.on("blur", function(a) {
                jQuery("#canvas").find("#" + e.id).find("br[data-mce-bogus]").remove()
            })
        }
    })
}
function initCanvas() {
    jQuery("#canvas").on("click", '[class*="col-"] a, [class*="col-"] button', function(e) {
        e.preventDefault()
    }),
    jQuery("#trash").droppable({
        hoverClass: "trash-hover",
        tolerance: "touch",
        drop: function(e, a) {
            a.draggable.fadeOut().remove()
        }
    }),
    jQuery("#canvas").on("click", canBeSelected.join(), function(e) {
        e.stopPropagation(),
        $this = jQuery(this),
        jQuery(".dropdown.open").removeClass("open"),
        $this.hasClass("selected") ? ($this.parent().hasClass("row") || $this.parent().hasClass("col-editable-parent")) && jQuery("body").hasClass("tinymce") && initTinyMCE() : (jQuery(canBeSelected.join()).removeClass("selected"),
        $this.addClass("selected"),
        ($this.parent().hasClass("row") || $this.parent().hasClass("col-editable-parent")) && jQuery("body").hasClass("tinymce") && initTinyMCE())
    }),
    jQuery("#canvas").on({
        mouseenter: function(e) {
            if (!jQuery("body").hasClass("tinymce") && !jQuery(this).hasClass("drag-element")) {
                jQuery(this).prepend('<div class="section_controls"><a href="#" ng-click="saveSection($event)"><span class="glyphicon glyphicon glyphicon-save"></span> Save Section</a><a href="#" ng-click="editSection($event)"><span class="glyphicon glyphicon glyphicon-edit"></span> Edit Section</a><a href="#" ng-click="deleteSection($event)"><span class="glyphicon glyphicon glyphicon-trash"></span> Delete Section</a></div>');
                var a = $(this).find(".section_controls");
                bindAngular(a)
            }
        },
        mouseleave: function(e) {
            jQuery(this).find(".section_controls").remove()
        }
    }, "#box_wrapper > *", function(e) {}),
    jQuery("#canvas").on({
        mouseenter: function(e) {
            if (!jQuery("body").hasClass("tinymce") && !jQuery(this).hasClass("drag-element")) {
                jQuery(this).prepend('<div class="section_controls"><a href="#" ng-click="editColumn($event)"><span class="glyphicon glyphicon glyphicon-edit"></span> Edit Column</a><a href="#" ng-click="deleteColumn($event)"><span class="glyphicon glyphicon glyphicon-trash"></span> Delete Column</a></div>');
                var a = $(this).find(".section_controls");
                bindAngular(a)
            }
        },
        mouseleave: function(e) {
            jQuery(this).find(".section_controls").remove()
        }
    }, '#box_wrapper [class*="col-"]', function(e) {})
}
jQuery(document).ready(function() {
    jQuery('[class*="scrollbar-"]').scrollbar(),
    Dropzone.autoDiscover = !1
}),
jQuery(window).load(function() {
    initDragable(),
    initCanvas(),
    $('[data-toggle="tooltip"]').tooltip(),
    jQuery(".preloaderimg").fadeOut(),
    jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function() {
        jQuery(this).remove()
    })
});
var config = {
    "Topline sections": {
        topline1: {
            name: "Grey topline",
            description: "Thin topline with social icons and contact info",
            image: "builder/img/topline1.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_topline ls ms table_section table_section_sm section_padding_top_5 section_padding_bottom_5"><div class="container"><div class="row"><div class="col-sm-8 text-center text-sm-left"><div><i class="fa fa-clock-o rightpadding_5" aria-hidden="true"></i>Opening Hours: Mon - Sat 8.00 - 18.00</div></div><div class="col-sm-4 text-center text-sm-right greylinks"><span class="rightpadding_10">Follow Us:</span><a class="social-icon color-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon color-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-google" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-youtube" href="#" title="Youtube"></a></div></div></div></section>'
        },
        topline2: {
            name: "Dark topline",
            description: "Thin topline with social icons and contact info",
            image: "builder/img/topline2.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_topline ds color table_section table_section_sm section_padding_top_5 section_padding_bottom_5"><div class="container"><div class="row"><div class="col-sm-8 text-center text-sm-left"><div><i class="fa fa-clock-o rightpadding_5" aria-hidden="true"></i>Opening Hours: Mon - Sat 8.00 - 18.00</div></div><div class="col-sm-4 text-center text-sm-right greylinks"><span class="rightpadding_10">Follow Us:</span><a class="social-icon color-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon color-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-google" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-youtube" href="#" title="Youtube"></a></div></div></div></section>'
        },
        topline3: {
            name: "Color topline",
            description: "Thin topline with social icons and contact info",
            image: "builder/img/topline3.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_topline cs table_section table_section_sm section_padding_top_5 section_padding_bottom_5"><div class="container"><div class="row"><div class="col-sm-8 text-center text-sm-left"><div><i class="fa fa-clock-o rightpadding_5" aria-hidden="true"></i>Opening Hours: Mon - Sat 8.00 - 18.00</div></div><div class="col-sm-4 text-center text-sm-right greylinks"><span class="rightpadding_10">Follow Us:</span><a class="social-icon color-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon color-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-google" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon color-icon socicon-youtube" href="#" title="Youtube"></a></div></div></div></section>'
        },
        topline4: {
            name: "Grey topline menu",
            description: "Thin grey topline with social icons and menu",
            image: "builder/img/topline4.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<section class="page_topline ls ms table_section table_section_sm"><div class="container"><div class="row"><div class="col-sm-4 text-center text-sm-left toppadding_10 bottompadding_10"><span class="small-text rightpadding_10">Share:</span><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a></div><div class="col-sm-8 text-center text-sm-right"><ul class="inline-list menu darklinks">{{menu_items0}}</ul></div></div></div></section>'
        },
        topline5: {
            name: "Dark topline menu",
            description: "Thin Dark topline with social icons and menu",
            image: "builder/img/topline5.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<section class="page_topline ds ms table_section table_section_sm"><div class="container"><div class="row"><div class="col-sm-4 text-center text-sm-left toppadding_10 bottompadding_10"><span class="small-text rightpadding_10">Share:</span><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a></div><div class="col-sm-8 text-center text-sm-right"><ul class="inline-list menu darklinks">{{menu_items0}}</ul></div></div></div></section>'
        },
        topline6: {
            name: "Fullwidth light topline",
            description: "Fullwidth light topline",
            image: "builder/img/topline6.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_topline ls table_section table_section_md"><div class="container-fluid"><div class="row"><div class="col-md-4 col-sm-6 col-md-push-4 text-center text-sm-left text-md-center"><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-google" href="#" title="Twitter"></a><a class="social-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center text-sm-right text-md-left"><div class="inline-content medium"><p><i class="fa fa-phone highlight rightpadding_5" aria-hidden="true"></i>1-888-123-4567</p><p class="greylinks"><i class="fa fa-pencil highlight rightpadding_5" aria-hidden="true"></i><a href="mailto:dj_bishop@example.com">dj_bishop@example.com</a></p></div></div><div class="col-md-4 col-sm-12 text-center text-md-right"><div class="widget widget_search"><form method="get" class="searchform" action="./"><div class="form-group margin_0"><label class="sr-only" for="widget-search">Search for:</label><input id="widget-search" type="text" value="" name="search" class="form-control" placeholder="Search Keyword"></div><button type="submit" class="theme_button no_bg_button color1">Search</button></form></div></div></div></div></section>'
        },
        topline7: {
            name: "Fullwidth dark topline",
            description: "Fullwidth dark topline",
            image: "builder/img/topline7.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_topline ds table_section table_section_md"><div class="container-fluid"><div class="row"><div class="col-md-4 col-sm-6 col-md-push-4 text-center text-sm-left text-md-center"><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-google" href="#" title="Twitter"></a><a class="social-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center text-sm-right text-md-left"><div class="inline-content medium"><p><i class="fa fa-phone highlight rightpadding_5" aria-hidden="true"></i>1-888-123-4567</p><p class="greylinks"><i class="fa fa-pencil highlight rightpadding_5" aria-hidden="true"></i><a href="mailto:dj_bishop@example.com">dj_bishop@example.com</a></p></div></div><div class="col-md-4 col-sm-12 text-center text-md-right"><div class="widget widget_search"><form method="get" class="searchform" action="./"><div class="form-group margin_0"><label class="sr-only" for="widget-search">Search for:</label><input id="widget-search" type="text" value="" name="search" class="form-control" placeholder="Search Keyword"></div><button type="submit" class="theme_button no_bg_button color1">Search</button></form></div></div></div></div></section>'
        }
    },
    "Top Logo": {
        toplogo1: {
            name: "Light left toplogo",
            description: "Light right top logo with contacts",
            image: "builder/img/toplogo1.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_toplogo table_section table_section_md ls section_padding_top_15 section_padding_bottom_15"><div class="container"><div class="row"><div class="col-md-3 text-center text-md-left"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a></div><div class="col-md-9 text-center text-md-right"><div class="inline-teasers-wrap"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div></div></div></div></div></div></section>'
        },
        toplogo2: {
            name: "Dark left toplogo",
            description: "Dark right top logo with contacts",
            image: "builder/img/toplogo2.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_toplogo table_section table_section_md ds section_padding_top_15 section_padding_bottom_15"><div class="container"><div class="row"><div class="col-md-3 text-center text-md-left"><a href="./" class="logo top_logo"><img src="images/logo-dark.png" alt=""></a></div><div class="col-md-9 text-center text-md-right"><div class="inline-teasers-wrap"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div></div></div></div></div></div></section>'
        },
        toplogo3: {
            name: "Light center toplogo",
            description: "Light center top logo with search and social icons",
            image: "builder/img/toplogo3.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_toplogo ls table_section table_section_md"><div class="container"><div class="row"><div class="col-md-4 col-sm-12 col-md-push-4 text-center"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center text-md-left"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div></div><div class="col-md-4 col-sm-6 text-center text-md-right"><div class="media small-teaser teaser greylinks inline-block text-right"><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div><div class="media-right media-middle"><div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div></div></div></div></div></section>'
        },
        toplogo4: {
            name: "Dark center toplogo",
            description: "Dark center top logo with search and social icons",
            image: "builder/img/toplogo4.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_toplogo ds table_section table_section_md"><div class="container"><div class="row"><div class="col-md-4 col-sm-12 col-md-push-4 text-center"><a href="./" class="logo top_logo"><img src="images/logo-dark.png" alt=""></a></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center text-md-left"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div></div><div class="col-md-4 col-sm-6 text-center text-md-right"><div class="media small-teaser teaser greylinks inline-block text-right"><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div><div class="media-right media-middle"><div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div></div></div></div></div></section>'
        },
        toplogo5: {
            name: "Light center toplogo",
            description: "Simple light center top logo",
            image: "builder/img/toplogo5.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_toplogo ls section_padding_top_5 section_padding_bottom_5 toggler_right"><div class="container"><div class="row"><div class="col-sm-12 text-md-center"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a>\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span>\t</div></div></div></section>'
        },
        toplogo6: {
            name: "Dark center toplogo",
            description: "Simple Dark center top logo",
            image: "builder/img/toplogo6.png",
            parents: "#box_wrapper",
            repeats: [],
            layout: '<section class="page_toplogo ds section_padding_top_5 section_padding_bottom_5 toggler_right"><div class="container"><div class="row"><div class="col-sm-12 text-md-center"><a href="./" class="logo top_logo"><img src="images/logo-dark.png" alt=""></a>\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div></div></div></section>'
        }
    },
    Headers: {
        newheader1: {
            name: "Light left logo header",
            description: "Light header with left logo",
            image: "builder/img/header1.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<header class="page_header header_white toggler_right"><div class="container"><div class="row"><div class="col-sm-12 display_table"><div class="header_left_logo display_table_cell"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a></div><div class="header_mainmenu display_table_cell text-right">\x3c!-- main nav start --\x3e<nav class="mainmenu_wrapper"><ul class="mainmenu nav sf-menu">{{menu_items0}}</ul></nav>\x3c!-- eof main nav --\x3e\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div></div></div></div></header>'
        },
        newheader2: {
            name: "Fullwidth Light Header",
            description: "Light fullwidth header with left logo and social buttons to the right",
            image: "builder/img/header2.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<header class="page_header header_white toggler_xs_right tall_header"><div class="container-fluid"><div class="row"><div class="col-sm-12 display_table"><div class="header_left_logo display_table_cell"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a></div><div class="header_mainmenu display_table_cell text-center">\x3c!-- main nav start --\x3e<nav class="mainmenu_wrapper"><ul class="mainmenu nav sf-menu">{{menu_items0}}</ul></nav>\x3c!-- eof main nav --\x3e\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div><div class="header_right_buttons display_table_cell text-right hidden-xs"><a href="contact.html" class="theme_button color1">Buy tickets</a></div></div></div></div></header>'
        },
        newheader3: {
            name: "White toplogo header",
            description: "White centered bordered menu with toplogo section",
            image: "builder/img/header3.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<section class="page_toplogo ls table_section table_section_md"><div class="container"><div class="row"><div class="col-md-4 col-sm-12 col-md-push-4 text-center"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a>\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center text-md-left"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div></div><div class="col-md-4 col-sm-6 text-center text-md-right"><div class="media small-teaser teaser greylinks inline-block text-right"><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div><div class="media-right media-middle"><div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div></div></div></div></div></section><header class="page_header header_white bordered_items columns_margin_0"><div class="container"><div class="row"><div class="col-sm-12 text-center">\x3c!-- main nav start --\x3e<nav class="mainmenu_wrapper"><ul class="mainmenu nav sf-menu">{{menu_items0}}</ul></nav>\x3c!-- eof main nav --\x3e</div></div></div></header>'
        },
        newheader4: {
            name: "Light header",
            description: "Light header with social icons",
            image: "builder/img/header4.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<header class="page_header header_white relative_toggler"><div class="container"><div class="row"><div class="col-sm-12 display_table"><div class="header_mainmenu display_table_cell">\x3c!-- main nav start --\x3e<nav class="mainmenu_wrapper"><ul class="mainmenu nav sf-menu">{{menu_items0}}</ul></nav>\x3c!-- eof main nav --\x3e\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div><div class="header_right_buttons display_table_cell text-right"><span class="social-links"><a href="#" class="social-icon color-icon socicon-facebook"></a><a href="#" class="social-icon color-icon socicon-twitter"></a><a href="#" class="social-icon color-icon socicon-google"></a><a href="#" class="social-icon color-icon socicon-linkedin"></a><a href="#" class="social-icon color-icon socicon-youtube"></a></span></div></div></div></div></header>'
        },
        newheader5: {
            name: "Dark bordered header",
            description: "Dark centered bordered header with light top logo",
            image: "builder/img/header5.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<section class="page_toplogo table_section table_section_md ls section_padding_top_15 section_padding_bottom_15"><div class="container"><div class="row"><div class="col-md-3 text-center text-md-left"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a>\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div><div class="col-md-9 text-center text-md-right"><div class="inline-teasers-wrap"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div></div></div></div></div></div></section><header class="page_header header_darkgrey dark bordered_items"><div class="container"><div class="row"><div class="col-sm-12 text-center">\x3c!-- main nav start --\x3e<nav class="mainmenu_wrapper"><ul class="mainmenu nav sf-menu">{{menu_items0}}</ul></nav>\x3c!-- eof main nav --\x3e</div></div></div></header>'
        },
        newheader6: {
            name: "Color bordered header",
            description: "Color centered bordered header with light top logo",
            image: "builder/img/header6.png",
            parents: "#box_wrapper",
            repeats: [{
                name: "Number of menu items",
                id: "menu_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<li><a href="#">Link ##</a></li>'],
                byDefault: ""
            }],
            layout: '<section class="page_toplogo ls table_section table_section_md"><div class="container"><div class="row"><div class="col-md-4 col-sm-12 col-md-push-4 text-center"><a href="./" class="logo top_logo"><img src="images/logo.png" alt=""></a>\x3c!-- header toggler --\x3e<span class="toggle_menu"><span></span></span></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center text-md-left"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div></div><div class="col-md-4 col-sm-6 text-center text-md-right"><div class="media small-teaser teaser greylinks inline-block text-right"><div class="media-body media-middle grey">643-68-5796<br>dj_bishop@example.com</div><div class="media-right media-middle"><div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div></div></div></div></div></section><header class="page_header header_color bordered_items"><div class="container"><div class="row"><div class="col-sm-12 text-center">\x3c!-- main nav start --\x3e<nav class="mainmenu_wrapper"><ul class="mainmenu nav sf-menu">{{menu_items0}}</ul></nav>\x3c!-- eof main nav --\x3e</div></div></div></header>'
        }
    },
    "Title Sections": {
        newbreadcrumbs1: {
            name: "Two columns parallax breadcrumbs",
            description: "Two columns parallax breadcrumbs section",
            image: "builder/img/breadcrumbs1.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs ds parallax section_padding_top_65 section_padding_bottom_65 table_section table_section_md"><div class="container"><div class="row"><div class="col-md-8 text-center text-md-left"><h2>Page Title</h2></div><div class="col-md-4 text-center text-md-right"><ol class="breadcrumb"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Page Title</li></ol></div></div></div></section>'
        },
        newbreadcrumbs2: {
            name: "Color breadcrumbs",
            description: "Two columns color section with left page title and right breadcrumbs",
            image: "builder/img/breadcrumbs2.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs cs section_padding_50 table_section table_section_md"><div class="container"><div class="row"><div class="col-md-6 text-center text-md-left"><h2 class="small">Page Title</h2></div><div class="col-md-6 text-center text-md-right"><ol class="breadcrumb"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Page Title</li></ol></div></div></div></section>'
        },
        newbreadcrumbs3: {
            name: "Color breadcrumbs",
            description: "One colums color section with page title and breadcrumbs",
            image: "builder/img/breadcrumbs3.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs cs section_padding_top_25 section_padding_bottom_25"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="small">Page Title</h2><ol class="breadcrumb"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Page Title</li></ol></div></div></div></section>'
        },
        newbreadcrumbs4: {
            name: "Dark parallax breadcrumbs",
            description: "Dark parallax section with left inline page title and breadcrumbs",
            image: "builder/img/breadcrumbs4.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs ds section_padding_top_50 section_padding_bottom_50 parallax"><div class="container"><div class="row"><div class="col-sm-12 text-center text-md-left display_table_md"><h2 class="small display_table_cell_md">Breadcrumbs 4</h2><ol class="breadcrumb display_table_cell_md"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Breadcrumbs 4</li></ol></div></div></div></section>'
        },
        newbreadcrumbs5: {
            name: "Light breadcrumbs",
            description: "Light breadcrumbs section with center big page title and bottom line breadcrumbs",
            image: "builder/img/breadcrumbs5.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs ls ms section_padding_25 bg_image"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="small">Page Title</h2></div></div><ol class="breadcrumb bottom_breadcrumbs greylinks"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Page Title</li></ol></div></section>'
        },
        newbreadcrumbs6: {
            name: "Color parallax breadcrumbs",
            description: "Color parallax breadcrumbs section with center big page title and bottom line breadcrumbs",
            image: "builder/img/breadcrumbs6.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs ds color parallax section_padding_25"><div class="container"><div class="row"><div class="col-sm-12 text-center text-md-left"><h2>Page Title</h2></div></div><ol class="breadcrumb bottom_breadcrumbs"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Page Title</li></ol></div></section>'
        },
        newbreadcrumbs7: {
            name: "Gradient breadcrumbs",
            description: "Two columns color section with left page title and right breadcrumbs",
            image: "builder/img/breadcrumbs7.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_breadcrumbs cs gradient section_padding_top_25 section_padding_bottom_25 table_section table_section_md"><div class="container"><div class="row"><div class="col-md-6 text-center text-md-left"><h2 class="small">Page Title</h2></div><div class="col-md-6 text-center text-md-right"><ol class="breadcrumb"><li><a href="./">Home</a></li><li><a href="#">Features</a></li><li class="active">Page Title</li></ol></div></div></div></section>'
        }
    },
    "Intro Sections": {
        intro1: {
            name: "Left text",
            description: "Fullwidth image with left text",
            image: "builder/img/intro1.png",
            parents: "#box_wrapper",
            images: [{
                name: "Intro Image",
                id: "intro_image",
                values: templateImages,
                byDefault: "images/slide01.jpg",
                textBefore: '<img src="',
                textAfter: '" alt="">'
            }],
            layout: '<section class="intro_section page_mainslider ds">{{intro_image}}<div class="container"><div class="row"><div class="col-sm-12"><div class="slide_description_wrapper"><div class="slide_description"><div class="intro-layer to_animate" data-animation="fadeInUp"><h2><span class="small">Music is your</span>Time Machine</h2></div><div class="intro-layer to_animate" data-animation="fadeInUp"><p>We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.</p></div><div class="intro-layer to_animate" data-animation="fadeInUp"><p class="topmargin_25 inline-content vertical-margin"><a href="about.html" class="theme_button inverse min_width_button">About me</a><a href="albums.html" class="theme_button color1 min_width_button">My albums</a></p></div></div> \x3c!-- eof .slide_description --\x3e</div> \x3c!-- eof .slide_description_wrapper --\x3e</div> \x3c!-- eof .col-* --\x3e</div>\x3c!-- eof .row --\x3e</div>\x3c!-- eof .container --\x3e</section>'
        },
        intro2: {
            name: "Right text",
            description: "Fullwidth image with right text",
            image: "builder/img/intro2.png",
            parents: "#box_wrapper",
            images: [{
                name: "Intro Image",
                id: "intro_image",
                values: templateImages,
                byDefault: "images/slide02.jpg",
                textBefore: '<img src="',
                textAfter: '" alt="">'
            }],
            layout: '<section class="intro_section page_mainslider ds">{{intro_image}}<div class="container"><div class="row"><div class="col-sm-12 text-right"><div class="slide_description_wrapper"><div class="slide_description"><div class="intro-layer to_animate" data-animation="fadeInUp"><h2><span class="small">Music is your</span>Time Machine</h2></div><div class="intro-layer to_animate" data-animation="fadeInUp"><p>We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.</p></div><div class="intro-layer to_animate" data-animation="fadeInUp"><p class="topmargin_25 inline-content vertical-margin"><a href="about.html" class="theme_button inverse min_width_button">About me</a><a href="albums.html" class="theme_button color1 min_width_button">My albums</a></p></div></div> \x3c!-- eof .slide_description --\x3e</div> \x3c!-- eof .slide_description_wrapper --\x3e</div> \x3c!-- eof .col-* --\x3e</div>\x3c!-- eof .row --\x3e</div>\x3c!-- eof .container --\x3e</section>'
        },
        intro3: {
            name: "Centered text",
            description: "Fullwidth image with centered text",
            image: "builder/img/intro3.png",
            parents: "#box_wrapper",
            images: [{
                name: "Intro Image",
                id: "intro_image",
                values: templateImages,
                byDefault: "images/slide03.jpg",
                textBefore: '<img src="',
                textAfter: '" alt="">'
            }],
            layout: '<section class="intro_section page_mainslider ds">{{intro_image}}<div class="container"><div class="row"><div class="col-sm-12 text-center"><div class="slide_description_wrapper"><div class="slide_description"><div class="intro-layer to_animate" data-animation="fadeInUp"><h2><span class="small">Music is your</span>Time Machine</h2></div><div class="intro-layer to_animate" data-animation="fadeInUp"><p>We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.</p></div><div class="intro-layer to_animate" data-animation="fadeInUp"><p class="topmargin_25 inline-content vertical-margin"><a href="about.html" class="theme_button inverse min_width_button">About me</a><a href="albums.html" class="theme_button color1 min_width_button">My albums</a></p></div></div> \x3c!-- eof .slide_description --\x3e</div> \x3c!-- eof .slide_description_wrapper --\x3e</div> \x3c!-- eof .col-* --\x3e</div>\x3c!-- eof .row --\x3e</div>\x3c!-- eof .container --\x3e</section>'
        },
        introslider: {
            name: "Intro slider with three slides",
            description: "Slider with fullwidth image and centered text",
            image: "builder/img/intro3.png",
            parents: "#box_wrapper",
            images: [{
                name: "Intro Image",
                id: "intro_image1",
                values: templateImages,
                byDefault: "images/slide01.jpg",
                textBefore: '<img src="',
                textAfter: '" alt="">'
            }, {
                name: "Intro Image",
                id: "intro_image2",
                values: templateImages,
                byDefault: "images/slide02.jpg",
                textBefore: '<img src="',
                textAfter: '" alt="">'
            }, {
                name: "Intro Image",
                id: "intro_image3",
                values: templateImages,
                byDefault: "images/slide03.jpg",
                textBefore: '<img src="',
                textAfter: '" alt="">'
            }],
            layout: '<section class="intro_section page_mainslider ds"><div class="flexslider"data-dots="true"data-nav="te"><ul class="slides"><li>{{intro_image1}}<div class="container"><div class="row"><div class="col-sm-12 text-center"><div class="slide_description_wrapper"><div class="slide_description"><div class="intro-layer" data-animation="fadeInUp"><h2><span class="small">Music is your</span>Time Machine</h2></div><div class="intro-layer" data-animation="fadeInUp"><p>We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.</p></div><div class="intro-layer" data-animation="fadeInUp"><p class="topmargin_25 inline-content vertical-margin"><a href="about.html" class="theme_button inverse min_width_button">About me</a><a href="albums.html" class="theme_button color1 min_width_button">My albums</a></p></div></div> \x3c!-- eof .slide_description --\x3e</div> \x3c!-- eof .slide_description_wrapper --\x3e</div> \x3c!-- eof .col-* --\x3e</div>\x3c!-- eof .row --\x3e</div>\x3c!-- eof .container --\x3e</li><li>{{intro_image2}}<div class="container"><div class="row"><div class="col-sm-12 text-center"><div class="slide_description_wrapper"><div class="slide_description"><div class="intro-layer" data-animation="fadeInUp"><h2><span class="small">Let the</span>Music speak!</h2></div><div class="intro-layer" data-animation="fadeInUp"><p>We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.</p></div><div class="intro-layer" data-animation="fadeInUp"><p class="topmargin_25 inline-content vertical-margin"><a href="about.html" class="theme_button inverse min_width_button">About me</a><a href="albums.html" class="theme_button color1 min_width_button">My albums</a></p></div></div> \x3c!-- eof .slide_description --\x3e</div> \x3c!-- eof .slide_description_wrapper --\x3e</div> \x3c!-- eof .col-* --\x3e</div>\x3c!-- eof .row --\x3e</div>\x3c!-- eof .container --\x3e</li><li>{{intro_image3}}<div class="container"><div class="row"><div class="col-sm-12 text-center"><div class="slide_description_wrapper"><div class="slide_description"><div class="intro-layer" data-animation="fadeInUp"><h2><span class="small">Like music</span>to my ears.</h2></div><div class="intro-layer" data-animation="fadeInUp"><p>We hold our notes longer, better, and higher. We put the mental in instrumental and the cool in musicool.</p></div><div class="intro-layer" data-animation="fadeInUp"><p class="topmargin_25 inline-content vertical-margin"><a href="about.html" class="theme_button inverse min_width_button">About me</a><a href="albums.html" class="theme_button color1 min_width_button">My albums</a></p></div></div> \x3c!-- eof .slide_description --\x3e</div> \x3c!-- eof .slide_description_wrapper --\x3e</div> \x3c!-- eof .col-* --\x3e</div>\x3c!-- eof .row --\x3e</div>\x3c!-- eof .container --\x3e</li></ul></div> \x3c!-- eof flexslider --\x3e</section>'
        }
    },
    "Action Sections": {
        action1: {
            name: "Two teasers and button",
            description: "Section with two teasers to the left and button to the right",
            image: "builder/img/action1.png",
            parents: "#box_wrapper",
            layout: '<section class="ds section_padding_top_15 section_padding_bottom_15 table_section table_section_sm"><div class="container"><div class="row"><div class="col-sm-8"><div class="inline-teasers-wrap"><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bubble"></i></div></div><div class="media-body media-middle grey">2375 Circle Drive<br>Houston, TX 77027</div></div><div class="media small-teaser teaser greylinks inline-block text-left"><div class="media-left media-middle"> <div class="teaser_icon highlight border_icon size_small rounded"><i class="rt-icon2-bulb"></i></div></div><div class="media-body media-middle grey">643-68-5796<br>equestria@exml.com</div></div></div></div><div class="col-sm-4 text-sm-right"><a href="#" class="theme_button min_width_button color1 margin_0">Action</a></div></div></div></section>'
        },
        vertical1: {
            name: "Vertical parallax Action Section",
            description: "Section header with text and button",
            image: "builder/img/action2.png",
            parents: "#box_wrapper",
            layout: '<section class="ds parallax call_to_action section_padding_100"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="section_header">See Our Products</h2><p class="fontsize_20">It may look like CashGo is just in the business of loans on car titles. But for us, it’s much deeper than that. Our goal is to help you get the cash you need right when you need it most.</p><p class="topmargin_50"><a href="about.html" class="theme_button color1 min_width_button">About us</a></p></div></div></div></section>'
        },
        vertical2: {
            name: "Vertical Action Section",
            description: "Section header with text and button",
            image: "builder/img/action3.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_100"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="section_header">See Our Products</h2><p class="fontsize_20">It may look like CashGo is just in the business of loans on car titles. But for us, it’s much deeper than that. Our goal is to help you get the cash you need right when you need it most.</p><p class="topmargin_50"><a href="about.html" class="theme_button color1 min_width_button">About us</a></p></div></div></div></section>'
        },
        horizontal1: {
            name: "Horizontal Action Section",
            description: "Big text and button at the right",
            image: "builder/img/action4.png",
            parents: "#box_wrapper",
            layout: '<section class="ls ms section_padding_50 table_section table_section_sm"><div class="container"><div class="row text-xs-center"><div class="col-sm-9 to_animate animated pullDown" data-animation="pullDown"><h4 class="margin_0"><span class="highlight">Like this theme?</span> Get your copy of this great theme now!</h4></div><div class="col-sm-3 to_animate text-right text-xs-center" data-animation="pullDown"><a href="#" class="theme_button color1 min_width_button">Purchase</a></div></div></div></section>'
        },
        horizontal2: {
            name: "Two columns action section",
            description: "Two columns with big text and button to the left and image with text to the right",
            image: "builder/img/action5.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_bottom_75 section_padding_top_100"><div class="container"><div class="row"><div class="col-sm-4 to_animate" data-animation="fadeInLeft"><h2 class="section_header"><strong>Make<br><span class="highlight">Best Website</span><br>Right Now!</strong></h2><p>Lorem ipsum dolor sit amet consetetur sadipscing elitr, sediam nonumy.</p><p><a href="services.html" class="theme_button color1 min_width_button">Check Features</a></p></div><div class="col-sm-8"><p><img src="images/ipad.png" alt="" class="to_animate" data-animation="fadeInRight"></p><p class="divider_40 to_animate" data-animation="fadeInRight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores eit ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr:</p></div></div></div></section>'
        },
        subscribe1: {
            name: "Horizontal Subscribe Section",
            description: "Color horizontal section with mailchimp subscribe form",
            image: "builder/img/action6.png",
            parents: "#box_wrapper",
            layout: '<section class="cs section_padding_top_50 section_padding_bottom_50 table_section table_section_md columns_margin_top_20 columns_margin_bottom_20"><div class="container"><div class="row"><div class="col-md-8"><h3 class="bottommargin_0">Do You Want To Be New Member?</h3><p class="fontsize_20 grey margin_0">Sed ut perspiciatis unde omnis iste natus error sit.</p></div><div class="col-md-4"><div class="widget widget_mailchimp"><form class="signup" action="./" method="get"><div class="form-group margin_0"><input class="mailchimp_email form-control" name="email" type="email" placeholder="Enter Your Email"></div><button type="submit" class="theme_button no_bg_button color1">Sign Up!</button><div class="response"></div></form></div></div></div></div></section>'
        },
        subscribe2: {
            name: "Vertical Subscribe Section",
            description: "Parallax vertical section with mailchimp subscribe form",
            image: "builder/img/action7.png",
            parents: "#box_wrapper",
            layout: '<section class="section_subscribe ds ms parallax section_padding_50"><div class="container"><div class="row"><div class="col-sm-12 text-center to_animate" data-animation="pullUp"><h2 class="section_header"><span class="small">Subscribe to</span><span class="highlight">Newsletter</span></h2><div class="row"><div class="col-md-4 col-md-push-4 col-sm-6 col-sm-push-3 text-center"><div class="widget widget_mailchimp"><form class="signup" action="./" method="get"><div class="form-group"><input name="email" type="email" class="mailchimp_email form-control" placeholder="Email Address"></div><button type="submit" class="theme_button color1 no_bg_button">Send</button><div class="response"></div></form></div></div></div></div></div></div></section>'
        },
        subscribe3: {
            name: "Vertical Subscribe Section",
            description: "Parallax vertical section with mailchimp subscribe form",
            image: "builder/img/action8.png",
            parents: "#box_wrapper",
            layout: '<section id="subscribe" class="ds parallax section_padding_top_100 section_padding_bottom_100"><div class="container"><div class="row"><div class="col-lg-6 col-md-8 col-sm-10 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 text-center"><h2 class="section_header"><span class="small highlight">Sign up for</span>The Latest Newsletter</h2><p>Enter your Name and Email Address here to be updated. We promise not to spam! Each month we release new musical material for you.</p><div class="widget widget_mailchimp topmargin_30"><form class="signup" action="./" method="get"><div class="row columns_padding_5"><div class="col-sm-6"><div class="form-group"><input class="form-control mailchimp_fullname" name="fullname" required="" type="text" placeholder="Full Name*"></div></div><div class="col-sm-6"><div class="form-group"><input class="mailchimp_email form-control" name="email" required="" type="email" placeholder="Email Address*"></div></div><div class="col-sm-12"><button type="submit" class="theme_button color1 min_width_button">Subscribe now</button><div class="response"></div></div></div></form></div></div></div></div></section>'
        },
        subscribe4: {
            name: "Horizontal Subscribe Section",
            description: "Parallax horizontal section with mailchimp subscribe form",
            image: "builder/img/action9.png",
            parents: "#box_wrapper",
            layout: '<section id="subscribe" class="ds parallax section_subscribe section_padding_top_150 section_padding_bottom_150 table_section table_section_md"><div class="container"><div class="row"><div class="col-lg-3 col-md-4 text-center text-md-left"><h6 class="highlight margin_0">Subscribe to our</h6><h3 class="margin_0">Newsletter:</h3></div><div class="col-lg-9 col-md-8 text-center"><div class="widget widget_mailchimp"><form class="signup" action="./" method="get"><div class="subs-elements-wrapper"><div class="form-group margin_0"><input class="mailchimp_email form-control text-center" name="email" type="email" placeholder="Enter Your Email"></div><button type="submit" class="theme_button color1">Subscribe now!</button></div><div class="response"></div></form></div></div></div></div></section>'
        },
        popupvideo: {
            name: "Section with popup video",
            description: "Section with popup video button and title",
            image: "builder/img/action10.png",
            parents: "#box_wrapper",
            inputs: [{
                name: "Video link",
                id: "video_link",
                textBefore: "",
                textAfter: "",
                value: "",
                required: "",
                byDefault: "https://www.youtube.com/watch?v=2Kvl0vpV6lM"
            }],
            layout: '<section class="ds background_cover section_padding_top_150 section_padding_bottom_150"><div class="container"><div class="row"><div class="col-sm-12 text-center"><a href="{{video_link}}" class="theme_button inverse round_button margin_0" data-gal="prettyPhoto[gal-video]"><i class="fa fa-play" aria-hidden="true"></i></a><h5 class="highlight topmargin_40">New hot video!</h5><h2 class="section_header small bottommargin_0">Dj Bishop - Miami 2017 festival edm mix #26</h2></div></div></div></section>'
        }
    },
    "Features sections": {
        crowd1: {
            name: "Three color banners",
            description: "Light section with three banners",
            image: "builder/img/features1.png",
            parents: "#box_wrapper",
            layout: '<section id="fuatures" class="ds columns_padding_0 columns_margin_0"><div class="container-fluid"><div class="row flex-row"><div class="col-lg-4 col-md-6 col-sm-12"><div class="teaser media media-xxs-block inline-block cs with_padding big_padding margin_0"><div class="media-left media-middle"><div class="size_big inline-block round light_bg_color thick_border_icon"><i class="fa fa-truck highlight teaser_icon" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4 class="text-uppercase bottommargin_10"><a href="#0">Shipping Worldwide</a></h4><p>At vero eos accusam justo duo dolores rebum stet clita kasd gubergren.</p></div></div></div><div class="col-lg-4 col-md-6 col-sm-12"><div class="teaser media media-xxs-block inline-block cs main_color3 with_padding big_padding margin_0"><div class="media-left media-middle"><div class="size_big inline-block round light_bg_color thick_border_icon"><i class="fa fa-user highlight3 teaser_icon" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4 class="text-uppercase bottommargin_10"><a href="#0">Partnership Program</a></h4><p>No sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p></div></div></div><div class="col-lg-4 col-md-12 col-sm-12"><div class="teaser media media-xxs-block inline-block cs main_color2 with_padding big_padding margin_0"><div class="media-left media-middle"><div class="size_big inline-block round light_bg_color thick_border_icon"><i class="fa fa-tags highlight2 teaser_icon" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4 class="text-uppercase bottommargin_10"><a href="#0">Duscounts &amp; Sale</a></h4><p>Consetetur sacing elited diam nonumy eirmod tempor invidunt ut labore et.</p></div></div></div></div></div></section>'
        },
        crowd2: {
            name: "Text and image",
            description: "Section with image and text",
            image: "builder/img/features2.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_top_40 section_padding_bottom_40 table_section table_section_md columns_margin_bottom_30"><div class="container"><div class="row"><div class="col-md-6 col-md-push-6 text-center"><img src="images/about.png" alt=""></div><div class="col-md-6 col-md-pull-6"><h4 class="highlight">about me</h4><h2 class="section_header">Info/Bio</h2><p class="fontsize_20">At only 30 years of age, DJ has already established himself as the most successful american artist of the past two decades.</p><p>American DJ and EDM producer DJ Bishop  has released one studio album, and eight singles. Black sunglasses, a baseball cap flipped backwards, and his amazingly strong sense for hits that generate 9-digit streams and move crowds across the globe is what distinguishes him as an extremely talented and one of the most successful USA artists: Tyler Bishop. The Lower Saxony native is actually more the reserved type, who would much rather stand behind... <a href="about.html" class="more-link">Read more</a></p><div class="inline-content topmargin_25"><span class="small-text">Follow Me:</span><span><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-google" href="#" title="Twitter"></a><a class="social-icon socicon-linkedin" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a></span></div></div></div></div></section>'
        },
        crowd3: {
            name: "Title and side teasers",
            description: "Light section with title and four side teasers",
            image: "builder/img/features3.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_top_150 section_padding_bottom_130 columns_margin_bottom_30"><div class="container"><div class="row"><div class="col-md-4"><h2 class="section_header">Why Choose Us?</h2><a href="about.html" class="theme_button color1 min_width_button">About Us</a></div><div class="col-md-4 col-sm-6"><div class="teaser media hover_icon"><div class="media-left"><div class="teaser_icon rounded main_bg_color size_small"><i class="rt-icon2-diamond2"></i></div></div><div class="media-body toppadding_10"><h5 class="hover-color2"><a href="#">Newest Technologies</a></h5><p>Consetetur sadipscing elitr diam nonumy eirmod tempor invidunt.</p></div></div><div class="teaser media hover_icon"><div class="media-left"><div class="teaser_icon rounded main_bg_color size_small"><i class="rt-icon2-cloud"></i></div></div><div class="media-body toppadding_10"><h5 class="hover-color2"><a href="#">Taking Care of Nature</a></h5><p>Ut labore et dolore magna aliquyam erat sed diam voluptua.</p></div></div></div><div class="col-md-4 col-sm-6"><div class="teaser media hover_icon"><div class="media-left"><div class="teaser_icon rounded main_bg_color size_small"><i class="rt-icon2-diamond2"></i></div></div><div class="media-body toppadding_10"><h5 class="hover-color2"><a href="#">Fair Prices</a></h5><p>At vero eos et accusam ejusto duo dolores et ea rebum clita gubergren.</p></div></div><div class="teaser media hover_icon"><div class="media-left"><div class="teaser_icon rounded main_bg_color size_small"><i class="rt-icon2-tag2"></i></div></div><div class="media-body toppadding_10"><h5 class="hover-color2"><a href="#">High Customer Satisfaction</a></h5><p>Nosea takimata sanctus est lorem ipsum dolor sit amet.</p></div></div></div></div></div></section>'
        },
        crowd4: {
            name: "Title and side teasers",
            description: "Light section with title and side teasers",
            image: "builder/img/features4.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_top_100 section_padding_bottom_75 columns_padding_25"><div class="container"><div class="row"><div class="col-md-4 col-md-push-4 text-center"><h2 class="section_header">Why Us</h2><p class="lightgrey">At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum.</p><p class="topmargin_30"><a href="about.html" class="theme_button inverse min_width_button">About us</a></p></div><div class="col-sm-6 col-md-4 col-md-pull-4 text-right"><div class="topmargin_30"><div class="teaser media"><div class="media-body media-middle"><h5 class="text-uppercase entry-title">New Technologies</h5><p>At vero eos et accusam et justo duo dolores ea rebum</p></div><div class="media-right media-middle"><div class="teaser_icon main_bg_color size_small"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div></div></div><div class="teaser media"><div class="media-body media-middle"><h5 class="text-uppercase entry-title">Take Care of Nature</h5><p>Stet clita kasd gubergren no sea takimata sanctus</p></div><div class="media-right media-middle"><div class="teaser_icon main_bg_color size_small"><i class="fa fa-heart-o" aria-hidden="true"></i></div></div></div></div></div><div class="col-sm-6 col-md-4"><div class="topmargin_30"><div class="teaser media"><div class="media-left media-middle"><div class="teaser_icon main_bg_color size_small"><i class="fa fa-bolt" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h5 class="text-uppercase entry-title">Power &amp; Energy</h5><p>Est lorem ipsum dolor sit amet ipsum dolor sit amet</p></div></div><div class="teaser media"><div class="media-left media-middle"><div class="teaser_icon main_bg_color size_small"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h5 class="text-uppercase entry-title">Green Energy</h5><p>Consetetur sadipscing elitr, sed diam nonumy</p></div></div></div></div></div></div></section>'
        },
        crowd5: {
            name: "Contact info",
            description: "Parallax section with contact info",
            image: "builder/img/features5.png",
            parents: "#box_wrapper",
            layout: '<section class="ds page_contacts parallax section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30"><div class="container"><div class="row"><div class="col-lg-3 col-sm-4 text-center"><div><h3 class="text-uppercase">Address</h3><p>4850 Bertrand Inlet<br>San Francisco, California</p></div></div><div class="col-lg-6 col-sm-4 text-center"><div><h3 class="text-uppercase">Call us</h3><p><strong>Phone:</strong> (800) 253-76-84<br><strong>Fax:</strong> (800) 253-76-85</p></div></div><div class="col-lg-3 col-sm-4 col-sm-12 text-center"><div><h3 class="text-uppercase">Email us</h3><p>info@example.com<br>support@example.com</p></div></div></div></div></section>'
        },
        crowd6: {
            name: "Four side teasrs",
            description: "Section with title and four side teasers",
            image: "builder/img/features6.png",
            parents: "#box_wrapper",
            layout: '<section id="services" class="ls section_padding_top_100 section_padding_bottom_75"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="section_header big">Our <span class="highlight bold">Services</span></h2><p>Pork chop tongue bacon, pastrami chuck burgdoggen kevin corned beef. Boudin Ground round alcatra spare ribs leberkas pastrami</p></div></div><div class="row topmargin_30 columns_margin_bottom_30 columns_margin_top_0"><div class="col-md-6"><div class="with_padding with_background"><div class="media teaser"><div class="media-left media-middle"><div class="teaser-icon size_big highlight"><i class="fa fa-check-square-o" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4><a href="service-single.html">Daily Prayers</a></h4><p>Chicken meatball pastrami frankfurter jerky short loin. Pig swine biltong cow. Burgdog corned beef landjaeger.</p></div></div></div></div><div class="col-md-6"><div class="with_padding with_background"><div class="media teaser"><div class="media-left media-middle"><div class="teaser-icon size_big highlight"><i class="fa fa-check-square-o" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4><a href="service-single.html">Сontinuous Teaching</a></h4><p>Spare ribs tongue doner, cupim ham tri-tip tender short loin short ribs. Landjaeger spare ribs swine t-bone.</p></div></div></div></div><div class="col-md-6"><div class="with_padding with_background"><div class="media teaser"><div class="media-left media-middle"><div class="teaser-icon size_big highlight"><i class="fa fa-check-square-o" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4><a href="service-single.html">Community Helpers</a></h4><p>Sausage swine porchetta meatloaf. Cow venison sirloin drumstick. Biltong tri-tip ball tip drumstick swine spare.</p></div></div></div></div><div class="col-md-6"><div class="with_padding with_background"><div class="media teaser"><div class="media-left media-middle"><div class="teaser-icon size_big highlight"><i class="fa fa-check-square-o" aria-hidden="true"></i></div></div><div class="media-body media-middle"><h4><a href="service-single.html">Set of Sermons</a></h4><p>Cow frankfurter turkey salami. Capicola shank frankfurter, hamburger porchetta pastrami shoulder.</p></div></div></div></div></div></div></section>'
        },
        crowd7: {
            name: "Four centered teasers",
            description: "Four centered teasers",
            image: "builder/img/features7.png",
            parents: "#box_wrapper",
            layout: '<section class="ls ms section_padding_top_100 section_padding_bottom_75 columns_padding_25 columns_margin_bottom_30"><div class="container"><div class="row"><div class="col-md-3 col-sm-6 to_animate" data-animation="pullUp"><div class="teaser text-center"><div class="teaser_icon main_bg_color round size_small"><i class="fa fa-recycle" aria-hidden="true"></i></div><h4 class="poppins"><a href="#">Heating Water</a></h4><p>Guaranteed that all of your universal waste management is performed safely and responsibly.</p></div></div><div class="col-md-3 col-sm-6 to_animate" data-animation="pullUp"><div class="teaser text-center"><div class="teaser_icon main_bg_color round size_small"><i class="fa fa-volume-down" aria-hidden="true"></i></div><h4 class="poppins"><a href="#">Quiet Operations</a></h4><p>No sea takimata sanctus estlrem ipsum dolor amet consetetur sadipscing elitr</p></div></div><div class="col-md-3 col-sm-6 clear-sm to_animate" data-animation="pullUp"><div class="teaser text-center"><div class="teaser_icon main_bg_color round size_small"><i class="fa fa-bars" aria-hidden="true"></i></div><h4 class="poppins"><a href="#">Wide Selection</a></h4><p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed</p></div></div><div class="col-md-3 col-sm-6 to_animate" data-animation="pullUp"><div class="teaser text-center"><div class="teaser_icon main_bg_color round size_small"><i class="fa fa-leaf" aria-hidden="true"></i></div><h4 class="poppins"><a href="#">Energy Efficiency</a></h4><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p></div></div></div></div></section>'
        },
        crowd8: {
            name: "Image and text",
            description: "Light section with text and image",
            image: "builder/img/features8.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_top_130 section_padding_bottom_130 columns_padding_25 columns_margin_bottom_30 table_section table_section_md"><div class="container"><div class="row"><div class="col-lg-7 col-md-6"><img src="images/gallery/10.jpg" alt=""></div><div class="col-lg-5 col-md-6"><h4 class="text-uppercase">Secure process</h4><p>Doner meatball pastrami pancetta short loin rump, kevin beef ribs beef brisket cow meatloaf pork hamburger ribeye. Salami capicola sirloin bresaola ball tip meatloaf prosciutto hamburger flank pastrami frankfurter ham pork.</p><ul class="list2 checklist topmargin_30"><li>Picanha prosciutto bresaola pancetta</li><li>Kielbasa pork chop tongue filet mignon</li><li>Pastrami hamburger rump strip steak</li></ul><p class="topmargin_40"><a href="service-single.html" class="theme_button color1 min_width_button">read more</a></p></div></div></div></section>'
        },
        crowd9: {
            name: "Image and text",
            description: "Light section with text and image",
            image: "builder/img/features9.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_top_130 section_padding_bottom_130 columns_padding_25 columns_margin_bottom_30 table_section table_section_md"><div class="container"><div class="row"><div class="col-lg-7 col-md-6 col-lg-push-5 col-md-push-6"><img src="images/gallery/10.jpg" alt=""></div><div class="col-lg-5 col-md-6 col-lg-pull-7 col-md-pull-6"><h4 class="text-uppercase">No Payment Penalty</h4><p>Frankfurter bresaola ball tip kielbasa. Chuck pork belly tail pork loin, beef ribs tongue leberkas prosciutto. Strip steak tenderloin frankfurter, meatball drumstick boudin leberkas cupim beef t-bone meatloaf ribeye alcatra turkey.</p><ul class="list2 checklist"><li>Alcatra cow spare ribs andouille</li><li>Landjaeger ham hock drumstick</li><li>Bacon filet mignon alcatra corned</li></ul><p class="topmargin_40"><a href="service-single.html" class="theme_button color1 min_width_button">read more</a></p></div></div></div></section>'
        },
        features2: {
            name: "Centered side teasers",
            description: "Light section with six side teasers",
            image: "builder/img/features10.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_75"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="section_header">Our Features</h2><p>At vero eos et accusam et justo duo dolores et ea rebum stet clita.<br>Kasd gubergren no sea.</p></div></div><div class="row"><div class="col-md-4"><div class="teaser media to_animate" data-animation="pullDown"><div class="media-left"><div class="teaser_icon main_bg_color size_small round"><i class="rt-icon2-globe2"></i></div></div><div class="media-body"><h4 class="media-heading">Over the World</h4><p>Aliquam sed diam voluptua vero eoset.</p></div></div><div class="teaser media to_animate" data-animation="pullDown"><div class="media-left"><div class="teaser_icon main_bg_color size_small round"><i class="rt-icon2-group"></i></div></div><div class="media-body"><h4 class="media-heading">Great Community</h4><p>Stet clita kasd gubergren no sea takimata.</p></div></div></div><div class="col-md-4"><div class="teaser media to_animate" data-animation="pullDown"><div class="media-left"><div class="teaser_icon main_bg_color size_small round"><i class="rt-icon2-heart3"></i></div></div><div class="media-body"><h4 class="media-heading">Made with Love</h4><p>Consetetur sadipscing elitr sed diam nonumy.</p></div></div><div class="teaser media to_animate" data-animation="pullDown"><div class="media-left"><div class="teaser_icon main_bg_color size_small round"><i class="rt-icon2-chart-line"></i></div></div><div class="media-body"><h4 class="media-heading">Growing Progress</h4><p>Eirmod tempor invidunt ut labore et dolore magna.</p></div></div></div><div class="col-md-4"><div class="teaser media to_animate" data-animation="pullDown"><div class="media-left"><div class="teaser_icon main_bg_color size_small round"><i class="rt-icon2-input-checked"></i></div></div><div class="media-body"><h4 class="media-heading">The right choice</h4><p>Aliquam sed diam voluptua vero eoset.</p></div></div><div class="teaser media to_animate" data-animation="pullDown"><div class="media-left"><div class="teaser_icon main_bg_color size_small round"><i class="rt-icon2-calender"></i></div></div><div class="media-body"><h4 class="media-heading">Time Saver</h4><p>Stet clita kasd gubergren no sea takimata.</p></div></div></div></div></div></section>'
        },
        features3: {
            name: "Centered vertical teasers",
            description: "Grey section with three vertical teasers",
            image: "builder/img/features11.png",
            parents: "#box_wrapper",
            layout: '<section class="ls ms section_padding_75"><div class="container"><div class="row"><div class="col-sm-12 text-center"><h2 class="section_header">Our Features</h2><p>At vero eos et accusam et justo duo dolores et ea rebum stet clita.<br>Kasd gubergren no sea.</p></div></div><div class="row"><div class="col-sm-4 to_animate"><div class="teaser text-center"><div class="teaser_icon main_bg_color size_normal round"><i class="rt-icon2-briefcase"></i></div><h4>Our Goals</h4><p>At vet accusam et justo duo dolores et ea rebum stet clita kasd gubergren noea takimata sanctus est Lorem ipsum dolor.</p><a href="#" class="theme_button inverse">Know More</a></div></div><div class="col-sm-4 to_animate"><div class="teaser text-center"><div class="teaser_icon main_bg_color size_normal round"><i class="rt-icon2-lightbulb3"></i></div><h4>Our Ideas</h4><p>Elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua.</p><a href="#" class="theme_button inverse">Know More</a></div></div><div class="col-sm-4 to_animate"><div class="teaser text-center"><div class="teaser_icon main_bg_color size_normal round"><i class="rt-icon2-bell"></i></div><h4>Special Offers</h4><p>Stet clita kasd gubergren takimata sanctus estorem ipsum dolor sit amet ipsum dolor sit amet, consetetur sadipscing.</p><a href="#" class="theme_button inverse">Know More</a></div></div></div></div></section>'
        },
        features4: {
            name: "Wide three teasers",
            description: "Color section with fullwidth container and three icon action teasers",
            image: "builder/img/features12.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="cs section_padding_top_50 section_padding_bottom_25 parallax"><div class="container-fluid"><div class="row"><div class="col-sm-4 to_animate"><div class="teaser text-center"><div class="teaser_icon highlight size_big"><i class="rt-icon2-briefcase"></i></div><h4>About Company</h4><p>Know more about our company</p><a href="#" class="theme_button inverse">About Page</a></div></div><div class="col-sm-4 to_animate"><div class="teaser text-center"><div class="teaser_icon highlight size_big"><i class="rt-icon2-edit"></i></div><h4>Blog Posts</h4><p>Check out our recent news</p><a href="#" class="theme_button inverse">Blog Page</a></div></div><div class="col-sm-4 to_animate"><div class="teaser text-center"><div class="teaser_icon highlight size_big"><i class="rt-icon2-gallery"></i></div><h4>Our Gallery</h4><p>Check out our portfolio and photos</p><a href="#" class="theme_button inverse">Gallery Page</a></div></div></div></div></section>'
        },
        mover7: {
            name: "Four side teasers",
            description: "Color section with four side small teasers",
            image: "builder/img/features13.png",
            parents: "#box_wrapper",
            layout: '<section class="cs section_padding_top_25 section_padding_bottom_25 columns_padding_0"><div class="container"><div class="row"><div class="col-md-3 col-sm-6"><div class="media small-teaser teaser fontsize_14"><div class="media-left media-middle"><div class="teaser_icon border_icon black round size_small"><i class="fa fa-map-marker"></i></div></div><div class="media-body media-middle"><span class="medium black">Our Location:</span><br><span>46 Blair Court, Slater, MO 65349</span></div></div></div><div class="col-md-3 col-sm-6"><div class="media small-teaser teaser fontsize_14"><div class="media-left media-middle"><div class="teaser_icon border_icon black round size_small"><i class="fa fa-clock-o"></i></div></div><div class="media-body media-middle"><span class="medium black">Open Hours:</span><br><span>Weekdays 8.00-18.00, Sat: off</span></div></div></div><div class="col-md-3 col-sm-6"><div class="media small-teaser teaser fontsize_14"><div class="media-left media-middle"><div class="teaser_icon border_icon black round size_small"><i class="fa fa-pencil"></i></div></div><div class="media-body media-middle"><span class="medium black">Our Email:</span><br><span>equestria@exml.com</span></div></div></div><div class="col-md-3 col-sm-6"><div class="media small-teaser teaser fontsize_14"><div class="media-left media-middle"><div class="teaser_icon border_icon black round size_small"><i class="fa fa-phone"></i></div></div><div class="media-body media-middle"><span class="medium black">Call Us Today</span><br><span>+123-456-7890</span></div></div></div></div></div></section>'
        }
    },
    "Text Sections ": {
        onecolumn: {
            name: "One column",
            description: "One column light text section with h3 header",
            image: "builder/img/text1.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_50"><div class="container"><div class="row"><div class="col-sm-12"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        twocolumns: {
            name: "Two columns",
            description: "Two columns grey text section with h3 headers",
            image: "builder/img/text2.png",
            parents: "#box_wrapper",
            layout: '<section class="ls ms section_padding_50"><div class="container"><div class="row"><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        threecolumns: {
            name: "Three columns",
            description: "Three columns text section with h3 headers",
            image: "builder/img/text3.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_50"><div class="container"><div class="row"><div class="col-sm-4"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-4"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-4"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        fourcolumns: {
            name: "Four columns",
            description: "Four columns grey text section with h3 headers",
            image: "builder/img/text4.png",
            parents: "#box_wrapper",
            layout: '<section class="ls ms section_padding_50"><div class="container"><div class="row"><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        textimage: {
            name: "Text and image",
            description: "Verticaly aligned text in left column and image in right column",
            image: "builder/img/textimage1.png",
            parents: "#box_wrapper",
            layout: '<section class="ls ms section_padding_50 table_section"><div class="container"><div class="row"><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-6 text-center"><img src="images/ipad.png" alt=""></div></div></div></section>'
        },
        imagetext: {
            name: "Image and text",
            description: "Verticaly aligned image in left column and text in right",
            image: "builder/img/textimage2.png",
            parents: "#box_wrapper",
            layout: '<section class="ls section_padding_50 table_section"><div class="container"><div class="row"><div class="col-sm-6 text-center"><img src="images/ipad.png" alt=""></div><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        darkonecolumn: {
            name: "One column dark",
            description: "One column dark text section with h3 header",
            image: "builder/img/text1dark.png",
            parents: "#box_wrapper",
            layout: '<section class="ds section_padding_50"><div class="container"><div class="row"><div class="col-sm-12"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        darktwocolumns: {
            name: "Two columns darkgrey",
            description: "Two columns darkgrey text section with h3 headers",
            image: "builder/img/text2dark.png",
            parents: "#box_wrapper",
            layout: '<section class="ds ms section_padding_50"><div class="container"><div class="row"><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        darkthreecolumns: {
            name: "Three columns dark",
            description: "Three columns dark text section with h3 headers",
            image: "builder/img/text3dark.png",
            parents: "#box_wrapper",
            layout: '<section class="ds section_padding_50"><div class="container"><div class="row"><div class="col-sm-4"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-4"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-4"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        darkfourcolumns: {
            name: "Four columns darkgrey",
            description: "Darkgrey four columns text section with h3 headers",
            image: "builder/img/text4dark.png",
            parents: "#box_wrapper",
            layout: '<section class="ds ms section_padding_50"><div class="container"><div class="row"><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-3"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        },
        darktextimage: {
            name: "Text and image",
            description: "Darkgrey verticaly aligned text in left column and image in right column",
            image: "builder/img/textimage2dark.png",
            parents: "#box_wrapper",
            layout: '<section class="ds ms section_padding_50 table_section"><div class="container"><div class="row"><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div><div class="col-sm-6 text-center"><img src="images/ipad.png" alt=""></div></div></div></section>'
        },
        darkimagetext: {
            name: "Image and text",
            description: "Dark verticaly aligned image in left column and text in right",
            image: "builder/img/textimage1dark.png",
            parents: "#box_wrapper",
            layout: '<section class="ds section_padding_50 table_section"><div class="container"><div class="row"><div class="col-sm-6 text-center"><img src="images/ipad.png" alt=""></div><div class="col-sm-6"><h3>H3 heading</h3><p>Paragraph text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore in blanditiis tempora aliquam omnis recusandae maxime fugiat error dolores vel reiciendis quia, laboriosam dolorum, ipsa corrupti. Laboriosam odio ducimus harum.</p></div></div></div></section>'
        }
    },
    "Block elements": {
        team: {
            name: "Team Item",
            description: "Put it in Bootstrap Column",
            image: "builder/img/blogitem1.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<div class="vertical-item content-padding with_background bottom_color_border rounded text-center"><div class="item-media"><img src="images/team/01.jpg" alt=""></div><div class="item-content"><h4 class="entry-title bottommargin_0"><a href="team-single.html">Alvin Manning</a></h4><p class="small-text highlight">Producer</p><div><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a></div></div></div>'
        },
        block1: {
            name: "Slide media Item",
            description: "Vertical item. Put it in Bootstrap Column",
            image: "builder/img/blogitem2.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<div class="vertical-item slide-media text-center loop-color"><div class="item-media-wrap"><img src="images/albums/01.jpg" alt=""><div class="item-media back-media"><img src="images/albums/cd.png" alt=""></div><div class="item-media"><img src="images/albums/01.jpg" alt=""><div class="media-links no-color-overlay"><div class="links-wrap"><a href="#0" class="p-link"><span class="sr-only">link</span></a></div><div class="bottom-links"><a href="https://play.google.com/store/music" target="blanck"><img src="images/google-play.png" alt=""></a><a href="https://itunes.apple.com/us/genre/music" target="blanck"><img src="images/app-store.png" alt=""></a></div></div></div></div><div class="item-content topmargin_30"><h4 class="entry-title bottommargin_0"><a href="#0">World\'s apart (2016)</a></h4><span class="highlight">$99,85</span></div></div>'
        },
        block3: {
            name: "Vertical Item",
            description: "Vertical item. Put it in Bootstrap Column",
            image: "builder/img/blogitem3.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<div class="vertical-item content-absolute hover-entry-content text-center"><div class="item-media top_rounded overflow_hidden"><img src="images/events/01.jpg" alt=""></div><div class="item-content ds"><h4 class="entry-title bottommargin_0"><a href="team-single.html">Music art united</a></h4><div class="media small-media small-text grey inline-block margin_0 hover-hidden"><div class="media-left"><i class="fa fa-calendar cons-width highlight" aria-hidden="true"></i></div><div class="media-body">11/08/2017</div></div><div class="entry-content grey"><div class="entry-meta small-text text-left"><div class="content-justify"><div class="media small-media inline-block margin_0"><div class="media-left"><i class="fa fa-calendar cons-width highlight" aria-hidden="true"></i></div><div class="media-body">11/08/2017</div></div>\t<div class="media small-media inline-block margin_0"><div class="media-left"><i class="fa fa-clock-o cons-width highlight" aria-hidden="true"></i></div><div class="media-body">05:00 PM</div></div></div><div class="media small-media margin_0"><div class="media-left"><i class="fa fa-map-marker cons-width highlight" aria-hidden="true"></i></div><div class="media-body">Square Hilbrow, Milan, Italy.</div></div></div><div class="topmargin_20"><a href="#" class="theme_button inverse">Buy Tickets</a></div></div></div></div>'
        },
        block4: {
            name: "Vertical Item",
            description: "Vertical item. Put it in Bootstrap Column",
            image: "builder/img/blogitem4.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding with_background rounded overflow_hidden text-center"><div class="item-media top_rounded overflow_hidden"><img src="images/gallery/11.jpg" alt=""><div class="media-links"><a href="blog-single-right.html" class="abs-link"></a></div></div><div class="item-content"><header class="entry-header"><div class="entry-meta small-text content-justify"><span class="categories-links highlightlinks"><a href="#0">Life</a></span><span class="greylinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">14/09/2017</time></a></span></div><h4 class="entry-title"><a href="blog-single-right.html">I stayed at the Resident Hotel In Miami</a></h4></header><div class="entry-content"><p>Jowl pork beef ball tip burgdoggen. Pork chop jowl boudin, pork loin alcatra leberkas cow tenderloin rump shankle bacon.</p></div></div><footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer></article>'
        },
        block5: {
            name: "Vertical Item",
            description: "Vertical item. Put it in Bootstrap Column",
            image: "builder/img/blogitem5.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding with_background rounded overflow_hidden text-center"><div class="item-media top_rounded overflow_hidden"><div class="embed-responsive embed-responsive-3by2"><a href="//player.vimeo.com/video/1084537" class="embed-placeholder"><img src="images/gallery/11.jpg" alt=""></a></div></div><div class="item-content"><header class="entry-header"><h4 class="entry-title"><a href="blog-single-right.html">I stayed at the Resident Hotel In Miami</a></h4></header></div><footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer></article>'
        },
        blog2: {
            name: "Vertical Item",
            description: "Vertical blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem6.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-standard"><div class="item-media entry-thumbnail"><img src="images/gallery/12.jpg" alt=""><div class="media-links"><a href="blog-single-right.html" class="abs-link"></a></div></div><div class="item-content"><header class="entry-header"><div class="entry-meta small-text no-spacing content-justify"><span class="highlightlinks"><a href="blog-right.html">music</a></span><span class="greylinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></span></div><h4 class="entry-title"><a href="blog-single-right.html">Post with large image</a></h4></header><div class="entry-content"><p>Short ribs tenderloin corned beef pork. Picanha filet mignon cupim pastrami flank turkey jowl pork pork belly biltong venison sausage leberkas strip steak chicken. Pork chop pig prosciutto beef ribs ribeye brisket doner corned beef cupim frankfurter. Pancetta shoulder jerky, tenderloin cupim tail ribeye bresaola short ribs pig frankfurter doner ground round andouille. Pig sausage picanha, cupim strip steak jowl alcatra turducken.</p></div></div><footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer></article>'
        },
        blog3: {
            name: "Horizontal Item",
            description: "Horizontal blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem7.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="post format-small-image"><div class="side-item side-md content-padding big-padding with_background rounded overflow_hidden"><div class="row"><div class="col-md-5"><div class="item-media entry-thumbnail"><img src="images/gallery-square/04.jpg" alt=""><div class="media-links"><a href="blog-single-right.html" class="abs-link"></a></div></div></div><div class="col-md-7">\x3c!-- <div> --\x3e<div class="item-content"><header class="entry-header"><div class="entry-meta small-text no-spacing content-justify"><span class="highlightlinks"><a href="blog-right.html">songs</a></span><span class="greylinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></span></div><h4 class="entry-title"><a href="blog-single-right.html" rel="bookmark">Post With Small Image</a></h4></header><div class="entry-content"><p>Pancetta shoulder jerky, tenderloin cupim tail ribeye bresaola short ribs pig frankfurter doner ground round andouille.</p></div></div><footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer>\x3c!-- </div> --\x3e</div></div></div></article>'
        },
        blog4: {
            name: "Without image Item",
            description: "Without image blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem8.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-aside "><div class="item-content entry-content"><header class="entry-header"><div class="entry-meta small-text no-spacing content-justify"><span class="highlightlinks"><a href="blog-right.html">news</a></span><span class="greylinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></span></div><h4 class="entry-title"><a href="blog-single-right.html" rel="bookmark">Post Format: Aside</a></h4></header>\x3c!-- .entry-header --\x3e<div class="entry-content"><p>“I never tried to prove nothing, just wanted to give a good show. My life has always been my music, it\'s always come first, but the music ain\'t worth nothing if you can\'t lay it on the public. The main thing is to live for that audience, \'cause what you\'re there for is to please the people.”</p></div></div>\x3c!-- eof .item-content --\x3e<footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer></article>'
        },
        blog5: {
            name: "Status Item",
            description: "Status blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem9.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding big-padding text-center ds bg_teaser after_cover darkgrey_bg post format-status rounded overflow_hidden"><img src="images/status_bg.jpg" alt=""><div class="item-content entry-content"><header class="entry-header"><img alt="" src="images/faces/03.jpg" class="avatar avatar-96 photo avatar-default round"><div class="topmargin_20 small-text no-spacing highlightlinks"><a href="blog-right.html">music</a></div><div class="small-text no-spacing darklinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></div><h4 class="entry-title hover-color2"><a href="blog-single-right.html" rel="bookmark">Post Format: Status</a></h4></header>\x3c!-- .entry-header --\x3e</div>\x3c!-- eof .item-content --\x3e</article>'
        },
        blog6: {
            name: "Link Item",
            description: "Status blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem10.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding big-padding with_background rounded overflow_hidden post format-link"><div class="item-content entry-content"><header class="entry-header"><div class="entry-meta small-text no-spacing content-justify"><span class="highlightlinks"><a href="blog-right.html">news</a></span><span class="greylinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></span></div><h4 class="entry-title"><a href="blog-single-right.html" rel="bookmark">Post Format: Link</a></h4></header>\x3c!-- .entry-header --\x3e</div>\x3c!-- eof .item-content --\x3e<footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer></article>'
        },
        blog7: {
            name: "Image Item",
            description: "Image blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem11.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item post content-padding big-padding with_background rounded overflow_hidden format-image"><div class="item-media entry-thumbnail"><img src="images/gallery/06.jpg" alt=""><div class="media-links"><a href="blog-single-right.html" class="abs-link"></a></div></div> \x3c!-- .item-media --\x3e<div class="item-content entry-content"><header class="entry-header"><div class="entry-meta small-text no-spacing content-justify"><span class="highlightlinks"><a href="blog-right.html">songs</a></span><span class="greylinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></span></div><h4 class="entry-title"><a href="blog-single-right.html" rel="bookmark">Post format: Image</a></h4></header>\x3c!-- .entry-header --\x3e</div>\x3c!-- eof .item-content --\x3e<footer class="entry-meta entry-footer small-text greylinks bottom_color_border"><div class="inline-content"><a href="#0"><i class="fa fa-user rightpadding_5" aria-hidden="true"></i><span>Admin</span></a><a href="#0"><i class="fa fa-comment rightpadding_5" aria-hidden="true"></i><span class="value">1263</span></a><span><i class="fa fa-eye rightpadding_5" aria-hidden="true"></i><span class="value">3698</span></span></div></footer></article>'
        },
        blog8: {
            name: "Quote Item",
            description: "Quote blog post item. Put it in Bootstrap Column",
            image: "builder/img/blogitem12.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<article class="vertical-item content-padding big-padding ds bg_teaser after_cover darkgrey_bg post format-quote rounded overflow_hidden"><img src="images/gallery/08.jpg" alt=""><div class="item-content entry-content text-center"><header class="entry-header"><div class="entry-meta small-text no-spacing content-justify"><span class="highlightlinks"><a href="blog-right.html">news</a></span><span class="darklinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></span></div></header><div class="entry-content"><blockquote>I’ve been bringing my daughter to your riding school for the last 3 years. It is a fantastic place to ride whether you’re starting for the first time or have some.<div class="item-meta"><h5>William B. Dean</h5><p class="small-text highlight">fan</p></div></blockquote></div>\x3c!-- .entry-content --\x3e</div>\x3c!-- eof .item-content --\x3e</article>'
        }
    },
    "Contact Sections": {
        contact1: {
            name: "Contact 1",
            description: "Contact form and list of contacts",
            image: "builder/img/contact1.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="ls columns_padding_25 section_padding_top_75 section_padding_bottom_130"><div class="container"><div class="row"><div class="col-sm-8 to_animate" data-animation="scaleAppear"><h3>Contact Form</h3><form class="contact-form row columns_padding_10" method="post" action="./"><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="name">Full Name <span class="required">*</span></label><input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name"></div></div><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="email">Email address<span class="required">*</span></label><input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control" placeholder="Email Address"></div></div><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="phone">Phone Number</label><input type="text" size="30" value="" name="phone" id="phone" class="form-control" placeholder="Phone Number"></div></div><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="subject">Subject</label><input type="text" size="30" value="" name="subject" id="subject" class="form-control" placeholder="Subject"></div></div><div class="col-sm-12"><div class="form-group bottommargin_0"><label for="message">Message</label><textarea aria-required="true" rows="5" cols="45" name="message" id="message" class="form-control" placeholder="Message"></textarea></div></div><div class="col-sm-12"><div class="contact-form-submit topmargin_10"><button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button color1 min_width_button">Send now</button></div></div></form></div>\x3c!--.col-* --\x3e<div class="col-sm-4 to_animate" data-animation="scaleAppear"><h3>Contact Info</h3><div class="topmargin_30"><div class="media small-media"><div class="media-left"><i class="fa fa-map-marker highlight" aria-hidden="true"></i></div><div class="media-body">Some Adress, Some City, CA 47812</div></div><div class="media small-media"><div class="media-left"><i class="fa fa-phone highlight" aria-hidden="true"></i></div><div class="media-body">8(800) 723 8269</div></div><div class="media small-media"><div class="media-left"><i class="fa fa-print highlight" aria-hidden="true"></i></div><div class="media-body">8(800) 723 8269</div></div><div class="media small-media"><div class="media-left"><i class="fa fa-envelope highlight" aria-hidden="true"></i></div><div class="media-body greylinks"><a href="mailto:dj_bishop_fan@example.com">dj_bishop_fan@example.com</a></div></div></div></div>\x3c!--.col-* --\x3e</div>\x3c!--.row --\x3e</div>\x3c!--.container --\x3e</section>'
        },
        contact2: {
            name: "Contact 2",
            description: "Contact info icon teasers and full width contact form",
            image: "builder/img/contact2.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="ls section_padding_top_100 section_padding_bottom_75"><div class="container"><div class="row topmargin_40"><div class="col-sm-4 to_animate" data-animation="pullDown"><div class="teaser text-center"><div class="teaser_icon highlight size_normal"><i class="rt-icon2-phone5"></i></div><p><span class="grey">Phone:</span> +12 345 678 9123<br><span class="grey">Fax:</span> +12 345 678 9123</p></div></div><div class="col-sm-4 to_animate" data-animation="pullDown"><div class="teaser text-center"><div class="teaser_icon highlight size_normal"><i class="rt-icon2-location2"></i></div><p> PO Box 54378<br>4321 Your Address,<br>Your City, Your Country</p></div></div><div class="col-sm-4 to_animate" data-animation="pullDown"><div class="teaser text-center"><div class="teaser_icon highlight size_normal"><i class="rt-icon2-mail"></i></div><p>dj_bishop_fan@example.com</p></div></div></div><div class="row topmargin_40"><div class="col-sm-12 to_animate"><form class="contact-form columns_padding_5" method="post" action="./"><div class="row"><div class="col-sm-6"><p class="form-group"><label for="name">Full Name <span class="required">*</span></label><i class="fa fa-user highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name"></p><p class="form-group"><label for="email">Email address<span class="required">*</span></label><i class="fa fa-envelope highlight" aria-hidden="true"></i><input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control" placeholder="Email Address"></p><p class="form-group"><label for="subject">Subject<span class="required">*</span></label><i class="fa fa-flag highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="subject" id="subject" class="form-control" placeholder="Subject"></p></div><div class="col-sm-6"><p class="contact-form-message form-group"><label for="message">Message</label><i class="fa fa-comment highlight" aria-hidden="true"></i><textarea aria-required="true" rows="3" cols="45" name="message" id="message" class="form-control" placeholder="Message"></textarea></p></div></div><div class="row"><div class="col-sm-12"><p class="contact-form-submit text-center topmargin_10"><button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button with_min_width color1">Send Message</button></p></div></div></form></div></div></div></section>'
        },
        contact3: {
            name: "Contact 3",
            description: "Parallax section with Icon teasers and full width color contact form",
            image: "builder/img/contact3.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="ls section_padding_top_75 section_padding_bottom_100"><div class="container"><div class="row"><div class="col-sm-4 to_animate" data-animation="pullDown"><div class="teaser text-center"><div class="teaser_icon highlight size_small"><i class="rt-icon2-phone5"></i></div><p><span class="grey">Phone:</span> +12 345 678 9123<br><span class="grey">Fax:</span> +12 345 678 9123</p></div></div><div class="col-sm-4 to_animate" data-animation="pullDown"><div class="teaser text-center"><div class="teaser_icon highlight size_small"><i class="rt-icon2-location2"></i></div><p> PO Box 54378<br>4321 Your Address,<br>Your City, Your Country</p></div></div><div class="col-sm-4 to_animate" data-animation="pullDown"><div class="teaser text-center"><div class="teaser_icon highlight size_small"><i class="rt-icon2-world"></i></div><p>dj_bishop_fan@example.com</p><p><a href="#" class="social-icon color-icon socicon-twitter"></a><a href="#" class="social-icon color-icon socicon-facebook"></a><a href="#" class="social-icon color-icon socicon-google"></a><a href="#" class="social-icon color-icon socicon-pinterest"></a></p>    </div></div></div><div class="row topmargin_60"><div class="col-sm-12 to_animate"><form class="contact-form cs parallax columns_padding_5" method="post" action="./"><div class="row"><div class="col-sm-6"><p class="form-group"><label for="name">Full Name <span class="required">*</span></label><i class="fa fa-user highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name"></p><p class="form-group"><label for="email">Email address<span class="required">*</span></label><i class="fa fa-envelope highlight" aria-hidden="true"></i><input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control" placeholder="Email Address"></p><p class="form-group"><label for="subject">Subject<span class="required">*</span></label><i class="fa fa-flag highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="subject" id="subject" class="form-control" placeholder="Subject"></p></div><div class="col-sm-6"><p class="contact-form-message form-group"><label for="message">Message</label><i class="fa fa-comment highlight" aria-hidden="true"></i><textarea aria-required="true" rows="3" cols="45" name="message" id="message" class="form-control" placeholder="Message"></textarea></p></div></div><div class="row"><div class="col-sm-12"><p class="contact-form-submit text-center topmargin_30"><button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button">Send Message</button></p></div></div></form></div></div></div></section>'
        },
        contact4: {
            name: "Contact 4",
            description: "Contact form and list of contacts",
            image: "builder/img/contact4.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="ls columns_padding_25 section_padding_top_100 section_padding_bottom_100"><div class="container"><div class="row"><div class="col-sm-12"><h4>Contact Form</h4></div></div><div class="row"><div class="col-md-8 to_animate" data-animation="scaleAppear"><form class="contact-form columns_padding_5 bottommargin_40" method="post" action="./"><div class="row"><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="name">Full Name <span class="required">*</span></label><i class="fa fa-user highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name"></div></div><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="phone">Phone Number<span class="required">*</span></label><i class="fa fa-phone highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="phone" id="phone" class="form-control" placeholder="Phone Number"></div></div><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="email">Email address<span class="required">*</span></label><i class="fa fa-envelope highlight" aria-hidden="true"></i><input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control" placeholder="Email Address"></div></div><div class="col-sm-6"><div class="form-group bottommargin_0"><label for="subject">Subject<span class="required">*</span></label><i class="fa fa-flag highlight" aria-hidden="true"></i><input type="text" aria-required="true" size="30" value="" name="subject" id="subject" class="form-control" placeholder="Subject"></div></div><div class="col-sm-12"><div class="contact-form-message form-group bottommargin_0"><label for="message">Message</label><i class="fa fa-comment highlight" aria-hidden="true"></i><textarea aria-required="true" rows="3" cols="45" name="message" id="message" class="form-control" placeholder="Message"></textarea></div></div><div class="col-sm-12 bottommargin_0"><div class="contact-form-submit topmargin_10"><button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button color1 wide_button margin_0">Send message</button></div></div></div></form></div><div class="col-md-4 to_animate" data-animation="scaleAppear"><ul class="list1 no-bullets no-top-border no-bottom-border"><li><div class="media"><div class="media-left"><i class="rt-icon2-shop highlight fontsize_18"></i></div><div class="media-body"><h6 class="media-heading grey">Postal Address:</h6>PO Box 97845 Some str. 567, Los Angeles, California, United States</div></div></li><li><div class="media"><div class="media-left"><i class="rt-icon2-phone5 highlight fontsize_18"></i></div><div class="media-body"><h6 class="media-heading grey">Phone:</h6>8(800) 123-12345</div></div></li><li><div class="media"><div class="media-left"><i class="rt-icon2-stack4 highlight fontsize_18"></i></div><div class="media-body"><h6 class="media-heading grey">Fax:</h6>8(800) 123-12345</div></div></li><li><div class="media"><div class="media-left"><i class="rt-icon2-mail highlight fontsize_18"></i></div><div class="media-body greylinks"><h6 class="media-heading grey">Email:</h6><a href="mailto:your@mail.com">dj_bishop_fan@example.com</a></div></div></li></ul></div></div></div></section>'
        }
    },
    Footers: {
        newfooter: {
            name: "Dark centered footer",
            description: "Dark color one column footer with logo and social links",
            image: "builder/img/footer1.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<footer class="page_footer ds section_padding_top_100 section_padding_bottom_10"><div class="container"><div class="row"><div class="col-sm-12 text-center"><a href="./" class="logo vertical_logo"><img src="images/logo-dark.png" alt=""></a><ul class="topmargin_40 inline-content small-text semibold darklinks"><li><a href="#0" class="socicon-facebook text-icon">Facebook</a></li><li><a href="#0" class="socicon-twitter text-icon">Twitter</a></li><li><a href="#0" class="socicon-instagram text-icon">Instagram</a></li><li><a href="#0" class="socicon-google text-icon">Google</a></li><li><a href="#0" class="socicon-youtube text-icon">Youtube</a></li></ul></div></div></div></footer>'
        },
        newfooter1: {
            name: "Dark three columns footer",
            description: "Dark three centered columns footer",
            image: "builder/img/footer2.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<footer class="page_footer ds section_padding_top_100 section_padding_bottom_75"><div class="container"><div class="row"><div class="col-md-4 text-center"><div class="widget widget_text"><img src="images/logo-dark.png" alt=""><p class="topmargin_20">You can purchase my music albums, where you will find all my tracks, on iTunes, Google Play, Amazon, Spotify or SoundCloud.</p><div class="topmargin_25"><a href="#" class="social-icon border-icon rounded-icon socicon-apple"></a><a href="#" class="social-icon border-icon rounded-icon socicon-play"></a><a href="#" class="social-icon border-icon rounded-icon socicon-amazon"></a><a href="#" class="social-icon border-icon rounded-icon socicon-spotify"></a><a href="#" class="social-icon border-icon rounded-icon socicon-soundcloud"></a></div></div></div><div class="col-md-4 col-sm-6 text-center"><div class="widget widget_text"><h4 class="widget-title">Contact Form</h4><form class="contact-form" method="post" action="./"><div class="bottommargin_10"><label for="name">Your Name <span class="required">*</span></label><input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name*"></div><div class="bottommargin_10"><label for="message">Message</label><textarea aria-required="true" rows="3" cols="45" name="message" id="message" class="form-control" placeholder="Message..."></textarea></div><div class="contact-form-submit topmargin_10"><button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button color1">Send Message</button></div></form></div></div><div class="col-md-4 col-sm-6 text-center"><div class="widget widget_text"><h4 class="widget-title">My Contacts</h4><div><div class="media small-media inline-block"><div class="media-left"><i class="fa fa-map-marker highlight" aria-hidden="true"></i></div><div class="media-body">Some Adress, Some City, CA 47812</div></div><div class="media small-media inline-block"><div class="media-left"><i class="fa fa-phone highlight" aria-hidden="true"></i></div><div class="media-body">1-888-123-5896</div></div><div class="media small-media inline-block"><div class="media-left"><i class="fa fa-print highlight" aria-hidden="true"></i></div><div class="media-body">Some Adress, Some City, CA 47812</div></div><div class="media small-media greylinks inline-block"><div class="media-left"><i class="fa fa-envelope highlight" aria-hidden="true"></i></div><div class="media-body"><a href="mailto:dj_bishop_fan@example.com">dj_bishop_fan@example.com</a></div></div></div></div></div></div></div></footer>'
        },
        newfooter3: {
            name: "Dark footer",
            description: "Dark footer with three columns",
            image: "builder/img/footer4.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<footer class="page_footer ds section_padding_top_75 section_padding_bottom_65 columns_padding_25 columns_margin_bottom_30"><div class="container"><div class="row"><div class="col-md-4 col-sm-12"><div class="widget widget_text"><a href="./" class="logo bottommargin_30"><img src="images/logo-dark.png" alt=""></a><p>Aliquam commodo cursus nulla, eget ornare velit gravida ac. Curabitur accumsan nibh sed turpis vehicula egestas. Phasellus non tristique nisi, et dapibus massa.</p></div></div><div class="col-md-4 col-sm-6"><div class="widget widget_recent_posts"><h4 class="widget-title">Recent Posts</h4><ul class="media-list"><li class="media loop-color"><div class="media-left media-middle"><img src="images/recent_post1.jpg" alt="" /></div><div class="media-body media-middle"><h4 class="entry-title"><a href="blog-single-left.html">Ribeye pork chop rump beef ground round</a></h4><div class="small-text no-spacing highlightlinks hover-color2"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">21/09/2017</time></a></div></div></li><li class="media loop-color"><div class="media-left media-middle"><img src="images/recent_post2.jpg" alt="" /></div><div class="media-body media-middle"><h4 class="entry-title"><a href="blog-single-left.html">Andouille tenderloin ham hock</a></h4><div class="small-text no-spacing highlightlinks hover-color3"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">20/09/2017</time></a></div></div></li><li class="media loop-color"><div class="media-left media-middle"><img src="images/recent_post3.jpg" alt="" /></div><div class="media-body media-middle"><h4 class="entry-title"><a href="blog-single-left.html">spare ribs jerky ham prosciut Shankle ball tip</a></h4><div class="small-text no-spacing highlightlinks"><a href="blog-single-right.html"><time datetime="2017-10-03T08:50:40+00:00">18/09/2017</time></a></div></div></li></ul></div></div><div class="col-md-4 col-sm-6"><div class="widget widget_instagram"><h4 class="widget-title">Instagram feed</h4><div class="instafeed"></div></div></div></div></div></footer>'
        },
        newfooter4: {
            name: "Dark footer",
            description: "Dark footer with four columns",
            image: "builder/img/footer5.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<footer class="page_footer ds ms section_padding_50"><div class="container"><div class="row"><div class="col-md-3 col-sm-6 to_animate"><div class="widget widget_text"><h3 class="widget-title">Why Us?</h3><p>Consetetur sadipscing elitr, sed dinonumy eirmod tempor ut labore edolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren.</p><p class="topmargin_40"><a href="#" class="theme_button color1">Buy Now!</a></p></div></div><div class="col-md-3 col-sm-6 to_animate"><div class="widget widget_recent_entries"><h3 class="widget-title">Latest Posts</h3><ul><li><p class="post-date"><a href="blog-single-right.html">02.01.2017</a></p><p>Lorem ipsum dolor simet </p></li><li><p class="post-date"><a href="blog-single-right.html">04.01.2017 </a></p><p>Consetetur spselitrsed diam</p></li><li><p class="post-date"><a href="blog-single-right.html">07.01.2017 </a></p><p>Nonumy eirmod tempor</p></li></ul></div></div><div class="col-md-3 col-sm-6 to_animate"><div class="widget widget_text"><h3 class="widget-title">Contact Us</h3><p>PO Box 54321 Some str. 765, Los Angeles, California, United States</p><ul class="list1 no-bullets"><li><i class="rt-icon2-device-phone highlight"></i> +12 345 678 9123</li><li><i class="rt-icon2-globe-outline highlight"></i> <a href="./">www.company.com</a></li><li><i class="rt-icon2-mail2 highlight"></i> <a href="mailto:info@company.com">info@company.com</a></li></ul></div></div><div class="col-md-3 col-sm-6 to_animate"><div class="widget widget_text"><h3 class="widget-title">Stay Tunned</h3><div class="media small-media"><div class="media-left media-middle"><a href="#" class="social-icon color-icon border-icon -icon socicon-facebook"></a></div><div class="media-body media-middle">Facebook</div></div><div class="media small-media"><div class="media-left media-middle"><a href="#" class="social-icon color-icon border-icon -icon socicon-twitter"></a></div><div class="media-body media-middle">Twitter</div></div><div class="media small-media"><div class="media-left media-middle"><a href="#" class="social-icon color-icon border-icon -icon socicon-linkedin"></a></div><div class="media-body media-middle">LinkedIn</div></div><div class="media small-media"><div class="media-left media-middle"><a href="#" class="social-icon color-icon border-icon -icon socicon-pinterest"></a></div><div class="media-body media-middle">Pinterest</div></div></div></div></div></div></footer>'
        },
        newfooter5: {
            name: "Dark parallax footer",
            description: "Dark parallax footer with 3 columns",
            image: "builder/img/footer6.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<footer class="page_footer parallax ds ms section_padding_50 columns_padding_25" id="contact"><div class="container"><div class="row"><div class="col-md-4 col-sm-12"><a href="./" class="logo top_logo"><img src="images/logo-dark.png" alt=""></a><p class="topmargin_20">Consetetur sadipscing elitr diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erased diam voluptua aero eos et accusam et justo. Duo dolores etea rebum. clita kasd.</p></div><div class="col-md-4 col-sm-6">\x3c!-- <div class="topmargin_20"> --\x3e<h3 class="widget-titile">Mail form</h3><form class="contact-form" method="post" action="./"><p class="form-group"><label for="footer-name">Full Name <span class="required">*</span></label><i class="fa fa-user highlight"></i><input type="text" aria-required="true" size="30" value="" name="name" id="footer-name" class="form-control with_icon" placeholder="Name"></p><p class="form-group"><label for="footer-email">Email address<span class="required">*</span></label><i class="fa fa-envelope highlight"></i><input type="email" aria-required="true" size="30" value="" name="email" id="footer-email" class="form-control with_icon" placeholder="Email Address"></p><p class="form-group"><label for="footer-message">Message</label><i class="fa fa-pencil highlight"></i><textarea aria-required="true" rows="3" cols="45" name="message" id="footer-message" class="form-control with_icon" placeholder="Message"></textarea></p><p class="contact-form-submit topmargin_40"><button type="submit" id="footer_contact_form_submit" name="contact_submit" class="theme_button color1 min_width_button">Send</button></p></form>\x3c!-- </div> --\x3e</div><div class="col-md-4 col-sm-6">\x3c!-- <div class="topmargin_20"> --\x3e<h3 class="widget-titile">Contacts</h3><div class="media small-teaser"><div class="media-left"><i class="rt-icon2-map2 highlight fontsize_24"></i></div><div class="media-body">PO Box 97845 Some str. 567, Los Angeles, California, United States</div></div><div class="media small-teaser"><div class="media-left"><i class="rt-icon2-device-phone highlight fontsize_24"></i></div><div class="media-body">+65 (800) 695-2684</div></div><div class="media small-teaser"><div class="media-left"><i class="rt-icon2-printer2 highlight fontsize_24"></i></div><div class="media-body">+65 (800) 695-2686</div></div><div class="media small-teaser"><div class="media-left"><i class="rt-icon2-mail2 highlight fontsize_24"></i></div><div class="media-body"><a href="mailto:your@mail.com">your@mail.com</a></div></div><div class="topmargin_20"><a href="#" class="social-icon color-bg-icon socicon-facebook"></a><a href="#" class="social-icon color-bg-icon socicon-twitter"></a><a href="#" class="social-icon color-bg-icon socicon-google"></a><a href="#" class="social-icon color-bg-icon socicon-linkedin"></a><a href="#" class="social-icon color-bg-icon socicon-pinterest"></a></div>\x3c!-- </div> --\x3e</div></div></div></footer>'
        },
        newfooter6: {
            name: "Dark footer",
            description: "Dark footer with 3 cnetered columns",
            image: "builder/img/footer7.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<footer class="page_footer ds section_padding_top_25 section_padding_bottom_65 columns_padding_25 table_section"><div class="container"><div class="row"><div class="col-md-4 col-sm-12 col-md-push-4 text-center"><div class="widget widget_text"><a href="./" class="logo"><img src="images/logo-dark.png" alt=""></a><p class="divider_30">SmartFarm actively pursues its mission of supporting healthy and productive lifestyles for the community while teaching, enhancing, and connecting residents and youth to fresh produce and education about urban gardening.</p><p class="bottommargin_5 grey"><i class="fa fa-map-marker highlight rightpadding_10" aria-hidden="true"></i> 16 Adam Ave, Phoenix, USA</p><p class="bottommargin_5 grey"><i class="fa fa-phone highlight rightpadding_10" aria-hidden="true"></i> 880-569-6921</p><p class="darklinks bottommargin_5"><i class="fa fa-envelope highlight rightpadding_10" aria-hidden="true"></i> <a href="#0">dj_bishop@example.com</a></p></div></div><div class="col-md-4 col-sm-6 col-md-pull-4 text-center"><div class="widget widget_text widget_media_margin"><h3 class="widget-title">Explore</h3><ul class="list1 no-bullets no-top-border no-bottom-border greylinks"><li><a href="#">Calling All Farming</a></li><li><a href="#">Opportunities for Youth</a></li><li><a href="#">Community Garden Plots</a></li><li><a href="#">Our Event Space</a></li></ul></div></div><div class="col-md-4 col-sm-6 text-center"><div class="widget widget_mailchimp widget_media_margin"><h3 class="widget-title">Newsletter</h3><form class="signup" action="./" method="get"><p>Enter your email address here always to be updated. We promise not to spam!</p><div class="form-group topmargin_25 bottommargin_30"><label for="mailchimp" class="sr-only">Enter your email here</label><input name="email" type="email" id="mailchimp" class="mailchimp_email form-control text-center" placeholder="Email Address"></div><div><button type="submit" class="theme_button color1 min_width_button">Subscribe</button></div><div class="response"></div></form></div></div></div></div></footer>'
        }
    },
    Copyrights: {
        newcopyright1: {
            name: "Light Copyright",
            description: "Light copyright with social",
            image: "builder/img/copyright1.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="ls page_copyright section_padding_top_40 section_padding_bottom_40"><div class="container"><div class="row"><div class="col-sm-12 text-center"><div class="bottommargin_10"><a class="social-icon socicon-facebook" href="#" title="Facebook"></a><a class="social-icon socicon-twitter" href="#" title="Twitter"></a><a class="social-icon socicon-youtube" href="#" title="Youtube"></a><a class="social-icon socicon-google" href="#" title="Google"></a></div><p class="small-text">&copy; Copyright 2017. All Rights Reserved.</p></div></div></div></section>'
        },
        newcopyright2: {
            name: "Dark Copyright with social",
            description: "Thin dark copyright section with social buttons",
            image: "builder/img/copyright2.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_copyright ds ms section_padding_15 table_section"><div class="container"><div class="row"><div class="col-sm-6 text-sm-left text-center"><p class="small-text" thin>&copy; Copyright 2017. All Rights Reserved.</p></div><div class="col-sm-6 text-sm-right text-center"><a href="#" class="social-icon socicon-facebook"></a><a href="#" class="social-icon socicon-twitter"></a><a href="#" class="social-icon socicon-google"></a><a href="#" class="social-icon socicon-linkedin"></a></div></div></div></section>'
        },
        newcopyright3: {
            name: "Dark left logo Copyright",
            description: "Dark copyright section with left logo",
            image: "builder/img/copyright3.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_copyright ds ms table_section table_section_sm"><div class="container"><div class="row"><div class="col-sm-6 text-center text-sm-left"><a href="./" class="logo"><img src="images/logo-dark.png" alt=""></a></div><div class="col-sm-6 text-center text-sm-right"><p class="small-text thin">&copy; Copyright 2017. All Rights Reserved.</p></div></div></div></section>'
        },
        newcopyright4: {
            name: "Dark parallax copyright",
            description: "Dark parallax copyright section",
            image: "builder/img/copyright4.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="ds ms page_copyright parallax section_padding_15 with_top_border_container"><div class="container"><div class="row"><div class="col-sm-12 text-center"><p class="small-text thin">&copy; Copyright 2017. All Rights Reserved.</p></div></div></div></section>'
        },
        newcopyright5: {
            name: "Dark centered copyright",
            description: "Dark centered copyright section with logo",
            image: "builder/img/copyright5.png",
            parents: "#box_wrapper",
            checkboxes: [],
            selects: [],
            inputs: [],
            layout: '<section class="page_copyright ds section_padding_top_30 section_padding_bottom_15"><div class="container"><div class="row"><div class="col-sm-12 text-center"><a href="./" class="logo vertical_logo bottommargin_20 grey"><img src="images/logo-dark.png" alt=""></a><p class="small-text thin">&copy; Copyright 2017. All Rights Reserved.</p></div></div></div></section>'
        }
    },
    Carousels: {
        carouselcustom: {
            name: "Custom Carousel",
            description: "Carousel with various content",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [{
                name: "Loop Carousel",
                id: "loop",
                value: "true",
                byDefault: "false"
            }, {
                name: "Show navigation",
                id: "nav",
                value: "true",
                byDefault: "false"
            }, {
                name: "Show Dots",
                id: "dots",
                value: "true",
                byDefault: "false"
            }, {
                name: "Center layout",
                id: "center",
                value: "true",
                byDefault: "false"
            }, {
                name: "Center item content",
                id: "center_content",
                value: "text-center",
                byDefault: ""
            }, {
                name: "Autoplay",
                id: "autoplay",
                value: "true",
                byDefault: "false"
            }],
            selects: [{
                name: "Item margin",
                id: "margin",
                values: {
                    0: "no margin",
                    10: "10px",
                    20: "20px",
                    30: "30px"
                },
                byDefault: "30"
            }, {
                name: "Items on 0≥768px",
                id: "xs-items",
                values: {
                    1: "1 item",
                    2: "2 itmes",
                    3: "3 items",
                    4: "4 items",
                    5: "5 items",
                    6: "6 items"
                },
                byDefault: "1"
            }, {
                name: "Items on 768px≥992px",
                id: "sm-items",
                values: {
                    1: "1 item",
                    2: "2 itmes",
                    3: "3 items",
                    4: "4 items",
                    5: "5 items",
                    6: "6 items"
                },
                byDefault: "2"
            }, {
                name: "Items on 992px≥1200px",
                id: "md-items",
                values: {
                    1: "1 item",
                    2: "2 itmes",
                    3: "3 items",
                    4: "4 items",
                    5: "5 items",
                    6: "6 items"
                },
                byDefault: "3"
            }, {
                name: "Items on ≥1200px",
                id: "lg-items",
                values: {
                    1: "1 item",
                    2: "2 itmes",
                    3: "3 items",
                    4: "4 items",
                    5: "5 items",
                    6: "6 items"
                },
                byDefault: "4"
            }],
            inputs: [{
                name: "custom CSS theme class",
                id: "theme",
                textBefore: "",
                textAfter: "",
                value: "",
                required: "required",
                byDefault: "owl-theme"
            }],
            repeats: [{
                name: "Number of Items",
                id: "carousel_items",
                textBefore: "",
                textAfter: "",
                entered: 4,
                elements: ['<div class="item">Item ## Content</div>\x3c!-- eof ## item --\x3e'],
                byDefault: ""
            }],
            layout: '<div class="owl-carousel {{center_content}}" data-loop="{{loop}}"  data-margin="{{margin}}" data-nav="{{nav}}"  data-dots="{{dots}}" data-themeClass="{{theme}}" data-center="{{center}}" data-autoplay="{{autoplay}}" data-responsive-xs="{{xs-items}}" data-responsive-sm="{{sm-items}}" data-responsive-md="{{md-items}}" data-responsive-lg="{{lg-items}}">{{carousel_items0}}</div>'
        }
    },
    "HTML elements": {
        sectionheader1: {
            name: "Section header",
            description: "Regular HTML paragraph",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [{
                name: "Text under Divider",
                id: "top_text",
                value: '<h4 class="highlight {{text_center}}">Lorem Ipsum</h4>',
                byDefault: ""
            }, {
                name: "Text Center",
                id: "text_center",
                value: "text-center",
                byDefault: ""
            }],
            inputs: [],
            visuals: [],
            repeats: [],
            layout: '{{top_text}}<h2 class="section_header {{text_center}}">Welcome!</h2>'
        },
        paragraph: {
            name: "<p> tag",
            description: "Regular HTML paragraph",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [],
            layout: "<p>Paragraph text</p>"
        },
        htag: {
            name: "<h1>-<h6> tags",
            description: "Regular HTML H1-H6 headings",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [{
                name: "Centered text",
                id: "header_text_center",
                value: "text-center",
                byDefault: ""
            }, {
                name: "No top margin",
                id: "topmargin_0",
                value: "topmargin_0",
                byDefault: ""
            }],
            selects: [{
                name: "Heading tag",
                id: "tag",
                values: {
                    h1: "<h1>",
                    h2: "<h2>",
                    h3: "<h3>",
                    h4: "<h4>",
                    h5: "<h5>",
                    h6: "<h6>"
                },
                byDefault: "h3"
            }],
            inputs: [],
            visuals: [],
            repeats: [],
            layout: '<{{tag}} class="{{header_text_center}} {{topmargin_0}}">{{tag}} heading</{{tag}}>'
        },
        blockquote: {
            name: "<blockquote> tag",
            description: "Regular HTML blockquote",
            image: "builder/img/blockquote1.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [],
            layout: "<blockquote>Beef jowl shoulder, ribeye pork loin sirloin tri-tip shankle ham hock pance. Pork loin biltong t-bone ground round cow pastrami tri-tip burgdoggen landjaeger cupim chicken biltong.</blockquote>"
        },
        blockquote1: {
            name: "<blockquote> with author name",
            description: "Blockquote with author name",
            image: "builder/img/blockquote2.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [],
            layout: '<blockquote>Pancetta tri-tip leberkas, ribeye biltong flank meatball pastrami. Capicola rump andouille ball tip ham hock beef drumstick landjaeger porchetta.<div class="item-meta"><h5>William B. Dean</h5><p class="small-text highlight">aficionado</p></div></blockquote>'
        },
        image: {
            name: "img tag",
            description: "Regular Image",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [],
            images: [{
                name: "Image",
                id: "regular_image",
                values: templateImages,
                byDefault: "",
                textBefore: "",
                textAfter: ""
            }],
            layout: '<img src="{{regular_image}}" alt="">'
        }
    },
    "Grid Elements": {
        section: {
            name: "Section",
            description: "Top level sections",
            image: "builder/img/section.png",
            parents: "#box_wrapper",
            selects: [{
                name: "Tag",
                id: "section_tag",
                values: {
                    section: "<section> tag",
                    header: "<header> tag",
                    footer: "<footer> tag"
                },
                byDefault: "section"
            }, {
                name: "Color type",
                id: "section_color_type",
                values: {
                    ls: "Light section",
                    "ls ms": "Light muted (grey) section",
                    ds: "Darkgrey section",
                    "ds ms": "Dark section",
                    cs: "Color section",
                    "cs main_color2": "Color2 section"
                },
                byDefault: "ls"
            }, {
                name: "Columns padding variants",
                id: "column_paddings",
                values: {
                    "": "Regular 15px column paddings",
                    columns_padding_0: "Columns without paddings",
                    columns_padding_1: "Columns with 1px paddings",
                    columns_padding_5: "Columns with 5px paddings",
                    columns_padding_25: "Columns with 25px paddings"
                },
                byDefault: ""
            }, {
                name: "Bootstrap Container Type",
                id: "fluid_container",
                values: {
                    container: "Centered container",
                    "container-fluid": "Fullwidth container"
                },
                byDefault: "container"
            }, {
                name: "Top padding",
                id: "section_padding_top",
                values: {
                    section_padding_top_0: "0px",
                    section_padding_top_5: "5px",
                    section_padding_top_15: "15px",
                    section_padding_top_25: "25px",
                    section_padding_top_30: "30px",
                    section_padding_top_50: "50px",
                    section_padding_top_75: "75px",
                    section_padding_top_100: "100px"
                },
                byDefault: "section_padding_top_50"
            }, {
                name: "Bottom padding",
                id: "section_padding_bottom",
                values: {
                    section_padding_bottom_0: "0px",
                    section_padding_bottom_5: "5px",
                    section_padding_bottom_15: "15px",
                    section_padding_bottom_25: "25px",
                    section_padding_bottom_30: "30px",
                    section_padding_bottom_50: "50px",
                    section_padding_bottom_75: "75px",
                    section_padding_bottom_100: "100px"
                },
                byDefault: "section_padding_bottom_50"
            }],
            checkboxes: [{
                name: "Smooth gradient color background",
                id: "section_gradient",
                value: "gradient",
                byDefault: ""
            }, {
                name: "Vertical align content in columns on large screens",
                id: "section_table",
                value: "table_section",
                byDefault: ""
            }, {
                name: "Parallax (choose background image below)",
                id: "parallax",
                value: "parallax",
                byDefault: ""
            }],
            inputs: [{
                name: "ID attribute",
                id: "id_attribute",
                textBefore: 'id="',
                textAfter: '"',
                value: "",
                required: "required",
                byDefault: ""
            }, {
                name: "Custom CSS class",
                id: "additional_class",
                textBefore: "",
                textAfter: "",
                value: "",
                required: "",
                byDefault: ""
            }],
            images: [{
                name: "Background Image",
                id: "background_image",
                textBefore: ' style="background-image: url(',
                textAfter: ')"',
                values: templateImages,
                byDefault: ""
            }],
            layout: '<{{section_tag}} {{id_attribute}} class="{{section_color_type}} {{column_paddings}} {{section_padding_top}} {{section_padding_bottom}} {{section_gradient}} {{section_table}} {{parallax}} {{additional_class}}" {{background_image}}><div class="{{fluid_container}}"><div class="row"></div></div></{{section_tag}}>'
        },
        row: {
            name: "Row",
            description: "Rows in Bootstrap Containers",
            image: "builder/img/row.png",
            parents: '[class^="container"]',
            selects: [],
            checkboxes: [],
            inputs: [],
            layout: '<div class="row"></div>'
        },
        columns: {
            name: "Column",
            description: "Bootstrap Column in Row",
            image: "builder/img/column.png",
            parents: ".row",
            selects: [{
                name: "Large devices (≥1200px)",
                id: "lg",
                values: {
                    "col-lg-1": ".col-lg-1",
                    "col-lg-2": ".col-lg-2",
                    "col-lg-3": ".col-lg-3",
                    "col-lg-4": ".col-lg-4",
                    "col-lg-5": ".col-lg-5",
                    "col-lg-6": ".col-lg-6",
                    "col-lg-7": ".col-lg-7",
                    "col-lg-8": ".col-lg-8",
                    "col-lg-9": ".col-lg-9",
                    "col-lg-10": ".col-lg-10",
                    "col-lg-11": ".col-lg-11",
                    "col-lg-12": ".col-lg-12"
                },
                byDefault: ""
            }, {
                name: "Medium devices (≥992px)",
                id: "md",
                values: {
                    "col-md-1": ".col-md-1",
                    "col-md-2": ".col-md-2",
                    "col-md-3": ".col-md-3",
                    "col-md-4": ".col-md-4",
                    "col-md-5": ".col-md-5",
                    "col-md-6": ".col-md-6",
                    "col-md-7": ".col-md-7",
                    "col-md-8": ".col-md-8",
                    "col-md-9": ".col-md-9",
                    "col-md-10": ".col-md-10",
                    "col-md-11": ".col-md-11",
                    "col-md-12": ".col-md-12"
                },
                byDefault: ""
            }, {
                name: "Small devices (≥768px)",
                id: "sm",
                values: {
                    "col-sm-1": ".col-sm-1",
                    "col-sm-2": ".col-sm-2",
                    "col-sm-3": ".col-sm-3",
                    "col-sm-4": ".col-sm-4",
                    "col-sm-5": ".col-sm-5",
                    "col-sm-6": ".col-sm-6",
                    "col-sm-7": ".col-sm-7",
                    "col-sm-8": ".col-sm-8",
                    "col-sm-9": ".col-sm-9",
                    "col-sm-10": ".col-sm-10",
                    "col-sm-11": ".col-sm-11",
                    "col-sm-12": ".col-sm-12"
                },
                byDefault: "col-sm-12"
            }, {
                name: "Extra small devices (<768px)",
                id: "xs",
                values: {
                    "col-xs-1": ".col-xs-1",
                    "col-xs-2": ".col-xs-2",
                    "col-xs-3": ".col-xs-3",
                    "col-xs-4": ".col-xs-4",
                    "col-xs-5": ".col-xs-5",
                    "col-xs-6": ".col-xs-6",
                    "col-xs-7": ".col-xs-7",
                    "col-xs-8": ".col-xs-8",
                    "col-xs-9": ".col-xs-9",
                    "col-xs-10": ".col-xs-10",
                    "col-xs-11": ".col-xs-11",
                    "col-xs-12": ".col-xs-12"
                },
                byDefault: ""
            }, {
                name: "Animation Type",
                id: "animation",
                values: {
                    fadeIn: "fadeIn",
                    fadeInLeft: "fadeInLeft",
                    fadeInUp: "fadeInUp",
                    fadeInRight: "fadeInRight",
                    fadeInDown: "fadeInDown",
                    fadeInUpBig: "fadeInUpBig",
                    fadeInDownBig: "fadeInDownBig",
                    fadeInLeftBig: "fadeInLeftBig",
                    fadeInRightBig: "fadeInRightBig",
                    slideRight: "slideRight",
                    slideUp: "slideUp",
                    slideLeft: "slideLeft",
                    slideInDown: "slideInDown",
                    slideInLeft: "slideInLeft",
                    slideInRight: "slideInRight",
                    expandUp: "expandUp",
                    slideExpandUp: "slideExpandUp",
                    expandOpen: "expandOpen",
                    bigEntrance: "bigEntrance",
                    hatch: "hatch",
                    tossing: "tossing",
                    pulse: "pulse",
                    floating: "floating",
                    bounce: "bounce",
                    pullUp: "pullUp",
                    pullDown: "pullDown",
                    stretchLeft: "stretchLeft",
                    stretchRight: "stretchRight",
                    moveFromLeft: "moveFromLeft"
                },
                textBefore: ' data-animation="',
                textAfter: '"',
                byDefault: ""
            }],
            checkboxes: [{
                name: "Animate column",
                id: "to_animate",
                value: "to_animate",
                byDefault: ""
            }, {
                name: "Center content",
                id: "text_center",
                value: "text-center",
                byDefault: ""
            }],
            inputs: [],
            layout: '<div class="{{lg}} {{md}} {{sm}} {{xs}} {{to_animate}} {{text_center}}"{{animation}}></div>'
        }
    },
    Teasers: {
        teaser: {
            name: "Top Icon Teasers",
            description: "Text block with top icon and heading",
            image: "builder/img/teaser.png",
            parents: "[class*='col-']",
            checkboxes: [{
                name: "Centered text",
                id: "teaser_text_center",
                value: "text-center",
                byDefault: ""
            }, {
                name: "Bordered Icon",
                id: "teaser_bordered_icon",
                value: "border_icon",
                byDefault: ""
            }, {
                name: "Rounded Icon",
                id: "teaser_rounded_icon",
                value: "round",
                byDefault: ""
            }],
            selects: [{
                name: "Border or background",
                id: "teaser_bg_type",
                values: {
                    "": "None",
                    with_border: "With Border",
                    with_background: "Muted Background",
                    dark_bg_color: "Dark Background",
                    main_bg_color: "Main Color Background"
                },
                byDefault: ""
            }, {
                name: "Heading Tag",
                id: "teaser_heading_tag",
                values: {
                    h2: "<h2> tag",
                    h3: "<h3> tag",
                    h4: "<h4> tag"
                },
                byDefault: "h3"
            }, {
                name: "Icon Size",
                id: "teaser_icon_size",
                values: {
                    size_big: "Big Icon",
                    size_normal: "Normal Icon",
                    size_small: "Small Icon"
                },
                byDefault: "size_normal"
            }, {
                name: "Icon and Icon's Border Color",
                id: "teaser_icon_color",
                values: {
                    black: "Dark Color",
                    grey: "Darkgrey Color",
                    highlight: "Main 1 Color",
                    highlight: "Main 2 Color"
                },
                byDefault: ""
            }, {
                name: "Icon Background Color",
                id: "teaser_icon_bg_color",
                values: {
                    dark_bg_color: "Dark Color",
                    darkgrey_bg_color: "Darkgrey Color",
                    main_bg_color: "Main bg Color"
                },
                byDefault: ""
            }],
            visuals: [{
                name: "Teaser Button",
                id: "teaser_button_html",
                textBefore: "",
                textAfter: "",
                elements: htmlElements.buttons,
                byDefault: ""
            }, {
                name: "Icon",
                id: "teaser_icon_html",
                textBefore: "",
                textAfter: "",
                elements: htmlElements.icons,
                byDefault: '<i class="rt-icon2-lightbulb"></i>'
            }],
            inputs: [],
            layout: '<div class="teaser {{teaser_text_center}} {{teaser_bg_type}}"><div class="teaser_icon {{teaser_bordered_icon}} {{teaser_icon_color}} {{teaser_icon_bg_color}} {{teaser_icon_size}} {{teaser_rounded_icon}}">{{teaser_icon_html}}</div><{{teaser_heading_tag}}>Teaser Heading</{{teaser_heading_tag}}><p>This is teaser text</p>{{teaser_button_html}}</div>'
        },
        teaserleft: {
            name: "Left Icon Teasers",
            description: "Text block with left icon and heading",
            image: "builder/img/teaserleft.png",
            parents: "[class*='col-']",
            checkboxes: [{
                name: "Bordered Icon",
                id: "teaser_bordered_icon",
                value: "border_icon",
                byDefault: ""
            }, {
                name: "Rounded Icon",
                id: "teaser_rounded_icon",
                value: "round",
                byDefault: ""
            }],
            selects: [{
                name: "Border or background",
                id: "teaser_bg_type",
                values: {
                    "": "None",
                    with_border: "With Border",
                    with_background: "Muted Background",
                    dark_bg_color: "Dark Background",
                    main_bg_color: "Main Color Background"
                },
                byDefault: ""
            }, {
                name: "Heading Tag",
                id: "teaser_heading_tag",
                values: {
                    h2: "<h2> tag",
                    h3: "<h3> tag",
                    h4: "<h4> tag"
                },
                byDefault: "h3"
            }, {
                name: "Icon Size",
                id: "teaser_icon_size",
                values: {
                    size_big: "Big Icon",
                    size_normal: "Normal Icon",
                    size_small: "Small Icon"
                },
                byDefault: "size_normal"
            }, {
                name: "Icon and Icon's Border Color",
                id: "teaser_icon_color",
                values: {
                    black: "Dark Color",
                    grey: "Darkgrey Color",
                    highlight: "Main 1 Color",
                    highlight: "Main 2 Color"
                },
                byDefault: ""
            }, {
                name: "Icon Background Color",
                id: "teaser_icon_bg_color",
                values: {
                    dark_bg_color: "Dark Color",
                    darkgrey_bg_color: "Darkgrey Color",
                    main_bg_color: "Main bg Color"
                },
                byDefault: ""
            }],
            visuals: [{
                name: "Icon",
                id: "teaser_icon_html",
                textBefore: "",
                textAfter: "",
                elements: htmlElements.icons,
                byDefault: '<i class="rt-icon2-lightbulb"></i>'
            }],
            inputs: [],
            layout: '<div class="teaser media {{teaser_bg_type}}"><div class="media-left"><div class="teaser_icon {{teaser_bordered_icon}} {{teaser_icon_color}} {{teaser_icon_bg_color}} {{teaser_icon_size}} {{teaser_rounded_icon}}">{{teaser_icon_html}}</div></div><div class="media-body"><{{teaser_heading_tag}} class="media-heading">Teaser Heading</{{teaser_heading_tag}}><p>This is teaser text</p></div></div>'
        },
        teaserright: {
            name: "Right Icon Teasers",
            description: "Text block with right icon and heading",
            image: "builder/img/teaserright.png",
            parents: "[class*='col-']",
            checkboxes: [{
                name: "Bordered Icon",
                id: "teaser_bordered_icon",
                value: "border_icon",
                byDefault: ""
            }, {
                name: "Rounded Icon",
                id: "teaser_rounded_icon",
                value: "round",
                byDefault: ""
            }],
            selects: [{
                name: "Border or background",
                id: "teaser_bg_type",
                values: {
                    "": "None",
                    with_border: "With Border",
                    with_background: "Muted Background",
                    dark_bg_color: "Dark Background",
                    main_bg_color: "Main Color Background"
                },
                byDefault: ""
            }, {
                name: "Heading Tag",
                id: "teaser_heading_tag",
                values: {
                    h2: "<h2> tag",
                    h3: "<h3> tag",
                    h4: "<h4> tag"
                },
                byDefault: "h3"
            }, {
                name: "Icon Size",
                id: "teaser_icon_size",
                values: {
                    size_big: "Big Icon",
                    size_normal: "Normal Icon",
                    size_small: "Small Icon"
                },
                byDefault: "size_normal"
            }, {
                name: "Icon and Icon's Border Color",
                id: "teaser_icon_color",
                values: {
                    black: "Dark Color",
                    grey: "Darkgrey Color",
                    highlight: "Main 1 Color",
                    highlight: "Main 2 Color"
                },
                byDefault: ""
            }, {
                name: "Icon Background Color",
                id: "teaser_icon_bg_color",
                values: {
                    dark_bg_color: "Dark Color",
                    darkgrey_bg_color: "Darkgrey Color",
                    main_bg_color: "Main bg Color"
                },
                byDefault: ""
            }],
            visuals: [{
                name: "Icon",
                id: "teaser_icon_html",
                textBefore: "",
                textAfter: "",
                elements: htmlElements.icons,
                byDefault: '<i class="rt-icon2-lightbulb"></i>'
            }],
            inputs: [],
            layout: '<div class="teaser media text-right {{teaser_bg_type}}"><div class="media-body"><{{teaser_heading_tag}} class="media-heading">Teaser Heading</{{teaser_heading_tag}}><p>This is teaser text</p></div><div class="media-right"><div class="teaser_icon {{teaser_bordered_icon}} {{teaser_icon_color}} {{teaser_icon_bg_color}} {{teaser_icon_size}} {{teaser_rounded_icon}}">{{teaser_icon_html}}</div></div></div>'
        },
        smallteaser: {
            name: "Left Icon Small Teasers",
            description: "Left small icon with text block",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            visuals: [{
                name: "Icon",
                id: "teaser_icon_html",
                textBefore: "",
                textAfter: "",
                elements: htmlElements.icons,
                byDefault: '<i class="rt-icon2-lightbulb"></i>'
            }],
            inputs: [],
            layout: '<div class="media small-teaser"><div class="media-left">{{teaser_icon_html}}</div><div class="media-body">Some Your Text</div></div>'
        }
    },
    "Styled lists": {
        list1: {
            name: "Bordered List",
            description: "Styled with borders",
            image: "builder/img/list1.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [{
                name: "Number of List Items",
                id: "list1_list_items",
                textBefore: "",
                textAfter: "",
                entered: 2,
                elements: ["<li>Item ##</li>"],
                byDefault: ""
            }],
            layout: '<ul class="list1 no-bullets">{{list1_list_items0}}</ul>'
        },
        list2: {
            name: "Bordered bullets list",
            description: "Styled with borders and bullets",
            image: "builder/img/list2.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [{
                name: "Number of List Items",
                id: "list1_list_items",
                textBefore: "",
                textAfter: "",
                entered: 2,
                elements: ["<li>Item ##</li>"],
                byDefault: ""
            }],
            layout: '<ul class="list1">{{list1_list_items0}}</ul>'
        },
        list3: {
            name: "Arrows list",
            description: "Styled List Type 1",
            image: "builder/img/list3.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [{
                name: "Number of List Items",
                id: "list1_list_items",
                textBefore: "",
                textAfter: "",
                entered: 2,
                elements: ["<li>Item ##</li>"],
                byDefault: ""
            }],
            layout: '<ul class="list2">{{list1_list_items0}}</ul>'
        },
        list4: {
            name: "Ordered styled list",
            description: "Ordered styled list",
            image: "builder/img/list4.png",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            visuals: [],
            repeats: [{
                name: "Number of List Items",
                id: "list1_list_items",
                textBefore: "",
                textAfter: "",
                entered: 2,
                elements: ["<li>Item ##</li>"],
                byDefault: ""
            }],
            layout: '<ol class="list3">{{list1_list_items0}}</ol>'
        }
    },
    Bootstrap: {
        bstab: {
            name: "Bootstrap Tabs",
            description: "Bootstrap Tabs",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            repeats: [{
                name: "Number of Tabs",
                id: "bstab_items",
                textBefore: "",
                textAfter: "",
                entered: 2,
                elements: ['<li><a href="#tab{{uniqueString}}##" role="tab" data-toggle="tab">Tab ## title</a></li>', '<div class="tab-pane fade" id="tab{{uniqueString}}##"><p> tab ## content</p></div>'],
                byDefault: ""
            }],
            layout: '<div><ul class="nav nav-tabs" role="tablist">{{bstab_items0}}</ul><div class="tab-content">{{bstab_items1}}</div></div>'
        },
        bscollapse1: {
            name: "Bootstrap Collapse",
            description: "Bootstrap Collapse",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [],
            inputs: [],
            repeats: [{
                name: "Number of Collapses",
                id: "bscollapse_items",
                textBefore: "",
                textAfter: "",
                entered: 3,
                elements: ['<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading-{{uniqueString}}-##"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#collapse-{{uniqueString}}" href="#collapse-{{uniqueString}}-##" aria-controls="collapse-{{uniqueString}}-##" class="collapsed">Collapse ## title</a></h4></div><div id="collapse-{{uniqueString}}-##" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-{{uniqueString}}-##"><div class="panel-body"><div class="media"><div class="media-left"><a href="#"><img src="images/recent_post1.jpg" alt=""></a></div><div class="media-body">Collapse ## content</div></div></div></div></div>'],
                byDefault: ""
            }],
            layout: '<div class="panel-group" role="tablist" id="collapse-{{uniqueString}}">{{bscollapse_items0}}</div>'
        },
        bsprogress: {
            name: "Bootstrap Progressbar",
            description: "Bootstrap Progressbar",
            image: "",
            parents: "[class*='col-']",
            checkboxes: [],
            selects: [{
                name: "Progressbar Type",
                id: "type",
                values: {
                    success: "Success bar",
                    info: "Info bar",
                    warning: "Warning bar",
                    danger: "Danger bar"
                },
                byDefault: "success"
            }],
            inputs: [{
                name: "Percents (0-100)",
                id: "percents",
                textBefore: "",
                textAfter: "",
                value: "",
                required: "",
                byDefault: "50"
            }],
            layout: '<div class="progress"><div class="progress-bar progress-bar-{{type}}" role="progressbar" data-transitiongoal="{{percents}}"><span>{{percents}}%</span></div></div>'
        }
    }
};
"use strict";
var visualBuilder = angular.module("visualBuilder", ["ngStorage", "ngSanitize", "angular-bootstrap-select", "ngDropzone"]);
visualBuilder.controller("ConfigCtrl", ["$scope", "$http", "$localStorage", function(e, t, o) {
    e.config = config,
    e.templateImages = templateImages,
    e.dropzoneConfig = {
        init: function() {
            this.on("complete", function(t) {
                this.removeFile(t),
                e.$apply(function() {
                    e.templateImages.unshift("images/!uploads/" + t.name)
                })
            })
        }
    },
    e.$storage = o,
    e.$storage.sections = e.$storage.sections ? e.$storage.sections : {},
    e.$storage.pages = e.$storage.pages ? e.$storage.pages : {},
    e.sectionsLength = Object.keys(e.$storage.sections).length,
    e.pagesLength = Object.keys(e.$storage.pages).length,
    e.$watch("$storage.sections", function() {
        e.sectionsLength = Object.keys(e.$storage.sections).length
    }, !0),
    e.$watch("$storage.pages", function() {
        e.pagesLength = Object.keys(e.$storage.pages).length
    }, !0),
    e.grid = !1,
    e.tinymce = "dragndrop",
    e.$watch("tinymce", function() {
        "tinymce" == e.tinymce ? (initSortable(),
        destroySortable()) : (tinyMCE.remove(),
        initSortable(),
        destroySortable(),
        initSortable())
    }, !0),
    e.generateElement = function(t) {
        if ("tinymce" != e.tinymce) {
            t.toInsert = t.layout,
            t.selects && $.each(t.selects, function(e) {
                var o = "{{" + this.id + "}}"
                  , s = this.textBefore ? this.textBefore : ""
                  , n = this.textAfter ? this.textAfter : "";
                this.choosen ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), s + this.choosen + n) : this.byDefault ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), s + this.byDefault + n) : t.toInsert = t.toInsert.replace(new RegExp(o,"g"), "")
            }),
            t.checkboxes && $.each(t.checkboxes, function(e) {
                var o = "{{" + this.id + "}}";
                this.choosen ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), this.value) : this.byDefault ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), this.byDefault) : t.toInsert = t.toInsert.replace(new RegExp(o,"g"), "")
            }),
            t.inputs && $.each(t.inputs, function(e) {
                var o = "{{" + this.id + "}}";
                this.entered ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), this.textBefore + this.entered + this.textAfter) : this.byDefault ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), this.textBefore + this.byDefault + this.textAfter) : t.toInsert = t.toInsert.replace(new RegExp(o,"g"), "")
            }),
            t.visuals && $.each(t.visuals, function(e) {
                var o = "{{" + this.id + "}}";
                this.choosen ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), this.choosen) : this.byDefault ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), this.byDefault) : t.toInsert = t.toInsert.replace(new RegExp(o,"g"), "")
            }),
            t.repeats && $.each(t.repeats, function(e) {
                $.each(this.elements, function(o) {
                    for (var s = "", n = 1; n <= t.repeats[e].entered; n++)
                        s += this.replace(new RegExp("##","g"), n);
                    var i = "{{" + t.repeats[e].id + o + "}}";
                    t.toInsert = t.toInsert.replace(new RegExp(i,"g"), s)
                })
            }),
            t.images && $.each(t.images, function(e) {
                var o = "{{" + this.id + "}}"
                  , s = this.textBefore ? this.textBefore : ""
                  , n = this.textAfter ? this.textAfter : "";
                this.choosen ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), s + this.choosen + n) : this.byDefault ? t.toInsert = t.toInsert.replace(new RegExp(o,"g"), s + this.byDefault + n) : t.toInsert = t.toInsert.replace(new RegExp(o,"g"), "")
            });
            var o = (Math.random() + 1).toString(36).substr(2, 5);
            t.toInsert = t.toInsert.replace(new RegExp("{{uniqueString}}","g"), o)
        }
    }
    ,
    e.visualSelectHtml = "",
    e.visualSelect = function(t, o) {
        e.visualSelectingBlock = t,
        e.visualSelectingBlockGroupKey = o,
        jQuery("#visualSelect").modal()
    }
    ,
    e.selectVisualElement = function(e, t, o) {
        e.visuals[t].choosen = e.visuals[t].elements[o],
        jQuery("#visualSelect").modal("hide")
    }
    ,
    e.visualImageSelectHtml = "",
    e.imageSelect = function(t, o) {
        e.visualSelectingImageBlock = t,
        e.visualSelectingBlockImagesKey = o,
        jQuery("#visualImageSelect").modal()
    }
    ,
    e.selectImage = function(e, t, o) {
        e.images[t].choosen = e.images[t].values[o],
        jQuery("#visualImageSelect").modal("hide")
    }
    ,
    e.selectedGroupIndex = -1,
    e.activateGroup = function(t) {
        e.selectedGroupIndex = t,
        -1 != e.selectedGroupIndex ? jQuery("#sidebar").addClass("wide") : jQuery("#sidebar").removeClass("wide")
    }
    ,
    e.toggleSidebar = function() {
        jQuery("#sidebar").toggleClass("hover"),
        e.activateGroup(-1),
        e.tinymce = "dragndrop"
    }
    ,
    e.selectedGroupIndex = -1,
    e.activateGroup = function(t) {
        e.selectedGroupIndex = t,
        -1 != e.selectedGroupIndex ? jQuery("#sidebar").addClass("wide") : jQuery("#sidebar").removeClass("wide")
    }
    ,
    e.editSection = function(t) {
        t.preventDefault(),
        e.sectionToEdit = jQuery(t.target).closest("#box_wrapper > *");
        var o = e.sectionToEdit.attr("class").split(" ");
        e.config["Grid Elements"].section.selects[0].choosen = e.sectionToEdit.prop("tagName").toLowerCase();
        var s = o.indexOf("ls")
          , n = o.indexOf("ms")
          , i = o.indexOf("ds")
          , c = o.indexOf("cs")
          , l = o.indexOf("main_color2");
        s > -1 && n > -1 ? (e.config["Grid Elements"].section.selects[1].choosen = "ls ms",
        o[s] = "",
        o[n] = "") : s > -1 && -1 == n ? (e.config["Grid Elements"].section.selects[1].choosen = "ls",
        o[s] = "") : i > -1 && n > -1 ? (e.config["Grid Elements"].section.selects[1].choosen = "ds ms",
        o[i] = "",
        o[n] = "") : i > -1 && -1 == n ? (e.config["Grid Elements"].section.selects[1].choosen = "ds",
        o[i] = "") : c > -1 && l > -1 ? (e.config["Grid Elements"].section.selects[1].choosen = "cs main_color2",
        o[c] = "",
        o[l] = "") : c > -1 && -1 == l ? (e.config["Grid Elements"].section.selects[1].choosen = "cs",
        o[c] = "") : e.config["Grid Elements"].section.selects[1].choosen = e.config["Grid Elements"].section.selects[1].byDefault;
        var a = o.indexOf("columns_padding_0")
          , r = o.indexOf("columns_padding_1")
          , d = o.indexOf("columns_padding_2")
          , g = o.indexOf("columns_padding_5")
          , m = o.indexOf("columns_padding_25");
        a > -1 ? (e.config["Grid Elements"].section.selects[2].choosen = "columns_padding_0",
        o.splice(a, 1)) : r > -1 ? (e.config["Grid Elements"].section.selects[2].choosen = "columns_padding_1",
        o.splice(r, 1)) : d > -1 ? (e.config["Grid Elements"].section.selects[2].choosen = "columns_padding_2",
        o.splice(d, 1)) : g > -1 ? (e.config["Grid Elements"].section.selects[2].choosen = "columns_padding_5",
        o.splice(g, 1)) : m > -1 ? (e.config["Grid Elements"].section.selects[2].choosen = "columns_padding_25",
        o.splice(m, 1)) : e.config["Grid Elements"].section.selects[2].choosen = e.config["Grid Elements"].section.selects[2].byDefault,
        jQuery(e.sectionToEdit).find(".container-fluid").length ? e.config["Grid Elements"].section.selects[3].choosen = "container-fluid" : e.config["Grid Elements"].section.selects[3].choosen = "container";
        var f = o.indexOf("section_padding_top_0")
          , p = o.indexOf("section_padding_top_5")
          , u = o.indexOf("section_padding_top_15")
          , h = o.indexOf("section_padding_top_25")
          , x = o.indexOf("section_padding_top_30")
          , _ = o.indexOf("section_padding_top_50")
          , y = o.indexOf("section_padding_top_75")
          , v = o.indexOf("section_padding_top_100");
        f > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_0",
        o.splice(f, 1)) : p > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_5",
        o.splice(p, 1)) : u > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_15",
        o.splice(u, 1)) : h > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_25",
        o.splice(h, 1)) : x > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_30",
        o.splice(x, 1)) : _ > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_50",
        o.splice(_, 1)) : y > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_75",
        o.splice(y, 1)) : v > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_100",
        o.splice(v, 1)) : e.config["Grid Elements"].section.selects[4].choosen = e.config["Grid Elements"].section.selects[4].byDefault;
        var b = o.indexOf("section_padding_bottom_0")
          , E = o.indexOf("section_padding_bottom_5")
          , j = o.indexOf("section_padding_bottom_15")
          , O = o.indexOf("section_padding_bottom_25")
          , G = o.indexOf("section_padding_bottom_30")
          , Q = o.indexOf("section_padding_bottom_50")
          , w = o.indexOf("section_padding_bottom_75")
          , S = o.indexOf("section_padding_bottom_100");
        b > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_0",
        o.splice(b, 1)) : E > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_5",
        o.splice(E, 1)) : j > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_15",
        o.splice(j, 1)) : O > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_25",
        o.splice(O, 1)) : G > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_30",
        o.splice(G, 1)) : Q > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_50",
        o.splice(Q, 1)) : w > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_75",
        o.splice(w, 1)) : S > -1 ? (e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_100",
        o.splice(S, 1)) : e.config["Grid Elements"].section.selects[5].choosen = e.config["Grid Elements"].section.selects[5].byDefault;
        var I = o.indexOf("section_padding_0")
          , T = o.indexOf("section_padding_15")
          , $ = o.indexOf("section_padding_25")
          , P = o.indexOf("section_padding_50")
          , C = o.indexOf("section_padding_75")
          , D = o.indexOf("section_padding_100");
        I > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_0",
        e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_0",
        o.splice(I, 1)) : T > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_15",
        e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_15",
        o.splice(T, 1)) : $ > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_25",
        e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_25",
        o.splice($, 1)) : P > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_50",
        e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_50",
        o.splice(P, 1)) : C > -1 ? (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_75",
        e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_75",
        o.splice(C, 1)) : D > -1 && (e.config["Grid Elements"].section.selects[4].choosen = "section_padding_top_100",
        e.config["Grid Elements"].section.selects[5].choosen = "section_padding_bottom_100",
        o.splice(D, 1));
        var k = o.indexOf("gradient");
        k > -1 ? (e.config["Grid Elements"].section.checkboxes[0].choosen = !0,
        o.splice(k, 1)) : e.config["Grid Elements"].section.checkboxes[0].choosen = e.config["Grid Elements"].section.checkboxes[0].byDefault;
        var M = o.indexOf("table_section");
        M > -1 ? (e.config["Grid Elements"].section.checkboxes[1].choosen = !0,
        o.splice(M, 1)) : e.config["Grid Elements"].section.checkboxes[1].choosen = e.config["Grid Elements"].section.checkboxes[1].byDefault;
        var R = o.indexOf("parallax");
        R > -1 ? (e.config["Grid Elements"].section.checkboxes[2].choosen = !0,
        o.splice(R, 1)) : e.config["Grid Elements"].section.checkboxes[2].choosen = e.config["Grid Elements"].section.checkboxes[2].byDefault;
        var B = e.sectionToEdit.attr("id");
        e.config["Grid Elements"].section.inputs[0].entered = B || e.config["Grid Elements"].section.inputs[0].byDefault,
        e.config["Grid Elements"].section.inputs[1].entered = o.join(" "),
        e.sectionToEditContent = e.sectionToEdit.find('[class*="container"]').first().html(),
        jQuery("#editSection").modal()
    }
    ,
    e.deleteSection = function(t) {
        t ? (t.preventDefault(),
        e.sectionToDelete = jQuery(t.target).closest("#box_wrapper > *"),
        jQuery("#deleteSection").modal()) : e.sectionToDelete.remove()
    }
    ,
    e.updateSection = function(t) {
        var o = t.target.getAttribute("data-layout")
          , s = jQuery(o).find('[class*="container"]').html(e.sectionToEditContent).end();
        e.sectionToEdit.replaceWith(s),
        jQuery("#editSection").modal("hide"),
        initSortable()
    }
    ,
    e.editColumn = function(t) {
        t.preventDefault(),
        e.ColumnToEdit = jQuery(t.target).closest('[class*="col-"]');
        var o = e.ColumnToEdit.attr("class").split(" ")
          , s = o.indexOf("col-lg-1")
          , n = o.indexOf("col-lg-2")
          , i = o.indexOf("col-lg-3")
          , c = o.indexOf("col-lg-4")
          , l = o.indexOf("col-lg-5")
          , a = o.indexOf("col-lg-6")
          , r = o.indexOf("col-lg-7")
          , d = o.indexOf("col-lg-8")
          , g = o.indexOf("col-lg-9")
          , m = o.indexOf("col-lg-10")
          , f = o.indexOf("col-lg-11")
          , p = o.indexOf("col-lg-12");
        e.config["Grid Elements"].columns.selects[0].choosen = s > -1 ? "col-lg-1" : n > -1 ? "col-lg-2" : i > -1 ? "col-lg-3" : c > -1 ? "col-lg-4" : l > -1 ? "col-lg-5" : a > -1 ? "col-lg-6" : r > -1 ? "col-lg-7" : d > -1 ? "col-lg-8" : g > -1 ? "col-lg-9" : m > -1 ? "col-lg-10" : f > -1 ? "col-lg-11" : p > -1 ? "col-lg-12" : e.config["Grid Elements"].columns.selects[0].byDefault;
        var u = o.indexOf("col-md-1")
          , h = o.indexOf("col-md-2")
          , x = o.indexOf("col-md-3")
          , _ = o.indexOf("col-md-4")
          , y = o.indexOf("col-md-5")
          , v = o.indexOf("col-md-6")
          , b = o.indexOf("col-md-7")
          , E = o.indexOf("col-md-8")
          , j = o.indexOf("col-md-9")
          , O = o.indexOf("col-md-10")
          , G = o.indexOf("col-md-11")
          , Q = o.indexOf("col-md-12");
        e.config["Grid Elements"].columns.selects[1].choosen = u > -1 ? "col-md-1" : h > -1 ? "col-md-2" : x > -1 ? "col-md-3" : _ > -1 ? "col-md-4" : y > -1 ? "col-md-5" : v > -1 ? "col-md-6" : b > -1 ? "col-md-7" : E > -1 ? "col-md-8" : j > -1 ? "col-md-9" : O > -1 ? "col-md-10" : G > -1 ? "col-md-11" : Q > -1 ? "col-md-12" : e.config["Grid Elements"].columns.selects[1].byDefault;
        var w = o.indexOf("col-sm-1")
          , S = o.indexOf("col-sm-2")
          , I = o.indexOf("col-sm-3")
          , T = o.indexOf("col-sm-4")
          , $ = o.indexOf("col-sm-5")
          , P = o.indexOf("col-sm-6")
          , C = o.indexOf("col-sm-7")
          , D = o.indexOf("col-sm-8")
          , k = o.indexOf("col-sm-9")
          , M = o.indexOf("col-sm-10")
          , R = o.indexOf("col-sm-11")
          , B = o.indexOf("col-sm-12");
        e.config["Grid Elements"].columns.selects[2].choosen = w > -1 ? "col-sm-1" : S > -1 ? "col-sm-2" : I > -1 ? "col-sm-3" : T > -1 ? "col-sm-4" : $ > -1 ? "col-sm-5" : P > -1 ? "col-sm-6" : C > -1 ? "col-sm-7" : D > -1 ? "col-sm-8" : k > -1 ? "col-sm-9" : M > -1 ? "col-sm-10" : R > -1 ? "col-sm-11" : B > -1 ? "col-sm-12" : e.config["Grid Elements"].columns.selects[2].byDefault;
        var L = o.indexOf("col-xs-1")
          , H = o.indexOf("col-xs-2")
          , Y = o.indexOf("col-xs-3")
          , A = o.indexOf("col-xs-4")
          , F = o.indexOf("col-xs-5")
          , N = o.indexOf("col-xs-6")
          , z = o.indexOf("col-xs-7")
          , J = o.indexOf("col-xs-8")
          , W = o.indexOf("col-xs-9")
          , q = o.indexOf("col-xs-10")
          , K = o.indexOf("col-xs-11")
          , U = o.indexOf("col-xs-12");
        e.config["Grid Elements"].columns.selects[3].choosen = L > -1 ? "col-xs-1" : H > -1 ? "col-xs-2" : Y > -1 ? "col-xs-3" : A > -1 ? "col-xs-4" : F > -1 ? "col-xs-5" : N > -1 ? "col-xs-6" : z > -1 ? "col-xs-7" : J > -1 ? "col-xs-8" : W > -1 ? "col-xs-9" : q > -1 ? "col-xs-10" : K > -1 ? "col-xs-11" : U > -1 ? "col-xs-12" : e.config["Grid Elements"].columns.selects[3].byDefault;
        var V = e.ColumnToEdit.attr("data-animation");
        e.config["Grid Elements"].columns.selects[4].choosen = V || e.config["Grid Elements"].columns.selects[4].byDefault;
        var X = o.indexOf("to_animate");
        e.config["Grid Elements"].columns.checkboxes[0].choosen = X > -1 || e.config["Grid Elements"].columns.checkboxes[0].byDefault;
        var Z = o.indexOf("text-center");
        e.config["Grid Elements"].columns.checkboxes[1].choosen = Z > -1 || e.config["Grid Elements"].columns.checkboxes[1].byDefault,
        e.ColumnToEditContent = e.ColumnToEdit.html(),
        jQuery("#editColumn").modal()
    }
    ,
    e.deleteColumn = function(t) {
        t ? (t.preventDefault(),
        e.ColumnToDelete = jQuery(t.target).closest('[class*="col-"]'),
        jQuery("#deleteColumn").modal()) : e.ColumnToDelete.remove()
    }
    ,
    e.updateColumn = function(t) {
        var o = t.target.getAttribute("data-layout")
          , s = jQuery(o).append(e.ColumnToEditContent);
        e.ColumnToEdit.replaceWith(s),
        jQuery("#editColumn").modal("hide"),
        initSortable()
    }
    ,
    e.saveSection = function(t) {
        t.preventDefault();
        var o = jQuery(t.target).closest("#box_wrapper > *")
          , s = o.attr("id");
        s ? (destroySortable(),
        o.find(".section_controls").remove(),
        e.$storage.sections[s] = o[0].outerHTML,
        e.message = "Section #" + s + " saved",
        jQuery("#commonMessage").modal(),
        initSortable(),
        setTimeout(initDragable, 900)) : (o.addClass("saving"),
        jQuery("#getSectionId").modal())
    }
    ,
    e.saveSectionWithoutId = function(t) {
        var o = jQuery(".saving");
        t && (o.attr("id", t).removeClass("saving"),
        o.find(".section_controls").remove(),
        destroySortable(),
        e.$storage.sections[t] = o[0].outerHTML,
        jQuery("#getSectionId").modal("hide"),
        e.message = "Section #" + t + " saved",
        jQuery("#commonMessage").modal(),
        initSortable(),
        setTimeout(initDragable, 900))
    }
    ,
    e.deleteSaved = function(t, o, s, n) {
        n ? (e.deleteContainer = t,
        e.deleteId = o,
        e.message = "pages" == t ? s + "<strong>" + o + ".html</strong>?" : s + "<strong>#" + o + "</strong>?",
        jQuery("#commonDelete").modal()) : (t = e.deleteContainer,
        o = e.deleteId,
        delete e.$storage[t][o],
        e.message = "pages" == t ? s + "Page <strong>" + o + ".html</strong> deleted" : s + "Section <strong>#" + o + "</strong> deleted",
        jQuery("#commonMessage").modal(),
        e.activateGroup(-1))
    }
    ,
    e.editingPage = "untitled",
    e.editingPageTemp = "untitled",
    e.editingPageTitle = "Page Title",
    e.editPage = function(t, o) {
        if (e.editingPageTemp = t,
        o) {
            var s = "untitled" !== e.editingPage ? ".html" : "";
            e.message = 'This will replace page "' + e.editingPage + s + '"  that you are editing with ' + t + ".html",
            jQuery("#editPage").modal()
        } else {
            e.editingPage = e.editingPageTemp;
            var n = e.$storage.pages[e.editingPage];
            jQuery(n).each(function(t, o) {
                if ("TITLE" == o.tagName && (e.editingPageTitle = o.innerText),
                "canvas" == o.id)
                    return jQuery("#canvas").replaceWith(o)
            }),
            initSortable(),
            initCanvas()
        }
    }
    ,
    e.savePage = function(t, o) {
        if (t && o) {
            if ("untitled" == t)
                return void jQuery("#getPageName").modal();
            !0 === o && (o = e.pagetitle),
            e.editingPage = t,
            e.tinymce = "dragndrop",
            jQuery(".section_controls").remove(),
            initSortable(),
            destroySortable();
            var s = e.generatePageTop(o) + jQuery("#canvas")[0].outerHTML + e.generatePageBottom();
            e.$storage.pages[t] = s,
            initSortable(),
            initDragable(),
            jQuery("#getPageName").modal("hide"),
            e.message = "Page <strong>" + t + ".html</strong> saved",
            jQuery("#commonMessage").modal()
        }
    }
    ,
    e.getPageCode = function() {
        e.tinymce = "dragndrop",
        jQuery(".section_controls").remove(),
        initSortable(),
        destroySortable();
        var t = e.generatePageTop("Page Title") + jQuery("#canvas")[0].outerHTML + e.generatePageBottom();
        initSortable(),
        jQuery("#getPageCode").find("textarea").val(t).end().modal()
    }
    ,
    e.generatePageTop = function(e) {
        var t = '<!DOCTYPE html> <html class="no-js"> <head> <title>' + e + '</title> <meta charset="utf-8">\x3c!--[if IE]> <meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]--\x3e <meta name="description" content=""> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="css/bootstrap.min.css">';
        return t += '<link rel="stylesheet" href="' + jQuery("#color-switcher-link").attr("href") + '" id="color-switcher-link">',
        t += '<link rel="stylesheet" href="css/animations.css"><link rel="stylesheet" href="css/fonts.css"><script src="js/vendor/modernizr-2.6.2.min.js"><\/script>\x3c!--[if lt IE 9]> <script src="js/vendor/html5shiv.min.js"><\/script> <script src="js/vendor/respond.min.js"><\/script><![endif]--\x3e</head><body><div class="preloader"><div class="preloader_image"></div></div>\x3c!--[if lt IE 9]> <div class="bg-danger text-center">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" class="highlight">upgrade your browser</a> to improve your experience.</div><![endif]--\x3e\x3c!-- search modal --\x3e<div class="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal"><div class="widget widget_search"><form role="search" method="get" class="searchform form-inline" action="/"><div class="form-group"><input type="text" value="" name="search" class="form-control" placeholder="Search keyword" id="modal-search-input"></div><button type="submit" class="theme_button">Search</button></form></div></div>\x3c!-- wrappers for visual page editor and boxed version of template --\x3e'
    }
    ,
    e.generatePageBottom = function() {
        return '\x3c!-- eof #box_wrapper and #canvas --\x3e<script src="js/compressed.js"><\/script><script src="js/main.js"><\/script></body></html>'
    }
    ,
    e.generateFiles = function() {
        if (isLocalFile)
            return e.message = "You need a webserver with PHP support to use this function!",
            void jQuery("#commonMessage").modal();
        jQuery.isEmptyObject(e.$storage.pages) ? (e.message = "You do not have saved pages for create HTML files. Save some pages at first!",
        jQuery("#commonMessage").modal()) : t.post("builder/createhtml.php", e.$storage.pages).then(function(t) {
            e.message = "HTML files was successfuly created in your siteroot directory!",
            jQuery("#commonMessage").modal()
        }, function(t) {
            e.message = "There was an error during creating HTML files. Make sure that your PHP works.",
            jQuery("#commonMessage").modal()
        })
    }
    ,
    e.generateZip = function() {
        if (isLocalFile)
            return e.message = "You need a webserver with PHP support to use this function!",
            void jQuery("#commonMessage").modal();
        jQuery.isEmptyObject(e.$storage.pages) ? (e.message = "You do not have saved pages for create zip package. Save some pages at first!",
        jQuery("#commonMessage").modal()) : (e.message = '<div class="text-center"><img src="img/preloader.gif"><br><br>Starting...</div>',
        jQuery("#commonMessage").modal(),
        t.post("builder/savezip.php", e.$storage.pages).then(function(e) {
            window.location.href = "builder/" + e.data,
            jQuery("#commonMessage").modal("hide")
        }, function(t) {
            e.message = "There was an error during creating your package.",
            jQuery("#commonMessage").modal()
        }))
    }
    ,
    e.exportProject = function() {
        if (jQuery.isEmptyObject(e.$storage.pages) && jQuery.isEmptyObject(e.$storage.sections))
            e.message = "You do not have saved pages or sections for export. Save some pages or sections at first!",
            jQuery("#commonMessage").modal();
        else {
            if (isLocalFile) {
                var o = '{"pages":' + JSON.stringify(e.$storage.pages) + ',"sections":' + JSON.stringify(e.$storage.sections) + "}";
                return void jQuery("#getProjectCode").find("textarea").val(o).end().modal()
            }
            t.post("builder/export.php", {
                pages: e.$storage.pages,
                sections: e.$storage.sections
            }).then(function(t) {
                window.open("builder/" + t.data, "_self"),
                e.message = "Your project will start downloading shortly!",
                jQuery("#commonMessage").modal()
            }, function(t) {
                var o = '{"pages":' + JSON.stringify(e.$storage.pages) + ',"sections":' + JSON.stringify(e.$storage.sections) + "}";
                jQuery("#getProjectCode").find("textarea").val(o).end().modal()
            })
        }
    }
    ,
    e.importProject = function() {
        if (!window.FileReader)
            return e.message = "You using outdated browser!",
            void jQuery("#commonMessage").modal();
        var t = document.getElementById("projectFile").files[0]
          , o = new FileReader
          , s = {};
        o.onloadend = function(t) {
            e.$apply(function() {
                try {
                    s = jQuery.parseJSON(t.target.result)
                } catch (t) {
                    return e.message = "Your file is not valid project file!",
                    jQuery("#commonMessage").modal(),
                    !1
                }
                s.sections || s.pages ? (e.$storage.sections = s.sections ? s.sections : {},
                e.$storage.pages = s.pages ? s.pages : {},
                e.toggleSidebar(),
                e.message = "Import finished successfuly!",
                jQuery("#commonMessage").modal()) : (e.message = "Please provide valid project file",
                jQuery("#commonMessage").modal())
            })
        }
        ,
        o.readAsText(t)
    }
    ,
    e.pagePreview = function() {
        if (isLocalFile)
            return e.message = "You need a webserver with PHP support to use this function!",
            void jQuery("#commonMessage").modal();
        var t = window.open("_template.html", "_blank", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
        jQuery(t).load(function() {
            e.tinymce = "dragndrop",
            initSortable(),
            destroySortable(),
            tinyMCE.remove(),
            jQuery(".section_controls").remove(),
            jQuery(canBeSelected.join()).removeClass("selected");
            var o = jQuery("#canvas")[0].outerHTML;
            jQuery(t.document).contents().find("body").prepend(o),
            initSortable()
        })
    }
}
]);
