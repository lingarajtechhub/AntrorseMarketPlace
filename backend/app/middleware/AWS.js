const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: " AKIA4YO6L5LO3JBQIXVW",
  secretAccessKey: "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",
  region: "ap-south-1",
});
let uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    let s3 = new aws.S3({ apiVersion: "2006-03-01" });
    let uploadParam = {
      ACL: "public-read",
      Bucket: "antrorse-market-place",
      Key: file.originalname,
      Body: file.buffer,
    };
    s3.upload(uploadParam, function (err, data) {
      if (err) {
        return reject(err);
      }
      if (data) {
        return resolve(data.Location);
      }
    });
  });
};
module.exports = { uploadFile };
