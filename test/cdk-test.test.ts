import * as cdk from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import * as CdkTest from "../lib/cdk-test-stack";

test("Testing for my bucket", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkTest.CdkTestStack(app, "MyTestStack");
  // THEN

  const template = Template.fromStack(stack);

  // template.hasResourceProperties("AWS::SQS::Queue", {
  //   VisibilityTimeout: 300,
  // });
  // template.resourceCountIs("AWS::SNS::Topic", 1);
  // Code written by Me to Unit Test S3 Buckets...
  template.hasResource("AWS::S3::Bucket", {
    Properties: {
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          { ServerSideEncryptionByDefault: { SSEAlgorithm: "AES256" } },
        ],
      },
    },
  });
});
