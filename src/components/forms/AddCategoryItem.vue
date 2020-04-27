<template>
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div
							class="for-group"
							v-for="(data, name) in this.$store.state.categoryItemDataModel"
							:key="name"
						>
							<div v-html="generateFieldMarkup(data, name)"></div>
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">
						Close
					</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AddCategoryItem',
	methods: {
		generateFieldMarkup(fieldData, fieldName) {
			let html = '';
			html += `<label for="field-${fieldName}">${fieldData.label}</label>`;
			switch (fieldData.fieldType) {
			case 'input':
				html += `<input type="text" class="form-control" id="field-${fieldName}" aria-describedby="field-${fieldName}-help" placeholder="${fieldData.label}">`;
				break;
			case 'textarea':
				html += `<textarea class="form-control" id="field-${fieldName}" aria-describedby="field-${fieldName}-help" placeholder="${fieldData.label}"></textarea>`;
				break;
			case 'checkbox':
				html += `<input type="checkbox" class="form-control" id="field-${fieldName}" aria-describedby="field-${fieldName}-help">`;
				break;
			}
			html += `<small id="field-${fieldName}-help" class="form-text text-muted">${fieldData.description}</small>`;
			return html;
		}
	}
};
</script>

<style scoped></style>
