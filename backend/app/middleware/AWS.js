const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: " AKIAW3MED2I4CF7L744I",
  secretAccessKey: "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",
  region: "ap-south-1",
});
let uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    let s3 = new aws.S3({ apiVersion: "2006-03-01" });
    let uploadParam = {
      ACL: "public-read",
      Bucket: "antrose-dev-bucket",
      Key:file.originalname,
      Body: file.buffer,
    };
    s3.upload(uploadParam, function (err, data) {
      if (err) {
        console.log(err.message,"=========================================")
        return reject(err);
      }
      if (data) {
        return resolve(data.Location);
      }
    });
  });
};
module.exports = { uploadFile };
