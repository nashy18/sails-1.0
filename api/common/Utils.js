module.exports.utils = {

    //Function for Rest API service
    httpRequest: function ( options, res )
    {
        //return promise
        return new Promise( function ( resolve, reject )
        {
            try
            {
                var httprequest = require( 'request' );
                httprequest( options, function ( error, response, body )
                {
                    if ( error )
                    {
                        // return error
                        sails.commonUtils.handleException( error, res );
                    } else
                    {
                        resolve( body );
                    }

                });

            } catch ( e )
            {
                // return exception
                sails.commonUtils.handleException( e, res );
            }
        });
    },
    handleException: function ( err,res ) {
    var response = {};
    response.Success = false;
    response.Message = err;
    res.serverError(response);
     },
     guid: function (){
         
        return this.s4() + this.s4() + '-' + this.s4()+ '-' + this.s4() + '-' +
        this.s4() + '-' + this.s4() + this.s4() + this.s4();
     },
     s4: function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
}

