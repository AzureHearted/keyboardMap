// types/chrome-webview.d.ts
interface AHKHostObject {
	debug(message: string): void;
}

interface ChromeWebView {
	hostObjects: {
		ahk: Promise<AHKHostObject>;
		sync: {
			ahk: AHKHostObject;
		};
	};
}

interface Chrome {
	webview?: ChromeWebView;
}

interface Window {
	chrome?: Chrome;
}
