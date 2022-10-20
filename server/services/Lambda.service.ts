import appConfig from "../config";
import {
  Lambda,
  State,
  InvocationType,
  InvokeCommandInput,
  waitUntilFunctionActive,
} from "@aws-sdk/client-lambda";
import { WaiterState } from "@aws-sdk/util-waiter";

class LambdaService {
  private static lambda = new Lambda({ region: appConfig.AWS.region });

  /**
   * Check whether a Lambda Function is in Idle state or not.
   * If it is NOT, then simply call the @invokeFunction method
   * below. If it is IDLE, then do one call (which will fail)
   * to start up the function. Then wait for it to be ready
   * and invoke it again. If it timeout's while waiting
   * for it to be ready, then returns null.
   * 
   * @param FunctionName string
   * @param payload any
   * @returns Promise<Object | null>
   */
  static async invokeWithIdleRetry(
    FunctionName: string,
    payload: Record<string, any>
  ): Promise<any> {
    const SPAN = `[invokeWithIdleRetry, functionName=${FunctionName}, payload=${JSON.stringify(
      payload
    )}]`;

    const lambdaFunction = await LambdaService.lambda.getFunction({
      FunctionName,
    });

    console.log(
      `${SPAN} Got lambda function that is in ${lambdaFunction?.Configuration?.State} state`
    );
    if (lambdaFunction?.Configuration?.State !== State.Active) {
      if (lambdaFunction?.Configuration?.State === State.Inactive) {
        // We need to invoke the function to re-activate it.
        const dryRunInvocation = await LambdaService.lambda.invoke({
          FunctionName,
          InvocationType: InvocationType.DryRun,
          Payload: Buffer.from(JSON.stringify(payload), "utf-8"),
        });

        console.log(`${SPAN} Got dry run invocation result`, dryRunInvocation);
      }

      const waitResult = await waitUntilFunctionActive(
        {
          client: LambdaService.lambda,
          maxWaitTime: 90,
        },
        { FunctionName }
      );

      if (waitResult.state !== WaiterState.SUCCESS) {
        console.log(`${SPAN} Function is not active.`, waitResult);
        return null;
      }
    }

    return LambdaService.invokeFunction(FunctionName, payload);
  }

  /**
   * Invokes a Lambda Function and returns it's response as a JSON object.
   * @param FunctionName string
   * @param payload any
   * @returns Promise<Object>
   */
  private static async invokeFunction(
    FunctionName: string,
    payload: Record<string, any>
  ) {
    const SPAN = `[invokeFunction, functionName=${FunctionName}, payload=${JSON.stringify(
      payload
    )}]`;

    const invokeCommand: InvokeCommandInput = {
      FunctionName,
      InvocationType: InvocationType.RequestResponse,
      Payload: Buffer.from(JSON.stringify(payload), "utf-8"),
    };

    const response = await LambdaService.lambda.invoke(invokeCommand);
    console.log(`${SPAN} Got response from lambda function`, response);

    const decodedPayload = new TextDecoder("ascii").decode(response.Payload);
    console.log(`${SPAN} Decoded string payload is`, decodedPayload);

    const jsonPayload = JSON.parse(decodedPayload);
    const body = JSON.parse(jsonPayload.body);

    return body;
  }
}

export { LambdaService };
