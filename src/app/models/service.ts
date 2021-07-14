import { Unit } from './unit';

export class Service {
  id: string;
  title: string;
  price: number;
  unitId: Unit | null;

  constructor(item: any) {
    this.id = item?.id ?? '';
    this.title = item?.title ?? '';
    this.price = item?.pice ?? 0;
    this.unitId = item?.unitId ? item?.unitId : null;
  }
}
