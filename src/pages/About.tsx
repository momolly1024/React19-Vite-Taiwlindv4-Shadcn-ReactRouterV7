import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useCounterStore } from '@/store';
import { useTranslation } from 'react-i18next';

const About = () => {
	const { count, increment } = useCounterStore();
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(true);   // State for motion visibility toggle

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100
			}
		}
	};

	return (
		<motion.div 
			className="space-y-6 p-6"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{/* Title */}
			<motion.h1 
				className="text-2xl font-bold"
				variants={itemVariants}
			>
				{t('about_page')}
			</motion.h1>

			{/* Counter */}
			<motion.div 
				className="space-y-2"
				variants={itemVariants}
			>
				<motion.div 
					className="text-lg"
					key={count}
					initial={{ scale: 1 }}
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 0.2 }}
				>
					{t('current_count')}: {count}
				</motion.div>
				<motion.div whileTap={{ scale: 0.95 }}>
					<Button onClick={increment}>{t('increment')}</Button>
				</motion.div>
			</motion.div>

			{/* Motion Examples Section */}
			<motion.div 
				className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-pink-50 space-y-4"
				variants={itemVariants}
			>
				<h3 className="text-lg font-semibold text-center">🎨 Motion Animation Examples</h3>
				
				{/* Basic Animation */}
				<div className="space-y-2">
					<h4 className="font-medium">Basic Animations:</h4>
					<div className="flex items-center gap-4">
						<motion.div
							className="w-12 h-12 bg-blue-500 rounded-lg"
							animate={{ rotate: 360 }}
							transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
						/>
						<motion.div
							className="w-12 h-12 bg-green-500 rounded-full"
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 1, repeat: Infinity }}
						/>
						<motion.div
							className="w-12 h-12 bg-red-500 rounded"
							animate={{ x: [0, 20, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						/>
					</div>
				</div>

				{/* Hover Animation */}
				<div className="space-y-2">
					<h4 className="font-medium">Hover Effects:</h4>
					<motion.button
						className="px-4 py-2 bg-purple-500 text-white rounded-lg"
						whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
						whileTap={{ scale: 0.95 }}
					>
						Hover & Click Me
					</motion.button>
				</div>

				{/* Toggle Animation */}
				<div className="space-y-2">
					<h4 className="font-medium">Toggle Visibility:</h4>
					<div className="flex items-center gap-4">
						<Button onClick={() => setIsVisible(!isVisible)}>
							{isVisible ? 'Hide' : 'Show'} Element
						</Button>
						<motion.div
							className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold"
							initial={false}
							animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3 }}
						>
							{isVisible && "Hi!"}
						</motion.div>
					</div>
				</div>

				{/* Stagger Animation */}
				<div className="space-y-2">
					<h4 className="font-medium">Stagger Animation:</h4>
					<motion.div
						className="flex gap-2"
						initial="hidden"
						whileHover="visible"
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0.1
								}
							}
						}}
					>
						{[1, 2, 3, 4, 5].map((num) => (
							<motion.div
								key={num}
								className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
								variants={{
									hidden: { y: 0 },
									visible: { y: -10 }
								}}
							>
								{num}
							</motion.div>
						))}
					</motion.div>
					<p className="text-sm text-gray-600">Hover over the circles above</p>
				</div>

				{/* Complex Animations */}
				<div className="space-y-2">
					<h4 className="font-medium">Complex Animations:</h4>
					<div className="grid grid-cols-2 gap-4">
						{/* Bouncing ball */}
						<motion.div
							className="w-8 h-8 bg-yellow-500 rounded-full"
							animate={{ 
								y: [0, -30, 0],
								rotate: [0, 180, 360]
							}}
							transition={{ 
								duration: 1, 
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						
						{/* Morphing shape */}
						<motion.div
							className="w-12 h-12 bg-indigo-500"
							animate={{
								borderRadius: ["0%", "50%", "0%"],
								rotate: [0, 90, 180, 270, 360]
							}}
							transition={{ 
								duration: 2, 
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
					</div>
				</div>

				{/* Gesture Animations */}
				<div className="space-y-2">
					<h4 className="font-medium">Drag & Drop:</h4>
					<motion.div
						className="w-16 h-16 bg-pink-500 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold"
						drag
						dragConstraints={{ left: 0, right: 200, top: 0, bottom: 100 }}
						whileDrag={{ scale: 1.1, rotate: 5 }}
						dragElastic={0.2}
					>
						Drag me!
					</motion.div>
					<p className="text-sm text-gray-600">Try dragging the box above</p>
				</div>
			</motion.div>

			{/* Advanced Motion Examples */}
			<motion.div 
				className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-green-50 space-y-4"
				variants={itemVariants}
			>
				<h3 className="text-lg font-semibold text-center">🚀 Advanced Motion Examples</h3>
				
				{/* Path Animation */}
				<div className="space-y-2">
					<h4 className="font-medium">Path Animation:</h4>
					<div className="relative w-full h-20 bg-gray-100 rounded-lg overflow-hidden">
						<motion.div
							className="absolute w-4 h-4 bg-red-500 rounded-full"
							animate={{
								x: [0, 100, 200, 300, 200, 100, 0],
								y: [0, 30, 60, 30, 0, 30, 0]
							}}
							transition={{ 
								duration: 3, 
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
					</div>
				</div>

				{/* Loading Spinner */}
				<div className="space-y-2">
					<h4 className="font-medium">Loading Spinner:</h4>
					<motion.div
						className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full"
						animate={{ rotate: 360 }}
						transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
					/>
				</div>

				{/* Wave Animation */}
				<div className="space-y-2">
					<h4 className="font-medium">Wave Animation:</h4>
					<div className="flex gap-1">
						{[...Array(5)].map((_, i) => (
							<motion.div
								key={i}
								className="w-2 h-8 bg-blue-400 rounded-full"
								animate={{
									scaleY: [1, 2, 1],
									opacity: [0.5, 1, 0.5]
								}}
								transition={{
									duration: 1,
									repeat: Infinity,
									delay: i * 0.1
								}}
							/>
						))}
					</div>
				</div>
			</motion.div>

			{/* Back link */}
			<motion.div variants={itemVariants}>
				<Link
					to="/?hello=world&molly=YA"
					className="text-blue-600 underline hover:text-blue-800"
				>
					← {t('back_to_home')}
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default About;