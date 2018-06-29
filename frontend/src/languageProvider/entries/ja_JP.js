import antdSA from 'antd/lib/locale-provider/ja_JP';
import appLocaleData from 'react-intl/locale-data/ja';
import saMessages from '../locales/ja_JP.json';

const saLang = {
  messages: {
    ...saMessages
  },
  antd: antdSA,
  locale: 'ja-JP',
  data: appLocaleData
};
export default saLang;
