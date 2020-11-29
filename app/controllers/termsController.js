const Terms = require("../models/terms");
exports.UpdateSocial = async (req, res) => {
  try {
    const lastRec = await getLastInsertedSocial();
    if (lastRec.length < 1) {
      const response = await Terms.create({
        term: req.body.term,
      });
      res.status(201).json({
        success: "Successful created  terms and conditions",
        payload: response,
      });
    } else {
      //we have teh last record, get it
      //Now means we need to update the list
      const response = await Terms.update(
        {
          term: req.body.term,
        },
        {
          where: { id: lastRec[0].id },
        }
      );
      res.status(201).json({
        success: "Successful updated terms and conditions",
        payload: response,
      });
    }
  } catch (e) {
    //  console.log(e)
  }
};

exports.Retrieve = async (req, res) => {
  try {
    const response = await getLastInsertedSocial();
    res.status(200).json({ success: true, payload: response });
  } catch (e) {
    console.log(e);
  }
};
const getLastInsertedSocial = async () => {
  try {
    const response = await Terms.findAll({
      limit: 1,
      //   where: {
      //     //your where conditions, or without them if you need ANY entry

      //   },
      order: [["createdAt", "DESC"]],
    });
    return response;
  } catch (e) {
    // console.log(e)
    return undefined;
  }
};
