export class ServiceListItem {
  id: string;
  title: string;
  price: number;
  unitDesc: string;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.title = item?.title ?? '';
    this.price = item?.price ?? 0;
    this.unitDesc = item?.unit?.unitDesc ?? '';
  }
}
