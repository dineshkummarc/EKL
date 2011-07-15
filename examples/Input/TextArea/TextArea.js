enyo.kind({
	name: "enyo.CanonTextArea",
	kind: enyo.VFlexBox,
	components: [
		{kind: "ekl.Input.TextArea", value: "This is an example of text which is too long to fit in one line. It will wrap as necessary. This is a <b>rich</b> <em>text</em> control, so it's possible to style."}
	],
	create: function() {
		this.inherited(arguments);
	}
});