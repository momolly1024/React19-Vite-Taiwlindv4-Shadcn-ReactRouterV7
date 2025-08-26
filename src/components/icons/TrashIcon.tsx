"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import { forwardRef } from "react";

export interface TrashIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const TrashIcon = forwardRef<HTMLDivElement, TrashIconProps>(
	({ className, size = 28, ...props }, ref) => {
		const lidVariants: Variants = {
			normal: { y: 0, rotate: 0 },
			hover: {
				y: -8,
				rotate: -25,
				transition: { type: "spring", stiffness: 400, damping: 15 },
			},
		};

		const canVariants: Variants = {
			normal: { scale: 1 },
			hover: {
				scale: [1, 0.95, 1.05, 1],
				transition: { duration: 0.5, ease: "easeOut" },
			},
		};

		const smokeVariants: Variants = {
			normal: { opacity: 0, scale: 0, y: 0 },
			hover: {
				opacity: [0, 0.6, 0],
				scale: [0, 1.5, 2],
				y: [0, -10, -20],
				transition: { duration: 1, ease: "easeOut" },
			},
		};

		return (
			<motion.div
				ref={ref}
				className={cn("relative inline-flex", className)}
				style={{ overflow: "visible" }}
				whileHover="hover"
				initial="normal"
				animate="normal"
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
					style={{ overflow: "visible" }}
				>
					<motion.path
						d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
						stroke="currentColor"
						variants={canVariants}
					/>
					<motion.path
						d="M3 6h18"
						stroke="currentColor"
						style={{ transformOrigin: "left center" }}
						variants={lidVariants}
					/>
					<motion.path
						d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
						stroke="currentColor"
						style={{ transformOrigin: "left center" }}
						variants={lidVariants}
					/>
				</motion.svg>

				<motion.div
					className="absolute top-1/2 left-1/2"
					style={{ translateX: "-50%", translateY: "-50%" }}
					variants={smokeVariants}
				>
					<div
						style={{
							width: size / 2,
							height: size / 2,
							borderRadius: "50%",
							background: "rgba(128,128,128,0.4)",
							filter: "blur(2px)",
						}}
					/>
				</motion.div>
			</motion.div>
		);
	},
);

TrashIcon.displayName = "TrashIcon";
export { TrashIcon };
