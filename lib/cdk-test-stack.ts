import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class CdkTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const bucket = new Bucket(this, "MyCDKTestBucketApp", {
      encryption: BucketEncryption.S3_MANAGED,
    });
    new CfnOutput(this, "MyCDKTestBucketAppNameExport", {
      value: bucket.bucketName,
      exportName: "MyCDKTestBucketAppNameExportName",
    });
  }
}
