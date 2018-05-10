/*
    Pagination
*/

module.exports = async (req,res)=>{
    try {
        const model = sails.models[req.params.model];
        if(_.isEmpty(model)) return res.status(404).serverError({message : "Model not defined", success:false});
        let metaInfo,
          criteria = req.body.where || {},
          skip = req.body.skip || 0,
          limit = req.body.limit || 20,
          sort = req.body.sort || 'dateCreated DESC',
          matchingRecords = await model.find({
            where: criteria,
            skip: skip,
            limit: limit,
            sort: sort
          });
        model.count(criteria)
          .exec((err, total) => {
            if (err) return res.serverError(err);

            metaInfo = {
              start: skip,
              end: skip + limit,
              limit: limit,
              total: total,
              criteria: criteria
            };
            const records = matchingRecords;
            res.ok({ info: metaInfo, data: records, success: true });

          });
      } catch (error) {
        return res.serverError(error.message);
      }
}