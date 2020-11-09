interface EntityRepository<Entity> {
  save(entity: Entity): Promise<Entity>;
  find(id: string): Promise<Entity>;
  findAll(): Promise<Entity[]>;
}

export default EntityRepository;
