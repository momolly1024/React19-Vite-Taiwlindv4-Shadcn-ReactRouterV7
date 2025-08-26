import { useRef } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { BellIcon, BellIconHandle } from '@/components/icons/BellIcon';
import { HeartIcon, HeartIconHandle } from '@/components/icons/HeartIcon';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const IconDemo = () => {
	const { t } = useTranslation();

	// BellIcon ref for manual control
	const bellRef = useRef<BellIconHandle>(null);

	// HeartIcon ref for manual control
	const heartRef = useRef<HeartIconHandle>(null);

	// Bell icon manual control functions
	const handleStartBellAnimation = () => {
		bellRef.current?.startAnimation();
	};

	const handleStopBellAnimation = () => {
		bellRef.current?.stopAnimation();
	};

	// Heart icon manual control functions
	const handleStartHeartAnimation = () => {
		heartRef.current?.startAnimation();
	};

	const handleStopHeartAnimation = () => {
		heartRef.current?.stopAnimation();
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
			},
		},
	};
	return (
		<div>
			<h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
				🎨 Animated Icons Showcase
			</h1>
			<p className="mt-4 text-gray-600">
				Interactive icon components with hover and manual control animations
			</p>
			<Link to="/" className="mt-4 inline-block text-blue-600 underline hover:text-blue-800">
				← {t('back_to_home', 'Back to Home')}
			</Link>
			<div className="mt-4">
				<p>Basic use</p>
			</div>
			<motion.div
				className="mx-auto max-w-4xl space-y-6 p-6"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{/* HeartIcon Demo Section */}
				<motion.div
					className="space-y-6 rounded-xl border bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 p-6 shadow-lg"
					variants={itemVariants}
				>
					<h2 className="flex items-center justify-center gap-2 text-center text-2xl font-semibold">
						<span className="text-2xl">❤️</span>
						Heart Icon Demo
					</h2>

					{/* Auto-trigger animation (hover) */}
					<div className="rounded-lg bg-white p-4 shadow-sm">
						<h3 className="mb-3 text-lg font-medium">Hover Animation</h3>
						<div className="flex items-center justify-center gap-4">
							<span className="text-sm text-gray-600">Hover over the heart:</span>
							<HeartIcon
								size={40}
								className="cursor-pointer text-pink-600 transition-colors hover:text-pink-700"
							/>
						</div>
					</div>

					{/* Manual control animation */}
					<div className="rounded-lg bg-white p-4 shadow-sm">
						<h3 className="mb-3 text-lg font-medium">Manual Control</h3>
						<div className="flex flex-col items-center gap-4">
							<HeartIcon ref={heartRef} size={48} className="text-red-500" />
							<div className="flex gap-3">
								<Button
									size="sm"
									onClick={handleStartHeartAnimation}
									className="bg-pink-500 shadow-md hover:bg-pink-600"
								>
									❤️ Start Beat
								</Button>
								<Button
									size="sm"
									variant="destructive"
									onClick={handleStopHeartAnimation}
									className="shadow-md"
								>
									⏹️ Stop Beat
								</Button>
							</div>
						</div>
					</div>

					{/* Different sizes */}
					<div className="rounded-lg bg-white p-4 shadow-sm">
						<h3 className="mb-3 text-lg font-medium">Size Variations</h3>
						<div className="flex items-center justify-center gap-6">
							<div className="text-center">
								<HeartIcon size={20} className="mb-1 text-gray-600" />
								<span className="text-xs text-gray-500">Small</span>
							</div>
							<div className="text-center">
								<HeartIcon size={28} className="mb-1 text-purple-600" />
								<span className="text-xs text-gray-500">Medium</span>
							</div>
							<div className="text-center">
								<HeartIcon size={36} className="mb-1 text-pink-600" />
								<span className="text-xs text-gray-500">Large</span>
							</div>
							<div className="text-center">
								<HeartIcon size={52} className="mb-1 text-red-600" />
								<span className="text-xs text-gray-500">X-Large</span>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Bell Icon Demo Section */}
				<motion.div
					className="space-y-6 rounded-xl border bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 shadow-lg"
					variants={itemVariants}
				>
					<h2 className="flex items-center justify-center gap-2 text-center text-2xl font-semibold">
						<span className="text-2xl">🔔</span>
						Bell Icon Demo
					</h2>

					{/* Auto-trigger animation (hover) */}
					<div className="rounded-lg bg-white p-4 shadow-sm">
						<h3 className="mb-3 text-lg font-medium">Hover Animation</h3>
						<div className="flex items-center justify-center gap-4">
							<span className="text-sm text-gray-600">Hover over the bell:</span>
							<BellIcon
								size={40}
								className="cursor-pointer text-blue-600 transition-colors hover:text-blue-700"
							/>
						</div>
					</div>

					{/* Manual control animation */}
					<div className="rounded-lg bg-white p-4 shadow-sm">
						<h3 className="mb-3 text-lg font-medium">Manual Control</h3>
						<div className="flex flex-col items-center gap-4">
							<BellIcon ref={bellRef} size={48} className="text-indigo-500" />
							<div className="flex gap-3">
								<Button
									size="sm"
									onClick={handleStartBellAnimation}
									className="bg-blue-500 shadow-md hover:bg-blue-600"
								>
									🔔 Start Ring
								</Button>
								<Button
									size="sm"
									variant="destructive"
									onClick={handleStopBellAnimation}
									className="shadow-md"
								>
									⏹️ Stop Ring
								</Button>
							</div>
						</div>
					</div>

					{/* Different sizes */}
					<div className="rounded-lg bg-white p-4 shadow-sm">
						<h3 className="mb-3 text-lg font-medium">Size Variations</h3>
						<div className="flex items-center justify-center gap-6">
							<div className="text-center">
								<BellIcon size={20} className="mb-1 text-gray-600" />
								<span className="text-xs text-gray-500">Small</span>
							</div>
							<div className="text-center">
								<BellIcon size={28} className="mb-1 text-purple-600" />
								<span className="text-xs text-gray-500">Medium</span>
							</div>
							<div className="text-center">
								<BellIcon size={36} className="mb-1 text-blue-600" />
								<span className="text-xs text-gray-500">Large</span>
							</div>
							<div className="text-center">
								<BellIcon size={52} className="mb-1 text-indigo-600" />
								<span className="text-xs text-gray-500">X-Large</span>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Usage Examples */}
				<motion.div
					className="space-y-4 rounded-xl border bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-lg"
					variants={itemVariants}
				>
					<h2 className="text-center text-xl font-semibold">💡 Usage Examples</h2>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="rounded-lg bg-white p-4 shadow-sm">
							<h3 className="mb-2 font-medium">Notification Bell</h3>
							<div className="flex items-center gap-2">
								<BellIcon size={24} className="text-orange-500" />
								<span className="text-sm">You have 3 new messages</span>
							</div>
						</div>
						<div className="rounded-lg bg-white p-4 shadow-sm">
							<h3 className="mb-2 font-medium">Like Button</h3>
							<div className="flex items-center gap-2">
								<HeartIcon size={24} className="text-red-500" />
								<span className="text-sm">24 people liked this</span>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default IconDemo;
