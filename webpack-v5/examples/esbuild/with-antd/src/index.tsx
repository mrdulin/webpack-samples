import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import './global.scss';

// css module, works when

// 1. esModule option is false
// 2. esModule: true and modules.namedExport: false
import styles from './styles.scss';
console.log("🚀 ~ styles:", styles)

import * as namedStyles from './styles.scss';
console.log("🚀 ~ namedStyles:", namedStyles)

moment.locale('zh-cn');

const App = () => {
	const [date, setDate] = useState<moment.Moment | null>(null);
	const handleChange = (value) => {
		message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
		setDate(value);
	};
	return (
		<ConfigProvider locale={zhCN}>
			<div style={{ width: 400, margin: '100px auto' }}>
				<DatePicker onChange={handleChange} />
				<div style={{ marginTop: 16 }}>当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}</div>
			</div>
      {/* 取消注释用于测试 */}
			<p className={styles.usedClassName}>test css module</p>
      {/* <p className={namedStyles.usedClassName}>test css module (named import)</p> */}
		</ConfigProvider>
	);
};

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
