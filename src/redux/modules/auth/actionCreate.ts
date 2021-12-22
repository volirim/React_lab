// eslint-disable-next-line @typescript-eslint/ban-types
const checkAuthAction = (typeOfAction: string, actionPayload: boolean) => ({
  type: typeOfAction,
  payload: actionPayload,
});

export default checkAuthAction;
