// 아무것도 import/export 하지 않고 있다면 기본 type 덮어쓰기됨
// 빈 값을 export처리하여 덮어쓰기 방지
export {};

declare global {
  type Maybe<T> = null | undefined | T
}