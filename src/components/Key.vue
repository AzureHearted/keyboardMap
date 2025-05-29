<template>
	<div
		class="keyContainer"
		:class="{
			'gird-item': gridItem,
		}">
		<div
			class="key"
			:class="{
				placeholder: placeholder,
				press: !placeholder ? press : false,
				showBlindTypingGuides: !placeholder ? showBlindTypingGuides : false,
			}">
			<slot v-if="!placeholder"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	const props = withDefaults(
		defineProps<{
			ou?: string; // 1u单位的长度
			wu?: number; // 宽度(单位U)
			hu?: number; // 高度(单位U)
			placeholder?: boolean; // 是否是占位符
			gridItem?: boolean; // 是否是grid元素
			press?: boolean; // 是否按下
			showBlindTypingGuides?: boolean; // 是否显示盲打定位点
		}>(),
		{
			ou: "3em",
			wu: 1,
			hu: 1,
			placeholder: false,
			gridItem: false,
			press: false,
			showBlindTypingGuides: false,
		}
	);

	const r = /^(\d+)([^0-9]*)/;

	const uCount = computed<number>(() => {
		let match = r.exec(props.ou);
		if (match) return Number(match[1]);
		else return 1;
	});

	const unit = computed<string>(() => {
		let match = r.exec(props.ou);
		if (match) return match[2];
		else return "px";
	});

	const width = computed<string>(() => {
		return props.wu * uCount.value + unit.value;
	});

	const height = computed<string>(() => {
		return props.hu * uCount.value + unit.value;
	});
</script>

<style lang="scss" scoped>
	$isPlaceholder: v-bind("props.placeholder");
	$bgcolor: unset;
	$bgcolor-press: cornflowerblue;

	$shadowColorInLight: rgba(0, 0, 0, 0.5);
	$shadowColorInDark: rgba(255, 255, 255, 0.7);

	$key-width: v-bind("width");
	$key-height: v-bind("height");

	/* 按键容器 */
	.keyContainer {
		position: relative;
		width: $key-width;
		height: $key-height;
		padding: 0.05em;
		display: flex;
		align-items: center;
		justify-content: center;

		user-select: none;

		transition: 0.25s ease;

		/*z 按键样式 */
		.key {
			background-color: $bgcolor;
			border-radius: 0.5em;

			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			font-size: small;

			transition: inherit;

			scale: 100%;

			@media (prefers-color-scheme: light) {
				border: solid 0.1em $shadowColorInLight;
				box-shadow: 0 0 0 $shadowColorInLight;
				text-shadow: 0 0 0.1em $shadowColorInLight;
			}
			@media (prefers-color-scheme: dark) {
				border: solid 0.1em $shadowColorInDark;
				box-shadow: 0 0 0 $shadowColorInDark;
				text-shadow: 0 0 0.1em $shadowColorInDark;
			}

			&:hover {
				@media (prefers-color-scheme: light) {
					box-shadow: 0 0 0.5em $shadowColorInLight;
				}
				@media (prefers-color-scheme: dark) {
					box-shadow: 0 0 0.5em $shadowColorInDark;
				}
			}

			/* 按键按下和激活的样式 */
			&.press,
			&:active:not(.placeholder) {
				scale: 90%;
				background-color: $bgcolor-press;

				@media (prefers-color-scheme: light) {
					color: white;
					box-shadow: 0 0 0.5em $shadowColorInLight;
					text-shadow: 0 0 0.1em $shadowColorInDark;
				}
				@media (prefers-color-scheme: dark) {
					color: black;
					box-shadow: 0 0 0.5em $shadowColorInDark;
					text-shadow: 0 0 0.1em $shadowColorInLight;
				}
			}

			/*z 盲打定位点样式 */
			&.showBlindTypingGuides {
				&::before {
					content: "";
					position: absolute;
					width: calc($key-width * 0.3);
					height: 0;
					top: calc($key-height - 0.1em);
					border-radius: 0.15em;

					@media (prefers-color-scheme: light) {
						border-bottom: 0.15em solid black;
						box-shadow: 0 0 0.2em $shadowColorInLight;
					}
					@media (prefers-color-scheme: dark) {
						border-bottom: 0.15em solid white;
						box-shadow: 0 0 0.2em $shadowColorInDark;
					}
				}
				&:active:not(.placeholder)::before,
				&.press::before {
					@media (prefers-color-scheme: light) {
						border-bottom: 0.15em solid white;
						box-shadow: 0 0 0.2em black;
					}
					@media (prefers-color-scheme: dark) {
						border-bottom: 0.15em solid black;
						box-shadow: 0 0 0.2em white;
					}
				}
			}
		}

		/*z 占位符样式 */
		.placeholder {
			background-color: unset;
			border: unset;
			box-shadow: unset;
			&:hover {
				box-shadow: unset;
			}
		}
	}

	.gird-item {
		width: 100%;
		height: 100%;
	}
</style>
