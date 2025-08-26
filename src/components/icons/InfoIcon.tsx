"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface InfoIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface InfoIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const InfoIcon = forwardRef<InfoIconHandle, InfoIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) controls.start("animate");
		}, [controls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) controls.start("normal");
		}, [controls]);

		const svgVariants: Variants = {
			normal: { rotate: 0, scale: 1 },
			animate: {
				rotate: [0, -2, 2, 0],
				scale: [1, 1.08, 0.95, 1],
				transition: { duration: 1.4, ease: "easeInOut", repeat: Infinity },
			},
		};

		const drawVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: [0.6, 1],
				transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
			},
		};

		const pulseVariants: Variants = {
			normal: { scale: 1, opacity: 1 },
			animate: {
				scale: [1, 1.3, 0.8, 1],
				opacity: [1, 0.5, 1],
				transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
			},
		};

		return (
			<motion.div
				className={cn("inline-flex", className)}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				{...props}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={controls}
					initial="normal"
					variants={svgVariants}
				>
					<motion.circle cx="12" cy="12" r="10" variants={drawVariants} />
					<motion.path d="M12 16v-4" variants={pulseVariants} />
					<motion.path d="M12 8h.01" variants={pulseVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

InfoIcon.displayName = "InfoIcon";
export { InfoIcon };
