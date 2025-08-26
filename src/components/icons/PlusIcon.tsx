"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface PlusIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface PlusIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const PlusIcon = forwardRef<PlusIconHandle, PlusIconProps>(
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

		const plusVariants: Variants = {
			normal: { scale: 1, rotate: 0 },
			animate: {
				scale: [1, 1.2, 0.85, 1],
				rotate: [0, 10, -10, 0],
				transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
			},
		};

		const lineVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: 1,
				transition: {
					duration: 0.6,
					ease: "easeInOut",
					repeat: Infinity,
					repeatDelay: 0.4,
				},
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
					variants={plusVariants}
				>
					<motion.path d="M5 12h14" variants={lineVariants} />
					<motion.path d="M12 5v14" variants={lineVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

PlusIcon.displayName = "PlusIcon";
export { PlusIcon };
