<template>
	<div class="framework" ref="refFramework" @contextmenu.prevent>
		<!-- 主要区域 -->
		<div class="main-zone">
			<div class="row" style="margin-bottom: 0.3em">
				<Key :press="escape">Esc</Key>
				<Key placeholder />
				<Key :press="f1">F1</Key>
				<Key :press="f2">F2</Key>
				<Key :press="f3">F3</Key>
				<Key :press="f4">F4</Key>
				<Key :wu="0.5" placeholder />
				<Key :press="f5">F5</Key>
				<Key :press="f6">F6</Key>
				<Key :press="f7">F7</Key>
				<Key :press="f8">F8</Key>
				<Key :wu="0.5" placeholder />
				<Key :press="f9">F9</Key>
				<Key :press="f10">F10</Key>
				<Key :press="f11">F11</Key>
				<Key :press="f12">F12</Key>
			</div>
			<div class="row">
				<Key :press="backquote">`</Key>
				<Key :press="n1">1</Key>
				<Key :press="n2">2</Key>
				<Key :press="n3">3</Key>
				<Key :press="n4">4</Key>
				<Key :press="n5">5</Key>
				<Key :press="n6">6</Key>
				<Key :press="n7">7</Key>
				<Key :press="n8">8</Key>
				<Key :press="n9">9</Key>
				<Key :press="n0">0</Key>
				<Key :press="minus">-</Key>
				<Key :press="equal">=</Key>
				<Key :press="backspace" :wu="2">Backspace</Key>
			</div>
			<div class="row">
				<Key :press="tab" :wu="1.5">Tab</Key>
				<Key :press="q">Q</Key>
				<Key :press="w">W</Key>
				<Key :press="e">E</Key>
				<Key :press="r">R</Key>
				<Key :press="t">T</Key>
				<Key :press="y">Y</Key>
				<Key :press="u">U</Key>
				<Key :press="i">I</Key>
				<Key :press="o">O</Key>
				<Key :press="p">P</Key>
				<Key :press="bracketleft">[</Key>
				<Key :press="bracketright">]</Key>
				<Key :press="backslash" :wu="1.5">\</Key>
			</div>
			<div class="row">
				<Key :press="capsLock" :wu="1.75">CapsLock</Key>
				<Key :press="a">A</Key>
				<Key :press="s">S</Key>
				<Key :press="d">D</Key>
				<Key :press="f" show-blind-typing-guides>F</Key>
				<Key :press="g">G</Key>
				<Key :press="h">H</Key>
				<Key :press="j" show-blind-typing-guides>J</Key>
				<Key :press="k">K</Key>
				<Key :press="l">L</Key>
				<Key :press="semicolon">;</Key>
				<Key :press="quote">'</Key>
				<Key :press="enter" :wu="2.25">Enter</Key>
			</div>
			<div class="row">
				<Key :press="shiftLeft" :wu="2.25">Shift</Key>
				<Key :press="z">Z</Key>
				<Key :press="x">X</Key>
				<Key :press="c">C</Key>
				<Key :press="v">V</Key>
				<Key :press="b">B</Key>
				<Key :press="n">N</Key>
				<Key :press="m">M</Key>
				<Key :press="comma">,</Key>
				<Key :press="dot">.</Key>
				<Key :press="slash">/</Key>
				<Key :press="shiftRight" :wu="2.75">Shift</Key>
			</div>
			<div class="row">
				<Key :press="controlLeft" :wu="1.25">Ctrl</Key>
				<Key :press="metaLeft" :wu="1.25">Win</Key>
				<Key :press="altLeft" :wu="1.25">Alt</Key>
				<Key :press="space" :wu="6.25">Space</Key>
				<Key :press="altRight" :wu="1.25">Alt</Key>
				<Key :press="metaRight" :wu="1.25">Win</Key>
				<Key :press="context_menu" :wu="1.25">Aps</Key>
				<Key :press="controlRight" :wu="1.25">Ctrl</Key>
			</div>
		</div>
		<!-- 控制区 -->
		<div class="control-zone">
			<div class="row" style="margin-bottom: 0.3em">
				<Key :press="print">Print Screen</Key>
				<Key :press="scrollLock">Scroll Lock</Key>
				<Key :press="pause">Pause Break</Key>
			</div>
			<div class="row">
				<Key :press="insert">Insert</Key>
				<Key :press="home">Home</Key>
				<Key :press="pageup">Page UP</Key>
			</div>
			<div class="row">
				<Key :press="del">Delete</Key>
				<Key :press="end">End</Key>
				<Key :press="pagedown">Page Down</Key>
			</div>
			<div class="row">
				<Key placeholder />
			</div>
			<div class="row">
				<Key placeholder />
				<Key :press="arrowup">↑</Key>
				<Key placeholder />
			</div>
			<div class="row">
				<Key :press="arrowleft">←</Key>
				<Key :press="arrowdown">↓</Key>
				<Key :press="arrowright">→</Key>
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
				<Key :press="numLock">Num Lock</Key>
				<Key :press="numpadDivide">/</Key>
				<Key :press="numpadMultiply">*</Key>
				<Key :press="numpadSubtract">-</Key>
				<Key
					:press="numpadAdd"
					grid-item
					style="grid-row: 2 / span 2; grid-column: 4"
					>+</Key
				>
				<Key :press="numpad1" grid-item style="grid-row: 4; grid-column: 1"
					>1</Key
				>
				<Key :press="numpad2" grid-item style="grid-row: 4; grid-column: 2"
					>2</Key
				>
				<Key :press="numpad3" grid-item style="grid-row: 4; grid-column: 3"
					>3</Key
				>
				<Key :press="numpad4" grid-item style="grid-row: 3; grid-column: 1"
					>4</Key
				>
				<Key
					:press="numpad5"
					grid-item
					style="grid-row: 3; grid-column: 2"
					show-blind-typing-guides
					>5</Key
				>
				<Key :press="numpad6" grid-item style="grid-row: 3; grid-column: 3"
					>6</Key
				>
				<Key :press="numpad7" grid-item style="grid-row: 2; grid-column: 1"
					>7</Key
				>
				<Key :press="numpad8" grid-item style="grid-row: 2; grid-column: 2"
					>8</Key
				>
				<Key :press="numpad9" grid-item style="grid-row: 2; grid-column: 3"
					>9</Key
				>
				<Key
					:press="numpad0"
					grid-item
					style="grid-row: 5; grid-column: 1 / span 2"
					>0</Key
				>
				<Key :press="numpadDecimal">.</Key>
				<Key
					:press="numpadEnter"
					grid-item
					style="grid-row: 4 / span 2; grid-column: 4"
					>Enter</Key
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useKeyModifier, useMagicKeys } from "@vueuse/core";
	import Key from "./Key.vue";
	import { onMounted, ref, watch } from "vue";

	const refFramework = ref<HTMLElement>();
	// 页面加载完成后自动获取焦点
	onMounted(() => {
		// 将焦点设置到特定的元素上
		refFramework.value?.focus();

		// 或者将焦点设置到输入框上
		// const focusInput = document.getElementById("focusInput");
		// focusInput.focus();
	});

	const {
		q,
		w,
		e,
		r,
		t,
		y,
		u,
		i,
		o,
		p,
		a,
		s,
		d,
		f,
		g,
		h,
		j,
		k,
		l,
		z,
		x,
		c,
		v,
		b,
		n,
		m,
		f1,
		f2,
		f3,
		f4,
		f5,
		f6,
		f7,
		f8,
		f9,
		f10,
		f11,
		f12,
		n1,
		n2,
		n3,
		n4,
		n5,
		n6,
		n7,
		n8,
		n9,
		n0,
		escape,
		backspace,
		enter,
		tab,
		shiftLeft,
		shiftRight,
		controlLeft,
		controlRight,
		altLeft,
		altRight,
		metaLeft,
		metaRight,
		context_menu,
		space,
		arrowup,
		arrowdown,
		arrowleft,
		arrowright,
		backquote,
		minus,
		equal,
		comma,
		dot,
		bracketleft,
		bracketright,
		slash,
		backslash,
		semicolon,
		quote,
		numpad1,
		numpad2,
		numpad3,
		numpad4,
		numpad5,
		numpad6,
		numpad7,
		numpad8,
		numpad9,
		numpad0,
		numpadDecimal,
		numpadDivide,
		numpadMultiply,
		numpadSubtract,
		numpadAdd,
		numpadEnter,
		pageup,
		pagedown,
		home,
		end,
		insert,
		del,
		pause,
		print,
		current,
	} = useMagicKeys({
		aliasMap: {
			n1: "1",
			n2: "2",
			n3: "3",
			n4: "4",
			n5: "5",
			n6: "6",
			n7: "7",
			n8: "8",
			n9: "9",
			n0: "0",
			dot: ".",
			del: "delete",
		},
	});

	const capsLock = useKeyModifier("CapsLock", { initial: false });
	const scrollLock = useKeyModifier("ScrollLock", { initial: false });
	const numLock = useKeyModifier("NumLock", { initial: false });

	//z 阻止默认按键事件
	document.addEventListener(
		"keydown",
		function (event) {
			event.preventDefault(); // 阻止默认行为
		},
		{ passive: false }
	); // 必须设置 passive: false 才能成功阻止

	watch(current, async (value) => {
		const obj = await window?.chrome?.webview?.hostObjects?.ahk;
		const keys = [...value];
		if (keys.length > 0) {
			obj!.debug(keys.join("+"));
		}
	});

	onMounted(async () => {
		const obj = await window?.chrome?.webview?.hostObjects?.ahk;
		obj!.debug("成功与AHK进行链接🔗");
	});
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
