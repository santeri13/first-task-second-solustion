'use strict';
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translation = {
    'en': require('./translation/en'),
    'ee': require('./translation/ee'),
    'ru': require('./translation/ru'),
};

export default I18n;