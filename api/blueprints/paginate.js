/*
    Pagination
*/

module.exports = async (req, res) => {
  try {
    const modelName = req.params.model,
      model = sails.models[req.params.model];
    if (_.isEmpty(model)) return res.status(404).serverError({ message: modelName + " model not defined", success: false });

    const pageNo = (req.body.hasOwnProperty("pageNo") ? req.body.pageNo : 1),
          perPageRecords = (req.body.hasOwnProperty("perPageRecords")) ? req.body.perPageRecords : 10;

    if(_.isString(pageNo) || pageNo<=0) return res.serverError({error: "pageNo cannot be zero or negative value nor a string", success: false});
    if(_.isString(perPageRecords) || perPageRecords<=0) return res.serverError({error: "perPageRecords cannot be zero or negative  nor a string", success: false});

    let metaInfo,
      criteria = req.body.criteria || {},
      skip = ((pageNo==1) ? 0 :((pageNo-1)*pagePerRecords)),
      limit = perPageRecords,
      sort = req.body.sort || 'dateCreated DESC',

      matchingRecords = await model.find({
        where: criteria,
        skip: skip,
        limit: limit,
        sort: sort
      });

    model.count(criteria)
      .exec((err, total) => {
        if (err) return res.serverError({error: err, success: false});

        metaInfo = {
          currentPageNo : pageNo,
          perPageRecords: perPageRecords,
          totalPages : ((total<=perPageRecords)? 1 : (total/limit)),
          totalRecords: total,
          criteria: criteria
        };
        const records = matchingRecords;
        res.ok({ info: metaInfo, data: records, message: modelName + " records retrieved successfully", success: true });

      });
  } catch (error) {
    return res.serverError({error: error.message, success: false});
  }
}