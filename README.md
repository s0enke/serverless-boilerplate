# serverless-boilerplate

This sample project is part of my AWS Advent 2016 article about serverless pipelines for serverless apps.

The layout of the project is as follows:

 - a `frontend/` folder with a `package.json` which will produce a build into `build/` when `npm run build` is called by the pipeline. 
 - a `backend/` folder with a `serverless.yml`. The pipeline will call the `serverless deploy` (the Serverless framework). It should have at least one http event so that the Serverless framework creates a service endpoint which can then be used in the frontend to call the APIs.
 
You can try it out yourself by starting a AWS CloudFormation stack (make sure to clone or copy this project first), which will create a serverless deploy pipeline with AWS CodePipeline:
 
[![Launch Stack](https://github.com/s0enke/cloudformation-templates/blob/master/cloudformation-launch-stack.png?raw=true)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=serverless-app-awsadvent-sample&templateURL=https://s3.amazonaws.com/ruempler-cloudformation-templates-prod/pipeline-serverless-backend-npm-frontend.yml)

[Link to CloudFormation Template](https://s3.amazonaws.com/ruempler-cloudformation-templates-prod/pipeline-serverless-backend-npm-frontend.yml)

## License

MIT
