/**
 * ClientConfigController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
class ClientConfigController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    getConfig() {
        try {
            const request = sails.request,
                url = sails.custom_config.endpointURL + "config";

            request.get({ url: url, json: true }, (error, response, body) => {
                this.res.send(body);
            });

        } catch (error) {
            console.log(error);
            return {};
        }
    }
}

module.exports = {
    getConfig: (req, res) => {
        const clientConfigController = new ClientConfigController(req, res);
        return clientConfigController.getConfig();
    }
};

