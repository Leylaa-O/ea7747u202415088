export abstract class BaseEntity {
  protected constructor(readonly id: number) {}

  equals(other: BaseEntity): boolean {
    return this.constructor === other.constructor && this.id === other.id;
  }
}
