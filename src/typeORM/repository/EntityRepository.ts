interface EntityRepository<Entity> {
  delete(id: string): void;
  exists(id: string): Promise<boolean>;
  findAll(): Promise<Entity[]>;
  findById(id: string): Promise<Entity>;
  save(entity: Entity): Promise<Entity>;
}

export default EntityRepository;
