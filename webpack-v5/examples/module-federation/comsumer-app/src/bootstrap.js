import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
	const App = React.lazy(() => import('provider_app/App'));

	ReactDOM.render(
		<React.StrictMode>
			<React.Suspense fallback='Loading...'>
				<App />
			</React.Suspense>
		</React.StrictMode>,
		document.getElementById('root'),
	);
};

render();

if (module.hot) {
	module.hot.accept();
}
