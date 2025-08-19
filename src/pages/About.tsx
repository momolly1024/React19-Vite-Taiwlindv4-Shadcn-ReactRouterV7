import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { useCounterStore } from '@/store';
import { useTranslation } from 'react-i18next';

const About = () => {
	const { count, increment } = useCounterStore();
	const { t } = useTranslation();

	return (
		<div className="space-y-6 p-6">
			{/* Title */}
			<h1 className="text-2xl font-bold">{t('about_page')}</h1>

			{/* Counter */}
			<div className="space-y-2">
				<div className="text-lg">
					{t('current_count')}: {count}
				</div>
				<Button onClick={increment}>{t('increment')}</Button>
			</div>

			{/* Back link */}
			<Link
				to="/?hello=world&molly=YA"
				className="text-blue-600 underline hover:text-blue-800"
			>
				← {t('back_to_home')}
			</Link>
		</div>
	);
};

export default About;
