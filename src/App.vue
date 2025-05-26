<template>
	<div class="framework">
		<!-- 主要区域 -->
		<div class="main-zone">
			<div class="row" style="margin-bottom: 0.3em">
				<Key>Esc</Key>
				<Key placeholder />
				<Key>F1</Key>
				<Key>F2</Key>
				<Key>F3</Key>
				<Key>F4</Key>
				<Key :wu="0.5" placeholder />
				<Key>F5</Key>
				<Key>F6</Key>
				<Key>F7</Key>
				<Key>F8</Key>
				<Key :wu="0.5" placeholder />
				<Key>F9</Key>
				<Key>F10</Key>
				<Key>F11</Key>
				<Key>F12</Key>
			</div>
			<div class="row">
				<Key>`</Key>
				<Key>1</Key>
				<Key>2</Key>
				<Key>3</Key>
				<Key>4</Key>
				<Key>5</Key>
				<Key>6</Key>
				<Key>7</Key>
				<Key>8</Key>
				<Key>9</Key>
				<Key>0</Key>
				<Key>-</Key>
				<Key>=</Key>
				<Key :wu="2">Backspace</Key>
			</div>
			<div class="row">
				<Key :wu="1.5">Tab</Key>
				<Key>Q</Key>
				<Key>W</Key>
				<Key>E</Key>
				<Key>R</Key>
				<Key>T</Key>
				<Key>Y</Key>
				<Key>U</Key>
				<Key>I</Key>
				<Key>O</Key>
				<Key>P</Key>
				<Key>[</Key>
				<Key>]</Key>
				<Key :wu="1.5">\</Key>
			</div>
			<div class="row">
				<Key :wu="1.75">CapsLock</Key>
				<Key>A</Key>
				<Key>S</Key>
				<Key>D</Key>
				<Key>F</Key>
				<Key>G</Key>
				<Key>H</Key>
				<Key>J</Key>
				<Key>K</Key>
				<Key>L</Key>
				<Key>;</Key>
				<Key>'</Key>
				<Key :wu="2.25">Enter</Key>
			</div>
			<div class="row">
				<Key :wu="2.25">Shift</Key>
				<Key>Z</Key>
				<Key>X</Key>
				<Key>C</Key>
				<Key>V</Key>
				<Key>B</Key>
				<Key>N</Key>
				<Key>M</Key>
				<Key>,</Key>
				<Key>.</Key>
				<Key>/</Key>
				<Key :wu="2.75">Shift</Key>
			</div>
			<div class="row">
				<Key :wu="1.25">Ctrl</Key>
				<Key :wu="1.25">Win</Key>
				<Key :wu="1.25">Alt</Key>
				<Key :wu="6.25">Space</Key>
				<Key :wu="1.25">Alt</Key>
				<Key :wu="1.25">Win</Key>
				<Key :wu="1.25">Aps</Key>
				<Key :wu="1.25">Ctrl</Key>
			</div>
		</div>
		<!-- 控制区 -->
		<div class="control-zone">
			<div class="row" style="margin-bottom: 0.3em">
				<Key>Print Screen</Key>
				<Key>Scroll Lock</Key>
				<Key>Pause Break</Key>
			</div>
			<div class="row">
				<Key>Insert</Key>
				<Key>Home</Key>
				<Key>Page UP</Key>
			</div>
			<div class="row">
				<Key>Delete</Key>
				<Key>End</Key>
				<Key>Page Down</Key>
			</div>
			<div class="row">
				<Key placeholder />
			</div>
			<div class="row">
				<Key placeholder />
				<Key>↑</Key>
				<Key placeholder />
			</div>
			<div class="row">
				<Key>←</Key>
				<Key>↓</Key>
				<Key>→</Key>
			</div>
		</div>
		<!-- 小键盘区 -->
		<div class="numpad-zone">
			<div class="row" style="margin-bottom: 0.3em">
				<Key placeholder />
				<Key placeholder />
				<Key placeholder />
				<Key placeholder />
			</div>
			<div class="numpad">
				<Key>Num Lock</Key>
				<Key>/</Key>
				<Key>*</Key>
				<Key>-</Key>
				<Key grid-item style="grid-row: 2 / span 2; grid-column: 4">+</Key>
				<Key grid-item style="grid-row: 4; grid-column: 1">1</Key>
				<Key grid-item style="grid-row: 4; grid-column: 2">2</Key>
				<Key grid-item style="grid-row: 4; grid-column: 3">3</Key>
				<Key grid-item style="grid-row: 3; grid-column: 1">4</Key>
				<Key grid-item style="grid-row: 3; grid-column: 2">5</Key>
				<Key grid-item style="grid-row: 3; grid-column: 3">6</Key>
				<Key grid-item style="grid-row: 2; grid-column: 1">7</Key>
				<Key grid-item style="grid-row: 2; grid-column: 2">8</Key>
				<Key grid-item style="grid-row: 2; grid-column: 3">9</Key>
				<Key grid-item style="grid-row: 5; grid-column: 1 / span 2">0</Key>
				<Key>.</Key>
				<Key grid-item style="grid-row: 4 / span 2; grid-column: 4">Enter</Key>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Key from "./components/Key.vue";
</script>

<style lang="scss" scoped>
	$bgcolor: antiquewhite;
	$shadowColorInLight: rgba(0, 0, 0, 0.7);
	$shadowColorInDark: rgba(255, 255, 255, 0.7);

	/* 104布局的键盘框架 */
	.framework {
		/* background-color: $bgcolor; */

		padding: 0.25em;
		border-radius: 0.5em;
		display: flex;
		gap: 0.5em;

		@media (prefers-color-scheme: light) {
			border: solid 0.1em $shadowColorInLight;
		}
		@media (prefers-color-scheme: dark) {
			border: solid 0.1em $shadowColorInDark;
		}
	}

	/* 键盘主要区 */
	.main-zone {
		.row {
			display: flex;
		}
	}
	/* 键盘控制区 */
	.control-zone {
		.row {
			display: flex;
		}
	}
	/* 小键盘区 */
	.numpad-zone {
		.row {
			display: flex;
		}
		.numpad {
			display: grid;
			grid-template-rows: repeat(5, 1fr);
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
