"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface UserIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface UserIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const UserIcon = forwardRef<UserIconHandle, UserIconProps>(
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

		const bodyVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1 },
			animate: {
				strokeDashoffset: [40, 0],
				opacity: [0.3, 1],
				transition: { duration: 0.6, ease: "easeInOut" },
			},
		};

		const headVariants: Variants = {
			normal: { scale: 1, opacity: 1 },
			animate: {
				scale: [0.6, 1.2, 1],
				opacity: [0, 1],
				transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
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
					className="lucide lucide-user-icon lucide-user"
				>
					<motion.path
						d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
						strokeDasharray="40"
						strokeDashoffset="0"
						variants={bodyVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.circle
						cx="12"
						cy="7"
						r="4"
						variants={headVariants}
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

UserIcon.displayName = "UserIcon";
export { UserIcon };
