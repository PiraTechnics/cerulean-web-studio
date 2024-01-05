export {};

declare global {
	type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;
}
