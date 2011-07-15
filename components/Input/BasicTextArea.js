enyo.kind({
	name: "ekl.Input.BasicTextArea",
	kind: enyo.BasicInput,
	nodeTag: "textarea",
	valueChanged: function() {
		this.setDomValue(this.value);
		this.setContent(this.value);
	},
	getDomValue: function() {
		if (this.hasNode()) {
			return this.node.innerHTML;
		}
	},
	setDomValue: function(inValue) {
		this.setAttribute("value", inValue);
		// FIXME: it's not clear when we need to set .value vs. using setAttribute above
		if (this.hasNode()) {
			this.node.innerHTML = inValue;
		}
		if (!this.isEmpty()) {
			this.addRemovePlaceholderClassName(false);
		}
	}
});