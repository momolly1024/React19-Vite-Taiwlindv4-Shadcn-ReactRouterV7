"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ChevronLeftIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface ChevronLeftIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const ChevronLeftIcon = forwardRef<ChevronLeftIconHandle, ChevronLeftIconProps>(
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

		const handleEnter = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) {
					controls.start("animate");
				} else {
					onMouseEnter?.(e);
				}
			},
			[controls, onMouseEnter],
		);

		const handleLeave = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) {
					controls.start("normal");
				} else {
					onMouseLeave?.(e);
				}
			},
			[controls, onMouseLeave],
		);

		const arrowVariants: Variants = {
			normal: { x: 0, opacity: 1 },
			animate: {
				x: [0, -4, 0],
				opacity: [1, 0.6, 1],
				transition: {
					duration: 0.8,
					repeat: Infinity,
				},
			},
		};

		const trailVariants: Variants = {
			normal: { x: 0, opacity: 0 },
			animate: {
				x: [-6, -10],
				opacity: [0.4, 0],
				transition: {
					duration: 0.8,
					repeat: Infinity,
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
				>
					<motion.path
						d="m15 18-6-6 6-6"
						variants={trailVariants}
						stroke="currentColor"
					/>
					<motion.path d="m15 18-6-6 6-6" variants={arrowVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

ChevronLeftIcon.displayName = "ChevronLeftIcon";
export { ChevronLeftIcon };