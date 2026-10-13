import { BaseEntity } from '../domain/model/base.entity';

export interface BaseAssembler<TEntity extends BaseEntity, TResource> {

  toEntityFromResource(resource: TResource): TEntity;

  toResourceFromEntity(entity: TEntity): TResource;
}
