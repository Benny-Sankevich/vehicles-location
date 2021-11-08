export namespace AppConstants {
  export const UiModule = 'ui';

  export class Ui {
    public static GetIsFormDirty = 'getIsFormDirty';
    public static GetPendingRequestsCount = 'getPendingRequestsCount';
    public static MutationSetIsFormDirty = 'setIsFormDirty';
    public static MutationAddPendingRequest = 'addPendingRequest';
    public static MutationRemovePendingRequest = 'removePendingRequest';
    public static MutationSetRouteParamId = 'setRouteParamId';
  }
}
