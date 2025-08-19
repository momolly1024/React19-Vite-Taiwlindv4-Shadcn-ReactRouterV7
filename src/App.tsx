import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCounterStore } from './store';
import { useTranslation } from 'react-i18next';
import About from '@/pages/About';
import './i18n';
import './App.css';

const Home = () => {
	const [searchParams] = useSearchParams();
	const { count, increment, reset } = useCounterStore();
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === 'zh' ? 'en' : 'zh';
		i18n.changeLanguage(newLang);
	};

	return (
		<div className="space-y-6 p-6">
			{/* Query string */}
			{searchParams.toString() && (
				<div className="text-sm text-gray-500">Query: {searchParams.toString()}</div>
			)}

			{/* Title + i18n */}
			<div className="flex items-center justify-center gap-4">
				<div className="w-[100px] rounded-lg bg-amber-500 px-4 py-2 text-white">
					{t('welcome')}
				</div>

				<Button onClick={toggleLanguage}>{t('change_language')}</Button>
			</div>

			{/* Router link */}
			<Link to="/about" className="text-blue-600 underline hover:text-blue-800">
				→ {t('go_to_about')}
			</Link>

			{/* UI showcase */}
			<div className="flex flex-col gap-3">
				<Badge variant="secondary" className="my-2 text-lg">
					React 19 + Vite + Tailwind CSS v4 + ShadCN UI + React Router v7
				</Badge>
			</div>

			{/* Counter */}
			<div className="space-y-2">
				<div className="text-xl">Count: {count}</div>
				<div className="flex justify-center">
					<Button onClick={increment} className="mr-1">
						＋1
					</Button>
					<Button variant="destructive" onClick={reset}>
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
