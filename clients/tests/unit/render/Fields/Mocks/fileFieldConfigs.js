export const fileFieldConfigs  = {
	required_single:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_single',
			fieldId: 'required_single',
			fieldLabel: 'Required Single',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_single',
			configOptions:
				{
					multiple: 'false',
					multiUploadText: 'false',
					allowedTypes: 'false',
					previewHeight: 24,
					previewWidth: 24,
				}
		},
	required_single_allow_png:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_single',
			fieldId: 'required_single',
			fieldLabel: 'Required Single',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_single',
			configOptions:
				{
					multiple: 'false',
					multiUploadText: 'false',
					allowedTypes: 'image/png',

				}
		},
	required_multiple_no_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_multiple_no_button_text',
			fieldId: 'required_multiple_no_button_text',
			fieldLabel: 'Required Multiple No Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_multiple_no_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'false',
					allowedTypes: 'false',
					previewHeight: 24,
					previewWidth: 24,
				}
		},
	required_multiple_has_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_multiple_has_button_text',
			fieldId: 'required_multiple_has_button_text',
			fieldLabel: 'Required Multiple Has Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_multiple_has_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'The Default Text',
					allowedTypes: 'false',
					previewHeight: 24,
					previewWidth: 24,
				}
		},
	not_required_single:
		{
			type: 'file',
			outterIdAttr: 'cf2-not_required_single',
			fieldId: 'not_required_single',
			fieldLabel: 'Not Required Single',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'not_required_single',
			configOptions:
				{
					multiple: 'false',
					multiUploadText: 'false',
					allowedTypes: 'false',
					previewHeight: 24,
					previewWidth: 24,
				}
		},
	not_required_multiple_no_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-not_required_multiple_no_button_text',
			fieldId: 'not_required_multiple_no_button_text',
			fieldLabel: 'Not Required Multiple No Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'not_required_multiple_no_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'false',
					allowedTypes: 'false',
					previewHeight: 24,
					previewWidth: 24,
				}
		},
	not_required_multiple_has_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-not_required_multiple_has_button_text',
			fieldId: 'not_required_multiple_has_button_text',
			fieldLabel: 'Not Required Multiple Has Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'not_required_multiple_has_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'The Default Text',
					allowedTypes: 'false',
					previewHeight: 24,
					previewWidth: 24,
				}
		},
	width_40_height_20:
		{
			type: 'file',
			outterIdAttr: 'cf2-width_40_height_20',
			fieldId: 'width_40_height_20',
			fieldLabel: 'Preview style set',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'width_40_height_20',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'The Default Text',
					allowedTypes: 'false',
					previewHeight: 20,
					previewWidth: 40,
				}
		}
};