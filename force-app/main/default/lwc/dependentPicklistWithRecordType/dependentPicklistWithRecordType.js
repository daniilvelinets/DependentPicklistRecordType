/**
 * Component to allow front-end dependent picklist value selection, restricted by a RecordType
 * Component uses lightning-record-edit-form, which performs a UI-API callout
 */
import { LightningElement, api } from 'lwc';
import {
    FlowAttributeChangeEvent
} from 'lightning/flowSupport';

export default class DependentPicklistValuesByRecordType extends LightningElement {
    // Inout attributes
    // {String} API Name of Object where Field is located
    @api SobjectName;
    // {String} Id of RecordType for which to get fields
    @api RecordTypeId;
    // {String} 1st level field (Conrolling field)
    @api FieldName1;
    // {Boolean} If field is required
    @api isRequired;
    // {Boolean} If field is required
    @api errorMessageTxt;
    // {String} 2nd level field (Conrolling field)
    @api FieldName2;
    // {String} 3d level field (Conrolling field)
    @api FieldName3;


    // Output Attributes
    // {String} picklist value
    @api FieldValue1;
    // {String} picklist value
    @api FieldValue2;
    // {String} picklist value
    @api FieldValue3;

    @api validate() {
        if( !this.isRequired
            || ( this.isRequired && this.FieldValue1 && this.FieldValue1.length > 0 ) ){
            console.log ("abra", this);
            return { isValid: true };
            
        } else {
            console.log ("kadabra",this);
            return {
                isValid: false,
                errorMessage: this.errorMessageTxt
            };
        }
    }

    //Assign selected values to variables
    handleFieldChange(event) {
          /*const attributeChangeEvent = new FlowAttributeChangeEvent(
            "fieldValue",
            event.target.value
          );
          this.dispatchEvent(attributeChangeEvent);
          */

        switch (event.target.fieldName) {
            case this.FieldName1: {
                this.FieldValue1 = event.target.value;
                break;
            }
            case this.FieldName2: {
                this.FieldValue2 = event.target.value;
                break;
            }
            case this.FieldName3: {
                this.FieldValue3 = event.target.value;
                break;
            }
            default: { }
        }
    }
}