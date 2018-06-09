/**
 * ItemCodeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getModelAttributes1: (req, res) => {

        const getAttributes = (model) => {
            if (sails.models[model]) {
                let attributes = Object.keys(sails.models[model].attributes);
                attributes.forEach((item) => {
                    const childAttributes = getAttributes(item);
                    if (childAttributes) {
                        attributes = _.union(attributes, childAttributes);
                    }
                });
                return attributes;
            }
            else{
                return null;
            }
        }
        /*
        let itemCodeAttributes = Object.keys(sails.models["itemcode"].attributes);
        itemCodeAttributes.forEach((item) => {
            const childAttributes = Object.keys(sails.models[item].attributes);
            if (childAttributes) {
                itemCodeAttributes = _.union(itemCodeAttributes, childAttributes);
                childAttributes.forEach((childItem) => {
                    const childAttributes = Object.keys(sails.models[childItem].attributes);
                    if (childAttributes) {
                        itemCodeAttributes = _.union(itemCodeAttributes, childAttributes);
                    }
                });

            }
        });
        */
    }

};

