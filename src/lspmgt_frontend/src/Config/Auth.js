const AmplifyConfig = {
    Auth: {
      // REQUIRED - Amazon Cognito Identity Pool ID
      identityPoolId: process.env.ipid,
      // REQUIRED - Amazon Cognito Region
      region: process.env.region, 
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: process.env.upid, 
      // OPTIONAL - Amazon Cognito Web Client ID
      userPoolWebClientId: process.env.upwci 
    },
  };
  
  export default AmplifyConfig;