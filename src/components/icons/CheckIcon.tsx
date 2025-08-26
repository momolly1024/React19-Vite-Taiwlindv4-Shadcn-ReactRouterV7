"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface CheckIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface CheckIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const CheckIcon = forwardRef<CheckIconHandle, CheckIconProps>(
	({ className, size = 32, ...props }, ref) => {
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

		const tickVariants: Variants = {
			normal: { strokeDashoffset: 0, scale: 1, opacity: 1 },
			animate: {
				strokeDashoffset: [20, 0],
				scale: [1, 1.2, 1],
				opacity: [0.5, 1],
				transition: { duration: 0.6, ease: "easeInOut" },
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
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
				>
					<motion.path
						d="M5 13l4 4L19 7"
						strokeDasharray="20"
						strokeDashoffset="0"
						variants={tickVariants}
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

CheckIcon.displayName = "CheckIcon";
export { CheckIcon };
