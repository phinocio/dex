export function useDialog(selector: string) {
	return {
		show(): void {
			document.querySelector<HTMLDialogElement>(selector)?.showModal();
		},
		close(): void {
			document.querySelector<HTMLDialogElement>(selector)?.close();
		},
	};
}
