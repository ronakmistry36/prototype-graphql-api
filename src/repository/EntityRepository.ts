interface EntityRepository<Entity> {
  save(entity: Entity): Promise<Entity>;
  findOne(id: string): Promise<Entity | undefined>;
  findAll(): Promise<Entity[]>;
}

export default EntityRepository;
