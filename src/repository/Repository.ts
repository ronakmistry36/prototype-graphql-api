interface Repository<Entity> {
  findById(id: string): Promise<Entity>;
  findAll(): Promise<Entity[]>;
  delete(id: string): Promise<boolean>;
  save(entity: Entity): Promise<Entity>;
  saveAll(entity: Entity[]): Promise<Entity[]>;
}

export default Repository;
