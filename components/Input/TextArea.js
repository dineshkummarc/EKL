enyo.kind({
	name: "ekl.Input.TextArea",
	kind: enyo.Input,
	className: "enyo-input ekl-textarea",
	//* @protected
	chrome: [
		{name: "input", flex: 1, kind: ekl.Input.BasicTextArea, className: "enyo-input-input ekl-textarea-input"}
	]
});