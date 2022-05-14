import type {
  // ComponentRenderProxy,
  // VNode,
  // VNodeChild,
  // ComponentPublicInstance,
  // FunctionalComponent,
  PropType as VuePropType,
} from 'vue';

declare global {
  /**
   * @description 请求响应
   */
  declare interface _MergeBaseResData {
    code: number;
    msg?: string;
  }

  declare type MergeBaseResData<T> = T & _MergeBaseResData;

  declare type ListData<T> = MergeBaseResData<{
    total: number;
    rows: T[];
  }>;

  declare type ResData<T = any> = MergeBaseResData<{
    data: T;
  }>;

  declare interface ListParmas {
    pageNum: number;
    pageSize: number;
  }

  declare type ListQuery<T = Recordable> = ListParmas & Partial<T>;

  declare interface VEvent extends Event {
    target: HTMLInputElement;
  }

  declare type PropType<T> = VuePropType<T>;

  declare type IntervalHandle = ReturnType<typeof setInterval>;

  declare type TimeoutHandle = ReturnType<typeof setTimeout>;

  declare interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }

  declare interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
  }

  declare type Nullable<T> = T | null;

  declare type Recordable<T = any> = Record<string, T>;

  declare type TreeItem<T> = T & {
    children?: TreeItem<T>[];
  };

  declare type TreeList<T> = TreeItem<T>[];

  type callback = Fn<DOMHighResTimeStamp, void>;

  interface Window {
    webkitRequestAnimationFrame: Fn<FrameRequestCallback, number>;
    mozRequestAnimationFrame: Fn<FrameRequestCallback, number>;
  }

  declare type TargetContext = '_self' | '_blank';
}