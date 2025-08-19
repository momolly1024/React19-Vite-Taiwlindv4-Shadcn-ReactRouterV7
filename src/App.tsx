import { useState, useEffect } from 'react';
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

	const [apiData, setApiData] = useState(null);       // State for useEffect API (todos/1)
	const [postData, setPostData] = useState(null);     // State for button API (posts/1)
	const [loading, setLoading] = useState(false);      // Loading state shared by both API calls

	const toggleLanguage = () => {
		const newLang = i18n.language === 'zh' ? 'en' : 'zh';
		i18n.changeLanguage(newLang);
	};

	// useEffect hook to call todos/1 when component mounts
	useEffect(() => {
		const fetchTodos = async () => {
			setLoading(true);
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
				const json = await response.json();
				setApiData(json);
			} catch (error) {
				console.error('API fetch error:', error);
				setApiData({ error: 'Failed to fetch' });
			} finally {
				setLoading(false);
			}
		};
		fetchTodos();
	}, []);

	// Function to fetch posts/1 when button is clicked
	const fetchPost = async () => {
		setLoading(true);
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
			const json = await response.json();
			setPostData(json);
		} catch (error) {
			console.error('API fetch error:', error);
			setPostData({ error: 'Failed to fetch' });
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-6 p-6">
			{/* Display query string if exists */}
			{searchParams.toString() && (
				<div className="text-sm text-gray-500">Query: {searchParams.toString()}</div>
			)}

			{/* Title with i18n */}
			<div className="flex items-center justify-center gap-4">
				<div className="w-[100px] rounded-lg bg-amber-500 px-4 py-2 text-white">
					{t('welcome')}
				</div>

				<Button onClick={toggleLanguage}>{t('change_language')}</Button>
			</div>

			{/* Link to About page */}
			<Link to="/about" className="text-blue-600 underline hover:text-blue-800">
				→ {t('go_to_about')}
			</Link>

			{/* UI showcase */}
			<div className="flex flex-col gap-3">
				<Badge variant="secondary" className="my-2 text-lg">
					React 19 + Vite + Tailwind CSS v4 + ShadCN UI + React Router v7
				</Badge>
			</div>

			{/* Counter section */}
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

			{/* API Demo Section */}
			<div className="space-y-2 mt-6">
				{/* Display todos/1 fetched with useEffect */}
				<div>
					<h3 className="font-semibold">useEffect API (todos/1)</h3>
					{loading && <div>Loading...</div>}
					{apiData && (
						<pre className="bg-gray-100 p-2 rounded">{JSON.stringify(apiData.title, null, 2)}</pre>
					)}
				</div>

				{/* Button to fetch posts/1 */}
				<div>
					<h3 className="font-semibold">Button API (posts/1)</h3>
					<Button onClick={fetchPost}>Fetch Post</Button>
					{postData && (
						<pre className="bg-gray-100 p-2 rounded">{JSON.stringify(postData.userId, null, 2)}</pre>
					)}
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
