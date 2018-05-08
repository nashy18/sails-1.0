/**
 * InputTypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


class InputType{

    constructor(){
        this.foo = "Hello World";
    }

    exec(){
        return this.foo;
    }
}

module.exports = {
  my:(req,res)=>{
    const inputType = new InputType();
    res.send(inputType.exec());
  }

};

