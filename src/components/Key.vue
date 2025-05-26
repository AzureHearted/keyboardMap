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
			}">
			<slot v-if="!placeholder"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { withDefaults, computed } from "vue";
	const props = withDefaults(
		defineProps<{
			ou?: string; // 1u单位的长度
			wu?: number; // 宽度(单位U)
			hu?: number; // 高度(单位U)
			placeholder?: boolean; // 是否是占位符
			gridItem?: boolean; // 是否是grid元素
		}>(),
		{
			ou: "3em",
			wu: 1,
			hu: 1,
			placeholder: false,
			gridItem: false,
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
	$bgcolor: cornflowerblue;
	$bgcolor: unset;
	$shadowColor: rgba(0, 0, 0, 0.5);

	.keyContainer {
		width: v-bind("width");
		height: v-bind("height");
		padding: 0.05em;
		display: flex;
		align-items: center;
		justify-content: center;

		user-select: none;

		transition: 0.25s ease;

		.key {
			background-color: $bgcolor;
			border-radius: 0.5em;
			border: solid 0.1em $shadowColor;
			box-shadow: 0 0 0 $shadowColor;

			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			font-size: small;

			transition: inherit;

			scale: 100%;

			&:hover {
				box-shadow: 0 0 0.5em $shadowColor;
			}

			&:active {
				scale: 90%;
			}
		}
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
