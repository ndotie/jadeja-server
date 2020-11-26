const Social = require("../models/social");
exports.UpdateSocial = async (req, res) => {
  try {
    const lastRec = await getLastInsertedSocial();
    if (lastRec.length < 1) {
      console.log(JSON.stringify(lastRec));
      const response = await Social.create({
        facebook: req.body.facebook,
        youtube: req.body.youtube,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        telegram: req.body.telegram,
        aboutus: req.body.aboutus,
        trademark: req.body.trademark,
        email: req.body.email,
        location: req.body.location,
        region: req.body.region,
        street: req.body.street,
        house: req.body.house,
        phone: req.body.phone,
      });
      res.status(201).json({
        success: "Successful updated social links",
        payload: response,
      });
    } else {
      //we have teh last record, get it
      //Now means we need to update the list
      const response = await Social.update(
        {
          facebook: req.body.facebook,
          youtube: req.body.youtube,
          twitter: req.body.twitter,
          instagram: req.body.instagram,
          telegram: req.body.telegram,
          aboutus: req.body.aboutus,
          trademark: req.body.trademark,
          email: req.body.email,
          location: req.body.location,
          region: req.body.region,
          street: req.body.street,
          house: req.body.house,
          phone: req.body.phone,
        },
        {
          where: { id: lastRec[0].id },
        }
      );
      res.status(201).json({
        success: "Successful updated social links",
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
    const response = await Social.findAll({
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
